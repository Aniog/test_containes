import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const Gallery = () => {
  const containerRef = useRef(null);

  const galleryItems = [
    { id: 'diatoms', title: 'Diatoms', category: 'Marine Life', desc: 'Symmetrical glass-like cell walls of golden algae.' },
    { id: 'crystals', title: 'Caffeine Crystals', category: 'Chemistry', desc: 'Polarized light reveals the geometric patterns of molecules.' },
    { id: 'pollen', title: 'Lily Pollen', category: 'Botany', desc: 'Intricate spikes and textures designed for travel.' },
    { id: 'neurons', title: 'Brain Neurons', category: 'Biology', desc: 'The interconnected lightning within a thinking mind.' },
    { id: 'waterbear', title: 'Tardigrade', category: 'Zoology', desc: 'The "Water Bear" — Earth\'s most indestructible organism.' },
    { id: 'butterfly', title: 'Butterfly Wing', category: 'Entomology', desc: 'Microscopic scales reflecting light into vibrant colors.' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="gallery-main-title" className="text-3xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">The Visual MicroCosmos</h2>
          <p id="gallery-main-subtitle" className="text-slate-400 text-lg font-light max-w-2xl mx-auto">Explore the stunning diversity and artistic geometry found at the smallest scales of our planet.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 transition-all hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={`gallery-${item.id}`}
                  data-strk-img={`[gallery-desc-${item.id}] [gallery-title-${item.id}] [gallery-main-title] Microscopic macro photography`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">{item.category}</span>
                <h3 id={`gallery-title-${item.id}`} className="text-xl font-bold text-slate-50 mt-2 mb-3">{item.title}</h3>
                <p id={`gallery-desc-${item.id}`} className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
