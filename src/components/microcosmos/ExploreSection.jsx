import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Zap, Globe } from 'lucide-react';

const features = [
  {
    id: 'feat-cells',
    icon: Eye,
    title: 'Living Cells',
    desc: 'Explore the intricate machinery of living cells — organelles, membranes, and the molecular dance of life itself.',
    imgId: 'feat-img-cells-a1b2c3',
    titleId: 'feat-cells-title',
    descId: 'feat-cells-desc',
  },
  {
    id: 'feat-crystals',
    icon: Zap,
    title: 'Crystal Structures',
    desc: 'Witness the geometric perfection of mineral crystals and ice formations at the microscopic scale.',
    imgId: 'feat-img-crystals-d4e5f6',
    titleId: 'feat-crystals-title',
    descId: 'feat-crystals-desc',
  },
  {
    id: 'feat-organisms',
    icon: Globe,
    title: 'Micro-Organisms',
    desc: 'Bacteria, protozoa, and algae — the ancient rulers of Earth, thriving in every environment imaginable.',
    imgId: 'feat-img-organisms-g7h8i9',
    titleId: 'feat-organisms-title',
    descId: 'feat-organisms-desc',
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            What We Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mb-4">
            Three Realms of the Invisible
          </h2>
          <p className="text-[#7fb3c8] max-w-xl mx-auto leading-relaxed">
            From the building blocks of life to the geometry of minerals, the microscopic world is endlessly surprising.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-[#0f2030] border border-[#1a3a4a] rounded-2xl overflow-hidden group hover:border-[#00d4ff]/40 hover:shadow-[0_0_24px_rgba(0,212,255,0.15)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    alt={feat.title}
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2030] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#00d4ff]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#00d4ff]" />
                    </div>
                    <h3 id={feat.titleId} className="text-lg font-semibold text-[#e8f4f8]">
                      {feat.title}
                    </h3>
                  </div>
                  <p id={feat.descId} className="text-[#7fb3c8] text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
