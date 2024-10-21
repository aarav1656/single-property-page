import React from 'react';
import Image from 'next/image';

const LuxuryProjectPricing = () => {
  return (
    <div className="bg-white text-gray-800 p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-blue-600">
            <em>Unparalleled Elegance</em> with
          </h2>
          <h2 className="text-2xl sm:text-3xl font-light text-gray-700">
            Panoramic Sea Views – 
          </h2>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mt-2">
            <em>Starting at 27 Cr*</em>
          </h2>
          <p className="mt-4 text-gray-600 sm:text-lg">
            Experience the <em>ultimate in luxury living</em>, where every detail is designed to impress. Indulge in <em>breathtaking sea views</em> from the comfort of your lavish home.
          </p>
        </div>

        {/* Right Side - Larger Circular Image */}
        <div className="sm:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-full shadow-lg">
            <img src="https://25downtownmahalaxmi.co.in/assets/img/slider/25-downtown-img2.jpg" alt="Property image 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Image Sections - Shorter Card Heights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12">
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-lg">
            <Image
              src="/bill.jpeg"
              alt="Payment Details"
              fill
              style={{ objectFit: 'cover' }}
              className="filter blur-sm"
            />
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 font-bold text-sm sm:text-base">
            <em>Know Details</em>
          </button>
        </div>
        
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-lg">
            <Image
              src="/arch.jpeg"
              alt="Interior Details"
              fill
              style={{ objectFit: 'cover' }}
              className="filter blur-sm"
            />
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 font-bold text-sm sm:text-base">
            <em>View Interior Details</em>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryProjectPricing;
