import React from 'react';
import { Users, Home, Award } from 'lucide-react';

const AmenitiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm uppercase tracking-wider mb-2 text-gray-500">AMENITIES</h2>
        <h3 className="text-center text-3xl mb-12 text-gray-800">
          Our property includes all the little details that makes your life a lot better
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          {/* First row */}
          <div className="col-span-1 aspect-square bg-gray-200">
          <img src="https://www.nozone.it/dynamic/img/render-interni.jpg" alt="Property image 4" className="w-full h-full object-cover" />
    
          </div>
          <div className="col-span-1 bg-yellow-400 p-6 flex flex-col justify-center items-center text-center">
            <Users className="w-12 h-12 mb-4" />
            <h4 className="font-bold mb-2">AMENITIES</h4>
            <p className="text-sm">Your family will enjoy a safe and comfortable environment</p>
          </div>
          <div className="col-span-1 aspect-square bg-gray-200">
          <img src="https://image.slidesdocs.com/responsive-images/background/luxurious-3d-rendering-of-a-hotel-suite-bedroom-with-lavish-amenities-including-tv-and-chandelier-powerpoint-background_a950fdc736__960_540.jpg" alt="Property image 4" className="w-full h-full object-cover" />

          </div>

          {/* Second row */}
          <div className="col-span-1 bg-yellow-400 p-6 flex flex-col justify-center items-center text-center">
            <Home className="w-12 h-12 mb-4" />
            <h4 className="font-bold mb-2">LIVING</h4>
            <p className="text-sm">Incredible open green spaces for your family</p>
          </div>
          <div className="col-span-1 aspect-square bg-gray-200">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/026/577/159/small_2x/modern-bedroom-interior-design-in-apartment-or-house-with-furniture-luxury-bedroom-scandinavian-concept-by-ai-generated-free-photo.jpg" alt="Property image 4" className="w-full h-full object-cover" />

          </div>
          <div className="col-span-1 bg-yellow-400 p-6 flex flex-col justify-center items-center text-center">
            <Award className="w-12 h-12 mb-4" />
            <h4 className="font-bold mb-2">LUXURY</h4>
            <p className="text-sm">Experience the luxury and well designed architecture</p>
          </div>
        </div>
      </div>
      
    
    </section>
  );
};

export default AmenitiesSection;