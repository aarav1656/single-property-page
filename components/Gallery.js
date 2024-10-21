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
          <img src="https://www.nozone.it/dynamic/img/render-interni.jpg" alt="Large property image" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://image.slidesdocs.com/responsive-images/background/luxurious-3d-rendering-of-a-hotel-suite-bedroom-with-lavish-amenities-including-tv-and-chandelier-powerpoint-background_a950fdc736__960_540.jpg" alt="Property image 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://static.wixstatic.com/media/e4b0d9_1b8f49f049504c83a80b689509242087~mv2.jpg/v1/fill/w_640,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e4b0d9_1b8f49f049504c83a80b689509242087~mv2.jpg" alt="Property image 3" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://25downtownmahalaxmi.co.in/assets/img/slider/25-downtown-img2.jpg" alt="Property image 4" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://25residences.com/wp-content/uploads/2024/04/25-downtown-1920x1274.jpg" alt="Property image 5" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 bg-gray-200">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/026/577/159/small_2x/modern-bedroom-interior-design-in-apartment-or-house-with-furniture-luxury-bedroom-scandinavian-concept-by-ai-generated-free-photo.jpg" alt="Property image 2" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );  
};

export default Gallery;