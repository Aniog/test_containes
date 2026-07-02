import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-01',
    imgId: 'gallery-img-01-aa1bb2',
    titleId: 'gallery-title-01',
    descId: 'gallery-desc-01',
    title: 'Diatom Colony',
    desc: 'Microscopic algae with intricate silica shells',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-02',
    imgId: 'gallery-img-02-cc3dd4',
    titleId: 'gallery-title-02',
    descId: 'gallery-desc-02',
    title: 'Neuron Network',
    desc: 'Fluorescent staining of brain nerve cells',
    ratio: '3x2',
    width: '900',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-03',
    imgId: 'gallery-img-03-ee5ff6',
    titleId: 'gallery-title-03',
    descId: 'gallery-desc-03',
    title: 'Pollen Grain',
    desc: 'Electron microscopy of flower pollen surface',
    ratio: '3x2',
    width: '900',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-04',
    imgId: 'gallery-img-04-gg7hh8',
    titleId: 'gallery-title-04',
    descId: 'gallery-desc-04',
    title: 'Salt Crystal',
    desc: 'Polarized light reveals cubic crystal lattice',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-05',
    imgId: 'gallery-img-05-ii9jj0',
    titleId: 'gallery-title-05',
    descId: 'gallery-desc-05',
    title: 'Red Blood Cells',
    desc: 'Scanning electron microscopy of erythrocytes',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-06',
    imgId: 'gallery-img-06-kk1ll2',
    titleId: 'gallery-title-06',
    descId: 'gallery-desc-06',
    title: 'Tardigrade',
    desc: 'Water bear — the most resilient animal on Earth',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-07',
    imgId: 'gallery-img-07-mm3nn4',
    titleId: 'gallery-title-07',
    descId: 'gallery-desc-07',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructures that create iridescent color',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-08',
    imgId: 'gallery-img-08-oo5pp6',
    titleId: 'gallery-title-08',
    descId: 'gallery-desc-08',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice crystal under dark-field microscopy',
    ratio: '3x2',
    width: '900',
    span: 'col-span-2 row-span-1',
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-36 bg-[#0a1520]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400 mb-4">
            Visual Archive
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            The Gallery
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of microscopic imagery — each frame a window into a universe invisible to the naked eye.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-cyan-900/30 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-all duration-500 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-[#050a0f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                <h4 id={item.titleId} className="text-white font-bold text-base mb-1">
                  {item.title}
                </h4>
                <p id={item.descId} className="text-[#7fb3c8] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
              {/* Always-visible title for non-hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050a0f]/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-white text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
