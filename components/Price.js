import React from 'react';
import Image from 'next/image';

const Price = () => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-8 text-center font-custom">Know More Details</h2>
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
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
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
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            View Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
