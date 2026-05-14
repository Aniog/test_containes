import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const slides = [
  {
    id: 'slide-diatom',
    code: 'SLD-001',
    title: 'Diatom Frustules',
    subtitle: 'Bacillariophyta — Silica Cell Walls',
    magnification: '400×',
    illumination: 'Darkfield',
    illuminationColor: 'text-cyan-400',
    illuminationBg: 'bg-cyan-400/10',
    illuminationBorder: 'border-cyan-400/20',
    accentColor: 'text-cyan-400',
    accentBg: 'bg-cyan-400/10',
    accentBorder: 'border-cyan-400/20',
    imgId: 'gallery-diatom-mc020',
    imgQuery: '[slide-diatom-title] diatom frustules silica shells symmetrical patterns darkfield microscope',
    imgRatio: '1x1',
    description:
      'Diatom frustules are intricate silica (SiO₂) shells exhibiting radial or bilateral symmetry with nanoscale pore patterns (striae). These natural photonic crystals diffract light, producing iridescent colors under darkfield illumination. Each species has a unique frustule geometry — a biological fingerprint encoded in glass.',
    details: [
      { label: 'Kingdom', value: 'Chromista' },
      { label: 'Cell Wall', value: 'Amorphous SiO₂' },
      { label: 'Symmetry', value: 'Radial / Bilateral' },
      { label: 'Size Range', value: '2 μm – 2 mm' },
    ],
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'slide-mitosis',
    code: 'SLD-002',
    title: 'Mitosis — Onion Root Tip',
    subtitle: 'Allium cepa — Meristematic Cells',
    magnification: '1000×',
    illumination: 'Brightfield',
    illuminationColor: 'text-bio-green',
    illuminationBg: 'bg-bio-green/10',
    illuminationBorder: 'border-bio-green/20',
    accentColor: 'text-bio-green',
    accentBg: 'bg-bio-green/10',
    accentBorder: 'border-bio-green/20',
    imgId: 'gallery-mitosis-mc021',
    imgQuery: '[slide-mitosis-title] onion root tip mitosis chromosomes prophase metaphase anaphase telophase stained microscope',
    imgRatio: '4x3',
    description:
      'The onion root tip meristem is a classic model for observing all stages of mitosis simultaneously. Acetocarmine or crystal violet staining reveals condensed chromosomes. Prophase shows chromosome condensation; Metaphase aligns chromosomes at the cell plate; Anaphase separates sister chromatids; Telophase reforms nuclear envelopes.',
    details: [
      { label: 'Stain', value: 'Acetocarmine' },
      { label: 'Stages Visible', value: 'All 4 phases' },
      { label: 'Cell Cycle', value: 'Mitotic index ~15%' },
      { label: 'Chromosome No.', value: '2n = 16' },
    ],
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'slide-neuron',
    code: 'SLD-003',
    title: 'Multipolar Neurons',
    subtitle: 'Spinal Cord — Anterior Horn',
    magnification: '400×',
    illumination: 'Brightfield',
    illuminationColor: 'text-bio-green',
    illuminationBg: 'bg-bio-green/10',
    illuminationBorder: 'border-bio-green/20',
    accentColor: 'text-phosphor',
    accentBg: 'bg-phosphor/10',
    accentBorder: 'border-phosphor/20',
    imgId: 'gallery-neuron-mc022',
    imgQuery: '[slide-neuron-title] multipolar neuron silver stain dendrites axon cell body spinal cord microscope',
    imgRatio: '3x4',
    description:
      'Silver impregnation (Golgi or Bielschowsky stain) selectively deposits metallic silver on neuronal membranes, revealing the full dendritic arbor. Multipolar neurons of the anterior horn display a large soma (cell body), multiple branching dendrites receiving synaptic input, and a single axon transmitting action potentials to muscle fibers.',
    details: [
      { label: 'Stain', value: 'Silver Impregnation' },
      { label: 'Neuron Type', value: 'Multipolar Motor' },
      { label: 'Soma Diameter', value: '70–120 μm' },
      { label: 'Dendrite Span', value: 'Up to 1 mm' },
    ],
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'slide-aspergillus',
    code: 'SLD-004',
    title: 'Aspergillus niger',
    subtitle: 'Conidiophore & Spore Head',
    magnification: '400×',
    illumination: 'Brightfield',
    illuminationColor: 'text-bio-green',
    illuminationBg: 'bg-bio-green/10',
    illuminationBorder: 'border-bio-green/20',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
    accentBorder: 'border-amber-400/20',
    imgId: 'gallery-aspergillus-mc023',
    imgQuery: '[slide-aspergillus-title] aspergillus niger conidiophore spores fungal hyphae microscope brightfield stained',
    imgRatio: '1x1',
    description:
      'The conidiophore of Aspergillus niger terminates in a globose vesicle covered with phialides — flask-shaped cells that bud off chains of conidia (asexual spores). This radially symmetric "flower-like" structure is a masterpiece of fungal architecture. The black pigmentation of conidia results from melanin, providing UV and oxidative stress resistance.',
    details: [
      { label: 'Kingdom', value: 'Fungi' },
      { label: 'Spore Type', value: 'Conidia (asexual)' },
      { label: 'Conidium Size', value: '3.5–5 μm' },
      { label: 'Pigment', value: 'Melanin (black)' },
    ],
    span: 'col-span-1 row-span-1',
  },
];

function SlideCard({ slide, onOpen }) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-subtle bg-charcoal cursor-pointer slide-card-hover ${slide.span}`}
      onClick={() => onOpen(slide)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 md:h-64">
        <img
          alt={slide.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
          data-strk-img-id={slide.imgId}
          data-strk-img={slide.imgQuery}
          data-strk-img-ratio={slide.imgRatio}
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-bio-green/20 border border-bio-green/50 flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-bio-green" />
          </div>
        </div>
        {/* Slide code badge */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-xs text-slate-400 bg-obsidian/80 backdrop-blur-sm px-2 py-1 rounded border border-subtle">
            {slide.code}
          </span>
        </div>
        {/* Magnification badge */}
        <div className="absolute top-3 right-3">
          <span className={`font-mono text-xs ${slide.accentColor} ${slide.accentBg} px-2 py-1 rounded border ${slide.accentBorder}`}>
            {slide.magnification}
          </span>
        </div>
      </div>

      {/* Card info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3
              id={`${slide.id}-title`}
              className="font-grotesk font-semibold text-slate-100 text-base leading-snug"
            >
              {slide.title}
            </h3>
            <p className="font-mono text-xs text-slate-500 mt-0.5">{slide.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className={`font-mono text-xs ${slide.illuminationColor} ${slide.illuminationBg} px-2 py-0.5 rounded border ${slide.illuminationBorder}`}>
            {slide.illumination}
          </span>
        </div>
      </div>
    </div>
  );
}

function SlideModal({ slide, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-charcoal rounded-2xl border border-subtle overflow-hidden shadow-2xl shadow-black/50 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface border border-subtle flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-bio-green/30 transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-full min-h-64">
            <img
              alt={slide.title}
              className="w-full h-full object-cover"
              data-strk-img-id={slide.imgId}
              data-strk-img={slide.imgQuery}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/30" />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-slate-500 bg-surface px-2 py-1 rounded border border-subtle">
                {slide.code}
              </span>
              <span className={`font-mono text-xs ${slide.accentColor} ${slide.accentBg} px-2 py-1 rounded border ${slide.accentBorder}`}>
                {slide.magnification}
              </span>
              <span className={`font-mono text-xs ${slide.illuminationColor} ${slide.illuminationBg} px-2 py-1 rounded border ${slide.illuminationBorder}`}>
                {slide.illumination}
              </span>
            </div>

            <h2 className="font-grotesk font-bold text-2xl text-slate-100 mb-1">{slide.title}</h2>
            <p className="font-mono text-xs text-slate-500 mb-5">{slide.subtitle}</p>

            <p className="font-inter text-slate-400 text-sm leading-relaxed mb-6">{slide.description}</p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-3">
              {slide.details.map((d) => (
                <div key={d.label} className="p-3 rounded-xl bg-surface border border-subtle">
                  <div className="font-mono text-xs text-slate-600 uppercase tracking-wider mb-1">{d.label}</div>
                  <div className="font-grotesk text-sm font-medium text-slate-200">{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [activeSlide, setActiveSlide] = useState(null);
  const containerRef = useRef(null);

  // Load images on mount (card thumbnails)
  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  // Re-run when a slide is opened so the modal image element gets processed
  useEffect(() => {
    if (activeSlide && containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeSlide]);

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {slides.map((slide) => (
          <SlideCard key={slide.id} slide={slide} onOpen={setActiveSlide} />
        ))}
      </div>

      {activeSlide && (
        <SlideModal slide={activeSlide} onClose={() => setActiveSlide(null)} />
      )}
    </div>
  );
}
