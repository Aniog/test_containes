import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const WorldSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="world" ref={containerRef} className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-16">
          01 — The World Below
        </p>

        {/* Two-column intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2
              id="world-title"
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
            >
              A Universe Hidden in Plain Sight
            </h2>
            <p
              id="world-desc"
              className="font-body text-white/60 leading-relaxed mb-6"
            >
              Every drop of water, every grain of soil, every breath of air teems with life invisible to the naked eye. The microcosmos is not a distant world — it is the very foundation upon which all life rests.
            </p>
            <p className="font-body text-white/40 leading-relaxed text-sm">
              Through the lens of modern microscopy, we reveal organisms that have existed for billions of years, predating every creature we can see. Their complexity, beauty, and resilience are unmatched.
            </p>
          </div>

          {/* Large feature image */}
          <div className="overflow-hidden">
            <img
              alt="Microscopic life forms"
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              data-strk-img-id="world-img-mc002"
              data-strk-img="[world-desc] [world-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        {/* Three stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            { number: '10³⁰', label: 'Microorganisms on Earth', desc: 'More than all the stars in the observable universe' },
            { number: '3.8B', label: 'Years of Evolution', desc: 'Microbial life predates all complex organisms' },
            { number: '99%', label: 'Of All Life', desc: 'The vast majority of Earth\'s biodiversity is microbial' },
          ].map((stat) => (
            <div key={stat.label} className="bg-black p-10">
              <p className="font-display text-5xl font-bold text-white mb-3">{stat.number}</p>
              <p className="font-body text-xs tracking-widest uppercase text-white/50 mb-3">{stat.label}</p>
              <p className="font-body text-sm text-white/30 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldSection;
