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
  {
    id: 'slide-pollen',
    code: 'SLD-005',
    title: 'Pollen Grains',
    subtitle: 'Lilium — Angiosperm Microsporangia',
    magnification: '400×',
    illumination: 'Darkfield',
    illuminationColor: 'text-cyan-400',
    illuminationBg: 'bg-cyan-400/10',
    illuminationBorder: 'border-cyan-400/20',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
    accentBorder: 'border-amber-400/20',
    imgId: 'gallery-pollen-mc024',
    imgQuery: '[slide-pollen-title] lily pollen grain exine aperture darkfield microscopy botanical',
    imgRatio: '1x1',
    description:
      'Pollen grains are the male gametophytes of seed plants, encased in a sculptured outer wall called the exine — composed of sporopollenin, one of the most chemically resistant biopolymers known. The surface architecture (reticulate, echinate, or psilate) is species-specific and used in palynology for plant identification and fossil dating.',
    details: [
      { label: 'Wall Layer', value: 'Exine (sporopollenin)' },
      { label: 'Apertures', value: 'Colporate / Porate' },
      { label: 'Size Range', value: '10–100 μm' },
      { label: 'Function', value: 'Male gametophyte' },
    ],
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'slide-bacteria',
    code: 'SLD-006',
    title: 'Gram-Stained Bacteria',
    subtitle: 'Bacillus subtilis — Gram-Positive Rods',
    magnification: '1000× Oil',
    illumination: 'Brightfield',
    illuminationColor: 'text-bio-green',
    illuminationBg: 'bg-bio-green/10',
    illuminationBorder: 'border-bio-green/20',
    accentColor: 'text-violet-400',
    accentBg: 'bg-violet-400/10',
    accentBorder: 'border-violet-400/20',
    imgId: 'gallery-bacteria-mc025',
    imgQuery: '[slide-bacteria-title] gram stain bacteria bacillus rods purple crystal violet oil immersion microscope',
    imgRatio: '4x3',
    description:
      'The Gram stain differentiates bacteria by cell wall composition. Gram-positive organisms retain crystal violet dye, appearing deep purple, due to their thick peptidoglycan layer. Gram-negative bacteria lose the primary stain and appear pink after safranin counterstain. This 1884 technique remains the cornerstone of clinical microbiology.',
    details: [
      { label: 'Stain', value: 'Crystal Violet + Safranin' },
      { label: 'Cell Wall', value: 'Thick peptidoglycan' },
      { label: 'Morphology', value: 'Rod (bacillus)' },
      { label: 'Cell Size', value: '0.5–5 μm' },
    ],
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'slide-stomata',
    code: 'SLD-007',
    title: 'Leaf Stomata',
    subtitle: 'Tradescantia — Abaxial Epidermis',
    magnification: '400×',
    illumination: 'Brightfield',
    illuminationColor: 'text-bio-green',
    illuminationBg: 'bg-bio-green/10',
    illuminationBorder: 'border-bio-green/20',
    accentColor: 'text-emerald-300',
    accentBg: 'bg-emerald-300/10',
    accentBorder: 'border-emerald-300/20',
    imgId: 'gallery-stomata-mc026',
    imgQuery: '[slide-stomata-title] leaf stomata guard cells epidermis plant microscope brightfield',
    imgRatio: '3x4',
    description:
      'Stomata are microscopic pores flanked by two kidney-shaped guard cells that regulate gas exchange (CO₂ in, O₂ and H₂O out) in plant leaves. Guard cell turgor pressure — driven by K⁺ ion flux — controls pore aperture. A single leaf may contain 100–300 stomata per mm², representing a critical interface between plant physiology and atmospheric chemistry.',
    details: [
      { label: 'Guard Cell Shape', value: 'Kidney / Dumbbell' },
      { label: 'Density', value: '100–300 per mm²' },
      { label: 'Pore Width', value: '3–12 μm (open)' },
      { label: 'Regulation', value: 'K⁺ ion flux' },
    ],
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'slide-tardigrade',
    code: 'SLD-008',
    title: 'Tardigrade (Water Bear)',
    subtitle: 'Ramazzottius oberhaeuseri — Eutardigrada',
    magnification: '100×',
    illumination: 'Phase Contrast',
    illuminationColor: 'text-sky-400',
    illuminationBg: 'bg-sky-400/10',
    illuminationBorder: 'border-sky-400/20',
    accentColor: 'text-sky-400',
    accentBg: 'bg-sky-400/10',
    accentBorder: 'border-sky-400/20',
    imgId: 'gallery-tardigrade-mc027',
    imgQuery: '[slide-tardigrade-title] tardigrade water bear microscope phase contrast legs claws',
    imgRatio: '4x3',
    description:
      'Tardigrades are microscopic animals (0.1–1.5 mm) renowned for extreme cryptobiosis — entering a desiccated "tun" state that withstands temperatures from −272 °C to +150 °C, radiation doses lethal to most organisms, and even the vacuum of outer space. Phase contrast microscopy reveals their stubby legs, clawed feet, and barrel-shaped body without staining.',
    details: [
      { label: 'Phylum', value: 'Tardigrada' },
      { label: 'Body Length', value: '0.1–1.5 mm' },
      { label: 'Legs', value: '4 pairs (8 total)' },
      { label: 'Survival', value: 'Cryptobiosis (tun)' },
    ],
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'slide-yeast',
    code: 'SLD-009',
    title: 'Budding Yeast',
    subtitle: 'Saccharomyces cerevisiae — Ascomycota',
    magnification: '400×',
    illumination: 'Phase Contrast',
    illuminationColor: 'text-sky-400',
    illuminationBg: 'bg-sky-400/10',
    illuminationBorder: 'border-sky-400/20',
    accentColor: 'text-amber-300',
    accentBg: 'bg-amber-300/10',
    accentBorder: 'border-amber-300/20',
    imgId: 'gallery-yeast-mc028',
    imgQuery: '[slide-yeast-title] saccharomyces cerevisiae budding yeast cells phase contrast microscope',
    imgRatio: '1x1',
    description:
      'Saccharomyces cerevisiae reproduces asexually by budding — a daughter cell emerges as a small protrusion from the mother cell, growing until it pinches off. Phase contrast microscopy reveals the bud scar left on the mother cell wall after each division cycle. As a model eukaryote, it has been instrumental in understanding cell cycle regulation, genetics, and fermentation biochemistry.',
    details: [
      { label: 'Division', value: 'Budding (asymmetric)' },
      { label: 'Cell Size', value: '5–10 μm diameter' },
      { label: 'Generation Time', value: '~90 minutes' },
      { label: 'Genome', value: '12 Mbp, 16 chromosomes' },
    ],
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'slide-muscle',
    code: 'SLD-010',
    title: 'Skeletal Muscle Fibre',
    subtitle: 'Striated Muscle — Longitudinal Section',
    magnification: '400×',
    illumination: 'Brightfield',
    illuminationColor: 'text-bio-green',
    illuminationBg: 'bg-bio-green/10',
    illuminationBorder: 'border-bio-green/20',
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-400/10',
    accentBorder: 'border-rose-400/20',
    imgId: 'gallery-muscle-mc029',
    imgQuery: '[slide-muscle-title] skeletal muscle fibre striated sarcomere H&E stain longitudinal section microscope',
    imgRatio: '4x3',
    description:
      'Skeletal muscle fibres are multinucleated syncytia formed by myoblast fusion. H&E staining reveals the characteristic cross-striations arising from the regular arrangement of sarcomeres — the functional contractile units. Each sarcomere contains interdigitating thick (myosin) and thin (actin) filaments. The A-band, I-band, H-zone, and Z-disc are all resolvable at 400× magnification.',
    details: [
      { label: 'Stain', value: 'H&E (Haematoxylin & Eosin)' },
      { label: 'Sarcomere Length', value: '2.0–2.5 μm' },
      { label: 'Fibre Diameter', value: '10–100 μm' },
      { label: 'Nuclei', value: 'Peripheral, multinucleate' },
    ],
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'slide-fluorescence',
    code: 'SLD-011',
    title: 'Fluorescent Actin Cytoskeleton',
    subtitle: 'HeLa Cells — Phalloidin-TRITC Labelled',
    magnification: '630×',
    illumination: 'Fluorescence',
    illuminationColor: 'text-fuchsia-400',
    illuminationBg: 'bg-fuchsia-400/10',
    illuminationBorder: 'border-fuchsia-400/20',
    accentColor: 'text-fuchsia-400',
    accentBg: 'bg-fuchsia-400/10',
    accentBorder: 'border-fuchsia-400/20',
    imgId: 'gallery-fluorescence-mc030',
    imgQuery: '[slide-fluorescence-title] fluorescence microscopy actin cytoskeleton HeLa cells phalloidin TRITC red glowing black background',
    imgRatio: '1x1',
    description:
      'Phalloidin, a bicyclic peptide from the death cap mushroom, binds selectively and stoichiometrically to filamentous actin (F-actin). Conjugated to TRITC fluorophore, it illuminates the entire actin cytoskeleton in vivid red against a black background. Stress fibres, lamellipodia, and filopodia are all resolved, revealing how cells generate mechanical force and migrate.',
    details: [
      { label: 'Fluorophore', value: 'TRITC (Ex 550 / Em 570 nm)' },
      { label: 'Target', value: 'F-actin filaments' },
      { label: 'Cell Line', value: 'HeLa (cervical carcinoma)' },
      { label: 'Objective', value: '63× oil, NA 1.4' },
    ],
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'slide-capillary',
    code: 'SLD-012',
    title: 'Capillary Cross-Section',
    subtitle: 'Mesentery — H&E Stained',
    magnification: '1000× Oil',
    illumination: 'Brightfield',
    illuminationColor: 'text-bio-green',
    illuminationBg: 'bg-bio-green/10',
    illuminationBorder: 'border-bio-green/20',
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-400/10',
    accentBorder: 'border-rose-400/20',
    imgId: 'gallery-capillary-mc031',
    imgQuery: '[slide-capillary-title] capillary cross section red blood cells endothelium H&E stain histology microscope',
    imgRatio: '3x4',
    description:
      'At 1000× oil immersion, individual erythrocytes are visible within the capillary lumen — their biconcave disc shape and lack of nuclei clearly distinguishable. The single-cell-thick endothelial wall (tunica intima) is the thinnest of all vessel types, optimised for rapid diffusion of O₂, CO₂, nutrients, and waste products between blood and surrounding tissue.',
    details: [
      { label: 'Stain', value: 'H&E' },
      { label: 'Lumen Diameter', value: '5–10 μm' },
      { label: 'Wall Thickness', value: '1 endothelial cell' },
      { label: 'RBC Diameter', value: '6–8 μm' },
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
