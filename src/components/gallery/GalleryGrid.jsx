import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Diatom Frustules',
    subtitle: 'Bacillariophyta — Silica Architecture',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85&fit=crop',
    magnification: '400×',
    illumination: 'Darkfield',
    color: '#10B981',
    tags: ['Silica', 'Symmetry', 'Frustule'],
    description:
      'Diatom frustules are intricate silica (SiO₂) cell walls exhibiting bilateral or radial symmetry with nanoscale pore arrays (areolae). These photonic structures produce iridescent structural coloration and serve as natural diffraction gratings. The frustule consists of two overlapping valves (epitheca and hypotheca) joined by girdle bands.',
    details: [
      { label: 'Cell Size', value: '2–500 μm' },
      { label: 'Wall Composition', value: 'Amorphous SiO₂' },
      { label: 'Pore Diameter', value: '30–300 nm' },
      { label: 'Symmetry', value: 'Bilateral / Radial' },
    ],
  },
  {
    id: 2,
    title: 'Mitosis — Onion Root Tip',
    subtitle: 'Allium cepa — Cell Division Stages',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=85&fit=crop',
    magnification: '1000×',
    illumination: 'Brightfield',
    color: '#06B6D4',
    tags: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    description:
      'The onion root tip meristem is a classical model for observing mitosis due to its large chromosomes (2n=16) and rapid cell division rate. Acetocarmine or crystal violet staining reveals condensed chromosomes at each stage. The metaphase plate, anaphase chromosome separation, and telophase nuclear reformation are clearly distinguishable in a single field of view.',
    details: [
      { label: 'Chromosome No.', value: '2n = 16' },
      { label: 'Cell Cycle Time', value: '~12–24 hours' },
      { label: 'Stain', value: 'Acetocarmine' },
      { label: 'Tissue Type', value: 'Apical Meristem' },
    ],
  },
  {
    id: 3,
    title: 'Multipolar Neurons',
    subtitle: 'Golgi-Stained Neural Architecture',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=85&fit=crop',
    magnification: '100×',
    illumination: 'Brightfield',
    color: '#8B5CF6',
    tags: ['Dendrites', 'Axon', 'Soma', 'Synapse'],
    description:
      'Silver-based Golgi staining (Golgi-Cox method) impregnates a sparse, random subset of neurons (~1–5%), rendering their complete morphology in stark black against a pale background. This technique, developed by Camillo Golgi and refined by Ramón y Cajal, reveals the full dendritic arbor, axon hillock, and initial axon segment of multipolar neurons with extraordinary clarity.',
    details: [
      { label: 'Soma Diameter', value: '10–100 μm' },
      { label: 'Dendrite Span', value: 'Up to 1 mm' },
      { label: 'Stain', value: 'Golgi-Cox Silver' },
      { label: 'Impregnation', value: '~1–5% of cells' },
    ],
  },
  {
    id: 4,
    title: 'Aspergillus niger',
    subtitle: 'Conidiophore & Spore Release',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=85&fit=crop',
    magnification: '400×',
    illumination: 'Brightfield',
    color: '#F97316',
    tags: ['Conidiophore', 'Conidia', 'Vesicle', 'Phialides'],
    description:
      'Aspergillus niger produces a characteristic radiate conidiophore head: a long, thick-walled stipe terminates in a globose vesicle bearing two rows of phialides (biseriate arrangement) that generate chains of dark brown to black conidia (2.5–5 μm). The resulting structure resembles a dandelion or aspergillum (holy water sprinkler), from which the genus derives its name.',
    details: [
      { label: 'Conidium Size', value: '2.5–5 μm' },
      { label: 'Stipe Length', value: '400–3000 μm' },
      { label: 'Vesicle Ø', value: '30–75 μm' },
      { label: 'Arrangement', value: 'Biseriate' },
    ],
  },
  {
    id: 5,
    title: 'Volvox Colony',
    subtitle: 'Chlorophyta — Colonial Flagellate',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=85&fit=crop',
    magnification: '100×',
    illumination: 'Fluorescence',
    color: '#10B981',
    tags: ['Colony', 'Daughter Cells', 'Flagella', 'Phototaxis'],
    description:
      'Volvox forms hollow spherical colonies of 500–50,000 biflagellate cells embedded in a gelatinous extracellular matrix. Somatic cells are interconnected by cytoplasmic bridges enabling coordinated flagellar beating for phototactic swimming. Reproductive gonidia differentiate into daughter colonies visible as smaller spheres within the parent colony — a model system for the evolution of multicellularity.',
    details: [
      { label: 'Colony Diameter', value: '100–500 μm' },
      { label: 'Cell Count', value: '500–50,000' },
      { label: 'Flagella/Cell', value: '2' },
      { label: 'Chlorophyll', value: 'a & b' },
    ],
  },
  {
    id: 6,
    title: 'Pollen Grains',
    subtitle: 'Angiosperm Sporopollenin Architecture',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85&fit=crop',
    magnification: '400×',
    illumination: 'Fluorescence',
    color: '#F97316',
    tags: ['Exine', 'Apertures', 'Sporopollenin', 'Palynology'],
    description:
      'Pollen grain walls (sporoderm) consist of an outer exine of sporopollenin — one of the most chemically resistant biopolymers known — and an inner intine of cellulose and pectin. Exine sculpturing (reticulate, echinate, psilate patterns) is species-specific and forms the basis of palynological identification. Apertures (colpi, pores) facilitate pollen tube emergence during germination.',
    details: [
      { label: 'Grain Size', value: '5–200 μm' },
      { label: 'Wall Layer', value: 'Sporopollenin' },
      { label: 'Aperture Type', value: 'Colporate / Porate' },
      { label: 'Viability', value: 'Hours to millennia' },
    ],
  },
];

