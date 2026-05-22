import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-mc001',
    titleId: 'world-title-1',
    descId: 'world-desc-1',
    title: 'The Cell World',
    desc: 'The fundamental unit of life — a self-contained universe of organelles, membranes, and molecular machines working in perfect harmony.',
    tag: 'Biology',
    color: 'cyan',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'world-mc002',
    titleId: 'world-title-2',
    descId: 'world-desc-2',
    title: 'Crystal Kingdoms',
    desc: 'Minerals and salts arrange themselves into geometric perfection — snowflakes, quartz formations, and vitamin crystals under polarized light.',
    tag: 'Mineralogy',
    color: 'violet',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'world-mc003',
    titleId: 'world-title-3',
    descId: 'world-desc-3',
    title: 'Microbial Life',
    desc: 'Bacteria, archaea, and protists — the oldest and most abundant life forms on Earth, shaping ecosystems and driving the chemistry of life.',
    tag: 'Microbiology',
    color: 'amber',
    ratio: '3x2',
    width: 700,
  },
];

const colorMap = {
  cyan: {
    badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30',
    border: 'hover:border-cyan-400/50',
    glow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]',
  },
  violet: {
    badge: 'bg-violet-400/10 text-violet-400 border-violet-400/30',
    border: 'hover:border-violet-400/50',
    glow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.12)]',
  },
  amber: {
    badge: 'bg-amber-400/10 text-amber-400 border-amber-400/30',
    border: 'hover:border-amber-400/50',
    glow: 'hover:shadow-[0_0_40px_rgba(251,191,36,0.12)]',
  },
};

const WorldsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0d1a26]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Realms of the Small</span>
          <h2 id="worlds-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three <span className="text-violet-400">Micro Worlds</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Dive deep into distinct microscopic realms, each with its own rules, beauty, and secrets waiting to be uncovered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {worlds.map((world) => {
            const c = colorMap[world.color];
            return (
              <div
                key={world.id}
                className={`group bg-[#050a0f] border border-slate-700/50 ${c.border} ${c.glow} rounded-2xl overflow-hidden transition-all duration-500`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={world.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-strk-img-id={world.id}
                    data-strk-img={`[${world.descId}] [${world.titleId}] [worlds-heading]`}
                    data-strk-img-ratio={world.ratio}
                    data-strk-img-width={world.width}
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${c.badge}`}>
                    {world.tag}
                  </span>
                  <h3 id={world.titleId} className="text-white font-bold text-xl mb-3">{world.title}</h3>
                  <p id={world.descId} className="text-slate-400 leading-relaxed text-sm">{world.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorldsSection;
