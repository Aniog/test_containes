import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-ocean',
    imgId: 'world-img-ocean-w001',
    titleId: 'world-ocean-title',
    descId: 'world-ocean-desc',
    title: 'Ocean Depths',
    subtitle: 'Marine Microbiology',
    desc: 'The ocean is home to more microbial life than any other environment on Earth. A single milliliter of seawater contains over a million bacteria and ten million viruses, forming the base of the entire marine food web.',
    color: 'from-blue-900/60 to-cyan-900/40',
    accent: 'text-cosmos-cyan',
    badge: 'bg-cosmos-cyan/20 border-cosmos-cyan/40 text-cosmos-cyan',
    facts: ['1 million bacteria/mL', '10 million viruses/mL', '50% of Earth\'s oxygen'],
  },
  {
    id: 'world-soil',
    imgId: 'world-img-soil-w002',
    titleId: 'world-soil-title',
    descId: 'world-soil-desc',
    title: 'Living Soil',
    subtitle: 'Soil Microbiology',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. Bacteria, fungi, protozoa, and nematodes form an intricate web that drives nutrient cycling and plant growth.',
    color: 'from-amber-900/60 to-orange-900/40',
    accent: 'text-cosmos-gold',
    badge: 'bg-cosmos-gold/20 border-cosmos-gold/40 text-cosmos-gold',
    facts: ['1 billion bacteria/gram', '200m fungal hyphae/gram', 'Drives all plant growth'],
  },
  {
    id: 'world-body',
    imgId: 'world-img-body-w003',
    titleId: 'world-body-title',
    descId: 'world-body-desc',
    title: 'Human Microbiome',
    subtitle: 'Medical Microbiology',
    desc: 'Your body is home to trillions of microorganisms — outnumbering your own cells. This microbiome influences your immune system, mental health, metabolism, and even your personality.',
    color: 'from-purple-900/60 to-pink-900/40',
    accent: 'text-cosmos-purple',
    badge: 'bg-cosmos-purple/20 border-cosmos-purple/40 text-cosmos-purple',
    facts: ['38 trillion microbes', '1,000+ species', 'Weighs ~2 kg'],
  },
  {
    id: 'world-air',
    imgId: 'world-img-air-w004',
    titleId: 'world-air-title',
    descId: 'world-air-desc',
    title: 'The Atmosphere',
    subtitle: 'Aerobiology',
    desc: 'Every breath you take contains thousands of microbial cells. Bacteria, fungal spores, and viruses travel on air currents across continents, seeding new environments and influencing weather patterns.',
    color: 'from-teal-900/60 to-emerald-900/40',
    accent: 'text-cosmos-emerald',
    badge: 'bg-cosmos-emerald/20 border-cosmos-emerald/40 text-cosmos-emerald',
    facts: ['1,800 bacteria/m³', 'Cross-continental travel', 'Influence cloud formation'],
  },
];

const WorldsSection = () => {
  const containerRef = useRef(null);
  const [activeWorld, setActiveWorld] = useState(worlds[0].id);

  const current = worlds.find((w) => w.id === activeWorld);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeWorld]);

  return (
    <section ref={containerRef} className="bg-[#071a1a] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest mb-4 block">
            Micro Environments
          </span>
          <h2
            id="worlds-title"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Worlds Within Worlds
          </h2>
          <p
            id="worlds-subtitle"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Every environment on Earth harbors its own unique microbial ecosystem,
            each shaped by millions of years of evolution.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {worlds.map((world) => (
            <button
              key={world.id}
              onClick={() => setActiveWorld(world.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeWorld === world.id
                  ? `${world.badge} border-opacity-100`
                  : 'bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {world.title}
            </button>
          ))}
        </div>

        {/* Active world display */}
        {current && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                alt={current.title}
                data-strk-img-id={current.imgId}
                data-strk-img={`[${current.descId}] [${current.titleId}] [worlds-subtitle] [worlds-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${current.color}`} />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${current.badge}`}>
                  {current.subtitle}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 id={current.titleId} className={`font-display text-3xl md:text-4xl font-bold mb-3 ${current.accent}`}>
                  {current.title}
                </h3>
                <p id={current.descId} className="text-slate-300 text-lg leading-relaxed">
                  {current.desc}
                </p>
              </div>

              {/* Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {current.facts.map((fact, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <p className={`text-sm font-semibold ${current.accent}`}>{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom row: all world thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {worlds.map((world) => (
            <div
              key={world.id}
              onClick={() => setActiveWorld(world.id)}
              className={`relative rounded-xl overflow-hidden aspect-[3x2] cursor-pointer group transition-all duration-300 ${
                activeWorld === world.id ? 'ring-2 ring-cosmos-teal' : 'opacity-60 hover:opacity-90'
              }`}
            >
              <img
                alt={world.title}
                data-strk-img-id={`${world.imgId}-thumb`}
                data-strk-img={`[${world.descId}] [${world.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${world.color} opacity-70`} />
              <div className="absolute bottom-2 left-2 right-2">
                <p id={world.titleId} className="text-white text-xs font-semibold truncate">{world.title}</p>
                <p id={world.descId} className="sr-only">{world.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldsSection;
