import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X } from 'lucide-react';

const galleryItems = [
  // Row 1 — wide + tall
  { id: 'g1', imgId: 'gal-img-q1r2s3', titleId: 'gal-t1', descId: 'gal-d1', title: 'Diatom Colony', desc: 'Marine microalgae with silica cell walls', ratio: '16x9', width: 900, span: 'md:col-span-2' },
  { id: 'g2', imgId: 'gal-img-t4u5v6', titleId: 'gal-t2', descId: 'gal-d2', title: 'Moth Eye', desc: 'Compound eye of a luna moth at 200x', ratio: '3x4', width: 500, span: 'md:col-span-1 md:row-span-2' },
  // Row 2
  { id: 'g3', imgId: 'gal-img-w7x8y9', titleId: 'gal-t3', descId: 'gal-d3', title: 'Quartz Crystal', desc: 'Rose quartz under cross-polarized light', ratio: '1x1', width: 500, span: 'md:col-span-1' },
  { id: 'g4', imgId: 'gal-img-z1a2b3', titleId: 'gal-t4', descId: 'gal-d4', title: 'Fern Spore', desc: 'Fern sporangia releasing spores', ratio: '1x1', width: 500, span: 'md:col-span-1' },
  // Row 3 — tall left
  { id: 'g5', imgId: 'gal-img-c4d5e6', titleId: 'gal-t5', descId: 'gal-d5', title: 'Spider Silk', desc: 'Orb weaver spider silk at 500x magnification', ratio: '3x4', width: 500, span: 'md:col-span-1 md:row-span-2' },
  { id: 'g6', imgId: 'gal-img-f7g8h9', titleId: 'gal-t6', descId: 'gal-d6', title: 'Snowflake', desc: 'Hexagonal ice crystal photographed at -15°C', ratio: '16x9', width: 900, span: 'md:col-span-2' },
  // Row 4
  { id: 'g7', imgId: 'gal-img-i1j2k3', titleId: 'gal-t7', descId: 'gal-d7', title: 'Tardigrade', desc: 'Water bear in cryptobiosis state', ratio: '1x1', width: 500, span: 'md:col-span-1' },
  { id: 'g8', imgId: 'gal-img-l4m5n6', titleId: 'gal-t8', descId: 'gal-d8', title: 'Pollen Burst', desc: 'Sunflower pollen grains, SEM image', ratio: '1x1', width: 500, span: 'md:col-span-1' },
  // Row 5 — full width
  { id: 'g9', imgId: 'gal-img-o7p8q9', titleId: 'gal-t9', descId: 'gal-d9', title: 'Butterfly Wing Scale', desc: 'Iridescent scales of a blue morpho butterfly', ratio: '16x9', width: 1200, span: 'md:col-span-3' },
  // Row 6
  { id: 'g10', imgId: 'gal-img-r1s2t3', titleId: 'gal-t10', descId: 'gal-d10', title: 'Coral Polyp', desc: 'Coral polyp tentacles under UV fluorescence', ratio: '3x4', width: 500, span: 'md:col-span-1' },
  { id: 'g11', imgId: 'gal-img-u4v5w6', titleId: 'gal-t11', descId: 'gal-d11', title: 'Salt Crystal', desc: 'Cubic halite crystal formation', ratio: '3x4', width: 500, span: 'md:col-span-1' },
  { id: 'g12', imgId: 'gal-img-x7y8z9', titleId: 'gal-t12', descId: 'gal-d12', title: 'Neuron Network', desc: 'Fluorescent staining of neural connections', ratio: '3x4', width: 500, span: 'md:col-span-1' },
  // Row 7
  { id: 'g13', imgId: 'gal-img-a2b3c4', titleId: 'gal-t13', descId: 'gal-d13', title: 'Ant Head', desc: 'Carpenter ant head, scanning electron microscope', ratio: '16x9', width: 900, span: 'md:col-span-2' },
  { id: 'g14', imgId: 'gal-img-d5e6f7', titleId: 'gal-t14', descId: 'gal-d14', title: 'Vitamin C', desc: 'Ascorbic acid crystals under polarized light', ratio: '3x4', width: 500, span: 'md:col-span-1 md:row-span-2' },
  // Row 8
  { id: 'g15', imgId: 'gal-img-g8h9i1', titleId: 'gal-t15', descId: 'gal-d15', title: 'Radiolarian', desc: 'Siliceous skeleton of a radiolarian protozoan', ratio: '1x1', width: 500, span: 'md:col-span-1' },
  { id: 'g16', imgId: 'gal-img-j2k3l4', titleId: 'gal-t16', descId: 'gal-d16', title: 'Moss Capsule', desc: 'Sporophyte capsule of Polytrichum moss', ratio: '1x1', width: 500, span: 'md:col-span-1' },
];

const GalleryGrid = () => {
  const containerRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 auto-rows-[280px] md:auto-rows-[260px] lg:auto-rows-[300px]">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            onClick={() => setLightbox(item)}
          >
            <img
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width={item.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end">
              <div className="p-4 lg:p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <p id={item.titleId} className="font-light tracking-widest uppercase text-white text-sm mb-1">{item.title}</p>
                <p id={item.descId} className="text-xs text-neutral-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 lg:p-12"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-neutral-400 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={lightbox.title}
              className="w-full max-h-[75vh] object-contain"
              src={containerRef.current?.querySelector(`[data-strk-img-id="${lightbox.imgId}"]`)?.src || ''}
            />
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p className="font-light tracking-widest uppercase text-white text-sm mb-1">{lightbox.title}</p>
                <p className="text-xs text-neutral-500">{lightbox.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
