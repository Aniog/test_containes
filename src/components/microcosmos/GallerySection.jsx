import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-pollen',
    imgId: 'gallery-img-pollen-a1b2c3',
    titleId: 'gallery-title-pollen',
    descId: 'gallery-desc-pollen',
    title: 'Pollen Grain',
    desc: 'Scanning electron microscope view of flower pollen',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1',
  },
  {
    id: 'gal-diatom',
    imgId: 'gallery-img-diatom-d4e5f6',
    titleId: 'gallery-title-diatom',
    descId: 'gallery-desc-diatom',
    title: 'Diatom Shell',
    desc: 'Intricate silica shell of a marine diatom microorganism',
    ratio: '4x3',
    width: '900',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'gal-snowflake',
    imgId: 'gallery-img-snowflake-g7h8i9',
    titleId: 'gallery-title-snowflake',
    descId: 'gallery-desc-snowflake',
    title: 'Snowflake Crystal',
    desc: 'Macro photograph of a perfect hexagonal ice crystal snowflake',
    ratio: '4x3',
    width: '900',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'gal-neuron',
    imgId: 'gallery-img-neuron-j1k2l3',
    titleId: 'gallery-title-neuron',
    descId: 'gallery-desc-neuron',
    title: 'Neuron Network',
    desc: 'Fluorescent microscopy of interconnected brain neurons',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1',
  },
  {
    id: 'gal-butterfly',
    imgId: 'gallery-img-butterfly-m4n5o6',
    titleId: 'gallery-title-butterfly',
    descId: 'gallery-desc-butterfly',
    title: 'Butterfly Wing Scale',
    desc: 'Microscopic scales on a butterfly wing creating iridescent color',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1',
  },
  {
    id: 'gal-salt',
    imgId: 'gallery-img-salt-p7q8r9',
    titleId: 'gallery-title-salt',
    descId: 'gallery-desc-salt',
    title: 'Salt Crystal',
    desc: 'Cubic sodium chloride crystals under polarized light microscopy',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1',
  },
  {
    id: 'gal-tardigrade',
    imgId: 'gallery-img-tardigrade-s1t2u3',
    titleId: 'gallery-title-tardigrade',
    descId: 'gallery-desc-tardigrade',
    title: 'Tardigrade',
    desc: 'Water bear — the most resilient microscopic animal on Earth',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1',
  },
  {
    id: 'gal-blood',
    imgId: 'gallery-img-blood-v4w5x6',
    titleId: 'gallery-title-blood',
    descId: 'gallery-desc-blood',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary vessel',
    ratio: '4x3',
    width: '900',
    span: 'col-span-1 md:col-span-2',
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-violet text-xs font-semibold uppercase tracking-widest">
            Visual Archive
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            The Microscopy Gallery
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stunning images captured through electron microscopes, confocal
            lasers, and polarized light — the hidden beauty of our world.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cosmos-violet/40 to-transparent mb-12" />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-cosmos-card border border-white/5 hover:border-cosmos-cyan/30 transition-all duration-300 hover:shadow-xl hover:shadow-cosmos-cyan/5 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: item.ratio === '1x1' ? '1/1' : '4/3' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 id={item.titleId} className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-300 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
              {/* Always-visible title for non-hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cosmos-deep/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
