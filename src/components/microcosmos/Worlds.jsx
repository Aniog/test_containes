import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-bacteria',
    titleId: 'world-title-bacteria',
    descId: 'world-desc-bacteria',
    imgId: 'world-img-bacteria-mc',
    title: 'Bacteria',
    desc: 'The oldest and most abundant life forms on Earth. Bacteria inhabit every environment imaginable — from deep-sea vents to the human gut — and are essential to all ecosystems.',
    fact: 'There are more bacteria in your mouth than people on Earth.',
    color: 'text-[#00d4ff]',
    borderColor: 'border-[rgba(0,212,255,0.2)]',
    glowColor: 'shadow-[0_0_40px_rgba(0,212,255,0.1)]',
  },
  {
    id: 'world-cells',
    titleId: 'world-title-cells',
    descId: 'world-desc-cells',
    imgId: 'world-img-cells-mc',
    title: 'Cells',
    desc: 'The fundamental unit of life. Every living organism is made of cells — from single-celled amoeba to the 37 trillion cells that make up the human body.',
    fact: 'A single human cell contains about 6 feet of DNA.',
    color: 'text-[#00b894]',
    borderColor: 'border-[rgba(0,184,148,0.2)]',
    glowColor: 'shadow-[0_0_40px_rgba(0,184,148,0.1)]',
  },
  {
    id: 'world-crystals',
    titleId: 'world-title-crystals',
    descId: 'world-desc-crystals',
    imgId: 'world-img-crystals-mc',
    title: 'Crystals',
    desc: 'Nature\'s geometric masterpieces. Crystals form when atoms arrange themselves in repeating patterns, creating structures of breathtaking symmetry and complexity.',
    fact: 'No two snowflakes are identical — each has a unique molecular structure.',
    color: 'text-purple-400',
    borderColor: 'border-[rgba(168,85,247,0.2)]',
    glowColor: 'shadow-[0_0_40px_rgba(168,85,247,0.1)]',
  },
  {
    id: 'world-fungi',
    titleId: 'world-title-fungi',
    descId: 'world-desc-fungi',
    imgId: 'world-img-fungi-mc',
    title: 'Fungi',
    desc: 'Neither plant nor animal, fungi occupy their own kingdom. Their microscopic spores and hyphae form vast underground networks that connect entire forests.',
    fact: 'The largest organism on Earth is a fungal network spanning 2,385 acres.',
    color: 'text-amber-400',
    borderColor: 'border-[rgba(245,158,11,0.2)]',
    glowColor: 'shadow-[0_0_40px_rgba(245,158,11,0.1)]',
  },
];

const Worlds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="py-24 md:py-32 bg-[#0a1520]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-4 block">
            Kingdoms of the Small
          </span>
          <h2 id="worlds-title" className="text-4xl md:text-5xl font-black text-[#e2f0fb] mb-4">
            Explore the Worlds
          </h2>
          <p id="worlds-subtitle" className="text-[#7fb3cc] text-lg max-w-xl mx-auto">
            Each microscopic kingdom has its own rules, structures, and wonders waiting to be discovered.
          </p>
        </div>

        {/* World cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {worlds.map((world) => (
            <div
              key={world.id}
              className={`group bg-[#0d1a24] border ${world.borderColor} rounded-3xl overflow-hidden ${world.glowColor} hover:scale-[1.01] transition-all duration-300`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  data-strk-img-id={world.imgId}
                  data-strk-img={`[${world.descId}] [${world.titleId}] [worlds-subtitle] [worlds-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={world.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ background: '#0d1a24' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <h3 id={world.titleId} className={`text-2xl font-black mb-3 ${world.color}`}>
                  {world.title}
                </h3>
                <p id={world.descId} className="text-[#7fb3cc] leading-relaxed mb-5">
                  {world.desc}
                </p>
                <div className={`border-l-2 ${world.borderColor} pl-4`}>
                  <p className="text-sm text-[#4a7a96] italic">"{world.fact}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worlds;
