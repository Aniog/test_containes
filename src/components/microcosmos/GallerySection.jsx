import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', imgId: 'gallery-img-mc007', title: 'Diatom Shells', subtitle: 'Silica microalgae under SEM', ratio: '1x1', width: 600 },
  { id: 'g2', imgId: 'gallery-img-mc008', title: 'Pollen Grains', subtitle: 'Colorized electron microscopy', ratio: '1x1', width: 600 },
  { id: 'g3', imgId: 'gallery-img-mc009', title: 'Tardigrade', subtitle: 'Water bear at 500× magnification', ratio: '1x1', width: 600 },
  { id: 'g4', imgId: 'gallery-img-mc010', title: 'Snowflake Crystal', subtitle: 'Ice crystal macro photography', ratio: '1x1', width: 600 },
  { id: 'g5', imgId: 'gallery-img-mc011', title: 'Neuron Network', subtitle: 'Fluorescent brain cells', ratio: '1x1', width: 600 },
  { id: 'g6', imgId: 'gallery-img-mc012', title: 'Butterfly Wing', subtitle: 'Scale structure at 200×', ratio: '1x1', width: 600 },
  { id: 'g7', imgId: 'gallery-img-mc013', title: 'Salt Crystal', subtitle: 'Polarized light microscopy', ratio: '1x1', width: 600 },
  { id: 'g8', imgId: 'gallery-img-mc014', title: 'Red Blood Cells', subtitle: 'Human erythrocytes SEM', ratio: '1x1', width: 600 },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#050a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00ffcc] mb-3">Visual Archive</p>
          <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-[#f0f8ff] mb-4">
            The MicroCosmos Gallery
          </h2>
          <p className="text-[#8bafc7] max-w-xl mx-auto leading-relaxed">
            A curated collection of the most stunning microscopic imagery from around the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-[#00d4ff]/10 hover:border-[#00d4ff]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,255,0.25)] ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img
                alt={item.title}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${i === 0 ? 'h-64 md:h-full' : 'h-40 md:h-48'}`}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-sub] [${item.id}-title] [gallery-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-[#050a0f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 id={`${item.id}-title`} className="text-[#f0f8ff] font-semibold text-sm">{item.title}</h4>
                <p id={`${item.id}-sub`} className="text-[#8bafc7] text-xs mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
