import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-front',
    titleId: 'gal-front-title',
    descId: 'gal-front-desc',
    imgId: 'gal-front-img-a1b2c3',
    title: 'Front View',
    desc: 'APPLE mini front panel with USB-C port',
    span: 'col-span-2 row-span-2',
    ratio: '1x1',
    width: '800',
  },
  {
    id: 'gal-side',
    titleId: 'gal-side-title',
    descId: 'gal-side-desc',
    imgId: 'gal-side-img-d4e5f6',
    title: 'Side Profile',
    desc: 'Ultra-thin aluminum side profile of mini PC',
    span: 'col-span-1 row-span-1',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-desk',
    titleId: 'gal-desk-title',
    descId: 'gal-desk-desc',
    imgId: 'gal-desk-img-g7h8i9',
    title: 'Desk Setup',
    desc: 'APPLE mini on a clean minimal desk setup with monitor',
    span: 'col-span-1 row-span-1',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-ports',
    titleId: 'gal-ports-title',
    descId: 'gal-ports-desc',
    imgId: 'gal-ports-img-j1k2l3',
    title: 'Rear Ports',
    desc: 'Thunderbolt and HDMI ports on the back of mini PC',
    span: 'col-span-1 row-span-1',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-black',
    titleId: 'gal-black-title',
    descId: 'gal-black-desc',
    imgId: 'gal-black-img-m4n5o6',
    title: 'Space Black',
    desc: 'Space Black finish APPLE mini on dark surface',
    span: 'col-span-1 row-span-1',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-open',
    titleId: 'gal-open-title',
    descId: 'gal-open-desc',
    imgId: 'gal-open-img-p7q8r9',
    title: 'Inside the Machine',
    desc: 'Internal components and M4 chip architecture',
    span: 'col-span-2 row-span-1',
    ratio: '16x9',
    width: '800',
  },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-32 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Gallery</span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Every angle, perfected
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Precision-crafted from every perspective. Tap any image to explore.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className={`${item.span} relative overflow-hidden rounded-2xl bg-gray-800 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p id={item.titleId} className="text-white font-semibold text-sm">{item.title}</p>
                <p id={item.descId} className="text-gray-300 text-xs mt-0.5">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                alt={lightbox.title}
                data-strk-img-id={`${lightbox.imgId}-lb`}
                data-strk-img={`[${lightbox.descId}] [${lightbox.titleId}] [gallery-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover"
              />
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{lightbox.title}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{lightbox.desc}</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl leading-none ml-4"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
