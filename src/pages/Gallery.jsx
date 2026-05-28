import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-1',
    title: 'Diatom Colony',
    subtitle: 'Bacillariophyta',
    category: 'Algae',
    desc: 'Intricate silica shells of diatoms form geometric patterns visible only under electron microscopy.',
    imgId: 'gal-img-a1b2',
    size: 'large',
  },
  {
    id: 'gal-2',
    title: 'Bacterial Biofilm',
    subtitle: 'Mixed species community',
    category: 'Bacteria',
    desc: 'A complex community of bacteria encased in a self-produced matrix of polysaccharides.',
    imgId: 'gal-img-c3d4',
    size: 'small',
  },
  {
    id: 'gal-3',
    title: 'Fungal Hyphae',
    subtitle: 'Penicillium chrysogenum',
    category: 'Fungi',
    desc: 'The branching filaments of Penicillium — the mold that gave us penicillin.',
    imgId: 'gal-img-e5f6',
    size: 'small',
  },
  {
    id: 'gal-4',
    title: 'Radiolarian Skeleton',
    subtitle: 'Acantharia species',
    category: 'Protozoa',
    desc: 'Radiolarians build elaborate mineral skeletons of stunning geometric complexity.',
    imgId: 'gal-img-g7h8',
    size: 'medium',
  },
  {
    id: 'gal-5',
    title: 'Cyanobacteria Bloom',
    subtitle: 'Anabaena spiroides',
    category: 'Bacteria',
    desc: 'Spiral chains of cyanobacteria — the organisms that first oxygenated Earth\'s atmosphere.',
    imgId: 'gal-img-i9j0',
    size: 'medium',
  },
  {
    id: 'gal-6',
    title: 'Tardigrade',
    subtitle: 'Ramazzottius oberhaeuseri',
    category: 'Micro-animal',
    desc: 'The near-indestructible "water bear" — survives vacuum, radiation, and extreme temperatures.',
    imgId: 'gal-img-k1l2',
    size: 'large',
  },
  {
    id: 'gal-7',
    title: 'Vorticella',
    subtitle: 'Vorticella convallaria',
    category: 'Protozoa',
    desc: 'Bell-shaped ciliates that attach to surfaces and retract with a spring-like stalk.',
    imgId: 'gal-img-m3n4',
    size: 'small',
  },
  {
    id: 'gal-8',
    title: 'Slime Mold Network',
    subtitle: 'Physarum polycephalum',
    category: 'Fungi',
    desc: 'Slime molds solve maze puzzles and optimize networks without a brain or nervous system.',
    imgId: 'gal-img-o5p6',
    size: 'small',
  },
  {
    id: 'gal-9',
    title: 'Spirulina Filaments',
    subtitle: 'Arthrospira platensis',
    category: 'Algae',
    desc: 'Helical cyanobacteria packed with protein, used as a superfood and space nutrition.',
    imgId: 'gal-img-q7r8',
    size: 'medium',
  },
];

const categoryColors = {
  Algae: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  Bacteria: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  Fungi: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  Protozoa: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Micro-animal': 'bg-rose-500/10 text-rose-400 border-rose-500/30',
};

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    if (selected && modalRef.current) {
      ImageHelper.loadImages(strkImgConfig, modalRef.current);
    }
  }, [selected]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-violet-500/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">Visual Archive</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Microscopy Gallery
          </h1>
          <p className="text-slate-400 max-w-xl text-lg">
            Stunning imagery from electron microscopes, fluorescence imaging, and confocal microscopy — 
            revealing the hidden beauty of the microbial world.
          </p>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section ref={containerRef} className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => {
              const catColor = categoryColors[item.category] || categoryColors.Bacteria;
              const aspectClass =
                item.size === 'large' ? 'aspect-[4/3]' :
                item.size === 'medium' ? 'aspect-video' :
                'aspect-square';

              return (
                <div
                  key={item.id}
                  className="break-inside-avoid bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                  <div className={`${aspectClass} relative overflow-hidden bg-slate-800`}>
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[gal-title-${i}] [gal-sub-${i}] microscopy scientific`}
                      data-strk-img-ratio={item.size === 'large' ? '4x3' : item.size === 'medium' ? '16x9' : '1x1'}
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                    <span
                      className={`absolute top-3 left-3 border text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${catColor}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 id={`gal-title-${i}`} className="text-white font-semibold">{item.title}</h3>
                    <p id={`gal-sub-${i}`} className="text-slate-500 text-xs mt-0.5 italic">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            ref={modalRef}
            className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative overflow-hidden bg-slate-800">
              <img
                alt={selected.title}
                className="w-full h-full object-cover"
                data-strk-img-id={`${selected.imgId}-modal`}
                data-strk-img={`[modal-title] [modal-sub] microscopy scientific detailed`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-slate-950/80 hover:bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h2 id="modal-title" className="text-2xl font-bold text-white">{selected.title}</h2>
                  <p id="modal-sub" className="text-slate-400 italic mt-1">{selected.subtitle}</p>
                </div>
                <span className={`border text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${categoryColors[selected.category] || categoryColors.Bacteria}`}>
                  {selected.category}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
