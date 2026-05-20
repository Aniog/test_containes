import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    id: 'eco-mc030',
    titleId: 'eco-title-mc030',
    descId: 'eco-desc-mc030',
    title: 'Ocean Microbiome',
    desc: 'Ocean microbiome plankton bioluminescent marine microscopic life',
    body: 'The ocean teems with trillions of microorganisms that drive the global carbon cycle and produce half of Earth\'s oxygen.',
    color: 'from-blue-900/40',
  },
  {
    id: 'eco-mc031',
    titleId: 'eco-title-mc031',
    descId: 'eco-desc-mc031',
    title: 'Soil Ecosystem',
    desc: 'Soil microbiome fungi mycelium network underground ecosystem',
    body: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth.',
    color: 'from-amber-900/40',
  },
  {
    id: 'eco-mc032',
    titleId: 'eco-title-mc032',
    descId: 'eco-desc-mc032',
    title: 'Human Microbiome',
    desc: 'Human gut microbiome bacteria intestinal flora health',
    body: 'Your body hosts 38 trillion microbial cells — outnumbering your own human cells — forming a complex ecosystem essential to health.',
    color: 'from-rose-900/40',
  },
];

const EcosystemSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="ecosystem" ref={containerRef} className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-4 text-center">
          Micro Ecosystems
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 text-center mb-4">
          Worlds Within Worlds
        </h2>
        <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Microscopic ecosystems exist everywhere — from the deepest ocean trenches to the surface of your skin. Each one is a complex, interdependent community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystems.map((eco) => (
            <div
              key={eco.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00d4c8]/40 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={eco.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-strk-img-id={eco.id}
                  data-strk-img={`[${eco.descId}] [${eco.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${eco.color} to-transparent`} />
              </div>
              <div className="bg-[#0d1f3c] p-6">
                <h3 id={eco.titleId} className="text-xl font-bold text-slate-50 mb-2">
                  {eco.title}
                </h3>
                <p id={eco.descId} className="text-slate-400 text-sm leading-relaxed">
                  {eco.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide feature image */}
        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <img
            id="eco-wide-title"
            alt="Microscopic ecosystem diversity"
            className="w-full object-cover"
            data-strk-img-id="eco-wide-mc033"
            data-strk-img="[eco-wide-desc] [eco-wide-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            style={{ minHeight: '300px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/80 via-transparent to-[#050d1a]/80" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p
                id="eco-wide-desc"
                className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-3"
              >
                The Invisible Foundation of Life
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-50 max-w-2xl">
                Microorganisms sustain every ecosystem on Earth
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
