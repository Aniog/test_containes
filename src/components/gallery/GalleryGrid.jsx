import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const photos = [
  { id: 'tardigrade', title: 'Tardigrade', tag: 'SEM', desc: 'Water bear under scanning electron microscope', ratio: '4x3', width: 600, span: 'col-span-1 row-span-2' },
  { id: 'snowflake-crystal', title: 'Snowflake Crystal', tag: 'Optical', desc: 'Ice crystal hexagonal structure under polarized light', ratio: '1x1', width: 400, span: 'col-span-1 row-span-1' },
  { id: 'pollen-grain', title: 'Pollen Grain', tag: 'SEM', desc: 'Intricate surface texture of a flower pollen grain', ratio: '1x1', width: 400, span: 'col-span-1 row-span-1' },
  { id: 'diatom-shell', title: 'Diatom Shell', tag: 'SEM', desc: 'Silica frustule of a marine diatom', ratio: '4x3', width: 600, span: 'col-span-2 row-span-1' },
  { id: 'red-blood-cells', title: 'Red Blood Cells', tag: 'SEM', desc: 'Biconcave erythrocytes in the bloodstream', ratio: '4x3', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'neuron-network', title: 'Neuron Network', tag: 'Fluorescence', desc: 'Fluorescently labeled neurons forming synaptic connections', ratio: '4x3', width: 600, span: 'col-span-1 row-span-1' },
  { id: 'bacteriophage-virus', title: 'Bacteriophage', tag: 'TEM', desc: 'T4 bacteriophage attaching to bacterial cell wall', ratio: '1x1', width: 400, span: 'col-span-1 row-span-1' },
  { id: 'salt-crystal-macro', title: 'Salt Crystal', tag: 'Macro', desc: 'Cubic sodium chloride crystal structure', ratio: '1x1', width: 400, span: 'col-span-1 row-span-1' },
  { id: 'cyanobacteria-bloom', title: 'Cyanobacteria', tag: 'Optical', desc: 'Photosynthetic cyanobacteria under light microscope', ratio: '4x3', width: 600, span: 'col-span-2 row-span-1' },
  { id: 'copepod-plankton', title: 'Copepod', tag: 'Optical', desc: 'Marine copepod crustacean under optical microscope', ratio: '4x3', width: 500, span: 'col-span-1 row-span-1' },
  { id: 'macrophage-cell', title: 'Macrophage', tag: 'Fluorescence', desc: 'Immune cell engulfing foreign particles', ratio: '4x3', width: 500, span: 'col-span-1 row-span-1' },
  { id: 'penicillium-mold', title: 'Penicillium Mold', tag: 'Optical', desc: 'Penicillium spores and hyphae under microscope', ratio: '4x3', width: 500, span: 'col-span-1 row-span-1' },
];

const tagColors = {
  SEM: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  TEM: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Fluorescence: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Optical: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  Macro: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);

  const tags = ['All', 'SEM', 'TEM', 'Fluorescence', 'Optical', 'Macro'];
  const filtered = filter === 'All' ? photos : photos.filter((p) => p.tag === filter);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filter]);

  return (
    <div ref={containerRef}>
      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
              filter === tag
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                : 'border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px]">
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className={`${photo.span} group relative rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-500/50 cursor-pointer transition-all duration-300`}
            onClick={() => setSelected(photo)}
          >
            <img
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-strk-img-id={`gallery-${photo.id}-p7q8r9`}
              data-strk-img={`[gallery-${photo.id}-desc] [gallery-${photo.id}-title] microscopy`}
              data-strk-img-ratio={photo.ratio}
              data-strk-img-width={photo.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 left-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[photo.tag] || ''}`}>
                {photo.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 id={`gallery-${photo.id}-title`} className="text-white font-bold text-sm">{photo.title}</h3>
              <p id={`gallery-${photo.id}-desc`} className="text-slate-300 text-xs mt-0.5">{photo.desc}</p>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-cyan-900/40"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={selected.title}
              className="w-full object-cover max-h-[70vh]"
              data-strk-img-id={`gallery-lb-${selected.id}-s1t2u3`}
              data-strk-img={`[gallery-lb-${selected.id}-desc] [gallery-lb-${selected.id}-title] microscopy high resolution`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border mb-3 inline-block ${tagColors[selected.tag] || ''}`}>
                {selected.tag}
              </span>
              <h2 id={`gallery-lb-${selected.id}-title`} className="text-white font-bold text-2xl">{selected.title}</h2>
              <p id={`gallery-lb-${selected.id}-desc`} className="text-slate-300 mt-1">{selected.desc}</p>
            </div>
            <button
              className="absolute top-4 right-4 w-9 h-9 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
