import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const GALLERY_ITEMS = [
  { id: 'gal-img-p7q8r9', titleId: 'gal-title-1', descId: 'gal-desc-1', title: 'Diatom Colony', desc: 'Marine microalgae with silica shells', span: 'md:col-span-2 md:row-span-2', ratio: '1x1', width: 800 },
  { id: 'gal-img-s1t2u3', titleId: 'gal-title-2', descId: 'gal-desc-2', title: 'Pollen Grain', desc: 'Sunflower pollen under electron microscope', span: '', ratio: '1x1', width: 400 },
  { id: 'gal-img-v4w5x6', titleId: 'gal-title-3', descId: 'gal-desc-3', title: 'Tardigrade', desc: 'Water bear, the most resilient animal', span: '', ratio: '1x1', width: 400 },
  { id: 'gal-img-y7z8a9', titleId: 'gal-title-4', descId: 'gal-desc-4', title: 'Butterfly Wing Scale', desc: 'Iridescent nanostructures creating color', span: 'md:col-span-2', ratio: '16x9', width: 800 },
  { id: 'gal-img-b1c2d3', titleId: 'gal-title-5', descId: 'gal-desc-5', title: 'Snowflake Crystal', desc: 'Ice crystal formation at -15°C', span: '', ratio: '1x1', width: 400 },
  { id: 'gal-img-e4f5g6', titleId: 'gal-title-6', descId: 'gal-desc-6', title: 'Red Blood Cells', desc: 'Human erythrocytes in plasma', span: '', ratio: '1x1', width: 400 },
  { id: 'gal-img-h7i8j9', titleId: 'gal-title-7', descId: 'gal-desc-7', title: 'Neuron Network', desc: 'Fluorescent neurons forming synaptic connections', span: 'md:col-span-3', ratio: '16x9', width: 1200 },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-neutral-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-3">Visual Archive</p>
          <h2 id="gallery-heading" className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none mb-4">
            The Gallery
          </h2>
          <p id="gallery-subheading" className="text-neutral-400 text-base max-w-xl mx-auto leading-relaxed">
            A curated collection of microscopic imagery — each frame a window into a world invisible to the naked eye.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-neutral-900 ${item.span}`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subheading] [gallery-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-5">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 id={item.titleId} className="text-white font-bold text-base">{item.title}</h3>
                  <p id={item.descId} className="text-neutral-300 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
              {/* Always-visible title for screen readers / img context */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
