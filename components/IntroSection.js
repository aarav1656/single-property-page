"use client"
import React, { useState } from 'react';
import Image from 'next/image';

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

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-md mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const IntroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState('');

  const handleOpenModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 text-black py-2 px-4 rounded-full">
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-center">WELCOME TO 25 DOWNTOWN, WILLINGDON : MUMBAI.</h1>
        
        <p className="text-center mb-8 max-w-4xl mx-auto">
          From more than 25 years we have provided real estate services with honesty, trust and transparency. 25 Downtown is an Homage to A Great Chapter in Mumbai's History. These Beautiful Residences Come with The Ultimate Indulgence-Unrestricted Views of The Willingdon Sports Club, Mahalaxmi Racecourse and The Arabian Sea. Exquisite Parts of Mumbai.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Land Parcel 5.5 Acres Approx
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Unhindered Views of The Willingdon Sports Club
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              The Sky – Media Deck at The Terrace Level
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Mesmerizing Views of Arabian Sea
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Modern Lifestyle Amenities
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Excellent Connectivity to Business Hubs
            </li>
          </ul>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => handleOpenModal('site-visit')}
            className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Book Site Visit
          </button>
          <button 
            onClick={() => handleOpenModal('brochure')}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Request For E-Brochure
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default IntroSection;