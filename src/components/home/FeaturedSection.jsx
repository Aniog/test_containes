import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredItems = [
  { id: 'feat-1', imgId: 'featured-img-g7h8i9', titleId: 'feat-title-1', descId: 'feat-desc-1', title: 'Crystal Lattice', desc: 'Salt crystal formations under polarized light microscopy', ratio: '3x4', width: 600 },
  { id: 'feat-2', imgId: 'featured-img-j1k2l3', titleId: 'feat-title-2', descId: 'feat-desc-2', title: 'Pollen Grains', desc: 'Scanning electron microscope image of flower pollen', ratio: '3x4', width: 600 },
  { id: 'feat-3', imgId: 'featured-img-m4n5o6', titleId: 'feat-title-3', descId: 'feat-desc-3', title: 'Butterfly Wing', desc: 'Iridescent scales of a morpho butterfly wing at 40x magnification', ratio: '3x4', width: 600 },
  { id: 'feat-4', imgId: 'featured-img-p7q8r9', titleId: 'feat-title-4', descId: 'feat-desc-4', title: 'Diatom Shell', desc: 'Silica frustule of a centric diatom under SEM', ratio: '3x4', width: 600 },
  { id: 'feat-5', imgId: 'featured-img-s1t2u3', titleId: 'feat-title-5', descId: 'feat-desc-5', title: 'Coral Skeleton', desc: 'Calcium carbonate skeleton of a brain coral colony', ratio: '3x4', width: 600 },
  { id: 'feat-6', imgId: 'featured-img-v4w5x6', titleId: 'feat-title-6', descId: 'feat-desc-6', title: 'Neuron Axon', desc: 'Myelinated axon bundle stained with fluorescent markers', ratio: '3x4', width: 600 },
];

const FeaturedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 lg:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Featured Works</p>
            <h2 id="featured-section-title" className="font-light tracking-[0.15em] uppercase text-white text-3xl lg:text-4xl">
              Selected<br />Specimens
            </h2>
          </div>
          <p id="featured-section-desc" className="font-light text-neutral-500 text-sm max-w-xs leading-relaxed">
            Handpicked images from our collection of microscopic and macro photography
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [featured-section-desc] [featured-section-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              </div>
              <div className="pt-3 pb-2">
                <p id={item.titleId} className="font-light tracking-widest uppercase text-white text-xs mb-1">{item.title}</p>
                <p id={item.descId} className="text-xs text-neutral-600 leading-relaxed hidden md:block">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
