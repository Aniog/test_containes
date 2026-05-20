import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Species' },
  { value: '1μm', label: 'Smallest Life Form' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '99%', label: 'Invisible to Naked Eye' },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-[#050d1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-4 text-center">
          What Is MicroCosmos
        </p>
        <h2
          id="explore-title"
          className="text-3xl md:text-5xl font-bold text-slate-50 text-center mb-6"
        >
          Life at the Smallest Scale
        </h2>
        <p
          id="explore-subtitle"
          className="text-slate-400 text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          The microcosmos is a parallel universe teeming with organisms so small they defy comprehension. From the elegant geometry of diatoms to the alien grace of tardigrades, every drop of water holds an entire world.
        </p>

        {/* Two-column layout: text + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 id="explore-card-title" className="text-2xl font-bold text-slate-50 mb-4">
              Microscopic Life Forms
            </h3>
            <p id="explore-card-desc" className="text-slate-400 leading-relaxed mb-6">
              Beneath every surface, inside every body of water, and floating in the very air we breathe — microscopic organisms form the foundation of all life on Earth. They recycle nutrients, produce oxygen, and maintain the delicate balance of our biosphere.
            </p>
            <ul className="space-y-3">
              {['Bacteria & Archaea', 'Protists & Algae', 'Fungi & Spores', 'Viruses & Phages'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#00d4c8] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="Microscopic life forms under microscope"
              className="w-full h-full object-cover"
              data-strk-img-id="explore-img-mc002"
              data-strk-img="[explore-card-desc] [explore-card-title] [explore-subtitle] [explore-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d1f3c] rounded-2xl p-6 text-center border border-slate-800 hover:border-[#00d4c8]/30 transition-colors duration-300"
            >
              <p className="text-3xl md:text-4xl font-black text-[#00d4c8] mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
