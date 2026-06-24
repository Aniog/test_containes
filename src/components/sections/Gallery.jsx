import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'item-1', title: 'Radiolarian Skeletons', desc: 'Symmetrical silicon structures of marine protozoa.' },
  { id: 'item-2', title: 'Chloroplasts', desc: 'The energy-producing factories within plant cells.' },
  { id: 'item-3', title: 'Bacteriophage', desc: 'Viral entities that look like lunar landers.' },
  { id: 'item-4', title: 'Snowflake Symmetry', desc: 'Unique ice crystals formed in the atmosphere.' },
  { id: 'item-5', title: 'Caffeine Crystals', desc: 'Molecular art through a polarized lens.' },
  { id: 'item-6', title: 'Butterfly Wing Scales', desc: 'Iridescent structures that create vivid colors.' },
  { id: 'item-7', title: 'Plant Stomata', desc: 'Breathing pores on the underside of leaves.' },
  { id: 'item-8', title: 'Diatoms', desc: 'Microscopic algae with intricate glass-like shells.' },
  { id: 'item-9', title: 'Neural Network', desc: 'The complex web of neurons within the brain.' },
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" className="py-24 px-4 bg-slate-950" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery of the Minute</h2>
          <p id="gallery-subtitle" className="text-slate-400 max-w-2xl mx-auto">A visual journey through the microscopic landscapes that surround us every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all hover:border-emerald-500/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  data-strk-img-id={`gallery-${item.id}`}
                  data-strk-img={`[gallery-item-desc-${item.id}] [gallery-item-title-${item.id}] microscopic`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 id={`gallery-item-title-${item.id}`} className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p id={`gallery-item-desc-${item.id}`} className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
