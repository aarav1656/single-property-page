import React from 'react';
import Image from 'next/image';
import IntroSection from "../components/IntroSection";
import Wow from "../components/Wow";

export default function Home() {
  const phoneNumber = "917977144095";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="w-12 h-12 relative">
              <Image 
                src="/logo.jpeg" 
                alt="Logo" 
                layout="fill" 
                objectFit="contain" 
                className="rounded"
              />
            </div>
            {/* Navigation */}
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

            {/* WhatsApp Button */}
            <div className="flex items-center space-x-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
              >
                <span className="ml-2">+91 7977144095</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="h-[calc(100vh-80px)] relative overflow-hidden">
          <img 
            src="https://static.wixstatic.com/media/e4b0d9_ba260b800e8545249467d24bf5e2cc32~mv2.jpg/v1/fill/w_1785,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/downtown-min-compressed_edited.jpg" 
            alt="Luxury Sea View"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Text Overlay - Left Aligned */}
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-40 text-white text-left p-4 pl-12">
            <h2 
              className="text-5xl sm:text-7xl font-extrabold"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "1px" }}
            >
              Unparalleled Elegance
            </h2>
            <h2 className="text-2xl sm:text-3xl font-light mt-2">
              with Panoramic Sea Views –
            </h2>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mt-2">
              Starting at 27 Cr*
            </h2>
          </div>
          <div className="absolute top-4 right-4 text-white text-right">
            <div className="text-xs font-light">Affiliate Partner</div>
            <div className="text-xs font-light">Blueroof India</div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-4">
        <IntroSection />
        <Wow />
      </footer>
    </div>
  );
}
