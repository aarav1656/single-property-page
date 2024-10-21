import React from 'react';
import Image from 'next/image';

const LuxuryProjectPricing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
                <img src="https://25downtownmahalaxmi.co.in/assets/img/slider/25-downtown-img2.jpg" alt="Property image 4" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex items-start justify-center pt-24 px-4 md:px-0 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
            Experience the Ultimate in Luxury Living
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black" style={{ fontFamily: "'Merriweather', serif" }}>
            Where every detail is designed to impress. Indulge in breathtaking sea views from the comfort of your lavish home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuxuryProjectPricing;
