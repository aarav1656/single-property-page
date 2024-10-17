import React from 'react';
import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-light mb-2 text-gray-800">INTRO</h2>
        <p className="text-center text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
          From more than 25 years we have provided real estate services with honesty trust and transparency
        </p>
        
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 relative">
            <div className="bg-yellow-400 absolute -left-4 -bottom-4 right-4 top-4 -z-10"></div>
            <Image
              src="/two.jpg"  // Replace with your image path
              alt="Modern house"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <p className="text-gray-600 mb-6">
              Tras pulvinar ultricies vehicula. Cras et nulla id lorem vulputate pulvinar eget non neque Proin feugiat justo vitae euismod fringilla.
            </p>
            <p className="text-gray-600 mb-6">
              In a nunc commodo, elementum metus, aliquam metus nulla porttitor malesuada urna non convallis luctus fermentum elementum egestas. Donec lobortis lectus ut nisi ultricies, in scelerisque ante egestas. Maecenas quis ipsum.
            </p>
            <p className="text-gray-600 mb-6">
              Pulvinar tortor nec neque pellentesque ullamcorper bibendum eu orci. Duis non ante quis est aliquet bibendum. Curabitur fermentum a odio sed sodales.
            </p>
            <div className="flex items-center">
              <Image
                src="/avatar.jpg"  // Replace with your avatar image path
                alt="Rakesh Lakshar"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">Rakesh Lashkar</p>
                <p className="text-sm text-gray-600">REAL ESTATE AGENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;