import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SpeciesModal from '../components/species/SpeciesModal.jsx'

const SPECIES = [
  {
    id: 'echeveria',
    titleId: 'sp-echeveria-title',
    descId: 'sp-echeveria-desc',
    imgId: 'sp-img-echeveria-a1b2',
    modalImgId: 'sp-modal-echeveria-c3d4',
    name: 'Echeveria elegans',
    common: 'Mexican Snowball',
    family: 'Crassulaceae',
    origin: 'Mexico',
    desc: 'A compact rosette succulent with pale blue-green leaves edged in pink. Produces arching stems of pink and yellow flowers in spring.',
    detail: 'Leaves are spoon-shaped, fleshy, and covered in a powdery white coating called farina that protects against intense sunlight. The rosette grows to 12 cm in diameter.',
    tags: ['Succulent', 'Rosette', 'Drought-tolerant'],
  },
  {
    id: 'adiantum',
    titleId: 'sp-adiantum-title',
    descId: 'sp-adiantum-desc',
    imgId: 'sp-img-adiantum-e5f6',
    modalImgId: 'sp-modal-adiantum-g7h8',
    name: 'Adiantum capillus-veneris',
    common: 'Maidenhair Fern',
    family: 'Pteridaceae',
    origin: 'Cosmopolitan',
    desc: 'Delicate fan-shaped leaflets on wiry black stems. Thrives in humid, shaded environments near water.',
    detail: 'The fronds are bipinnate with wedge-shaped pinnules. The black, glossy stipes are characteristic of the genus. Spores form along the margins of the pinnules.',
    tags: ['Fern', 'Shade', 'Humid'],
  },
  {
    id: 'sempervivum',
    titleId: 'sp-sempervivum-title',
    descId: 'sp-sempervivum-desc',
    imgId: 'sp-img-sempervivum-i9j0',
    modalImgId: 'sp-modal-sempervivum-k1l2',
    name: 'Sempervivum tectorum',
    common: 'Common Houseleek',
    family: 'Crassulaceae',
    origin: 'Alps, Carpathians',
    desc: 'Hardy rosette succulent that colonises rocky outcrops and rooftops. Produces offsets freely, forming dense mats.',
    detail: 'Leaves are tipped with a fine point and often flushed red or purple at the tips. The name means "always alive" — it survives frost, drought, and neglect.',
    tags: ['Succulent', 'Hardy', 'Alpine'],
  },
  {
    id: 'polytrichum',
    titleId: 'sp-polytrichum-title',
    descId: 'sp-polytrichum-desc',
    imgId: 'sp-img-polytrichum-m3n4',
    modalImgId: 'sp-modal-polytrichum-o5p6',
    name: 'Polytrichum commune',
    common: 'Common Haircap Moss',
    family: 'Polytrichaceae',
    origin: 'Worldwide',
    desc: 'One of the tallest mosses, forming dense, dark green cushions in bogs and woodland floors.',
    detail: 'Stems can reach 40 cm. Leaves have lamellae — rows of photosynthetic cells on the upper surface — that increase surface area for gas exchange.',
    tags: ['Moss', 'Bog', 'Woodland'],
  },
  {
    id: 'aloe-polyphylla',
    titleId: 'sp-aloe-title',
    descId: 'sp-aloe-desc',
    imgId: 'sp-img-aloe-q7r8',
    modalImgId: 'sp-modal-aloe-s9t0',
    name: 'Aloe polyphylla',
    common: 'Spiral Aloe',
    family: 'Asphodelaceae',
    origin: 'Lesotho',
    desc: 'Critically endangered in the wild. Produces a perfect five-armed spiral of up to 150 leaves — always rotating in the same direction.',
    detail: 'The spiral direction (clockwise or counter-clockwise) is genetically determined. Each plant produces exactly 5 rows of leaves. Protected by law in Lesotho.',
    tags: ['Succulent', 'Endangered', 'Spiral'],
  },
  {
    id: 'dryopteris',
    titleId: 'sp-dryopteris-title',
    descId: 'sp-dryopteris-desc',
    imgId: 'sp-img-dryopteris-u1v2',
    modalImgId: 'sp-modal-dryopteris-w3x4',
    name: 'Dryopteris filix-mas',
    common: 'Male Fern',
    family: 'Dryopteridaceae',
    origin: 'Europe, Asia',
    desc: 'A robust, shuttlecock-forming fern with arching, lance-shaped fronds. Common in woodland and hedgerow.',
    detail: 'New fronds emerge as tightly coiled croziers (fiddleheads) in spring, unfurling over several weeks. Sori are kidney-shaped and arranged in two rows on each pinna.',
    tags: ['Fern', 'Woodland', 'Deciduous'],
  },
  {
    id: 'haworthia',
    titleId: 'sp-haworthia-title',
    descId: 'sp-haworthia-desc',
    imgId: 'sp-img-haworthia-y5z6',
    modalImgId: 'sp-modal-haworthia-a7b8',
    name: 'Haworthia fasciata',
    common: 'Zebra Plant',
    family: 'Asphodelaceae',
    origin: 'South Africa',
    desc: 'Small, stemless succulent with dark green leaves banded with white tubercles on the outer surface.',
    detail: 'The white horizontal stripes are formed by raised tubercles — small wart-like projections. Grows in tight rosettes and tolerates low light better than most succulents.',
    tags: ['Succulent', 'Low-light', 'Compact'],
  },
  {
    id: 'sphagnum',
    titleId: 'sp-sphagnum-title',
    descId: 'sp-sphagnum-desc',
    imgId: 'sp-img-sphagnum-c9d0',
    modalImgId: 'sp-modal-sphagnum-e1f2',
    name: 'Sphagnum palustre',
    common: 'Bog Moss',
    family: 'Sphagnaceae',
    origin: 'Northern Hemisphere',
    desc: 'The peat-forming moss that has shaped entire landscapes. Can hold up to 20 times its dry weight in water.',
    detail: 'Leaves consist of two cell types: living chlorophyllose cells and dead hyaline cells with pores that absorb water. Acidifies its environment, creating unique bog ecosystems.',
    tags: ['Moss', 'Bog', 'Peat'],
  },
  {
    id: 'agave',
    titleId: 'sp-agave-title',
    descId: 'sp-agave-desc',
    imgId: 'sp-img-agave-g3h4',
    modalImgId: 'sp-modal-agave-i5j6',
    name: 'Agave americana',
    common: 'Century Plant',
    family: 'Asparagaceae',
    origin: 'Mexico',
    desc: 'Monumental rosette of grey-green leaves armed with terminal spines. Flowers once after decades of growth, then dies.',
    detail: 'The flowering stalk can reach 8 metres in a matter of weeks. After flowering, the main plant dies but produces offsets (pups) that continue the colony.',
    tags: ['Succulent', 'Monocarpic', 'Arid'],
  },
  {
    id: 'asplenium',
    titleId: 'sp-asplenium-title',
    descId: 'sp-asplenium-desc',
    imgId: 'sp-img-asplenium-k7l8',
    modalImgId: 'sp-modal-asplenium-m9n0',
    name: 'Asplenium nidus',
    common: "Bird's Nest Fern",
    family: 'Aspleniaceae',
    origin: 'Tropical Asia',
    desc: 'Broad, strap-like fronds radiating from a central nest of fibrous roots. An epiphyte of tropical rainforest canopies.',
    detail: 'Unlike most ferns, fronds are simple and undivided. The central "nest" collects leaf litter and moisture. Sori run in parallel lines along the midrib.',
    tags: ['Fern', 'Epiphyte', 'Tropical'],
  },
  {
    id: 'crassula',
    titleId: 'sp-crassula-title',
    descId: 'sp-crassula-desc',
    imgId: 'sp-img-crassula-o1p2',
    modalImgId: 'sp-modal-crassula-q3r4',
    name: 'Crassula ovata',
    common: 'Jade Plant',
    family: 'Crassulaceae',
    origin: 'South Africa',
    desc: 'Long-lived succulent shrub with thick, glossy, oval leaves. Produces clusters of star-shaped pink flowers in winter.',
    detail: 'Can live for decades, eventually forming a small tree. Leaves store water and turn red at the margins when stressed by drought or cold. A symbol of good fortune in many cultures.',
    tags: ['Succulent', 'Shrub', 'Long-lived'],
  },
  {
    id: 'marchantia',
    titleId: 'sp-marchantia-title',
    descId: 'sp-marchantia-desc',
    imgId: 'sp-img-marchantia-s5t6',
    modalImgId: 'sp-modal-marchantia-u7v8',
    name: 'Marchantia polymorpha',
    common: 'Common Liverwort',
    family: 'Marchantiaceae',
    origin: 'Worldwide',
    desc: 'A flat, ribbon-like liverwort with a distinctive diamond-patterned upper surface. Colonises damp, disturbed ground.',
    detail: 'One of the earliest land plants. Reproduces both sexually (via umbrella-like structures) and asexually (via gemmae cups that splash-disperse tiny clones).',
    tags: ['Liverwort', 'Pioneer', 'Damp'],
  },
];

