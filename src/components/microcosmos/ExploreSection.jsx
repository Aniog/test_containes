import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const WORLDS = [
  {
    id: 'world-bacteria',
    tag: 'Prokaryotes',
    title: 'Bacterial Kingdoms',
    desc: 'Single-celled organisms that have dominated Earth for over 3.5 billion years, shaping every ecosystem on the planet.',
    color: 'cyan',
    imgId: 'world-img-mc002',
  },
  {
    id: 'world-fungi',
    tag: 'Mycology',
    title: 'Fungal Networks',
    desc: 'The wood wide web — vast mycelial networks that connect forests, transfer nutrients, and communicate across miles.',
    color: 'violet',
    imgId: 'world-img-mc003',
  },
  {
    id: 'world-algae',
    tag: 'Phytoplankton',
    title: 'Algae & Diatoms',
    desc: 'Microscopic glass sculptures drifting in every ocean, producing half of Earth\'s oxygen and feeding marine food chains.',
    color: 'emerald',
    imgId: 'world-img-mc004',
  },
];

const colorMap = {
  cyan: {
    tag: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    title: 'text-cyan-400',
    border: 'border-cyan-400/20 hover:border-cyan-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]',
  },
  violet: {
    tag: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    title: 'text-violet-400',
    border: 'border-violet-400/20 hover:border-violet-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.12)]',
  },
  emerald: {
    tag: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    title: 'text-emerald-400',
    border: 'border-emerald-400/20 hover:border-emerald-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.12)]',
  },
};

export default function ExploreSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 inline-block">
            Three Kingdoms
          </span>
          <h2 id="explore-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Worlds Within Worlds
          </h2>
          <p id="explore-subtitle" className="text-slate-400 max-w-xl mx-auto text-lg">
            Peer into three distinct microscopic realms, each teeming with life invisible to the naked eye.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {WORLDS.map((w) => {
            const c = colorMap[w.color];
            return (
              <div
                key={w.id}
                className={`rounded-2xl border bg-slate-900/60 overflow-hidden transition-all duration-300 ${c.border} ${c.glow}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    alt={w.title}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                    data-strk-img-id={w.imgId}
                    data-strk-img={`[${w.id}] [explore-subtitle] [explore-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <span className={`text-xs font-semibold uppercase tracking-widest border px-3 py-1 rounded-full ${c.tag}`}>
                    {w.tag}
                  </span>
                  <h3 id={w.id} className={`text-xl font-bold mt-3 mb-2 ${c.title}`}>
                    {w.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
