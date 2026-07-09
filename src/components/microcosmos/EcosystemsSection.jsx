import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    id: 'ocean',
    title: 'Ocean Microbiome',
    desc: 'Marine microorganisms produce 50% of Earth\'s oxygen and drive global carbon cycles.',
    titleId: 'eco-ocean-title',
    descId: 'eco-ocean-desc',
    imgId: 'eco-img-ocean-mc020',
    stat: '50%',
    statLabel: 'of Earth\'s oxygen',
  },
  {
    id: 'soil',
    title: 'Soil Ecosystem',
    desc: 'A teaspoon of healthy soil contains more microbes than there are people on Earth.',
    titleId: 'eco-soil-title',
    descId: 'eco-soil-desc',
    imgId: 'eco-img-soil-mc021',
    stat: '1B+',
    statLabel: 'microbes per teaspoon',
  },
  {
    id: 'gut',
    title: 'Human Gut Flora',
    desc: 'Trillions of microbes in our digestive system regulate immunity, mood, and metabolism.',
    titleId: 'eco-gut-title',
    descId: 'eco-gut-desc',
    imgId: 'eco-img-gut-mc022',
    stat: '100T',
    statLabel: 'gut microorganisms',
  },
  {
    id: 'extreme',
    title: 'Extreme Environments',
    desc: 'Extremophiles colonize volcanic vents, acidic lakes, and the stratosphere.',
    titleId: 'eco-extreme-title',
    descId: 'eco-extreme-desc',
    imgId: 'eco-img-extreme-mc023',
    stat: '121°C',
    statLabel: 'max survival temp',
  },
];

const EcosystemsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-bg py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="eco-section-label" className="text-cosmos-violet text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
            Where They Live
          </p>
          <h2 id="eco-section-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text">
            Microbial Ecosystems
          </h2>
          <p className="font-inter text-cosmos-muted mt-4 max-w-xl mx-auto">
            Microorganisms colonize every habitat on Earth — and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ecosystems.map((eco) => (
            <div
              key={eco.id}
              className="group relative rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-violet/30 transition-colors duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  alt={eco.title}
                  data-strk-img-id={eco.imgId}
                  data-strk-img={`[${eco.descId}] [${eco.titleId}] [eco-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 id={eco.titleId} className="font-grotesk text-cosmos-text text-xl font-bold mb-2">
                      {eco.title}
                    </h3>
                    <p id={eco.descId} className="font-inter text-cosmos-muted text-sm leading-relaxed max-w-xs">
                      {eco.desc}
                    </p>
                  </div>
                  <div className="text-right ml-4 flex-shrink-0">
                    <div className="font-grotesk text-cosmos-violet text-2xl font-bold">{eco.stat}</div>
                    <div className="font-inter text-cosmos-faint text-xs">{eco.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemsSection;
