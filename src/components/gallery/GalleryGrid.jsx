import { useState } from 'react';
import { ZoomIn, X, Layers, Eye, Info } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Diatom Frustules',
    subtitle: 'Bacillariophyta — Silica Architecture',
    magnification: '400×',
    illumination: 'Darkfield',
    accentColor: '#06B6D4',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85&fit=crop',
    description:
      'Diatom frustules are intricate silica (SiO₂) exoskeletons exhibiting species-specific bilateral or radial symmetry. The nanoscale pore arrays (areolae) function as molecular sieves, regulating ion exchange with the aqueous environment. Their optical properties make them ideal test objects for resolving power calibration.',
    tags: ['Silica', 'Frustule', 'Bilateral Symmetry', 'Nanopores'],
    specimenType: 'Unicellular Algae',
    preparation: 'Acid-cleaned, permanent mount',
  },
  {
    id: 2,
    title: 'Mitosis — Onion Root Tip',
    subtitle: 'Allium cepa — Meristematic Cells',
    magnification: '1000×',
    illumination: 'Brightfield',
    accentColor: '#10B981',
    image:
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=85&fit=crop',
    description:
      'The onion root tip meristem provides a synchronised population of actively dividing cells, enabling simultaneous observation of all mitotic phases. Prophase chromosomes condense from diffuse chromatin; metaphase chromosomes align at the equatorial plate; anaphase sister chromatids segregate poleward; telophase nuclear envelopes reform around daughter nuclei.',
    tags: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    specimenType: 'Plant Meristem',
    preparation: 'Feulgen stain, squash preparation',
  },
  {
    id: 3,
    title: 'Multipolar Neurons',
    subtitle: 'Spinal Cord — Anterior Horn Cells',
    magnification: '400×',
    illumination: 'Brightfield (Silver Stain)',
    accentColor: '#F97316',
    image:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=85&fit=crop',
    description:
      'Silver impregnation (Golgi method) selectively deposits metallic silver on a small percentage of neurons, rendering their complete dendritic arbours visible against an unstained background. Multipolar motor neurons of the anterior horn display large, polygonal cell bodies with prominent Nissl substance (rough ER) and multiple dendrites radiating in all planes.',
    tags: ['Dendrites', 'Axon Hillock', 'Nissl Bodies', 'Synapses'],
    specimenType: 'Neural Tissue',
    preparation: 'Golgi silver impregnation',
  },
  {
    id: 4,
    title: 'Aspergillus niger',
    subtitle: 'Conidiophore & Spore Head',
    magnification: '400×',
    illumination: 'Brightfield',
    accentColor: '#10B981',
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=85&fit=crop',
    description:
      'The conidiophore of Aspergillus niger terminates in a globose vesicle bearing radially arranged phialides (sterigmata), from which chains of melanised conidia (2.5–4 μm) are produced by basipetal succession. This architecture maximises spore dispersal efficiency — a masterpiece of fungal reproductive engineering.',
    tags: ['Conidiophore', 'Vesicle', 'Phialides', 'Conidia'],
    specimenType: 'Filamentous Fungi',
    preparation: 'Lactophenol cotton blue',
  },
  {
    id: 5,
    title: 'Stomatal Complex',
    subtitle: 'Tradescantia — Abaxial Epidermis',
    magnification: '400×',
    illumination: 'Fluorescence (Chlorophyll)',
    accentColor: '#06B6D4',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85&fit=crop',
    description:
      'Guard cells flanking the stomatal pore contain chloroplasts and respond to blue-light photoreceptors (phototropins) by accumulating K⁺ ions, increasing osmotic potential and turgor pressure to open the aperture. Fluorescence imaging exploits chlorophyll autofluorescence to map guard cell distribution across the leaf surface.',
    tags: ['Guard Cells', 'Stomatal Pore', 'Chloroplasts', 'Turgor'],
    specimenType: 'Plant Epidermis',
    preparation: 'Epidermal peel, autofluorescence',
  },
  {
    id: 6,
    title: 'Pollen Grains',
    subtitle: 'Lilium — Exine Architecture',
    magnification: '400×',
    illumination: 'Fluorescence (DAPI)',
    accentColor: '#F97316',
    image:
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=85&fit=crop',
    description:
      'Lily pollen grains exhibit a sculptured exine (outer wall) composed of sporopollenin — one of the most chemically resistant biopolymers known. DAPI fluorescence staining reveals the two haploid nuclei within the mature pollen grain: the vegetative nucleus and the generative nucleus destined to produce two sperm cells.',
    tags: ['Exine', 'Sporopollenin', 'Vegetative Nucleus', 'Apertures'],
    specimenType: 'Plant Reproductive',
    preparation: 'DAPI fluorescence stain',
  },
];

