import React from 'react';
import Image from 'next/image';
import IntroSection from "../components/IntroSection"
import Footer from "../components/FeaturesSection"
import FeatureSection from "../components/Footer"
import Gallery from "../components/Gallery"
import ProjectTeam from "../components/ProjectTeam"
import AmenitiesSection from "../components/AmenitiesSection"
import LuxuryProjectPricing from "../components/LuxuryProjectPricing"
import Wow from "../components/Wow"
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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
            <div className="flex items-center space-x-4">
              <div className="text-xs text-gray-500">
                Affiliate Partner Blueroof India
              </div>
              <div className="flex items-center bg-yellow-400 px-4 py-2 rounded-md">
                <span className="ml-2">+91 7542821904</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="h-[calc(100vh-80px)] relative overflow-hidden">
          <img 
            src="https://static.wixstatic.com/media/e4b0d9_ba260b800e8545249467d24bf5e2cc32~mv2.jpg/v1/fill/w_1785,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/downtown-min-compressed_edited.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </main>

      <footer className="bg-gray-100 py-4">
        <IntroSection />
        <Footer />
  
        <Wow />

        <LuxuryProjectPricing />
        <ProjectTeam />
        <FeatureSection />
      </footer>
    </div>
  );
}