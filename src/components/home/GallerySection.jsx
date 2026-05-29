import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-diatom-shell', imgId: 'gal-img-mc009', label: 'Diatom Shell', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-radiolarian', imgId: 'gal-img-mc010', label: 'Radiolarian Skeleton', ratio: '3x4', width: 400, span: 'row-span-2' },
  { id: 'gal-pollen-grain', imgId: 'gal-img-mc011', label: 'Pollen Grain', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-amoeba', imgId: 'gal-img-mc012', label: 'Amoeba', ratio: '3x2', width: 600, span: 'col-span-2' },
  { id: 'gal-paramecium', imgId: 'gal-img-mc013', label: 'Paramecium', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-mold-spores', imgId: 'gal-img-mc014', label: 'Mold Spores', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-nematode', imgId: 'gal-img-mc015', label: 'Nematode Worm', ratio: '3x2', width: 600, span: 'col-span-2' },
  { id: 'gal-algae-bloom', imgId: 'gal-img-mc016', label: 'Algae Bloom', ratio: '1x1', width: 400, span: '' },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050a14] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p id="gal-section-label" className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Visual Wonders
          </p>
          <h2 id="gal-section-title" className="text-3xl md:text-4xl font-bold text-[#e2f4ff] mb-4">
            The Microscopic Gallery
          </h2>
          <p className="text-[#94b8d0] max-w-xl mx-auto text-base leading-relaxed">
            Captured through electron microscopes and confocal imaging, these are the breathtaking portraits of the invisible world.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl border border-cyan-500/15 group cursor-pointer ${item.span}`}
            >
              <img
                id={item.id}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}] [gal-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-[#e2f4ff] text-sm font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
