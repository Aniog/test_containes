import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-item-1',
    titleId: 'gallery-title-1',
    descId: 'gallery-desc-1',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells',
    imgId: 'gallery-img-g1h2i3',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gallery-item-2',
    titleId: 'gallery-title-2',
    descId: 'gallery-desc-2',
    title: 'Tardigrade',
    desc: 'The water bear — nearly indestructible microscopic animal',
    imgId: 'gallery-img-j4k5l6',
    ratio: '3x4',
    width: 600,
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'gallery-item-3',
    titleId: 'gallery-title-3',
    descId: 'gallery-desc-3',
    title: 'Radiolaria',
    desc: 'Single-celled organisms with stunning geometric mineral skeletons',
    imgId: 'gallery-img-m7n8o9',
    ratio: '16x9',
    width: 900,
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gallery-item-4',
    titleId: 'gallery-title-4',
    descId: 'gallery-desc-4',
    title: 'Pollen Grains',
    desc: 'Colorized scanning electron microscope image of pollen',
    imgId: 'gallery-img-p1q2r3',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gallery-item-5',
    titleId: 'gallery-title-5',
    descId: 'gallery-desc-5',
    title: 'Neuron Network',
    desc: 'Fluorescent microscopy of interconnected brain neurons',
    imgId: 'gallery-img-s4t5u6',
    ratio: '4x3',
    width: 800,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gallery-item-6',
    titleId: 'gallery-title-6',
    descId: 'gallery-desc-6',
    title: 'Spirulina',
    desc: 'Spiral-shaped cyanobacteria photographed under polarized light',
    imgId: 'gallery-img-v7w8x9',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cosmos-teal font-grotesk text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Visual Gallery
          </p>
          <h2
            id="gallery-section-title"
            className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Beauty at the
            <span className="bg-gradient-to-r from-cosmos-amber to-cosmos-teal bg-clip-text text-transparent"> Microscale</span>
          </h2>
          <p
            id="gallery-section-desc"
            className="font-inter text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Captured through electron microscopes and fluorescence imaging, these organisms reveal a world of breathtaking complexity.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              {/* Hidden text for image query context */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>

              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-grotesk font-semibold text-cosmos-text text-base mb-1">
                  {item.title}
                </h3>
                <p className="font-inter text-cosmos-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Corner badge */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cosmos-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(0,212,170,0.8)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
