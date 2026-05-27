import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-1', imgId: 'gallery-img-a1b2c3', title: 'Diatom Algae', category: 'Algae', ratio: '1x1', width: 600, span: 'col-span-1 row-span-2' },
  { id: 'gal-2', imgId: 'gallery-img-d4e5f6', title: 'Fluorescent Neuron', category: 'Cells', ratio: '3x2', width: 800, span: 'col-span-2 row-span-1' },
  { id: 'gal-3', imgId: 'gallery-img-g7h8i9', title: 'Pollen Grain', category: 'Plants', ratio: '1x1', width: 500, span: 'col-span-1 row-span-1' },
  { id: 'gal-4', imgId: 'gallery-img-j0k1l2', title: 'Tardigrade', category: 'Micro-animals', ratio: '3x2', width: 700, span: 'col-span-1 row-span-1' },
  { id: 'gal-5', imgId: 'gallery-img-m3n4o5', title: 'Ice Crystal', category: 'Crystals', ratio: '1x1', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'gal-6', imgId: 'gallery-img-p6q7r8', title: 'E. coli Bacteria', category: 'Bacteria', ratio: '3x2', width: 800, span: 'col-span-2 row-span-1' },
  { id: 'gal-7', imgId: 'gallery-img-s9t0u1', title: 'Butterfly Wing Scale', category: 'Insects', ratio: '1x1', width: 500, span: 'col-span-1 row-span-1' },
  { id: 'gal-8', imgId: 'gallery-img-v2w3x4', title: 'Mitosis Cell Division', category: 'Cells', ratio: '1x1', width: 600, span: 'col-span-1 row-span-2' },
  { id: 'gal-9', imgId: 'gallery-img-y5z6a7', title: 'Aspergillus Spores', category: 'Fungi', ratio: '3x2', width: 700, span: 'col-span-1 row-span-1' },
  { id: 'gal-10', imgId: 'gallery-img-b8c9d0', title: 'Vitamin C Crystal', category: 'Crystals', ratio: '1x1', width: 500, span: 'col-span-1 row-span-1' },
  { id: 'gal-11', imgId: 'gallery-img-e1f2g3', title: 'Red Blood Cells', category: 'Cells', ratio: '3x2', width: 800, span: 'col-span-2 row-span-1' },
  { id: 'gal-12', imgId: 'gallery-img-h4i5j6', title: 'Dust Mite', category: 'Micro-animals', ratio: '1x1', width: 600, span: 'col-span-1 row-span-1' },
];

const GalleryGrid = () => {
  const containerRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
            onClick={() => setLightbox(item)}
          >
            <img
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.id}-title] microscopy scientific`}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width={item.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-microbg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <span className="text-microteal text-xs font-semibold uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 id={`${item.id}-title`} className="font-display font-semibold text-microtext text-sm leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-microbg/70 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-microteal" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-microbg/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-microsurface border border-microborder rounded-full flex items-center justify-center text-micromuted hover:text-microtext transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-4xl w-full bg-microsurface border border-microborder rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh]">
              <img
                alt={lightbox.title}
                className="w-full h-full object-cover"
                data-strk-img-id={`${lightbox.imgId}-lb`}
                data-strk-img={`[lb-title] microscopy scientific`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-6">
              <span className="text-microteal text-xs font-semibold uppercase tracking-wider">
                {lightbox.category}
              </span>
              <h2 id="lb-title" className="font-display font-bold text-2xl text-microtext mt-1">
                {lightbox.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
