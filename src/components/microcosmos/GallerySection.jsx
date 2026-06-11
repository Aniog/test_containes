import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 'gal-01',
    imgId: 'gallery-img-mc001',
    titleId: 'gallery-title-mc001',
    descId: 'gallery-desc-mc001',
    title: 'Diatom Silica Shell',
    desc: 'Intricate silica shells of diatoms under electron microscope',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-02',
    imgId: 'gallery-img-mc002',
    titleId: 'gallery-title-mc002',
    descId: 'gallery-desc-mc002',
    title: 'Pollen Grain Surface',
    desc: 'Colorized scanning electron microscope image of pollen grain',
    ratio: '3x2',
    width: '800',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-03',
    imgId: 'gallery-img-mc003',
    titleId: 'gallery-title-mc003',
    descId: 'gallery-desc-mc003',
    title: 'Tardigrade Water Bear',
    desc: 'Tardigrade water bear microscopy, the most resilient animal on Earth',
    ratio: '3x2',
    width: '800',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-04',
    imgId: 'gallery-img-mc004',
    titleId: 'gallery-title-mc004',
    descId: 'gallery-desc-mc004',
    title: 'Snowflake Crystal',
    desc: 'Macro photography of snowflake ice crystal symmetry',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-05',
    imgId: 'gallery-img-mc005',
    titleId: 'gallery-title-mc005',
    descId: 'gallery-desc-mc005',
    title: 'Neuron Network',
    desc: 'Fluorescent microscopy of neural network brain cells',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-06',
    imgId: 'gallery-img-mc006',
    titleId: 'gallery-title-mc006',
    descId: 'gallery-desc-mc006',
    title: 'Butterfly Wing Scale',
    desc: 'Microscopic scales on butterfly wing creating iridescent color',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Visual Archive
          </p>
          <h2
            id="gallery-section-title"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Gallery of the Unseen
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of microscopic imagery — each frame a window into a world that exists all around us, yet remains invisible to the naked eye.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300`}
              onClick={() => setSelected(item)}
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3
                  id={item.titleId}
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-300 text-xs mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <div className="absolute top-3 right-3 bg-gray-950/60 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-gray-950/80 rounded-full p-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                data-strk-img-id={`lightbox-${selected.imgId}`}
                data-strk-img={`[lightbox-desc-${selected.id}] [lightbox-title-${selected.id}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selected.title}
                className="w-full object-cover max-h-[70vh]"
              />
              <div className="p-6">
                <h3
                  id={`lightbox-title-${selected.id}`}
                  className="text-white text-xl font-bold mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {selected.title}
                </h3>
                <p id={`lightbox-desc-${selected.id}`} className="text-gray-400 text-sm">
                  {selected.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
