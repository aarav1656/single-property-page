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
    <div className="bg-stone-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <Users className="mx-auto h-8 w-8 text-stone-600" />
          <h2 className="mt-1 text-2xl font-bold text-stone-900">
            Our Project Team
          </h2>
          <p className="mt-2 text-base text-stone-500">
            Meet the experts behind our exceptional designs
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          {/* First team member in the middle */}
          <div className="mb-6 text-center">
            <h3 className="text-lg font-medium text-stone-900">{teamMembers[0].role}</h3>
            <p className="text-base text-stone-500">{teamMembers[0].name}</p>
          </div>
          
          {/* Two columns with 3 members each */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-4">
              {teamMembers.slice(1, 4).map((member, index) => (
                <div key={index} className="text-center py-2">
                  <h3 className="text-base font-medium text-stone-900">{member.role}</h3>
                  <p className="text-sm text-stone-500">{member.name}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {teamMembers.slice(4).map((member, index) => (
                <div key={index} className="text-center py-2">
                  <h3 className="text-base font-medium text-stone-900">{member.role}</h3>
                  <p className="text-sm text-stone-500">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src="https://img.freepik.com/premium-photo/architect-planning-blueprint-with-designer-engineer-working-as-team-construction-architecture-design-industry-building-teamwork-collaboration-with-hands-contractor_590464-82151.jpg"
            alt="Team collaboration"
            className="rounded-lg shadow-lg max-w-2xl w-full object-cover h-48 md:h-64"
          />
        </div>
      </div>
      
      <Price />
      <Maps />
      <Footer />
    </div>
  );
};

export default ProjectTeam;