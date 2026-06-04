import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, FlaskConical, HeartPulse, Info } from 'lucide-react';

const SPECIMENS = [
  {
    id: 'plant-histology',
    category: 'Plant Histology',
    icon: LeafIcon,
    title: 'Plant Histology',
    subtitle: 'The Architecture of Flora',
    description:
      'Cross-sectional analyses of stem, root, and leaf tissues reveal the elegant cellular engineering of vascular plants. Study xylem vessels, phloem sieve tubes, and parenchyma networks.',
    imgId: 'specimen-plant-histology-7d2e1a',
    titleId: 'specimen-plant-histology-title',
    descId: 'specimen-plant-histology-desc',
    terms: [
      { term: 'Xylem', def: 'Vascular tissue that transports water and dissolved minerals from roots to leaves.' },
      { term: 'Phloem', def: 'Living tissue that transports sugars and metabolic products downward from the leaves.' },
      { term: 'Parenchyma', def: 'Fundamental ground tissue composed of thin-walled living cells.' },
      { term: 'Stomata', def: 'Microscopic pores in leaf epidermis that regulate gas exchange.' },
    ],
  },
  {
    id: 'protists',
    category: 'Protists',
    icon: FlaskConical,
    title: 'The Kingdom Protista',
    subtitle: 'Single-Celled Complexity',
    description:
      'A survey of unicellular eukaryotic organisms including ciliates, amoebae, flagellates, and diatoms. Each specimen demonstrates a unique mode of locomotion and feeding.',
    imgId: 'specimen-protists-3f8b2d',
    titleId: 'specimen-protists-title',
    descId: 'specimen-protists-desc',
    terms: [
      { term: 'Cilia', def: 'Hair-like organelles that beat in coordinated waves for locomotion or feeding.' },
      { term: 'Pseudopodia', def: 'Temporary cytoplasmic projections used for movement and engulfing prey.' },
      { term: 'Diatom', def: 'Photosynthetic algae with intricate silica-based cell walls called frustules.' },
      { term: 'Contractile Vacuole', def: 'Organelle that expels excess water to maintain osmotic balance.' },
    ],
  },
  {
    id: 'human-cytology',
    category: 'Human Cytology',
    icon: HeartPulse,
    title: 'Human Cytology',
    subtitle: 'The Cellular Body',
    description:
      'An atlas of human cell types: erythrocytes, neurons, epithelial cells, and leukocytes. Explore the morphological diversity that underpins human physiology.',
    imgId: 'specimen-human-cytology-9c4e5f',
    titleId: 'specimen-human-cytology-title',
    descId: 'specimen-human-cytology-desc',
    terms: [
      { term: 'Erythrocyte', def: 'Biconcave, anucleate red blood cells that transport oxygen via haemoglobin.' },
      { term: 'Neuron', def: 'Electrically excitable cell with dendrites and an axon, forming neural networks.' },
      { term: 'Leukocyte', def: 'Nucleated white blood cell involved in immune defence and inflammation.' },
      { term: 'Epithelium', def: 'Sheets of tightly joined cells lining body surfaces and cavities.' },
    ],
  },
];

function LeafIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function TermTooltip({ term, def }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="inline-flex items-center gap-1 text-ink font-medium border-b border-dotted border-charcoal/40 hover:border-ink transition-colors cursor-help text-sm"
      >
        {term}
        <Info className="w-3 h-3 text-charcoal-muted" />
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 glass-strong rounded-lg shadow-xl z-50 text-xs text-charcoal leading-relaxed font-sans">
          {def}
        </span>
      )}
    </span>
  );
}

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen parchment-texture">
      {/* Page Header */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal-muted mb-3">
            Taxonomic Reference
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            Specimen Hub
          </h1>
          <p className="font-sans text-sm text-charcoal-muted max-w-xl mx-auto leading-relaxed">
            A methodical survey of microscopic life, organised by kingdom and
            tissue type. Each entry includes technical descriptions,
            magnification data, and glossaries of scientific terminology.
          </p>
        </div>
      </section>

      {/* Asymmetrical Z-pattern Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {SPECIMENS.map((specimen, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={specimen.id}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-14 items-center mb-20 last:mb-0`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-black/5 shadow-lg shadow-black/5">
                    <img
                      data-strk-img-id={specimen.imgId}
                      data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={specimen.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(100%) contrast(1.05)' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                      <specimen.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-muted">
                      {specimen.category}
                    </span>
                  </div>
                  <h2
                    id={specimen.titleId}
                    className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-1"
                  >
                    {specimen.title}
                  </h2>
                  <p className="font-serif italic text-lg text-charcoal mb-4">
                    {specimen.subtitle}
                  </p>
                  <p
                    id={specimen.descId}
                    className="font-sans text-sm text-charcoal leading-relaxed mb-6"
                  >
                    {specimen.description}
                  </p>

                  {/* Terminology glossary */}
                  <div className="border-t border-charcoal/10 pt-4">
                    <h4 className="font-sans text-xs font-medium tracking-wide text-charcoal-muted uppercase mb-3">
                      Key Terminology
                    </h4>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {specimen.terms.map((t) => (
                        <TermTooltip key={t.term} term={t.term} def={t.def} />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}