import { useEffect, useRef } from 'react';
import { Cpu, Dna, Droplets, Radio, Eye, Atom } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const technologies = [
  {
    id: 'bio-computing',
    icon: Dna,
    name: 'Bio-Neural Computing',
    category: 'Computing',
    desc: 'Abyssian computers are grown from engineered neural tissue — living processors that think rather than calculate. The Abyssian Neural Web connects every citizen to a shared information field, enabling instant knowledge transfer and collective problem-solving.',
    highlight: '10^24 operations/sec',
    titleId: 'tech-bio-title',
    descId: 'tech-bio-desc',
    imgId: 'tech-bio-img-v4w5x6',
  },
  {
    id: 'pressure-energy',
    icon: Droplets,
    name: 'Pressure Fusion',
    category: 'Energy',
    desc: 'By replicating the conditions at the Earth\'s mantle boundary, Abyssian engineers achieved cold fusion using ocean pressure as a catalyst. A single Pressure Fusion Core the size of a building powers an entire city of 100 million for a century.',
    highlight: '100% clean energy',
    titleId: 'tech-pressure-title',
    descId: 'tech-pressure-desc',
    imgId: 'tech-pressure-img-y7z8a9',
  },
  {
    id: 'bio-engineering',
    icon: Atom,
    name: 'Deep Bio-Engineering',
    category: 'Biology',
    desc: 'Abyssians have mastered the engineering of life itself. Buildings are grown from engineered coral. Vehicles are living organisms. Medical nanobots are derived from deep-sea bacteria. The line between technology and biology dissolved 8,000 years ago.',
    highlight: '8,000 years advanced',
    titleId: 'tech-bio-eng-title',
    descId: 'tech-bio-eng-desc',
    imgId: 'tech-bio-eng-img-b1c2d3',
  },
];

const techFeatures = [
  { icon: Cpu, label: 'Neural Interface', desc: 'Direct mind-to-network connection via bio-implants grown from birth' },
  { icon: Radio, label: 'Sonar Web', desc: 'Global communication network using engineered sonar frequencies' },
  { icon: Eye, label: 'Deep Vision', desc: 'Genetic modification enables citizens to see in near-total darkness' },
  { icon: Dna, label: 'Longevity Code', desc: 'Average Abyssian lifespan: 340 years, with full cognitive function' },
];

const TechnologySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="technology" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-abyss relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-bio-cyan/3 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-heading text-bio-cyan uppercase tracking-[0.3em] text-xs font-semibold">Innovation</span>
          <h2 className="font-display text-4xl md:text-5xl text-pearl mt-3 tracking-wide">Technology</h2>
          <p className="text-muted-slate mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
            Isolated from the surface world, Abyssian science evolved along entirely different paths — merging biology and engineering into a unified discipline that surface civilizations have not yet conceived.
          </p>
        </div>

        {/* Main Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className="group border border-bio-cyan/15 bg-ocean-dark/60 backdrop-blur-md rounded-2xl overflow-hidden hover:border-bio-cyan/35 hover:shadow-[0_0_50px_rgba(0,212,255,0.12)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={tech.name}
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.descId}] [${tech.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark to-transparent" />
                  <div className="absolute top-3 left-3 bg-bio-cyan/10 border border-bio-cyan/30 rounded-full px-3 py-1">
                    <span className="font-heading text-xs text-bio-cyan font-semibold uppercase tracking-wider">{tech.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-bio-cyan/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-bio-cyan" />
                    </div>
                    <h3 id={tech.titleId} className="font-display text-lg text-pearl tracking-wide">{tech.name}</h3>
                  </div>
                  <p id={tech.descId} className="font-sans text-muted-slate text-sm leading-relaxed mb-4">{tech.desc}</p>
                  <div className="border-t border-bio-cyan/10 pt-4">
                    <span className="font-heading text-xs text-glow-aqua font-semibold uppercase tracking-widest">{tech.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techFeatures.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-bio-cyan/10 bg-midnight/40 rounded-xl p-5 hover:border-bio-cyan/25 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-bio-cyan/10 flex items-center justify-center mb-3 group-hover:bg-bio-cyan/15 transition-colors duration-300">
                <Icon className="w-5 h-5 text-bio-cyan" />
              </div>
              <h4 className="font-heading text-sm font-semibold text-pearl mb-1">{label}</h4>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
