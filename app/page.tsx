import React from 'react';
import Image from 'next/image';
import IntroSection from "../components/IntroSection"
import Footer from "../components/FeaturesSection"
import FeatureSection from "../components/Footer"
import Gallery from "../components/Gallery"
import ProjectTeam from "../components/ProjectTeam"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold flex items-center">
              <span className="ml-2">Affiliate Partner Blueroof India</span>
            </div>
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
              <span className="ml-2">+91 7542821904</span>
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
          <div className="absolute inset-0 flex flex-col md:flex-row">
            <div className="bg-black bg-opacity-70 text-white p-8 md:w-1/3 flex flex-col justify-center">
              <div className="bg-yellow-400 text-black inline-block px-2 py-1 mb-4 text-sm">FOR SALE</div>
              <h1 className="text-4xl font-light mb-2">123 Thane</h1>
              <h2 className="text-4xl font-light mb-2">maharashtra</h2>
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
        <IntroSection />
        <Footer />
        <Gallery />
        <ProjectTeam />
        <FeatureSection />
      </footer>
    </div>
  );
}