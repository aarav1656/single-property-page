import React from 'react';
import { WhatsappLogo } from 'lucide-react';

const RealEstateLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center p-4 bg-white">
        <div className="text-2xl font-bold">Portofino</div>
        <nav className="hidden md:flex space-x-4">
          <select className="bg-transparent">
            <option>Pages</option>
          </select>
          {['Intro', 'Gallery', 'Amenities', 'Location', 'Contact Us'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-gray-900">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center bg-yellow-400 px-4 py-2 rounded-md">
          <WhatsappLogo size={20} />
          <span className="ml-2">436-256-752</span>
        </div>
      </header>

      <main className="relative">
        <div className="absolute inset-0 bg-gray-100">
          {/* Placeholder for the main image */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row h-[calc(100vh-80px)]">
          <div className="bg-black bg-opacity-70 text-white p-8 md:w-1/3 flex flex-col justify-center">
            <div className="bg-yellow-400 text-black inline-block px-2 py-1 mb-4 text-sm">FOR SALE</div>
            <h1 className="text-4xl font-light mb-2">123 Evergreen</h1>
            <h2 className="text-4xl font-light mb-2">San Francisco</h2>
            <h3 className="text-4xl font-light mb-4">CA 90210</h3>
            <p className="text-yellow-400 mb-4">Offered at $759,000</p>
            <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors w-max">
              Learn more
            </button>
          </div>
          <div className="md:w-2/3 relative">
            <div className="absolute bottom-8 right-8 bg-yellow-400 rounded-full p-4 cursor-pointer">
              <div className="text-sm font-bold">Schedule</div>
              <div className="text-sm font-bold">your Visit!</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-around text-center">
          <div>
            <div className="text-4xl font-bold">720</div>
            <div className="text-sm">Square Feet</div>
          </div>
          <div>
            <div className="text-4xl font-bold">5</div>
            <div className="text-sm">Bedrooms</div>
          </div>
          <div>
            <div className="text-4xl font-bold">4</div>
            <div className="text-sm">Bathrooms</div>
          </div>
          <div>
            <div className="text-4xl font-bold">3</div>
            <div className="text-sm">Parking Spaces</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateLandingPage;