import React from 'react';

const Gallery = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-serif">
      <h2 className="text-2xl font-normal text-center mb-2 uppercase tracking-wide">GALLERY</h2>
      <h3 className="text-xl font-normal text-center mb-4">You can find plenty of pictures for our properties</h3>
      <p className="text-center mb-8 text-sm">
        Find a backup gallery on the{' '}
        <a href="#" className="text-yellow-600 hover:underline">
          Style Page
        </a>{' '}
        and instructions on how to use it{' '}
        <a href="#" className="text-yellow-600 hover:underline">
          here
        </a>
      </p>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 row-span-2 h-96 bg-gray-200">
          {/* Placeholder for the large image */}
          <img src="https://assets.website-files.com/5d5eb926aeeaa5f076cb27aa/5d5ef0bfe396d162ce6bb38b_2c8f0c82098099.5d1337b11a07a.jpg" alt="Large property image" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://assets.website-files.com/5d5eb926aeeaa5f076cb27aa/5d5ef1626e0dbc7951ad33cc_62db1f82098099.5d1337b11a460.jpg" alt="Property image 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://assets.website-files.com/5d5eb926aeeaa5f076cb27aa/5d5ef2ca6e0dbcfe9ead3887_2fdbb282098099.5d28a27961b18.jpg" alt="Property image 3" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://assets.website-files.com/5d5eb926aeeaa5f076cb27aa/5d5ef2ca6e0dbcfe9ead3887_2fdbb282098099.5d28a27961b18.jpg" alt="Property image 4" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://assets.website-files.com/5d5eb926aeeaa5f076cb27aa/5d5ef25ee396d146a06bd92d_9f62b182098099.5d28a27962ad3.jpg" alt="Property image 5" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://assets.website-files.com/5d5eb926aeeaa5f076cb27aa/5d5ef1626e0dbc7951ad33cc_62db1f82098099.5d1337b11a460.jpg" alt="Property image 2" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;