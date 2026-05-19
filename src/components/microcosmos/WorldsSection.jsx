import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-1',
    titleId: 'world-title-1',
    descId: 'world-desc-1',
    imgId: 'world-img-u4v5w6',
    title: 'The Cell World',
    subtitle: 'Biology',
    desc: 'Every living organism is built from cells — the fundamental unit of life. Inside each cell lies a complex city of organelles, proteins, and DNA.',
    color: 'cyan',
  },
  {
    id: 'world-2',
    titleId: 'world-title-2',
    descId: 'world-desc-2',
    imgId: 'world-img-x7y8z9',
    title: 'Crystal Kingdoms',
    subtitle: 'Mineralogy',
    desc: 'Minerals and salts form breathtaking geometric structures at the microscopic scale. Snowflakes, quartz, and salt crystals reveal nature\'s mathematical precision.',
    color: 'violet',
  },
  {
    id: 'world-3',
    titleId: 'world-title-3',
    descId: 'world-desc-3',
    imgId: 'world-img-a2b3c4',
    title: 'Microbial Life',
    subtitle: 'Microbiology',
    desc: 'Bacteria, archaea, and protists have dominated Earth for billions of years. These microscopic pioneers shaped our atmosphere and make all complex life possible.',
    color: 'emerald',
  },
];

const colorMap = {
  cyan: {
    badge: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    border: 'border-cyan-900/40 hover:border-cyan-400/50',
    glow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]',
    dot: 'bg-cyan-400',
  },
  violet: {
    badge: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    border: 'border-violet-900/40 hover:border-violet-400/50',
    glow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]',
    dot: 'bg-violet-400',
  },
  emerald: {
    badge: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    border: 'border-emerald-900/40 hover:border-emerald-400/50',
    glow: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]',
    dot: 'bg-emerald-400',
  },
};

const WorldCard = ({ world }) => {
  const c = colorMap[world.color];
  return (
    <div
      className={`group bg-[#0d1b2e] border ${c.border} rounded-2xl overflow-hidden transition-all duration-500 ${c.glow}`}
    >
      <div className="relative overflow-hidden">
        <img
          alt={world.title}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
          data-strk-img-id={world.imgId}
          data-strk-img={`[${world.descId}] [${world.titleId}] microscopic science`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e] via-transparent to-transparent" />
        <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border ${c.badge}`}>
          {world.subtitle}
        </span>
      </div>
      <div className="p-6">
        <h3 id={world.titleId} className="text-white font-bold text-xl mb-3">
          {world.title}
        </h3>
        <p id={world.descId} className="text-slate-400 text-sm leading-relaxed">
          {world.desc}
        </p>
      </div>
    </div>
  );
};

const WorldsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="py-20 md:py-28 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Micro Worlds
          </p>
          <h2
            id="worlds-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Three Realms of the Invisible
          </h2>
          <p
            id="worlds-section-desc"
            className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
          >
            Dive into the distinct kingdoms of the microscopic universe, each with its own rules, beauty, and secrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {worlds.map((world) => (
            <WorldCard key={world.id} world={world} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldsSection;
