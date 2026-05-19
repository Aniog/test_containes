import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teamMembers = [
  {
    id: 'team-1',
    titleId: 'team-title-1',
    subtitleId: 'team-sub-1',
    name: 'Dr. Elena Vasquez',
    role: 'Lead Microbiologist',
    bio: 'Specializing in extremophile organisms and their survival mechanisms in hostile environments.',
    imgId: 'team-img-w6x7y8',
    ratio: '1x1',
    width: 400,
  },
  {
    id: 'team-2',
    titleId: 'team-title-2',
    subtitleId: 'team-sub-2',
    name: 'Prof. James Okafor',
    role: 'Electron Microscopist',
    bio: 'Pioneer in cryo-electron tomography with over 200 published papers on cellular ultrastructure.',
    imgId: 'team-img-z9a1b2',
    ratio: '1x1',
    width: 400,
  },
  {
    id: 'team-3',
    titleId: 'team-title-3',
    subtitleId: 'team-sub-3',
    name: 'Dr. Yuki Tanaka',
    role: 'Crystallographer',
    bio: 'Studying the formation of mineral crystals at the nanoscale and their role in biomineralization.',
    imgId: 'team-img-c3d4e5',
    ratio: '1x1',
    width: 400,
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#9b5de5] font-semibold mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Making the Invisible World Accessible
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              MicroCosmos was founded by a team of scientists and visual artists united by a single belief: the microscopic world is the most beautiful and important frontier of human knowledge.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              We combine cutting-edge imaging technology with compelling storytelling to bring the wonders of microbiology, crystallography, and cell biology to everyone — from curious students to seasoned researchers.
            </p>
            <a
              href="#explore"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#9b5de5] text-white font-bold text-sm hover:bg-[#8a4fd4] transition-colors duration-200"
            >
              Explore Our Work
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="about-bg-f6g7h8"
              data-strk-bg="[about-img-sub] [about-img-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="relative" style={{ paddingTop: '75%' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b5de5]/20 to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p id="about-img-title" className="text-white font-semibold text-sm hidden">Microscopy laboratory research</p>
              <p id="about-img-sub" className="text-slate-300 text-xs hidden">Scientists studying microorganisms under electron microscope</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] font-semibold mb-3">
            The Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the Scientists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#0d1a24] border border-[#1e3a4a] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={member.name}
                  className="w-full object-cover"
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.subtitleId}] [${member.titleId}]`}
                  data-strk-img-ratio={member.ratio}
                  data-strk-img-width={member.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={member.titleId} className="text-white font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-[#00d4c8] text-sm font-medium mb-3">{member.role}</p>
                <p id={member.subtitleId} className="text-slate-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
