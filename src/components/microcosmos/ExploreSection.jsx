import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Zap, Globe } from 'lucide-react';

const features = [
  {
    id: 'feat-cells',
    icon: Microscope,
    title: 'Living Cells',
    titleId: 'feat-cells-title',
    descId: 'feat-cells-desc',
    imgId: 'explore-img-cells-a1b2c3',
    description: 'Witness the intricate machinery of life — mitochondria, nuclei, and membranes working in perfect harmony inside every living cell.',
  },
  {
    id: 'feat-crystals',
    icon: Zap,
    title: 'Crystal Structures',
    titleId: 'feat-crystals-title',
    descId: 'feat-crystals-desc',
    imgId: 'explore-img-crystals-d4e5f6',
    description: 'Minerals and salts form geometric masterpieces at the atomic scale — snowflakes, quartz, and salt crystals reveal nature\'s mathematical precision.',
  },
  {
    id: 'feat-organisms',
    icon: Globe,
    title: 'Micro-Organisms',
    titleId: 'feat-organisms-title',
    descId: 'feat-organisms-desc',
    imgId: 'explore-img-organisms-g7h8i9',
    description: 'Bacteria, plankton, and tardigrades — entire civilizations of life invisible to the naked eye, thriving in every drop of water.',
  },
];

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8] mb-3 block">
            What We Study
          </span>
          <h2 id="explore-title" className="text-3xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Explore the Invisible
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto">
            Three realms of the microscopic world, each more astonishing than the last.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group rounded-2xl overflow-hidden border border-[#00d4c8]/15 bg-[#0d1a24] hover:border-[#00d4c8]/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,212,200,0.05)] hover:shadow-[0_0_40px_rgba(0,212,200,0.12)]"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={feat.title}
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [explore-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#050a0f]/70 backdrop-blur-sm flex items-center justify-center border border-[#00d4c8]/30">
                    <Icon className="w-5 h-5 text-[#00d4c8]" />
                  </div>
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 id={feat.titleId} className="text-xl font-bold text-[#e8f4f8] mb-3">
                    {feat.title}
                  </h3>
                  <p id={feat.descId} className="text-[#7fb3c8] text-sm leading-relaxed">
                    {feat.description}
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
