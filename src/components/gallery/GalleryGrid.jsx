import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-1',
    title: 'Tardigrade',
    category: 'Extremophile',
    desc: 'Water bear under electron microscope, showing its distinctive eight-legged body and claws.',
    size: 'large',
    titleId: 'gal-tardigrade-title',
    descId: 'gal-tardigrade-desc',
    imgId: 'gal-tardigrade-img-n4o5p6',
  },
  {
    id: 'gal-2',
    title: 'Diatom Frustule',
    category: 'Algae',
    desc: 'Intricate silica shell of a diatom, revealing its geometric symmetry under polarized light.',
    size: 'small',
    titleId: 'gal-diatom-title',
    descId: 'gal-diatom-desc',
    imgId: 'gal-diatom-img-q7r8s9',
  },
  {
    id: 'gal-3',
    title: 'Penicillium Spores',
    category: 'Fungi',
    desc: 'Chains of conidia (spores) from Penicillium mold, colored with fluorescent staining.',
    size: 'small',
    titleId: 'gal-penicillium-title',
    descId: 'gal-penicillium-desc',
    imgId: 'gal-penicillium-img-t1u2v3',
  },
  {
    id: 'gal-4',
    title: 'E. coli Colony',
    category: 'Bacteria',
    desc: 'Scanning electron micrograph of Escherichia coli bacteria, showing their rod-shaped morphology.',
    size: 'medium',
    titleId: 'gal-ecoli-title',
    descId: 'gal-ecoli-desc',
    imgId: 'gal-ecoli-img-w4x5y6',
  },
  {
    id: 'gal-5',
    title: 'Influenza Virions',
    category: 'Virus',
    desc: 'Transmission electron micrograph of influenza virus particles, showing surface spike proteins.',
    size: 'medium',
    titleId: 'gal-influenza-title',
    descId: 'gal-influenza-desc',
    imgId: 'gal-influenza-img-z7a8b9',
  },
  {
    id: 'gal-6',
    title: 'Amoeba Pseudopods',
    category: 'Protozoa',
    desc: 'Phase contrast image of an amoeba extending pseudopods to engulf a bacterial cell.',
    size: 'large',
    titleId: 'gal-amoeba-title',
    descId: 'gal-amoeba-desc',
    imgId: 'gal-amoeba-img-c1d2e3',
  },
  {
    id: 'gal-7',
    title: 'Cyanobacteria Filaments',
    category: 'Bacteria',
    desc: 'Fluorescence microscopy of Anabaena cyanobacteria, showing nitrogen-fixing heterocysts.',
    size: 'small',
    titleId: 'gal-cyano-title',
    descId: 'gal-cyano-desc',
    imgId: 'gal-cyano-img-f4g5h6',
  },
  {
    id: 'gal-8',
    title: 'Mycorrhizal Network',
    category: 'Fungi',
    desc: 'Confocal microscopy image of mycorrhizal hyphae colonizing plant root cells.',
    size: 'small',
    titleId: 'gal-myco-title',
    descId: 'gal-myco-desc',
    imgId: 'gal-myco-img-i7j8k9',
  },
  {
    id: 'gal-9',
    title: 'Bacteriophage T4',
    category: 'Virus',
    desc: 'Cryo-electron tomography reconstruction of T4 phage attached to a bacterial cell wall.',
    size: 'medium',
    titleId: 'gal-phage-title',
    descId: 'gal-phage-desc',
    imgId: 'gal-phage-img-l1m2n3',
  },
];

const categoryColors = {
  Extremophile: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  Algae: 'bg-sky-400/10 text-sky-400 border-sky-400/20',
  Fungi: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  Bacteria: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  Virus: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
  Protozoa: 'bg-pink-400/10 text-pink-400 border-pink-400/20',
};

const GalleryGrid = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryItems.map((item) => {
          const badgeClass = categoryColors[item.category] || 'bg-slate-400/10 text-slate-400 border-slate-400/20';
          const heightClass = item.size === 'large' ? 'h-72' : item.size === 'medium' ? 'h-56' : 'h-44';

          return (
            <div
              key={item.id}
              className="break-inside-avoid card-hover bg-[#0a1628] border border-[#00e5ff]/10 rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <div className={`relative ${heightClass} overflow-hidden`}>
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#00e5ff]/20 backdrop-blur-sm border border-[#00e5ff]/40 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-[#00e5ff]" />
                  </div>
                </div>
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 id={item.titleId} className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p id={item.descId} className="text-xs text-slate-500 leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0a1628] border border-[#00e5ff]/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#050d1a]/80 border border-[#00e5ff]/20 flex items-center justify-center text-slate-400 hover:text-[#00e5ff] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-72 md:h-96">
              <img
                alt={selected.title}
                data-strk-img-id={`modal-${selected.imgId}`}
                data-strk-img={`[modal-${selected.descId}] [modal-${selected.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[selected.category] || ''}`}>
                {selected.category}
              </span>
              <h2 id={`modal-${selected.titleId}`} className="text-xl font-bold text-white mt-3 mb-2">
                {selected.title}
              </h2>
              <p id={`modal-${selected.descId}`} className="text-slate-400 text-sm leading-relaxed">
                {selected.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
