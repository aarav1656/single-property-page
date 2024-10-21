import React from 'react';
import { Users } from 'lucide-react';
import Footer from './Footer';
import Maps from './Maps';
import Price from './Price'

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
        <div className="flex flex-col items-center">
          {/* First team member in the middle */}
          <div className="mb-12 text-center">
            <h3 className="text-xl font-medium text-stone-900">{teamMembers[0].role}</h3>
            <p className="mt-1 text-lg text-stone-500">{teamMembers[0].name}</p>
          </div>
          {/* Two columns with 3 members each */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {teamMembers.slice(1, 4).map((member, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-medium text-stone-900">{member.role}</h3>
                  <p className="mt-1 text-sm text-stone-500">{member.name}</p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {teamMembers.slice(4).map((member, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-medium text-stone-900">{member.role}</h3>
                  <p className="mt-1 text-sm text-stone-500">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <img
          src="https://img.freepik.com/premium-photo/architect-planning-blueprint-with-designer-engineer-working-as-team-construction-architecture-design-industry-building-teamwork-collaboration-with-hands-contractor_590464-82151.jpg"
          alt="Team collaboration"
          className="rounded-lg shadow-lg max-w-3xl w-full"
        />
      </div>
      <Price />
      <Maps />
      <Footer />
    </div>
  );
};

export default ProjectTeam;