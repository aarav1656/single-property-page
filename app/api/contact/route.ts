import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Modified mailOptions to use sender's email in the "from" field
    const mailOptions = {
      from: `"${name}" <${email}>`,  // This shows sender's name and email
      to: process.env.EMAIL_USER,    // Your email where you'll receive messages
      replyTo: email,               // Allows you to reply directly to sender
      // subject: `Portfolio Contact: ${subject || 'New Message'}`,
      text: `
        Message from: ${name}
        Phone: ${phone}
        Email: ${email}
        
      `,
      // Adding HTML version for better formatting
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}