import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 'gal-1',
    title: 'Diatom Symmetry',
    category: 'Algae',
    desc: 'Silica shells of diatoms forming perfect geometric patterns under polarized light',
    ratio: '1x1',
    width: '600',
    imgId: 'gallery-img-mc005',
    titleId: 'gallery-gal-1-title',
    descId: 'gallery-gal-1-desc',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-2',
    title: 'Neuron Network',
    category: 'Neuroscience',
    desc: 'Fluorescent neurons forming intricate networks in brain tissue',
    ratio: '3x2',
    width: '900',
    imgId: 'gallery-img-mc006',
    titleId: 'gallery-gal-2-title',
    descId: 'gallery-gal-2-desc',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Pollen Grains',
    category: 'Botany',
    desc: 'Colorized scanning electron microscope image of pollen grains',
    ratio: '1x1',
    width: '600',
    imgId: 'gallery-img-mc007',
    titleId: 'gallery-gal-3-title',
    descId: 'gallery-gal-3-desc',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Red Blood Cells',
    category: 'Hematology',
    desc: 'Biconcave red blood cells flowing through a capillary vessel',
    ratio: '1x1',
    width: '600',
    imgId: 'gallery-img-mc008',
    titleId: 'gallery-gal-4-title',
    descId: 'gallery-gal-4-desc',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Crystal Formation',
    category: 'Chemistry',
    desc: 'Vitamin C crystals photographed under polarized light microscopy',
    ratio: '3x2',
    width: '900',
    imgId: 'gallery-img-mc009',
    titleId: 'gallery-gal-5-title',
    descId: 'gallery-gal-5-desc',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Tardigrade',
    category: 'Extremophiles',
    desc: 'The water bear — most resilient creature on Earth, surviving in space',
    ratio: '1x1',
    width: '600',
    imgId: 'gallery-img-mc010',
    titleId: 'gallery-gal-6-title',
    descId: 'gallery-gal-6-desc',
    span: 'col-span-1 row-span-1',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase mb-3 block">
            Visual Archive
          </span>
          <h2 id="gallery-title" className="text-3xl md:text-5xl font-black text-cosmos-text mb-4">
            Microscopy Gallery
          </h2>
          <p id="gallery-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Stunning imagery captured through electron microscopes, confocal lasers, and polarized light — revealing beauty invisible to the naked eye.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative overflow-hidden rounded-2xl cursor-pointer border border-cosmos-teal/10 hover:border-cosmos-teal/40 transition-all duration-300`}
              onClick={() => setSelected(item)}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500 bg-cosmos-card"
                style={{ opacity: 0 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-semibold text-cosmos-teal tracking-widest uppercase">{item.category}</span>
                <h3 id={item.titleId} className="text-cosmos-text font-bold text-base mt-0.5">{item.title}</h3>
                <p id={item.descId} className="text-cosmos-muted text-xs mt-1 line-clamp-2">{item.desc}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cosmos-bg/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-cosmos-teal" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-cosmos-bg/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-cosmos-card rounded-2xl overflow-hidden border border-cosmos-teal/30 shadow-[0_0_60px_rgba(0,212,200,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                alt={selected.title}
                data-strk-img-id={`lightbox-${selected.imgId}`}
                data-strk-img={`[${selected.descId}] [${selected.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover bg-cosmos-surface"
                style={{ opacity: 0 }}
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-cosmos-teal tracking-widest uppercase">{selected.category}</span>
                <h3 className="text-cosmos-text font-bold text-xl mt-1 mb-2">{selected.title}</h3>
                <p className="text-cosmos-muted text-sm leading-relaxed">{selected.desc}</p>
              </div>
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cosmos-bg/80 text-cosmos-muted hover:text-cosmos-teal flex items-center justify-center text-lg font-bold border-0 transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
