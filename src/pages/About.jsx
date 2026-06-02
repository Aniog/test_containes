import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'dr-chen',
    name: 'Dr. Mei Chen',
    role: 'Chief Microbiologist',
    bio: 'PhD in Microbiology from MIT. 15 years studying extremophile bacteria in deep-sea hydrothermal vents.',
    titleId: 'team-chen-title',
    descId: 'team-chen-desc',
    imgId: 'about-team-chen-a1b2',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Emeka Okafor',
    role: 'Electron Microscopist',
    bio: 'Specialist in cryo-electron microscopy. Has captured over 10,000 images of microscopic life forms.',
    titleId: 'team-okafor-title',
    descId: 'team-okafor-desc',
    imgId: 'about-team-okafor-c3d4',
  },
  {
    id: 'dr-santos',
    name: 'Dr. Lucia Santos',
    role: 'Marine Biologist',
    bio: 'Expert in marine plankton ecosystems. Studies the role of phytoplankton in global carbon cycles.',
    titleId: 'team-santos-title',
    descId: 'team-santos-desc',
    imgId: 'about-team-santos-e5f6',
  },
  {
    id: 'dr-kim',
    name: 'Dr. Jae-won Kim',
    role: 'Mycologist',
    bio: 'Researches fungal communication networks and their role in forest ecosystem health and resilience.',
    titleId: 'team-kim-title',
    descId: 'team-kim-desc',
    imgId: 'about-team-kim-g7h8',
  },
];

const milestones = [
  { year: '2018', event: 'MicroCosmos founded by a team of microbiologists and science communicators.' },
  { year: '2019', event: 'Launched our first digital microscopy archive with 500+ species documented.' },
  { year: '2021', event: 'Partnered with 12 universities worldwide to expand our research database.' },
  { year: '2023', event: 'Reached 2 million visitors and launched our interactive organism explorer.' },
  { year: '2025', event: 'Opened our first physical exhibition in collaboration with the Natural History Museum.' },
  { year: '2026', event: 'Launched AI-powered microscopy identification tools for citizen scientists.' },
];

const values = [
  { icon: '🔬', title: 'Scientific Rigor', desc: 'Every fact is peer-reviewed and verified by domain experts.' },
  { icon: '🌍', title: 'Accessibility', desc: 'Complex science made beautiful and understandable for everyone.' },
  { icon: '🤝', title: 'Open Science', desc: 'We believe knowledge should be free and universally accessible.' },
  { icon: '🌱', title: 'Conservation', desc: 'Protecting microbial diversity is essential for planetary health.' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] text-[#e2f0ff] min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#7c3aed]/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#00d4c8]/10 border border-[#00d4c8]/20 text-[#00d4c8] text-xs font-medium px-4 py-2 rounded-full mb-6">
              Our Story
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-[#e2f0ff] mb-6">
              We Make the{' '}
              <span className="gradient-text">Invisible</span>{' '}
              Visible
            </h1>
            <p className="text-[#7ba7cc] text-lg leading-relaxed mb-8">
              MicroCosmos was born from a simple belief: the microscopic world is the most fascinating, 
              important, and overlooked realm of life on Earth. We exist to change that.
            </p>
            <p className="text-[#7ba7cc] leading-relaxed">
              Founded by a team of microbiologists, science communicators, and visual artists, 
              we combine rigorous science with stunning imagery to bring the hidden universe to life 
              for curious minds everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Stats */}
      <section className="py-16 border-y border-[#1a3a5c] bg-[#0a1628]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2,400+', label: 'Species Documented' },
              { value: '18', label: 'Research Partners' },
              { value: '2M+', label: 'Annual Visitors' },
              { value: '47', label: 'Countries Reached' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-[#00d4c8] mb-2">{stat.value}</div>
                <div className="text-[#7ba7cc] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00d4c8] text-sm font-medium uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3 text-[#e2f0ff]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-6 hover:border-[#00d4c8]/40 transition-all">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-semibold text-[#e2f0ff] text-lg mb-2">{v.title}</h3>
                <p className="text-[#7ba7cc] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-[#0a1628]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00d4c8] text-sm font-medium uppercase tracking-widest">The People</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3 text-[#e2f0ff]">Meet Our Team</h2>
            <p className="text-[#7ba7cc] mt-4 max-w-xl mx-auto">
              World-class scientists and storytellers united by a passion for the microscopic world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 hover:shadow-lg hover:shadow-[#00d4c8]/8 transition-all group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}] scientist portrait`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 id={member.titleId} className="font-heading font-semibold text-[#e2f0ff] text-base">
                    {member.name}
                  </h3>
                  <p className="text-[#00d4c8] text-xs font-medium mt-0.5 mb-3">{member.role}</p>
                  <p id={member.descId} className="text-[#7ba7cc] text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00d4c8] text-sm font-medium uppercase tracking-widest">Our Journey</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3 text-[#e2f0ff]">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4c8] via-[#1a3a5c] to-transparent" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-[#0a1628] border border-[#1a3a5c] rounded-xl p-4 inline-block hover:border-[#00d4c8]/40 transition-all">
                      <p className="text-[#7ba7cc] text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 w-16 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#0f2040] border-2 border-[#00d4c8] flex items-center justify-center z-10">
                      <span className="text-[#00d4c8] text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="md:hidden flex-1">
                    <p className="text-[#00d4c8] text-sm font-bold mb-1">{m.year}</p>
                    <p className="text-[#7ba7cc] text-sm leading-relaxed">{m.event}</p>
                  </div>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                    <span className="text-[#00d4c8] font-heading font-bold text-2xl">{m.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#e2f0ff] mb-4">
            Join Our Mission
          </h2>
          <p className="text-[#7ba7cc] mb-8 max-w-xl mx-auto">
            Whether you're a scientist, educator, or simply curious — there's a place for you in the MicroCosmos community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#00d4c8] text-[#050d1a] font-semibold px-8 py-4 rounded-full hover:bg-[#00b8ad] transition-all"
            >
              Get in Touch
            </Link>
            <Link
              to="/explore"
              className="border border-[#1a3a5c] text-[#e2f0ff] font-medium px-8 py-4 rounded-full hover:border-[#00d4c8]/50 transition-all"
            >
              Explore the Database
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
