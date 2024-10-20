import React from 'react';
import Image from 'next/image';

const LuxuryProjectPricing = () => {
  return (
    <div className="bg-white text-gray-800 p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">AREA & PRICING</h2>
      
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Type</th>
              <th className="border p-3 text-left">Carpet Area</th>
              <th className="border p-3 text-left">Price* Onwards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">4 BHK</td>
              <td className="border p-3">3,400 Sq.Ft.</td>
              <td className="border p-3">₹ 27.20 Cr*</td>
            </tr>
            <tr>
              <td className="border p-3">5 BHK</td>
              <td className="border p-3">5,100 Sq.Ft.</td>
              <td className="border p-3">₹ 40.80 Cr*</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">PAYMENT DETAILS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
            View Interior Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryProjectPricing;