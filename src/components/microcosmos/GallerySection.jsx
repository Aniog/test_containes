import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 'gal-pollen',
    imgId: 'gallery-img-pollen-m4n5o6',
    titleId: 'gallery-title-pollen',
    descId: 'gallery-desc-pollen',
    title: 'Pollen Grain',
    desc: 'Colorized scanning electron microscope image of a pollen grain showing intricate surface texture',
    category: 'Botany',
    size: 'large',
  },
  {
    id: 'gal-diatom',
    imgId: 'gallery-img-diatom-p7q8r9',
    titleId: 'gallery-title-diatom',
    descId: 'gallery-desc-diatom',
    title: 'Diatom Shell',
    desc: 'Silica shell of a diatom algae, a microscopic single-celled organism with geometric symmetry',
    category: 'Algae',
    size: 'small',
  },
  {
    id: 'gal-snowflake',
    imgId: 'gallery-img-snowflake-s1t2u3',
    titleId: 'gallery-title-snowflake',
    descId: 'gallery-desc-snowflake',
    title: 'Ice Crystal',
    desc: 'A single snowflake ice crystal photographed under polarized light microscopy',
    category: 'Physics',
    size: 'small',
  },
  {
    id: 'gal-neuron',
    imgId: 'gallery-img-neuron-v4w5x6',
    titleId: 'gallery-title-neuron',
    descId: 'gallery-desc-neuron',
    title: 'Neuron Network',
    desc: 'Fluorescence microscopy image of interconnected neurons forming a neural network',
    category: 'Neuroscience',
    size: 'large',
  },
  {
    id: 'gal-mold',
    imgId: 'gallery-img-mold-y7z8a9',
    titleId: 'gallery-title-mold',
    descId: 'gallery-desc-mold',
    title: 'Fungal Spores',
    desc: 'Colorized electron microscope image of fungal spores and hyphae structures',
    category: 'Mycology',
    size: 'small',
  },
  {
    id: 'gal-butterfly',
    imgId: 'gallery-img-butterfly-b1c2d3',
    titleId: 'gallery-title-butterfly',
    descId: 'gallery-desc-butterfly',
    title: 'Butterfly Wing Scale',
    desc: 'Microscopic scales on a butterfly wing that create iridescent color through structural coloration',
    category: 'Entomology',
    size: 'small',
  },
  {
    id: 'gal-blood',
    imgId: 'gallery-img-blood-e4f5g6',
    titleId: 'gallery-title-blood',
    descId: 'gallery-desc-blood',
    title: 'Red Blood Cells',
    desc: 'Human red blood cells (erythrocytes) flowing through a capillary under electron microscopy',
    category: 'Hematology',
    size: 'small',
  },
  {
    id: 'gal-tardigrade',
    imgId: 'gallery-img-tardigrade-h7i8j9',
    titleId: 'gallery-title-tardigrade',
    descId: 'gallery-desc-tardigrade',
    title: 'Tardigrade',
    desc: 'The water bear — one of the most resilient microscopic animals on Earth, surviving extreme conditions',
    category: 'Zoology',
    size: 'large',
  },
];

export default function GallerySection() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">Visual Archive</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#f0f9ff]">Microscopy Gallery</h2>
          <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto text-lg">
            Stunning images captured through electron microscopes, fluorescence imaging, and polarized light photography.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group relative rounded-2xl overflow-hidden border border-[#1e3a5f] hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.size === 'large' ? '1x1' : '4x3'}
                data-strk-img-width={item.size === 'large' ? '800' : '400'}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#00d4ff] text-xs font-semibold">{item.category}</span>
                <h3 id={item.titleId} className="text-[#f0f9ff] font-bold text-sm mt-1">{item.title}</h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-[#00d4ff]" />
              </div>
              {/* Hidden desc for image query */}
              <span id={item.descId} className="sr-only">{item.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#050a0f]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 text-[#94a3b8] hover:text-[#00d4ff] transition-colors bg-[#050a0f]/60 rounded-full p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-72 md:h-96">
              <img
                alt={selected.title}
                data-strk-img-id={`lightbox-${selected.imgId}`}
                data-strk-img={`[lightbox-desc-${selected.id}] [lightbox-title-${selected.id}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase">{selected.category}</span>
              <h3 id={`lightbox-title-${selected.id}`} className="text-[#f0f9ff] text-2xl font-bold mt-2">{selected.title}</h3>
              <p id={`lightbox-desc-${selected.id}`} className="text-[#94a3b8] mt-3 leading-relaxed">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