const illuminationColors = {
  Brightfield: '#94A3B8',
  Darkfield: '#06B6D4',
  Fluorescence: '#10B981',
  'Phase-Contrast': '#8B5CF6',
};

const SlideCard = ({ slide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const illumColor = illuminationColors[slide.illumination] || '#94A3B8';

  return (
    <>
      <div
        className="slide-card group relative rounded-2xl overflow-hidden border border-border-dim bg-charcoal cursor-pointer hover:shadow-card-hover"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-charcoal/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <ZoomIn className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ color: slide.color, backgroundColor: `${slide.color}20` }}>
              {slide.magnification}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ color: illumColor, backgroundColor: `${illumColor}15` }}>
              {slide.illumination}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="font-mono text-[10px] text-text-muted">#{String(slide.id).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-text-primary font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">{slide.title}</h3>
          <p className="text-text-muted text-xs mb-3 font-mono">{slide.subtitle}</p>
          <div className="flex flex-wrap gap-1.5">
            {slide.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="font-mono text-[9px] tracking-wide px-1.5 py-0.5 rounded border"
                style={{ color: `${slide.color}BB`, borderColor: `${slide.color}20`, backgroundColor: `${slide.color}08` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: slide.color }} />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-md" onClick={() => setIsOpen(false)}>
          <div className="relative w-full max-w-3xl bg-charcoal rounded-2xl border border-border-dim shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-charcoal-light border border-border-dim flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </button>
            <div className="relative h-64 overflow-hidden">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute bottom-4 left-5 flex gap-2">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full" style={{ color: slide.color, backgroundColor: `${slide.color}20` }}>
                  {slide.magnification}
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full" style={{ color: illumColor, backgroundColor: `${illumColor}15` }}>
                  {slide.illumination}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: slide.color }}>{slide.subtitle}</div>
              <h2 className="text-text-primary font-bold text-xl mb-4">{slide.title}</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">{slide.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {slide.details.map(({ label, value }) => (
                  <div key={label} className="rounded-xl p-3 border border-border-dim bg-charcoal-light text-center">
                    <div className="font-mono text-xs font-medium" style={{ color: slide.color }}>{value}</div>
                    <div className="text-text-muted text-[10px] mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full border"
                    style={{ color: `${slide.color}CC`, borderColor: `${slide.color}25`, backgroundColor: `${slide.color}08` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const GalleryGrid = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Brightfield', 'Darkfield', 'Fluorescence'];
  const filtered = filter === 'All' ? slides : slides.filter((s) => s.illumination === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              filter === f
                ? 'bg-bio-green text-obsidian border-bio-green'
                : 'border-border-dim text-text-secondary hover:border-bio-green/30 hover:text-text-primary'
            }`}>
            {f !== 'All' && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: illuminationColors[f] || '#94A3B8' }} />}
            {f}
          </button>
        ))}
        <span className="ml-auto font-mono text-[11px] text-text-muted self-center">
          {filtered.length} slide{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((slide) => (
          <SlideCard key={slide.id} slide={slide} />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
