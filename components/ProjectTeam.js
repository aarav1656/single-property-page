import React from 'react';
import { Users } from 'lucide-react';

const ProjectTeam = () => {
  const teamMembers = [
    { role: 'Architect', name: 'Hafeez Contractor' },
    { role: 'Architectural Partner', name: 'Bill Bensley' },
    { role: 'Interiors', name: 'Bill Bensley' },
    { role: 'Landscaping', name: 'Bill Bensley' },
    { role: 'Lighting', name: 'Dazzle Design Studio' },
    { role: 'Structural', name: 'Mahimtura Consultants' },
    { role: 'MEP', name: 'Pankaj Dharkar & Associates' },
  ];

  return (
    <div className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Users className="mx-auto h-12 w-12 text-stone-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Our Project Team
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-stone-500 sm:mt-4">
            Meet the experts behind our exceptional designs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-medium text-stone-900">{member.role}</h3>
              <p className="mt-1 text-sm text-stone-500">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.slice(3).map((member, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-medium text-stone-900">{member.role}</h3>
              <p className="mt-1 text-sm text-stone-500">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <img
          src="https://static.wixstatic.com/media/9f3b705350c4415c965e09ba54aff41d.jpg/v1/fill/w_834,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Building%20Plans.jpg"
          alt="Team collaboration"
          className="rounded-lg shadow-lg max-w-3xl w-full"
        />
      </div>
    </div>
  );
};

export default ProjectTeam;