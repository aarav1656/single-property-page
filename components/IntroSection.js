import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 bg-yellow-400 text-black py-2 px-4 rounded-full">
          <a href="tel:+917027479999" className="flex items-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg> */}
            
          </a>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-center">WELCOME TO 25 DOWNTOWN, WILLINGDON : MUMBAI.</h1>
        
        <p className="text-center mb-8 max-w-4xl mx-auto">
          From more than 25 years we have provided real estate services with honesty, trust and transparency. 25 Downtown is an Homage to A Great Chapter in Mumbai's History. These Beautiful Residences Come with The Ultimate Indulgence-Unrestricted Views of The Willingdon Sports Club, Mahalaxmi Racecourse and The Arabian Sea. Exquisite Parts of Mumbai.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Land Parcel 5.5 Acres Approx
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Unhindered Views of The Willingdon Sports Club
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              The Sky – Media Deck at The Terrace Level
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Mesmerizing Views of Arabian Sea
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Modern Lifestyle Amenities
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-yellow-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Excellent Connectivity to Business Hubs
            </li>
          </ul>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-300">
            Book Site Visit
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
            Request For E-Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;