import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-img-a1', titleId: 'gal-title-a1', title: 'Tardigrade Water Bear', desc: 'Microscopic extremophile', ratio: '1x1', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a2', titleId: 'gal-title-a2', title: 'Diatom Silica Shell', desc: 'Geometric algae skeleton', ratio: '4x3', width: 800, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a3', titleId: 'gal-title-a3', title: 'Pollen Grain Surface', desc: 'Flowering plant pollen', ratio: '1x1', width: 600, span: 'col-span-1 row-span-2' },
  { id: 'gal-img-a4', titleId: 'gal-title-a4', title: 'Neuron Network', desc: 'Brain cell connections', ratio: '4x3', width: 800, span: 'col-span-2 row-span-1' },
  { id: 'gal-img-a5', titleId: 'gal-title-a5', title: 'Radiolarian Skeleton', desc: 'Ocean microorganism', ratio: '1x1', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a6', titleId: 'gal-title-a6', title: 'Butterfly Wing Scale', desc: 'Iridescent nanostructure', ratio: '4x3', width: 800, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a7', titleId: 'gal-title-a7', title: 'Snowflake Crystal', desc: 'Ice crystal formation', ratio: '1x1', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a8', titleId: 'gal-title-a8', title: 'Paramecium Cilia', desc: 'Single-celled swimmer', ratio: '4x3', width: 800, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a9', titleId: 'gal-title-a9', title: 'Mold Spore Cluster', desc: 'Fungal reproduction', ratio: '1x1', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a10', titleId: 'gal-title-a10', title: 'Red Blood Cells', desc: 'Human erythrocytes', ratio: '4x3', width: 800, span: 'col-span-2 row-span-1' },
  { id: 'gal-img-a11', titleId: 'gal-title-a11', title: 'Coral Polyp Tentacles', desc: 'Marine microstructure', ratio: '1x1', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'gal-img-a12', titleId: 'gal-title-a12', title: 'Dust Mite Portrait', desc: 'Household arachnid', ratio: '4x3', width: 800, span: 'col-span-1 row-span-1' },
];

function GalleryCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#1e3a5f] group cursor-pointer ${item.span}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        data-strk-img-id={item.id}
        data-strk-img={`[${item.titleId}]`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      {/* Hidden title for image query */}
      <span id={item.titleId} className="sr-only">{item.title} microscopy</span>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-[#050d1a]/20 to-transparent transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${
          hovered ? 'translate-y-0' : 'translate-y-4 opacity-0'
        }`}
      >
        <p className="text-[#f0f9ff] font-semibold text-sm">{item.title}</p>
        <p className="text-[#00d4ff] text-xs">{item.desc}</p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#00d4ff] text-xs font-semibold tracking-widest uppercase mb-4">
            Visual Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0f9ff] mb-5">
            The Microscopic Gallery
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Stunning imagery captured through electron microscopes, confocal microscopes, and high-powered optical lenses.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
