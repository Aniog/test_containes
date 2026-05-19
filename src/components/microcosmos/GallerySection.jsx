import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-mc003',
    titleId: 'gal-title-1',
    title: 'Diatoms',
    subtitle: 'Silica-shelled algae',
    searchText: 'Diatoms silica-shelled algae microscopy colorful',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-mc004',
    titleId: 'gal-title-2',
    title: 'Tardigrade',
    subtitle: 'Water bear micro-animal',
    searchText: 'Tardigrade water bear microscopy extreme survival',
    ratio: '3x2',
    width: 900,
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-mc005',
    titleId: 'gal-title-3',
    title: 'Radiolaria',
    subtitle: 'Protozoan with mineral skeleton',
    searchText: 'Radiolaria protozoan mineral skeleton ocean microscopy',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-mc006',
    titleId: 'gal-title-4',
    title: 'Paramecium',
    subtitle: 'Ciliated protozoan',
    searchText: 'Paramecium ciliated protozoan swimming microscope colorful',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-mc007',
    titleId: 'gal-title-5',
    title: 'Pollen Grains',
    subtitle: 'Flowering plant reproduction',
    searchText: 'Colorful pollen grains microscopy flowering plants',
    ratio: '3x2',
    width: 900,
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-mc008',
    titleId: 'gal-title-6',
    title: 'Bacteria Colony',
    subtitle: 'Microbial community',
    searchText: 'Bacteria colony culture petri dish colorful microscopy',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              02 — Gallery
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Portraits of the<br />
              <span className="italic font-normal">Invisible</span>
            </h2>
          </div>
          <p className="font-body text-sm text-white/40 max-w-xs leading-relaxed">
            Each image captures a world that exists beyond the threshold of human vision, revealed through electron and light microscopy.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className={`group relative overflow-hidden bg-[#111] ${item.span}`}>
              <span id={item.titleId} className="sr-only">{item.searchText}</span>
              <img
                alt={item.title}
                className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-105 transition-transform duration-700"
                style={{ minHeight: '280px' }}
                data-strk-img-id={item.id}
                data-strk-img={`[${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <div>
                  <p className="font-display text-xl font-bold text-white">{item.title}</p>
                  <p className="font-body text-xs tracking-widest uppercase text-white/60 mt-1">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
