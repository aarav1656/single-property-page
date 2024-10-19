import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-light-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-white text-[150px] font-bold absolute top-0 left-0 right-0 opacity-50">
          MUMBAI
        </div>
        
        <div className="relative z-10 flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Image src="/25-downtown-logo.png" alt="25 Blueroof" width={100} height={50} />
            <Image src="/s-cube-logo.png" alt="Blueroof" width={100} height={50} />
          </div>
          <div className="w-24 h-24 bg-gray-300">
            {/* Placeholder for QR code */}
          </div>
        </div>
        
        <div className="text-xs text-gray-600 space-y-2">
          <p>Project RERA - P51900076617</p>
          <p>This Website is Managed By Blueroof</p>
          <p>Affiliate Agent RERA No. - A51900010107</p>
        </div>
        
        <p className="mt-8 text-[10px] text-gray-600 leading-tight">
          Disclaimer : This Website is Not an Official Site and it Belongs to The Affiliate Marketing Partner for Information Purpose Only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed. The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing as required. We may also send updates and information to the mobile number or email ID registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is advisable to contact us directly through the provided contact information on this website. Thank you for visiting our website.
        </p>
        
        <div className="mt-4 text-[10px] text-gray-600 flex justify-between items-center">
          <p>All Rights Reserved 2024 © Blueroof</p>
          <div>
            <a href="#" className="underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;