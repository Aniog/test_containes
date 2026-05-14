import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const phenomena = [
  {
    titleId: 'phen-title-1',
    subtitleId: 'phen-sub-1',
    imgId: 'phen-img-v4w5x6',
    title: 'Aurora Borealis',
    subtitle: 'Ribbons of green, violet, and pink light dance across polar skies in a celestial display.',
    icon: '🌌',
    ratio: '4x3',
    width: 700,
  },
  {
    titleId: 'phen-title-2',
    subtitleId: 'phen-sub-2',
    imgId: 'phen-img-y7z8a9',
    title: 'Rainbow Arc',
    subtitle: 'After the rain, sunlight refracts through droplets to paint a perfect arc of color.',
    icon: '🌈',
    ratio: '4x3',
    width: 700,
  },
  {
    titleId: 'phen-title-3',
    subtitleId: 'phen-sub-3',
    imgId: 'phen-img-b1c2d3',
    title: 'Lightning Storm',
    subtitle: 'Bolts of electricity illuminate the night sky in a spectacular natural light show.',
    icon: '⚡',
    ratio: '4x3',
    width: 700,
  },
  {
    titleId: 'phen-title-4',
    subtitleId: 'phen-sub-4',
    imgId: 'phen-img-e4f5g6',
    title: 'Crepuscular Rays',
    subtitle: 'Sunbeams pierce through clouds, casting dramatic shafts of golden light earthward.',
    icon: '✨',
    ratio: '4x3',
    width: 700,
  },
];

const PhenomenaSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="phenomena" className="bg-[#0c1a2e] py-20 md:py-28 px-4 md:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p id="phen-label" className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Nature's Spectacles
          </p>
          <h2 id="phen-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sky Phenomena
          </h2>
          <p className="text-sky-300 text-lg max-w-2xl mx-auto">
            Rare and breathtaking events that remind us how extraordinary our atmosphere truly is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phenomena.map((item) => (
            <div key={item.imgId} className="group relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.subtitleId}] [${item.titleId}] [phen-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-[#0c1a2e]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 id={item.titleId} className="text-white font-bold text-2xl">{item.title}</h3>
                </div>
                <p id={item.subtitleId} className="text-sky-200 text-sm leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhenomenaSection;
