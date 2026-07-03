import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    id: 'ocean',
    name: 'Ocean Microbiome',
    desc: 'Marine microorganisms produce 50% of Earth\'s oxygen and form the base of all ocean food chains.',
    imgId: 'eco-ocean-mc040',
    titleId: 'eco-ocean-name',
    descId: 'eco-ocean-desc',
  },
  {
    id: 'soil',
    name: 'Soil Ecosystem',
    desc: 'A teaspoon of healthy soil contains more microorganisms than there are people on Earth.',
    imgId: 'eco-soil-mc041',
    titleId: 'eco-soil-name',
    descId: 'eco-soil-desc',
  },
  {
    id: 'gut',
    name: 'Human Gut Flora',
    desc: 'Trillions of microbes in the human gut regulate immunity, mood, and metabolism.',
    imgId: 'eco-gut-mc042',
    titleId: 'eco-gut-name',
    descId: 'eco-gut-desc',
  },
  {
    id: 'hotspring',
    name: 'Extreme Environments',
    desc: 'Thermophilic archaea thrive in boiling hot springs, revealing life\'s incredible adaptability.',
    imgId: 'eco-hotspring-mc043',
    titleId: 'eco-hotspring-name',
    descId: 'eco-hotspring-desc',
  },
];

const EcosystemSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="ecosystems" className="bg-cosmos-bg py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
            Microbial Worlds
          </span>
          <h2
            id="eco-section-title"
            className="text-3xl md:text-5xl font-bold text-cosmos-text mt-3 mb-4"
          >
            Ecosystems Within Ecosystems
          </h2>
          <p
            id="eco-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Microorganisms colonize every environment on Earth, forming complex communities that sustain all larger life forms.
          </p>
        </div>

        {/* Horizontal scroll cards on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystems.map((eco) => (
            <div
              key={eco.id}
              className="bg-cosmos-surface border border-cosmos-teal/20 rounded-2xl overflow-hidden group hover:border-cosmos-teal/50 hover:shadow-glow-teal transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={eco.name}
                  data-strk-img-id={eco.imgId}
                  data-strk-img={`[${eco.descId}] [${eco.titleId}] [eco-section-desc] [eco-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface/90 to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={eco.titleId} className="text-cosmos-text font-bold text-lg mb-2">{eco.name}</h3>
                <p id={eco.descId} className="text-cosmos-muted text-sm leading-relaxed">{eco.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
