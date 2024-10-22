import React, { useState } from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-xl relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const PriceTable = ({ onRequestBreakup }) => (
  <div className="overflow-x-auto w-full mb-8">
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="text-center py-4 px-6 bg-white font-['Montserrat'] text-gray-800 text-lg">Type</th>
          <th className="text-center py-4 px-6 bg-white font-['Montserrat'] text-gray-800 text-lg">Saleable Area</th>
          <th className="text-center py-4 px-6 bg-white font-['Montserrat'] text-black text-lg">Price</th>
          <th className="py-4 px-6 bg-white"></th>
        </tr>
      </thead>
      <tbody>
      <tr className="bg-gray-50">
          <td className="py-4 px-6 font-['Montserrat'] text-black text-center">4 BHK</td>
          <td className="py-4 px-6 font-['Montserrat'] text-black text-center">3400 Sq.Ft.</td>
          <td className="py-4 px-6 font-['Montserrat'] text-black text-center">₹ 27.49 Cr* Onwards</td>
          <td className="py-4 px-6 text-center">
            <button 
              onClick={onRequestBreakup}
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 text-sm font-medium"
            >
              Request For Price Breakup
            </button>
          </td>
        </tr>
        <tr className="bg-white">
          <td className="py-4 px-6 text-gray-800 text-center">5 BHK</td>
          <td className="py-4 px-6 text-gray-800 text-center">5100 Sq.Ft.</td>
          <td className="py-4 px-6 text-gray-800 text-center">₹ 40.46 Cr* Onwards</td>
          <td className="py-4 px-6 text-center">
            <button 
              onClick={onRequestBreakup}
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 text-sm font-medium"
            >
              Request For Price Breakup
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value.length > 10) return;
    if (name === 'phone' && !/^\d*$/.test(value)) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name');
      setStatus('error');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid 10-digit phone number');
      setStatus('error');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div className="p-8 bg-[#faf9f6]">
      <div className="flex justify-center mb-8">
        <div className="w-12 h-12 relative">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            fill
            style={{ objectFit: 'contain' }}
            className="w-full h-full"
          />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Name *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none bg-transparent focus:outline-none focus:border-gray-500"
              required
            />
          </label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Phone *
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none bg-transparent focus:outline-none focus:border-gray-500"
              required
            />
          </label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Email *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none bg-transparent focus:outline-none focus:border-gray-500"
              required
            />
          </label>
        </div>

        {status === 'error' && (
          <div className="p-3 bg-red-50 text-red-700 text-sm">
            {error}
          </div>
        )}

        {status === 'success' && (
          <div className="p-3 bg-green-50 text-green-700 text-sm">
            Message sent successfully!
          </div>
        )}
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 px-4 text-white bg-[#1b4d3e] hover:bg-[#163c31] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};
const Price = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mb-12 mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-['Montserrat'] font-bold mb-2 inline-block border bg-yellow-400 text-black rounded-full px-6 py-2">Price</h2>
      </div>
      
      <PriceTable onRequestBreakup={() => setIsModalOpen(true)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image
              src="/bill.jpeg"
              alt="Payment Details"
              fill
              style={{ objectFit: 'cover' }}
              className="filter blur-sm"
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Know Payment Details
          </button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image
              src="/arch.jpeg"
              alt="Interior Details"
              fill
              style={{ objectFit: 'cover' }}
              className="filter blur-sm"
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            View Plan
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Price;