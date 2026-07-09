import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bannerImages = [
  {
    id: 'banner-fungi',
    title: 'Fungal Hyphae',
    desc: 'Network of microscopic fungal threads forming mycelium underground',
    imgId: 'banner-fungi-4b7e2a',
    titleId: 'banner-fungi-title',
    descId: 'banner-fungi-desc',
  },
  {
    id: 'banner-plankton',
    title: 'Marine Plankton',
    desc: 'Bioluminescent plankton glowing blue in dark ocean water',
    imgId: 'banner-plankton-8c3f1d',
    titleId: 'banner-plankton-title',
    descId: 'banner-plankton-desc',
  },
  {
    id: 'banner-mineral',
    title: 'Mineral Thin Section',
    desc: 'Colorful polarized light microscopy of rock mineral crystals',
    imgId: 'banner-mineral-2d9a6e',
    titleId: 'banner-mineral-title',
    descId: 'banner-mineral-desc',
  },
];

const BannerSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 bg-cosmos-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bannerImages.map((item) => (
            <div key={item.id} className="relative h-48 md:h-64 rounded-2xl overflow-hidden border border-cosmos-border group">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cosmos-dark/40 group-hover:bg-cosmos-dark/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4">
                <h3 id={item.titleId} className="text-cosmos-text font-semibold text-sm">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-xs">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
