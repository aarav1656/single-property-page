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
                    src="/logo.png" 
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

            {/* WhatsApp Button, Affiliate Partner Text, and Logo */}
            <div className="flex items-center space-x-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
              >
                <span className="ml-2">+91 7977144095</span>
              </a>
              
              <div className="flex items-center space-x-2 text-xs text-gray-300 text-right">
                <div>
                  <div>Affiliate Partner</div>
                  <div className="text-gray-300 text-xs">Blueroof India</div>
                </div>
                
                {/* Logo Image */}
               
              </div>
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
        </div>
      </main>

      <footer className="bg-gray-100 py-4">
        <IntroSection />
        <Wow />
      </footer>
    </div>
  );
}
