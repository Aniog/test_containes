import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'tardigrade',
    title: 'Water Bear',
    desc: 'The resilient Tardigrade survivng extreme conditions.',
    width: '600',
    ratio: '1x1'
  },
  {
    id: 'diatom',
    title: 'Radiolarian Shells',
    desc: 'Intricate silica structures of single-celled organisms.',
    width: '800',
    ratio: '4x3'
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    desc: 'The iridescent photonic crystals creating brilliant colors.',
    width: '600',
    ratio: '1x1'
  },
  {
    id: 'snowflake',
    title: 'Atmospheric Ice',
    desc: 'Unique hexagonal molecular patterns of a single snowflake.',
    width: '600',
    ratio: '1x1'
  },
  {
    id: 'plant-cell',
    title: 'Chloroplasts',
    desc: 'The green engines of energy inside a plant cell leaf.',
    width: '800',
    ratio: '3x2'
  },
  {
    id: 'neuronal-net',
    title: 'Synaptic Paths',
    desc: 'Electrical signals traveling through a network of neurons.',
    width: '600',
    ratio: '1x1'
  }
];

const ImageGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-[#121216]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-main-title" className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            Microscopic <span className="text-cyan-400">Masterpieces</span>
          </h2>
          <p id="gallery-main-subtitle" className="text-slate-400 max-w-2xl mx-auto text-lg">
            A visual symphony of structures and life forms that exist just beyond our perception.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0c] break-inside-avoid shadow-lg"
            >
              <img 
                data-strk-img-id={`gallery-item-${item.id}`}
                data-strk-img={`[gallery-item-title-${item.id}] [gallery-item-desc-${item.id}] [gallery-main-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 
                  id={`gallery-item-title-${item.id}`}
                  className="text-xl font-bold text-slate-50 mb-1"
                >
                  {item.title}
                </h3>
                <p 
                  id={`gallery-item-desc-${item.id}`}
                  className="text-slate-400 text-sm"
                >
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

export default ImageGallery;
