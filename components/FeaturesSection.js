import React from 'react';
import { Home, DollarSign, Shield, Leaf, HelpCircle, Building } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <div className="bg-yellow-400 p-3 rounded-full mb-4">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Home,
      title: 'Exclusive Living Spaces',
      description:
        'Each floor houses only two spacious apartments in 4 and 5 BHK configurations. 4 BHK apartments have 3,400 sq. ft. of carpet area, and 5 BHK units offer 5,100 sq. ft. Jodi options available.',
    },
    {
      icon: DollarSign,
      title: 'Luxury Redefined',
      description:
        'Each residence features an expansive deck, along with a comprehensive array of outdoor and indoor amenities designed to cater to every lifestyle need.',
    },
    {
      icon: Shield,
      title: 'Stunning Views',
      description:
        'Lower floors are surrounded by lush greenery, while higher floors provide breathtaking sea views, maximizing natural beauty and enhancing luxury living.',
    },
    {
      icon: Leaf,
      title: 'Sophisticated Commercial Spaces',
      description:
        'High-end retail brands accommodated in the commercial segment. Separate residential and commercial entries maintain privacy and exclusivity for residents.',
    },
    {
      icon: HelpCircle,
      title: 'Architectural Ambition',
      description:
        'Planned towers rise up to the 70th floor (subject to approval), making them a significant architectural landmark in the area.',
    },
    {
      icon: Building,
      title: 'Prime Location and Amenities',
      description:
        'Easy access to key city areas. Thoughtfully designed amenities include fitness centers, swimming pools, landscaped gardens, and recreational facilities for a holistic living experience.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-light mb-2">FEATURES</h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          This project promises unmatched luxury and convenience, with exclusive living spaces and sophisticated amenities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
