import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const environments = [
  {
    id: 'env-1',
    titleId: 'env-title-1',
    descId: 'env-desc-1',
    imgId: 'env-img-a1b2c3',
    name: 'Deep Ocean Vents',
    description: 'Hydrothermal vents at the ocean floor host extremophile bacteria that thrive at temperatures above 100°C, forming entire ecosystems without sunlight.',
    ratio: '16x9',
    width: 900,
  },
  {
    id: 'env-2',
    titleId: 'env-title-2',
    descId: 'env-desc-2',
    imgId: 'env-img-d4e5f6',
    name: 'Soil Microbiome',
    description: 'A single gram of fertile soil contains up to one billion bacteria and hundreds of meters of fungal threads, forming a complex underground network.',
    ratio: '16x9',
    width: 900,
  },
  {
    id: 'env-3',
    titleId: 'env-title-3',
    descId: 'env-desc-3',
    imgId: 'env-img-g7h8i9',
    name: 'Human Gut',
    description: 'The human digestive system hosts over 100 trillion microorganisms — a community so complex it is often called our "second brain."',
    ratio: '16x9',
    width: 900,
  },
];

export default function EnvironmentsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="environments" ref={containerRef} className="bg-cosmos-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cosmos-teal font-grotesk text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Where They Live
          </p>
          <h2
            id="env-section-title"
            className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Extreme
            <span className="bg-gradient-to-r from-cosmos-teal to-cosmos-amber bg-clip-text text-transparent"> Habitats</span>
          </h2>
          <p
            id="env-section-desc"
            className="font-inter text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Microorganisms colonize every corner of our planet — from the most hostile environments to the most intimate spaces within our own bodies.
          </p>
        </div>

        {/* Large feature cards */}
        <div className="space-y-8">
          {environments.map((env, index) => (
            <div
              key={env.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-cosmos-elevated group hover:border-cosmos-teal/30 transition-all duration-300 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image side */}
              <div className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <span id={env.titleId} className="sr-only">{env.name}</span>
                <span id={env.descId} className="sr-only">{env.description}</span>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={env.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={env.imgId}
                  data-strk-img={`[${env.descId}] [${env.titleId}] [env-section-desc] [env-section-title]`}
                  data-strk-img-ratio={env.ratio}
                  data-strk-img-width={env.width}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cosmos-surface/60 to-transparent lg:block hidden" />
              </div>

              {/* Text side */}
              <div className={`bg-cosmos-surface p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="w-10 h-px bg-cosmos-teal mb-6" />
                <h3 className="font-grotesk font-bold text-2xl md:text-3xl text-cosmos-text mb-4">
                  {env.name}
                </h3>
                <p className="font-inter text-cosmos-muted leading-relaxed text-base">
                  {env.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