export default function SpeciesIndex() {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <div ref={containerRef} className="min-h-screen bg-clay">
      {/* Header */}
      <section className="pt-40 pb-16 px-8 md:px-16 max-w-[1440px] mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase text-sage mb-4">
          Species Index
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-ink leading-tight">
          A living catalogue
        </h1>
        <p className="font-sans text-sm text-muted-ink leading-relaxed mt-4 max-w-[480px]">
          Select any specimen to reveal its full morphological record.
          Each circle is a window into a world of pattern.
        </p>
        <div className="mt-10 h-px bg-divider" />
      </section>

      {/* Circular grid */}
      <section className="px-8 md:px-16 max-w-[1440px] mx-auto pb-32">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
          {SPECIES.map((sp) => (
            <SpeciesCircle
              key={sp.id}
              species={sp}
              onClick={() => setSelected(sp)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <SpeciesModal species={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function SpeciesCircle({ species, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-3 focus:outline-none"
      aria-label={`View ${species.name}`}
    >
      {/* Circle container using CSS clip + SVG ring overlay */}
      <div
        className="relative w-full transition-transform duration-500 ease-natural group-hover:scale-105"
        style={{ aspectRatio: '1/1' }}
      >
        {/* Image clipped to circle via CSS */}
        <div className="absolute inset-0 rounded-full overflow-hidden bg-parchment">
          <img
            data-strk-img-id={species.imgId}
            data-strk-img={`[${species.descId}] [${species.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="320"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23EDE6D6' width='1' height='1'/%3E%3C/svg%3E"
            alt={species.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* SVG ring overlay for sharp border */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <circle
            cx="50" cy="50" r="49"
            fill="none"
            stroke="#D8D0C0"
            strokeWidth="0.8"
            className="transition-all duration-500 group-hover:stroke-sage"
            style={{ stroke: 'var(--ring-color, #D8D0C0)' }}
          />
        </svg>

        {/* Hover tint */}
        <div className="absolute inset-0 rounded-full bg-deep-sage/0 group-hover:bg-deep-sage/10 transition-colors duration-400" />

        {/* Hidden text for image query interpolation */}
        <span id={species.titleId} className="sr-only">{species.name}</span>
        <span id={species.descId} className="sr-only">{species.desc}</span>
      </div>

      <div className="text-center">
        <p className="font-serif text-sm font-light text-ink leading-tight italic">
          {species.name.split(' ')[0]}
        </p>
        <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mt-0.5">
          {species.common}
        </p>
      </div>
    </button>
  );
}
