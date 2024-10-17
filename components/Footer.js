import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

  return (
    <footer className="bg-black text-yellow-400 py-4 px-6 flex justify-between items-center text-sm">
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-bold">
          Portofino
        </Link>
        <Link href="/buy-template" className="hover:underline">
          Buy
        </Link>
        <span>|</span>
        <span>Version 2.0</span>
        <span>|</span>
        <Link href="/image-licensing" className="hover:underline">
          Image Licensing
        </Link>
        <span>|</span>
        <span>Made By Aarav</span>
        <span>|</span>
        <Link href="/templates" className="hover:underline">
          Visit
        </Link>
        <span>|</span>
        <span>Powered by Next js</span>
      </div>
      <button 
       
        className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;