function SlideCard({ slide, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="slide-card relative bg-card-dark border border-subtle rounded-sm overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(slide)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-card-dark/20 to-transparent" />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: `${slide.accentColor}15` }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center border-2"
            style={{ borderColor: slide.accentColor, backgroundColor: `${slide.accentColor}20` }}
          >
            <ZoomIn className="w-5 h-5" style={{ color: slide.accentColor }} />
          </div>
        </div>

        {/* Magnification badge */}
        <div className="absolute top-3 left-3">
          <span
            className="font-mono-lab text-xs px-2 py-1 rounded-sm"
            style={{
              backgroundColor: `${slide.accentColor}20`,
              color: slide.accentColor,
              border: `1px solid ${slide.accentColor}40`,
            }}
          >
            {slide.magnification}
          </span>
        </div>

        {/* Illumination badge */}
        <div className="absolute top-3 right-3">
          <span className="font-mono-lab text-xs px-2 py-1 rounded-sm bg-obsidian/80 text-muted-text border border-subtle">
            {slide.illumination}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-2">
          {slide.specimenType}
        </div>
        <h3 className="font-grotesk font-semibold text-primary-text text-base mb-1">
          {slide.title}
        </h3>
        <p className="font-inter text-secondary-text text-xs leading-relaxed mb-4">
          {slide.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {slide.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono-lab text-xs px-2 py-0.5 border border-subtle text-muted-text rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: slide.accentColor }}
      />
    </div>
  );
}

function SlideModal({ slide, onClose }) {
  if (!slide) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-obsidian/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 bg-charcoal border border-subtle rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-glow-green"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center border border-subtle rounded-sm text-secondary-text hover:text-primary-text hover:border-bio-green transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-full min-h-64">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/40" />

            {/* Badges */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <span
                className="font-mono-lab text-xs px-3 py-1.5 rounded-sm w-fit"
                style={{
                  backgroundColor: `${slide.accentColor}20`,
                  color: slide.accentColor,
                  border: `1px solid ${slide.accentColor}50`,
                }}
              >
                {slide.magnification} Magnification
              </span>
              <span className="font-mono-lab text-xs px-3 py-1.5 rounded-sm w-fit bg-obsidian/80 text-secondary-text border border-subtle">
                {slide.illumination}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-3">
              {slide.specimenType}
            </div>
            <h2 className="font-grotesk font-bold text-primary-text text-2xl mb-1">
              {slide.title}
            </h2>
            <p className="font-inter text-secondary-text text-sm mb-5">{slide.subtitle}</p>

            <div
              className="w-12 h-px mb-5"
              style={{ backgroundColor: slide.accentColor }}
            />

            <p className="font-inter text-secondary-text text-sm leading-relaxed mb-6">
              {slide.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-lab text-xs px-2 py-1 border rounded-sm"
                  style={{
                    borderColor: `${slide.accentColor}40`,
                    color: slide.accentColor,
                    backgroundColor: `${slide.accentColor}10`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Preparation */}
            <div className="p-3 bg-card-dark border border-subtle rounded-sm">
              <div className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-1">
                Preparation Method
              </div>
              <div className="font-inter text-primary-text text-sm">{slide.preparation}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [activeSlide, setActiveSlide] = useState(null);
  const [filter, setFilter] = useState('All');

  const illuminationTypes = ['All', 'Brightfield', 'Darkfield', 'Fluorescence'];

  const filtered =
    filter === 'All'
      ? slides
      : slides.filter((s) => s.illumination.includes(filter));

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <span className="font-mono-lab text-xs text-muted-text tracking-widest uppercase">
          Filter by Illumination:
        </span>
        {illuminationTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`font-mono-lab text-xs px-3 py-1.5 border rounded-sm transition-all duration-300 ${
              filter === type
                ? 'border-bio-green text-bio-green bg-bio-green/10'
                : 'border-subtle text-muted-text hover:border-secondary-text hover:text-secondary-text'
            }`}
          >
            {type}
          </button>
        ))}
        <span className="ml-auto font-mono-lab text-xs text-muted-text">
          {filtered.length} slides
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((slide) => (
          <SlideCard key={slide.id} slide={slide} onOpen={setActiveSlide} />
        ))}
      </div>

      {/* Modal */}
      {activeSlide && (
        <SlideModal slide={activeSlide} onClose={() => setActiveSlide(null)} />
      )}
    </div>
  );
}
