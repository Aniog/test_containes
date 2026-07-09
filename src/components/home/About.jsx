import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Dna, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Eye,
    titleId: 'about-pillar-1-title',
    descId: 'about-pillar-1-desc',
    title: 'Invisible Life',
    desc: 'Trillions of microorganisms inhabit every surface, drop of water, and cubic centimeter of air around us.',
    imgId: 'about-pillar-1-img-mc002',
  },
  {
    icon: Dna,
    titleId: 'about-pillar-2-title',
    descId: 'about-pillar-2-desc',
    title: 'Cellular Wonders',
    desc: 'Each cell is a universe of its own — with organelles, membranes, and molecular machines working in perfect harmony.',
    imgId: 'about-pillar-2-img-mc003',
  },
  {
    icon: Globe,
    titleId: 'about-pillar-3-title',
    descId: 'about-pillar-3-desc',
    title: 'Vital Ecosystems',
    desc: 'Microscopic life drives the planet\'s nutrient cycles, oxygen production, and the health of every living organism.',
    imgId: 'about-pillar-3-img-mc004',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4c8] text-sm font-medium tracking-widest uppercase mb-3 block">
            What Is MicroCosmos?
          </span>
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold text-[#e2f0f9] mb-5"
          >
            Life at the Smallest Scale
          </h2>
          <p
            id="about-desc"
            className="text-[#7fa8c4] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            The microcosmos is a parallel world teeming with life — ancient, resilient, and
            endlessly fascinating. From single-celled organisms to complex fungal networks,
            the microscopic realm shapes the world we live in.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.titleId}
                className="bg-[#0d1a24] border border-[#00d4c8]/15 rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={pillar.title}
                    data-strk-img-id={pillar.imgId}
                    data-strk-img={`[${pillar.descId}] [${pillar.titleId}] [about-desc] [about-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#00d4c8]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00d4c8]" />
                    </div>
                    <h3 id={pillar.titleId} className="text-[#e2f0f9] font-semibold text-lg">
                      {pillar.title}
                    </h3>
                  </div>
                  <p id={pillar.descId} className="text-[#7fa8c4] text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
