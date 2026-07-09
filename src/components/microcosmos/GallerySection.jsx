import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 'pollen',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-img-pollen-aa1bb2',
    thumbImgId: 'gallery-thumb-pollen-cc3dd4',
    title: 'Pollen Grain',
    description: 'Magnified 500×, a single pollen grain reveals an alien landscape of spikes and pores designed for wind dispersal.',
    category: 'Botany',
    size: 'large',
  },
  {
    id: 'diatom',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-img-diatom-ee5ff6',
    thumbImgId: 'gallery-thumb-diatom-gg7hh8',
    title: 'Diatom Shell',
    description: 'Single-celled algae encased in intricate silica shells — nature\'s most precise glass sculptures.',
    category: 'Algae',
    size: 'small',
  },
  {
    id: 'snowflake',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
    imgId: 'gallery-img-snowflake-ii9jj0',
    thumbImgId: 'gallery-thumb-snowflake-kk1ll2',
    title: 'Ice Crystal',
    description: 'No two snowflakes are alike — each hexagonal lattice forms uniquely as water molecules align in freezing air.',
    category: 'Crystallography',
    size: 'small',
  },
  {
    id: 'tardigrade',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-img-tardigrade-mm3nn4',
    thumbImgId: 'gallery-thumb-tardigrade-oo5pp6',
    title: 'Tardigrade',
    description: 'The "water bear" — an extremophile that survives in outer space, deep ocean, and volcanic vents.',
    category: 'Zoology',
    size: 'medium',
  },
  {
    id: 'neuron',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-img-neuron-qq7rr8',
    thumbImgId: 'gallery-thumb-neuron-ss9tt0',
    title: 'Neuron Network',
    description: 'Fluorescent-stained neurons form a glowing web — the physical substrate of thought, memory, and consciousness.',
    category: 'Neuroscience',
    size: 'medium',
  },
  {
    id: 'butterfly-wing',
    titleId: 'gallery-butterfly-wing-title',
    descId: 'gallery-butterfly-wing-desc',
    imgId: 'gallery-img-butterfly-wing-uu1vv2',
    thumbImgId: 'gallery-thumb-butterfly-wing-ww3xx4',
    title: 'Butterfly Wing Scale',
    description: 'Microscopic scales on a butterfly wing create iridescent color through structural interference, not pigment.',
    category: 'Entomology',
    size: 'large',
  },
  {
    id: 'salt-crystal',
    titleId: 'gallery-salt-crystal-title',
    descId: 'gallery-salt-crystal-desc',
    imgId: 'gallery-img-salt-crystal-yy5zz6',
    thumbImgId: 'gallery-thumb-salt-crystal-ab7cd8',
    title: 'Salt Crystal',
    description: 'Common table salt forms perfect cubic lattices — a reminder that everyday materials hide extraordinary geometry.',
    category: 'Mineralogy',
    size: 'small',
  },
  {
    id: 'red-blood-cell',
    titleId: 'gallery-red-blood-cell-title',
    descId: 'gallery-red-blood-cell-desc',
    imgId: 'gallery-img-red-blood-cell-ef9gh0',
    thumbImgId: 'gallery-thumb-red-blood-cell-ij1kl2',
    title: 'Red Blood Cells',
    description: 'Biconcave discs of hemoglobin — billions of these cells carry oxygen through every vessel in your body right now.',
    category: 'Hematology',
    size: 'small',
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0d1a24]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Visual Archive
          </span>
          <h2 id="gallery-section-title" className="text-3xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Gallery of Wonders
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto">
            Stunning electron microscopy and macro photography from the world's leading research labs.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item) => {
            const spanClass =
              item.size === 'large'
                ? 'col-span-2 row-span-2'
                : item.size === 'medium'
                ? 'col-span-2 md:col-span-1 row-span-1'
                : 'col-span-1 row-span-1';

            return (
              <div
                key={item.id}
                className={`${spanClass} group relative rounded-xl overflow-hidden cursor-pointer border border-[#00d4c8]/10 hover:border-[#00d4c8]/40 transition-all duration-300`}
                style={{ minHeight: item.size === 'large' ? '320px' : '160px' }}
                onClick={() => setSelected(item)}
              >
                <img
                  alt={item.title}
                  data-strk-img-id={item.thumbImgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                  data-strk-img-ratio={item.size === 'large' ? '1x1' : '4x3'}
                  data-strk-img-width={item.size === 'large' ? '800' : '400'}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: 'inherit' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8]">{item.category}</span>
                  <h3 id={item.titleId} className="text-sm font-bold text-[#e8f4f8] mt-0.5">{item.title}</h3>
                  <p id={item.descId} className="sr-only">{item.description}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#050a0f]/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-[#00d4c8]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050a0f]/95 backdrop-blur-md p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-[#00d4c8]/20 shadow-[0_0_60px_rgba(0,212,200,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={selected.title}
              data-strk-img-id={selected.imgId}
              data-strk-img={`[${selected.descId}] [${selected.titleId}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8]">{selected.category}</span>
              <h3 id={selected.titleId} className="text-2xl font-bold text-[#e8f4f8] mt-1 mb-2">{selected.title}</h3>
              <p id={selected.descId} className="text-[#7fb3c8] text-sm leading-relaxed max-w-xl">{selected.description}</p>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#050a0f]/70 backdrop-blur-sm flex items-center justify-center border border-[#00d4c8]/20 text-[#7fb3c8] hover:text-[#00d4c8] transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
