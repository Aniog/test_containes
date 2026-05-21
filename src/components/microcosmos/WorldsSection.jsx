import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-mc009',
    titleId: 'world-title-1',
    title: 'The Cell',
    subtitle: 'Building Block of Life',
    description: 'Every living organism is composed of cells — the fundamental units of life. Inside each cell lies a complex machinery of organelles, proteins, and genetic material working in perfect harmony.',
    color: 'cyan',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'world-mc010',
    titleId: 'world-title-2',
    title: 'Microorganisms',
    subtitle: 'The Invisible Majority',
    description: 'Bacteria, archaea, fungi, and protists make up the vast majority of life on Earth. These microscopic organisms drive the planet\'s biogeochemical cycles and form the foundation of all ecosystems.',
    color: 'violet',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'world-mc011',
    titleId: 'world-title-3',
    title: 'Crystals & Minerals',
    subtitle: 'Nature\'s Architecture',
    description: 'At the microscopic scale, minerals reveal breathtaking geometric perfection. Atomic lattices arrange themselves into structures of extraordinary beauty — from salt cubes to quartz spirals.',
    color: 'emerald',
    ratio: '3x4',
    width: 500,
  },
];

const colorMap = {
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-400/60',
    badge: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]',
    dot: 'bg-cyan-400',
  },
  violet: {
    border: 'border-violet-500/30 hover:border-violet-400/60',
    badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]',
    dot: 'bg-violet-400',
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]',
    dot: 'bg-emerald-400',
  },
};

const WorldsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="bg-[#050a14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="worlds-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Microscopic Realms
          </p>
          <h2 id="worlds-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three Worlds to Explore
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Dive into distinct microscopic domains, each with its own rules, beauty, and secrets waiting to be uncovered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {worlds.map((world) => {
            const c = colorMap[world.color];
            return (
              <div
                key={world.id}
                className={`group rounded-2xl overflow-hidden border ${c.border} bg-[#0d1b2a] transition-all duration-500 ${c.glow}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-72">
                  <img
                    alt={world.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={world.id}
                    data-strk-img={`[${world.titleId}] [worlds-title] [worlds-label] microscopy`}
                    data-strk-img-ratio={world.ratio}
                    data-strk-img-width={world.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${c.badge}`}>
                    {world.subtitle}
                  </span>
                  <h3 id={world.titleId} className="text-white text-2xl font-bold mb-3">{world.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{world.description}</p>
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
