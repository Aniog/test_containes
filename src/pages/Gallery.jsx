import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', title: 'E. coli Colony', category: 'Bacteria', technique: 'SEM', desc: 'Scanning electron micrograph of Escherichia coli bacteria forming a dense colony on a surface.' },
  { id: 'g2', title: 'Diatom Symmetry', category: 'Algae', technique: 'Light Microscopy', desc: 'The intricate silica shell of a diatom, revealing its extraordinary geometric precision.' },
  { id: 'g3', title: 'T4 Phage Attack', category: 'Virus', technique: 'TEM', desc: 'Transmission electron micrograph showing T4 bacteriophages attaching to an E. coli cell.' },
  { id: 'g4', title: 'Paramecium in Motion', category: 'Protozoa', technique: 'Phase Contrast', desc: 'A paramecium captured mid-swim, its cilia visible as a shimmering halo around its body.' },
  { id: 'g5', title: 'Penicillium Spores', category: 'Fungi', technique: 'SEM', desc: 'The brush-like conidiophores of Penicillium, releasing chains of spores into the air.' },
  { id: 'g6', title: 'Cyanobacteria Bloom', category: 'Bacteria', technique: 'Fluorescence', desc: 'Fluorescence microscopy reveals the photosynthetic pigments of a cyanobacteria bloom.' },
  { id: 'g7', title: 'Amoeba Pseudopods', category: 'Protozoa', technique: 'DIC', desc: 'Differential interference contrast image of an amoeba extending pseudopods to engulf prey.' },
  { id: 'g8', title: 'Influenza Virions', category: 'Virus', technique: 'TEM', desc: 'Colorized transmission electron micrograph of influenza virus particles, showing their spiky surface proteins.' },
  { id: 'g9', title: 'Mycorrhizal Network', category: 'Fungi', technique: 'Confocal', desc: 'Confocal laser scanning microscopy reveals the intricate network of fungal hyphae connecting plant roots.' },
  { id: 'g10', title: 'Tardigrade Portrait', category: 'Micro-animal', technique: 'SEM', desc: 'The "water bear" — one of the most resilient animals on Earth, surviving in the vacuum of space.' },
  { id: 'g11', title: 'Streptococcus Chain', category: 'Bacteria', technique: 'SEM', desc: 'Streptococcus bacteria forming their characteristic chain-like arrangement.' },
  { id: 'g12', title: 'Radiolarian Shell', category: 'Protozoa', technique: 'Light Microscopy', desc: 'The ornate silica skeleton of a radiolarian, a testament to nature\'s capacity for geometric beauty.' },
];

const techniques = ['All', 'SEM', 'TEM', 'Light Microscopy', 'Fluorescence', 'Phase Contrast', 'DIC', 'Confocal'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const filtered = galleryItems.filter(
    (item) => activeFilter === 'All' || item.technique === activeFilter
  );

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-16">
      {/* Header */}
      <div className="relative py-20 px-4 md:px-8 border-b border-slate-800 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-96 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">
            Visual Archive
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
            Microscopy Gallery
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Stunning images from electron microscopes, fluorescence imaging, and light microscopy — the invisible made visible.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-500 font-mono uppercase tracking-widest mr-2">Technique:</span>
          {techniques.map((t) => (
            <button
              key={t}
              onClick={() => setActiveFilter(t)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                activeFilter === t
                  ? 'bg-teal-500 border-teal-500 text-slate-950 font-semibold'
                  : 'border-slate-700 text-slate-400 hover:border-teal-500/50 hover:text-teal-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style grid */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group break-inside-avoid bg-slate-900 border border-slate-700 hover:border-teal-500/40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/20"
              onClick={() => setSelected(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-strk-img-id={`gallery-${item.id}-p7q8r9`}
                  data-strk-img={`[gallery-desc-${item.id}] [gallery-title-${item.id}] microscopy`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-slate-950/80 rounded-full flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-teal-400" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">{item.technique}</span>
                  <span className="text-xs text-slate-500">{item.category}</span>
                </div>
                <h3 id={`gallery-title-${item.id}`} className="text-sm font-semibold text-slate-100">{item.title}</h3>
                <p id={`gallery-desc-${item.id}`} className="sr-only">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                alt={selected.title}
                className="w-full object-cover max-h-80"
                data-strk-img-id={`gallery-lb-${selected.id}-s1t2u3`}
                data-strk-img={`[lb-desc-${selected.id}] [lb-title-${selected.id}] microscopy`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-slate-950/80 rounded-full flex items-center justify-center text-slate-300 hover:text-teal-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest bg-teal-500/10 text-teal-400 border border-teal-500/30 px-3 py-1 rounded-full">
                  {selected.technique}
                </span>
                <span className="text-xs text-slate-500">{selected.category}</span>
              </div>
              <h2 id={`lb-title-${selected.id}`} className="text-xl font-bold text-slate-100 mb-2">{selected.title}</h2>
              <p id={`lb-desc-${selected.id}`} className="text-slate-400 text-sm leading-relaxed">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
