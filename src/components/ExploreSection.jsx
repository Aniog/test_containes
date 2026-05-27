import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10,000+', label: 'Known Microorganism Species' },
  { value: '37 Trillion', label: 'Cells in the Human Body' },
  { value: '0.001mm', label: 'Average Bacterium Size' },
  { value: '1 Billion', label: 'Microbes per Gram of Soil' },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">What Is MicroCosmos</p>
          <h2 id="explore-title" className="text-3xl md:text-5xl font-bold text-white mb-5">
            A World Beyond Sight
          </h2>
          <p id="explore-subtitle" className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Beneath the surface of everything we see lies an intricate, teeming universe of life, chemistry, and structure — the microcosmos.
          </p>
        </div>

        {/* Two-column image + text */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_0_60px_rgba(20,184,166,0.12)]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic cell structure"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              data-strk-img-id="explore-img-d4e5f6"
              data-strk-img="[explore-subtitle] [explore-title] microscopic cell biology"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Life at the{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                Microscale
              </span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Every drop of water, every grain of soil, every breath of air is alive with organisms too small to see. Bacteria, archaea, protists, and fungi form the foundation of all life on Earth.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Modern microscopy has revealed a cosmos of staggering complexity — from the double helix of DNA to the crystalline lattices of minerals, the micro world mirrors the grandeur of the universe itself.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#0d1a24] border border-teal-900/40 rounded-2xl p-4">
                  <p className="text-teal-400 font-black text-xl">{s.value}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Three image row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'explore-img-g7h8i9', query: 'diatom microscopy silica shell structure', label: 'Diatoms', desc: 'Single-celled algae with intricate glass-like shells' },
            { id: 'explore-img-j1k2l3', query: 'tardigrade water bear microscope', label: 'Tardigrades', desc: 'The most resilient animals on Earth' },
            { id: 'explore-img-m4n5o6', query: 'pollen grain electron microscope colorful', label: 'Pollen', desc: 'Nature\'s microscopic messengers of life' },
          ].map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square border border-teal-900/30 shadow-[0_0_30px_rgba(20,184,166,0.08)]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={item.id}
                data-strk-img={item.query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-base">{item.label}</p>
                <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
