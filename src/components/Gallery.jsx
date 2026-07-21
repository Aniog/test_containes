import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-01', imgId: 'gallery-img-mc-01',
    titleId: 'gal-title-01', descId: 'gal-desc-01',
    title: 'Diatom Algae', desc: 'Intricate silica shells of single-celled algae',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-02', imgId: 'gallery-img-mc-02',
    titleId: 'gal-title-02', descId: 'gal-desc-02',
    title: 'Tardigrade', desc: 'Water bear microscopic animal extreme survival',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'gal-03', imgId: 'gallery-img-mc-03',
    titleId: 'gal-title-03', descId: 'gal-desc-03',
    title: 'Pollen Grain', desc: 'Colorful pollen grain under electron microscope',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-04', imgId: 'gallery-img-mc-04',
    titleId: 'gal-title-04', descId: 'gal-desc-04',
    title: 'Radiolarian', desc: 'Geometric skeleton of ocean radiolarian protozoa',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-05', imgId: 'gallery-img-mc-05',
    titleId: 'gal-title-05', descId: 'gal-desc-05',
    title: 'Bacteria Colony', desc: 'Colorful bacteria colony culture petri dish',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-06', imgId: 'gallery-img-mc-06',
    titleId: 'gal-title-06', descId: 'gal-desc-06',
    title: 'Snowflake Crystal', desc: 'Macro snowflake ice crystal symmetry',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-07', imgId: 'gallery-img-mc-07',
    titleId: 'gal-title-07', descId: 'gal-desc-07',
    title: 'Mold Spores', desc: 'Fungal mold spores microscopy colorful',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-08', imgId: 'gallery-img-mc-08',
    titleId: 'gal-title-08', descId: 'gal-desc-08',
    title: 'Paramecium', desc: 'Paramecium ciliate protozoa swimming pond water',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-navy py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-cosmos-teal mb-4">
            Visual Gallery
          </p>
          <h2
            id="gallery-section-title"
            className="text-4xl md:text-5xl font-bold text-cosmos-light mb-4"
          >
            Microscopic Masterpieces
          </h2>
          <p id="gallery-section-desc" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Every image is a window into a world invisible to the naked eye — where geometry, color, and life converge in stunning detail.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative group overflow-hidden rounded-2xl border border-cosmos-border hover:border-cosmos-teal/50 transition-all duration-300 cursor-pointer`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc] [gallery-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-cosmos-light font-bold text-sm">{item.title}</h3>
                <p id={item.descId} className="text-cosmos-muted text-xs mt-1 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
