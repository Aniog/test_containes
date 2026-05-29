import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const galleryFilters = ['All', 'Peaks', 'Glaciers', 'Wildlife', 'Sunsets', 'Winter'];

const photos = [
  { id: 'gal-1', title: 'Himalayan Sunrise', tag: 'Peaks', span: 'col-span-2', imgId: 'gal-1-img-k1l2', ratio: '16x9', width: 900 },
  { id: 'gal-2', title: 'Alpine Ibex', tag: 'Wildlife', span: '', imgId: 'gal-2-img-l2m3', ratio: '4x3', width: 500 },
  { id: 'gal-3', title: 'Glacier Crevasse', tag: 'Glaciers', span: '', imgId: 'gal-3-img-m3n4', ratio: '4x3', width: 500 },
  { id: 'gal-4', title: 'Matterhorn at Dusk', tag: 'Sunsets', span: '', imgId: 'gal-4-img-n4o5', ratio: '4x3', width: 500 },
  { id: 'gal-5', title: 'Powder Descent', tag: 'Winter', span: '', imgId: 'gal-5-img-o5p6', ratio: '4x3', width: 500 },
  { id: 'gal-6', title: 'K2 North Face', tag: 'Peaks', span: 'col-span-2', imgId: 'gal-6-img-p6q7', ratio: '16x9', width: 900 },
  { id: 'gal-7', title: 'Snow Leopard', tag: 'Wildlife', span: '', imgId: 'gal-7-img-q7r8', ratio: '4x3', width: 500 },
  { id: 'gal-8', title: 'Frozen Waterfall', tag: 'Winter', span: '', imgId: 'gal-8-img-r8s9', ratio: '4x3', width: 500 },
  { id: 'gal-9', title: 'Alpenglow on Mont Blanc', tag: 'Sunsets', span: '', imgId: 'gal-9-img-s9t0', ratio: '4x3', width: 500 },
  { id: 'gal-10', title: 'Retreating Glacier', tag: 'Glaciers', span: '', imgId: 'gal-10-img-t0u1', ratio: '4x3', width: 500 },
  { id: 'gal-11', title: 'Denali in Winter', tag: 'Winter', span: 'col-span-2', imgId: 'gal-11-img-u1v2', ratio: '16x9', width: 900 },
  { id: 'gal-12', title: 'Golden Eagle in Flight', tag: 'Wildlife', span: '', imgId: 'gal-12-img-v2w3', ratio: '4x3', width: 500 },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeFilter]);

  const filtered = activeFilter === 'All'
    ? photos
    : photos.filter((p) => p.tag === activeFilter);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="gal-hero-bg-w3x4"
          data-strk-bg="[gal-hero-subtitle] [gal-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-peak/65" />
        <div className="relative z-10 text-center px-4">
          <p id="gal-hero-subtitle" className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-3">
            Visual Stories
          </p>
          <h1 id="gal-hero-title" className="font-playfair font-bold text-4xl md:text-6xl text-white">
            Mountain Gallery
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-snow py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-peak text-white shadow-md'
                    : 'bg-white text-stone border border-glacier hover:border-alpine hover:text-peak'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${photo.span || ''}`}
                onClick={() => setLightbox(photo)}
              >
                <img
                  alt={photo.title}
                  data-strk-img-id={photo.imgId}
                  data-strk-img={`[${photo.id}-title]`}
                  data-strk-img-ratio={photo.ratio}
                  data-strk-img-width={photo.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-peak/0 group-hover:bg-peak/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-peak/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p id={`${photo.id}-title`} className="text-white text-sm font-semibold">{photo.title}</p>
                  <span className="text-glacier/80 text-xs">{photo.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-glacier transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={lightbox.title}
              data-strk-img-id={`${lightbox.imgId}-lb`}
              data-strk-img={`[${lightbox.id}-title]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full object-cover"
            />
            <div className="bg-peak p-4">
              <p className="text-white font-playfair font-semibold text-lg">{lightbox.title}</p>
              <p className="text-glacier/70 text-sm">{lightbox.tag}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
