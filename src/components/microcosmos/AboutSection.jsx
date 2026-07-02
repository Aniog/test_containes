import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'team-01',
    imgId: 'about-img-01-uv1wx2',
    titleId: 'about-title-01',
    descId: 'about-desc-01',
    name: 'Dr. Elena Vasquez',
    role: 'Lead Microscopist',
    bio: 'Specializing in fluorescence microscopy and live-cell imaging with 15 years of research experience.',
  },
  {
    id: 'team-02',
    imgId: 'about-img-02-yz3ab4',
    titleId: 'about-title-02',
    descId: 'about-desc-02',
    name: 'Prof. James Okafor',
    role: 'Marine Microbiologist',
    bio: 'Expert in marine microorganisms and deep-sea microbial ecosystems, published in Nature and Science.',
  },
  {
    id: 'team-03',
    imgId: 'about-img-03-cd5ef6',
    titleId: 'about-title-03',
    descId: 'about-desc-03',
    name: 'Dr. Mei Lin',
    role: 'Crystallographer',
    bio: 'Pioneering research in biomineralization and the formation of biological crystal structures.',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-36 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400 mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Making the Invisible <span className="text-cyan-400">Visible</span>
            </h2>
            <p className="text-[#7fb3c8] text-lg leading-relaxed mb-6">
              MicroCosmos is dedicated to bringing the wonders of the microscopic world to everyone. Through stunning imagery, rigorous science, and accessible storytelling, we reveal the hidden universe that surrounds us.
            </p>
            <p className="text-[#7fb3c8] leading-relaxed">
              Founded by a team of scientists, photographers, and educators, we believe that understanding the microscopic world is essential to understanding life itself — and our place within it.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-cyan-900/40">
            <img
              alt="Microscopy laboratory"
              data-strk-img-id="about-mission-img-gh7ij8"
              data-strk-img="[about-mission-desc] [about-mission-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050a0f]/60 to-transparent" />
            <span id="about-mission-title" className="sr-only">Microscopy laboratory</span>
            <span id="about-mission-desc" className="sr-only">Scientists working with advanced microscopes in a research laboratory</span>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400 mb-4">
              The Team
            </p>
            <h3 className="text-2xl md:text-4xl font-black text-white">
              Scientists & Explorers
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="group text-center rounded-2xl overflow-hidden border border-cyan-900/30 bg-[#0d1a24] hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.12)] transition-all duration-500 p-6"
              >
                <div className="relative w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-2 border-cyan-400/30">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 id={member.titleId} className="text-white font-bold text-lg mb-1">
                  {member.name}
                </h4>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p id={member.descId} className="text-[#7fb3c8] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
