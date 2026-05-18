import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const TEAM = [
  {
    id: 'team-1',
    imgId: 'team-img-l4m5n6',
    nameId: 'team-name-1',
    roleId: 'team-role-1',
    name: 'Dr. Elena Vasquez',
    role: 'Lead Microbiologist',
    bio: 'Specializes in marine microorganisms and bioluminescence.',
  },
  {
    id: 'team-2',
    imgId: 'team-img-o7p8q9',
    nameId: 'team-name-2',
    roleId: 'team-role-2',
    name: 'Prof. James Okafor',
    role: 'Electron Microscopist',
    bio: 'Pioneer in cryo-EM techniques for protein structure analysis.',
  },
  {
    id: 'team-3',
    imgId: 'team-img-r1s2t3',
    nameId: 'team-name-3',
    roleId: 'team-role-3',
    name: 'Dr. Yuki Tanaka',
    role: 'Crystallographer',
    bio: 'Studies mineral formation and crystal growth at the nanoscale.',
  },
  {
    id: 'team-4',
    imgId: 'team-img-u4v5w6',
    nameId: 'team-name-4',
    roleId: 'team-role-4',
    name: 'Dr. Amara Singh',
    role: 'Science Photographer',
    bio: 'Transforms scientific data into award-winning visual art.',
  },
];

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-3">The People</p>
          <h2 id="team-heading" className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none mb-4">
            Our Team
          </h2>
          <p id="team-subheading" className="text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
            Scientists, photographers, and storytellers united by curiosity about the microscopic world.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4 bg-neutral-900">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.roleId}] [${member.nameId}] [team-subheading] [team-heading] scientist portrait`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <h3 id={member.nameId} className="text-white font-bold text-base">{member.name}</h3>
              <p id={member.roleId} className="text-neutral-500 text-xs tracking-widest uppercase mt-1">{member.role}</p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
