import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 'gal-dragon-close',
    titleId: 'gal-title-dragon-close',
    descId: 'gal-desc-dragon-close',
    imgId: 'gal-img-dragon-close-e1f2g3',
    title: 'Komodo Dragon Up Close',
    desc: 'A Komodo dragon basking in the sun on Komodo Island',
    ratio: '4x3',
    width: '800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-padar-view',
    titleId: 'gal-title-padar-view',
    descId: 'gal-desc-padar-view',
    imgId: 'gal-img-padar-view-h4i5j6',
    title: 'Padar Island Panorama',
    desc: 'Aerial view of Padar Island with three colored bays in Komodo National Park',
    ratio: '16x9',
    width: '1200',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-pink-beach',
    titleId: 'gal-title-pink-beach',
    descId: 'gal-desc-pink-beach',
    imgId: 'gal-img-pink-beach-k7l8m9',
    title: 'Pink Beach Shoreline',
    desc: 'The famous pink sand beach of Komodo with turquoise water',
    ratio: '4x3',
    width: '800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-manta-ray',
    titleId: 'gal-title-manta-ray',
    descId: 'gal-desc-manta-ray',
    imgId: 'gal-img-manta-ray-n1o2p3',
    title: 'Manta Ray Encounter',
    desc: 'Snorkeling with manta rays at Manta Point in Komodo waters',
    ratio: '4x3',
    width: '800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-sunset-boat',
    titleId: 'gal-title-sunset-boat',
    descId: 'gal-desc-sunset-boat',
    imgId: 'gal-img-sunset-boat-q4r5s6',
    title: 'Sunset on the Flores Sea',
    desc: 'Traditional wooden boat sailing at sunset near Labuan Bajo Komodo',
    ratio: '16x9',
    width: '1200',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-coral-reef',
    titleId: 'gal-title-coral-reef',
    descId: 'gal-desc-coral-reef',
    imgId: 'gal-img-coral-reef-t7u8v9',
    title: 'Vibrant Coral Reef',
    desc: 'Colorful coral reef underwater in Komodo National Park',
    ratio: '4x3',
    width: '800',
    span: 'col-span-1 row-span-1',
  },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [lightboxIndex]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % galleryItems.length);

  const current = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <section id="gallery" ref={containerRef} className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-coral text-sm font-semibold tracking-widest uppercase">Visual Journey</span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-ocean mt-3 mb-5">
            Komodo in Pictures
          </h2>
          <p className="text-stone/70 text-lg max-w-xl mx-auto">
            A glimpse into the extraordinary landscapes and wildlife that make Komodo unforgettable.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${item.span}`}
              onClick={() => openLightbox(index)}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 id={item.titleId} className="text-white font-serif font-semibold text-base leading-tight">
                    {item.title}
                  </h4>
                  <p id={item.descId} className="text-white/80 text-xs mt-1 hidden">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-transparent border-none cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-transparent border-none cursor-pointer"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={current.title}
              data-strk-img-id={`lightbox-${current.imgId}`}
              data-strk-img={`[${current.descId}] [${current.titleId}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-xl object-cover max-h-[70vh]"
            />
            <p className="text-white/80 text-center mt-4 font-serif text-lg">{current.title}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-transparent border-none cursor-pointer"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
