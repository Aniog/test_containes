import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const environments = [
  {
    id: 'env-ocean',
    titleId: 'env-ocean-title',
    descId: 'env-ocean-desc',
    imgId: 'env-img-ocean-e4f5g6',
    title: 'Deep Ocean',
    desc: 'Bioluminescent microbes illuminate the abyss, thriving under crushing pressure and total darkness.',
  },
  {
    id: 'env-soil',
    titleId: 'env-soil-title',
    descId: 'env-soil-desc',
    imgId: 'env-img-soil-h7i8j9',
    title: 'Forest Soil',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth.',
  },
  {
    id: 'env-hotspring',
    titleId: 'env-hotspring-title',
    descId: 'env-hotspring-desc',
    imgId: 'env-img-hotspring-k1l2m3',
    title: 'Hot Springs',
    desc: 'Thermophilic archaea thrive in boiling acidic waters, painting geothermal pools in vivid colors.',
  },
  {
    id: 'env-ice',
    titleId: 'env-ice-title',
    descId: 'env-ice-desc',
    imgId: 'env-img-ice-n4o5p6',
    title: 'Arctic Ice',
    desc: 'Psychrophilic bacteria survive in frozen glaciers, metabolizing at temperatures far below zero.',
  },
];

const EnvironmentsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Habitats</span>
          <h2 id="env-title" className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Everywhere on Earth
          </h2>
          <p id="env-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Microorganisms colonize every corner of our planet — from the deepest ocean trenches to the highest mountain peaks.
          </p>
        </div>

        {/* Environment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {environments.map((env) => (
            <div
              key={env.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
            >
              <div className="aspect-[3x4] relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  alt={env.title}
                  data-strk-img-id={env.imgId}
                  data-strk-img={`[${env.descId}] [${env.titleId}] [env-subtitle] [env-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={env.titleId} className="font-space text-lg font-bold text-white mb-2">{env.title}</h3>
                <p id={env.descId} className="text-gray-300 text-sm leading-relaxed">{env.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
