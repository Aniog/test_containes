import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-1', title: 'Tardigrade', category: 'Extremophile', desc: 'Water bear under electron microscope, showing its distinctive eight-legged body and claws.', size: 'large', color: '#FF8B64', bg: '#FFF0EB', titleId: 'gal-tardigrade-title', descId: 'gal-tardigrade-desc', imgId: 'gal-tardigrade-img-n4o5p6' },
  { id: 'gal-2', title: 'Diatom Frustule', category: 'Algae', desc: 'Intricate silica shell of a diatom, revealing its geometric symmetry under polarized light.', size: 'small', color: '#6BCB77', bg: '#EDFAF0', titleId: 'gal-diatom-title', descId: 'gal-diatom-desc', imgId: 'gal-diatom-img-q7r8s9' },
  { id: 'gal-3', title: 'Penicillium Spores', category: 'Fungi', desc: 'Chains of conidia (spores) from Penicillium mold, colored with fluorescent staining.', size: 'small', color: '#FF8B64', bg: '#FFF0EB', titleId: 'gal-penicillium-title', descId: 'gal-penicillium-desc', imgId: 'gal-penicillium-img-t1u2v3' },
  { id: 'gal-4', title: 'E. coli Colony', category: 'Bacteria', desc: 'Scanning electron micrograph of Escherichia coli bacteria, showing their rod-shaped morphology.', size: 'medium', color: '#3DBFA8', bg: '#E8F7F4', titleId: 'gal-ecoli-title', descId: 'gal-ecoli-desc', imgId: 'gal-ecoli-img-w4x5y6' },
  { id: 'gal-5', title: 'Influenza Virions', category: 'Virus', desc: 'Transmission electron micrograph of influenza virus particles, showing surface spike proteins.', size: 'medium', color: '#5BA4CF', bg: '#EAF4FB', titleId: 'gal-influenza-title', descId: 'gal-influenza-desc', imgId: 'gal-influenza-img-z7a8b9' },
  { id: 'gal-6', title: 'Amoeba Pseudopods', category: 'Protozoa', desc: 'Phase contrast image of an amoeba extending pseudopods to engulf a bacterial cell.', size: 'large', color: '#9B8EC4', bg: '#F0EDF9', titleId: 'gal-amoeba-title', descId: 'gal-amoeba-desc', imgId: 'gal-amoeba-img-c1d2e3' },
  { id: 'gal-7', title: 'Cyanobacteria Filaments', category: 'Bacteria', desc: 'Fluorescence microscopy of Anabaena cyanobacteria, showing nitrogen-fixing heterocysts.', size: 'small', color: '#3DBFA8', bg: '#E8F7F4', titleId: 'gal-cyano-title', descId: 'gal-cyano-desc', imgId: 'gal-cyano-img-f4g5h6' },
  { id: 'gal-8', title: 'Mycorrhizal Network', category: 'Fungi', desc: 'Confocal microscopy image of mycorrhizal hyphae colonizing plant root cells.', size: 'small', color: '#FF8B64', bg: '#FFF0EB', titleId: 'gal-myco-title', descId: 'gal-myco-desc', imgId: 'gal-myco-img-i7j8k9' },
  { id: 'gal-9', title: 'Bacteriophage T4', category: 'Virus', desc: 'Cryo-electron tomography reconstruction of T4 phage attached to a bacterial cell wall.', size: 'medium', color: '#5BA4CF', bg: '#EAF4FB', titleId: 'gal-phage-title', descId: 'gal-phage-desc', imgId: 'gal-phage-img-l1m2n3' },
];

const GalleryGrid = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryItems.map((item) => {
          const heightClass = item.size === 'large' ? 'h-72' : item.size === 'medium' ? 'h-56' : 'h-44';
          return (
            <div
              key={item.id}
              className="break-inside-avoid bg-white border border-[#D9EDE8] rounded-xl overflow-hidden cursor-pointer hover:border-[#3DBFA8] transition-colors group"
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2C3E50]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-[#2C3E50]" />
                  </div>
                </div>
                <span
                  className="absolute top-2.5 left-2.5 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-md"
                  style={{ background: item.bg, color: item.color }}
                >
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 id={item.titleId} className="text-sm font-bold text-[#2C3E50] mb-1">{item.title}</h3>
                <p id={item.descId} className="text-xs text-[#7F8C8D] leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#2C3E50]/70 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white border border-[#D9EDE8] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-white border border-[#D9EDE8] flex items-center justify-center text-[#7F8C8D] hover:text-[#2C3E50] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative h-64 md:h-80">
              <img
                alt={selected.title}
                data-strk-img-id={`modal-${selected.imgId}`}
                data-strk-img={`[modal-${selected.descId}] [modal-${selected.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span
                className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                style={{ background: selected.bg, color: selected.color }}
              >
                {selected.category}
              </span>
              <h2 id={`modal-${selected.titleId}`} className="text-lg font-bold text-[#2C3E50] mt-3 mb-1">
                {selected.title}
              </h2>
              <p id={`modal-${selected.descId}`} className="text-sm text-[#7F8C8D] leading-relaxed">
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
