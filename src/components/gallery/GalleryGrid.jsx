import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-diatom',
    title: 'Diatom Colony',
    category: 'Algae',
    description: 'Intricate silica shells of diatoms under polarized light microscopy',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-img-diatom-a1b2c3',
    thumbImgId: 'gallery-thumb-diatom-a1b2c3',
    size: 'large',
  },
  {
    id: 'gallery-bacteria-colony',
    title: 'Bacteria Colony',
    category: 'Bacteria',
    description: 'Colorized scanning electron microscope image of bacterial biofilm',
    titleId: 'gallery-bacteria-colony-title',
    descId: 'gallery-bacteria-colony-desc',
    imgId: 'gallery-img-bacteria-colony-d4e5f6',
    thumbImgId: 'gallery-thumb-bacteria-colony-d4e5f6',
    size: 'small',
  },
  {
    id: 'gallery-virus-particles',
    title: 'Virus Particles',
    category: 'Viruses',
    description: 'Transmission electron microscopy of viral particles budding from a host cell',
    titleId: 'gallery-virus-particles-title',
    descId: 'gallery-virus-particles-desc',
    imgId: 'gallery-img-virus-particles-g7h8i9',
    thumbImgId: 'gallery-thumb-virus-particles-g7h8i9',
    size: 'small',
  },
  {
    id: 'gallery-fungal-spores',
    title: 'Fungal Spores',
    category: 'Fungi',
    description: 'Aspergillus spore heads captured in stunning detail under SEM',
    titleId: 'gallery-fungal-spores-title',
    descId: 'gallery-fungal-spores-desc',
    imgId: 'gallery-img-fungal-spores-j1k2l3',
    thumbImgId: 'gallery-thumb-fungal-spores-j1k2l3',
    size: 'small',
  },
  {
    id: 'gallery-amoeba',
    title: 'Amoeba in Motion',
    category: 'Protozoa',
    description: 'Phase contrast microscopy of an amoeba extending pseudopods',
    titleId: 'gallery-amoeba-title',
    descId: 'gallery-amoeba-desc',
    imgId: 'gallery-img-amoeba-m4n5o6',
    thumbImgId: 'gallery-thumb-amoeba-m4n5o6',
    size: 'large',
  },
  {
    id: 'gallery-cyanobacteria',
    title: 'Cyanobacteria Bloom',
    category: 'Bacteria',
    description: 'Fluorescence microscopy revealing photosynthetic pigments in cyanobacteria',
    titleId: 'gallery-cyanobacteria-title',
    descId: 'gallery-cyanobacteria-desc',
    imgId: 'gallery-img-cyanobacteria-p7q8r9',
    thumbImgId: 'gallery-thumb-cyanobacteria-p7q8r9',
    size: 'small',
  },
  {
    id: 'gallery-mycelium-network',
    title: 'Mycelium Network',
    category: 'Fungi',
    description: 'Confocal microscopy of fungal hyphae forming an intricate network',
    titleId: 'gallery-mycelium-network-title',
    descId: 'gallery-mycelium-network-desc',
    imgId: 'gallery-img-mycelium-network-s1t2u3',
    thumbImgId: 'gallery-thumb-mycelium-network-s1t2u3',
    size: 'small',
  },
  {
    id: 'gallery-tardigrade',
    title: 'Tardigrade Portrait',
    category: 'Extremophile',
    description: 'Scanning electron microscope portrait of a water bear in stunning detail',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-img-tardigrade-v4w5x6',
    thumbImgId: 'gallery-thumb-tardigrade-v4w5x6',
    size: 'small',
  },
];

const categoryColors = {
  Algae: 'text-lime-400 bg-lime-400/10 border-lime-400/30',
  Bacteria: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
  Viruses: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
  Fungi: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
  Protozoa: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  Extremophile: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
};

const GalleryGrid = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selected]);

  return (
    <div ref={containerRef}>
      {/* Masonry-style grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#0a1628] border border-cyan-900/40 hover:border-cyan-400/40 cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
            onClick={() => setSelected(item)}
          >
            <div className={`relative overflow-hidden ${item.size === 'large' ? 'h-72' : 'h-52'}`}>
              <img
                alt={item.title}
                data-strk-img-id={item.thumbImgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.size === 'large' ? '4x3' : '3x2'}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#050a0e]/80 border border-cyan-400/50 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Category badge */}
              <span className={`absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full border ${categoryColors[item.category] || 'text-slate-400 bg-slate-400/10 border-slate-400/30'}`}>
                {item.category}
              </span>
            </div>

            <div className="p-4">
              <h3 id={item.titleId} className="font-display font-semibold text-slate-50 text-sm mb-1">
                {item.title}
              </h3>
              <p id={item.descId} className="text-slate-500 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#050a0e]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl bg-[#0a1628] border border-cyan-900/40 overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#050a0e]/80 border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-80 md:h-96 overflow-hidden">
              <img
                alt={selected.title}
                data-strk-img-id={selected.imgId}
                data-strk-img={`[${selected.descId}] [${selected.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${categoryColors[selected.category] || 'text-slate-400 bg-slate-400/10 border-slate-400/30'} mb-3 inline-block`}>
                    {selected.category}
                  </span>
                  <h2 id={selected.titleId} className="font-display font-bold text-2xl text-slate-50 mb-2">
                    {selected.title}
                  </h2>
                  <p id={selected.descId} className="text-slate-400 text-sm leading-relaxed">
                    {selected.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
