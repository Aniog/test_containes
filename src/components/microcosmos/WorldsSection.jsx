import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const worlds = [
  {
    id: 'world-ocean',
    imgId: 'world-img-ocean-a1b2c3',
    titleId: 'world-title-ocean',
    descId: 'world-desc-ocean',
    title: 'Ocean Microbiome',
    desc: 'The ocean\'s microscopic ecosystem produces half of Earth\'s oxygen. Phytoplankton, diatoms, and cyanobacteria form the foundation of all marine life.',
    stat: '50%',
    statLabel: 'of Earth\'s oxygen',
    accent: 'cosmos-cyan',
    accentClass: 'text-cosmos-cyan',
    borderClass: 'border-cosmos-cyan/20 hover:border-cosmos-cyan/50',
    glowClass: 'shadow-cosmos-cyan/10',
  },
  {
    id: 'world-soil',
    imgId: 'world-img-soil-d4e5f6',
    titleId: 'world-title-soil',
    descId: 'world-desc-soil',
    title: 'Soil Ecosystem',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. Fungi, bacteria, and nematodes weave an invisible web of life.',
    stat: '1B+',
    statLabel: 'organisms per teaspoon',
    accent: 'cosmos-emerald',
    accentClass: 'text-cosmos-emerald',
    borderClass: 'border-cosmos-emerald/20 hover:border-cosmos-emerald/50',
    glowClass: 'shadow-cosmos-emerald/10',
  },
  {
    id: 'world-human',
    imgId: 'world-img-human-g7h8i9',
    titleId: 'world-title-human',
    descId: 'world-desc-human',
    title: 'Human Microbiome',
    desc: 'Your body hosts trillions of microorganisms — bacteria, viruses, and fungi that outnumber your own cells. They regulate immunity, digestion, and even mood.',
    stat: '38T',
    statLabel: 'microbial cells in you',
    accent: 'cosmos-violet',
    accentClass: 'text-cosmos-violet',
    borderClass: 'border-cosmos-violet/20 hover:border-cosmos-violet/50',
    glowClass: 'shadow-cosmos-violet/10',
  },
];

export default function WorldsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="worlds" ref={containerRef} className="bg-cosmos-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-amber text-xs font-semibold uppercase tracking-widest">
            Hidden Ecosystems
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            Invisible Worlds
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Entire ecosystems thrive in places we never think to look — in the
            ocean, beneath our feet, and even inside our own bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {worlds.map((world) => (
            <div
              key={world.id}
              className={`group bg-cosmos-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${world.borderClass} ${world.glowClass}`}
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  alt={world.title}
                  data-strk-img-id={world.imgId}
                  data-strk-img={`[${world.descId}] [${world.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stat */}
                <div className="mb-4">
                  <span className={`text-4xl font-black ${world.accentClass}`}>
                    {world.stat}
                  </span>
                  <span className="text-slate-500 text-sm ml-2">{world.statLabel}</span>
                </div>

                <h3 id={world.titleId} className="text-xl font-bold text-white mb-3">
                  {world.title}
                </h3>
                <p id={world.descId} className="text-slate-400 text-sm leading-relaxed">
                  {world.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
