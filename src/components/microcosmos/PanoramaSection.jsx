import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const panoramaImages = [
  {
    id: 'pan-title-01',
    imgId: 'pan-img-c1d2e3',
    title: 'Ocean Plankton',
    subtitle: 'The foundation of marine food chains',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'pan-title-02',
    imgId: 'pan-img-f4g5h6',
    title: 'Soil Microbiome',
    subtitle: 'A teaspoon of soil contains billions of microorganisms',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'pan-title-03',
    imgId: 'pan-img-i7j8k9',
    title: 'Crystal Formations',
    subtitle: 'Mineral crystals grown under polarized light',
    ratio: '16x9',
    width: 800,
  },
];

const PanoramaSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent text-xs uppercase tracking-widest font-semibold mb-3 font-grotesk">
            Immersive Views
          </p>
          <h2
            id="pan-section-title"
            className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-text mb-4"
          >
            Worlds Within Worlds
          </h2>
          <p id="pan-section-desc" className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            Wide-field microscopy reveals entire ecosystems invisible to the naked eye.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {panoramaImages.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-cosmos-border aspect-[16/6] md:aspect-[16/5]"
            >
              <img
                id={item.id}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}] [pan-section-desc] [pan-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg/80 via-cosmos-bg/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center pl-8 md:pl-14">
                <h3 className="font-grotesk font-bold text-2xl md:text-3xl text-cosmos-text mb-2">{item.title}</h3>
                <p className="text-cosmos-muted text-sm md:text-base max-w-xs">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanoramaSection;
