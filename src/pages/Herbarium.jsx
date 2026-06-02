import { useState, useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CATEGORIES = ['All', 'Succulents', 'Ferns', 'Moss', 'Liverworts', 'Cacti'];

const SPECIMENS = [
  {
    id: 'herb-echeveria',
    titleId: 'herb-echeveria-title',
    descId: 'herb-echeveria-desc',
    imgId: 'herb-img-echeveria-a1b2',
    name: 'Echeveria subsessilis',
    category: 'Succulents',
    collected: '14 March 2024',
    location: 'Oaxaca, Mexico',
    altitude: '1,800 m',
    collector: 'M. Vásquez',
    desc: 'Compact rosette with glaucous blue-green leaves. Margins flushed coral in high light.',
    notes: 'Found growing in rocky limestone outcrops alongside Sedum species.',
  },
  {
    id: 'herb-polypodium',
    titleId: 'herb-polypodium-title',
    descId: 'herb-polypodium-desc',
    imgId: 'herb-img-polypodium-c3d4',
    name: 'Polypodium vulgare',
    category: 'Ferns',
    collected: '3 June 2023',
    location: 'Dartmoor, England',
    altitude: '420 m',
    collector: 'R. Ashworth',
    desc: 'Evergreen fern with deeply pinnatifid fronds. Rhizomes creep across mossy boulders.',
    notes: 'Fronds persist through winter. Sori round, without indusia, arranged in single rows.',
  },
  {
    id: 'herb-sphagnum',
    titleId: 'herb-sphagnum-title',
    descId: 'herb-sphagnum-desc',
    imgId: 'herb-img-sphagnum-e5f6',
    name: 'Sphagnum capillifolium',
    category: 'Moss',
    collected: '22 September 2023',
    location: 'Cairngorms, Scotland',
    altitude: '680 m',
    collector: 'F. MacLeod',
    desc: 'Red-tinged bog moss forming dense hummocks. Capitulum compact and rounded.',
    notes: 'Dominant species in raised bog communities. Colour intensifies in exposed, nutrient-poor conditions.',
  },
  {
    id: 'herb-aloe',
    titleId: 'herb-aloe-title',
    descId: 'herb-aloe-desc',
    imgId: 'herb-img-aloe-g7h8',
    name: 'Aloe aristata',
    category: 'Succulents',
    collected: '8 January 2024',
    location: 'Lesotho Highlands',
    altitude: '2,100 m',
    collector: 'T. Mokoena',
    desc: 'Stemless rosette with dark green, white-spotted leaves ending in soft white spines.',
    notes: 'Tolerates frost to −5°C. Produces orange tubular flowers attractive to sunbirds.',
  },
  {
    id: 'herb-marchantia',
    titleId: 'herb-marchantia-title',
    descId: 'herb-marchantia-desc',
    imgId: 'herb-img-marchantia-i9j0',
    name: 'Marchantia polymorpha',
    category: 'Liverworts',
    collected: '17 April 2024',
    location: 'Black Forest, Germany',
    altitude: '340 m',
    collector: 'H. Brandt',
    desc: 'Flat thallus with distinctive hexagonal patterning. Gemmae cups visible on upper surface.',
    notes: 'Pioneer species on disturbed, damp ground. Gemmae cups splash-disperse clonal propagules.',
  },
  {
    id: 'herb-nephrolepis',
    titleId: 'herb-nephrolepis-title',
    descId: 'herb-nephrolepis-desc',
    imgId: 'herb-img-nephrolepis-k1l2',
    name: 'Nephrolepis exaltata',
    category: 'Ferns',
    collected: '5 February 2024',
    location: 'Costa Rica',
    altitude: '200 m',
    collector: 'C. Jiménez',
    desc: 'Arching, pinnate fronds up to 90 cm. Pinnae numerous, closely spaced, bright green.',
    notes: 'Epiphytic in humid forest. Produces stolons that root at nodes to form new plants.',
  },
  {
    id: 'herb-ferocactus',
    titleId: 'herb-ferocactus-title',
    descId: 'herb-ferocactus-desc',
    imgId: 'herb-img-ferocactus-m3n4',
    name: 'Ferocactus wislizeni',
    category: 'Cacti',
    collected: '30 October 2023',
    location: 'Sonoran Desert, Arizona',
    altitude: '760 m',
    collector: 'D. Navarro',
    desc: 'Barrel cactus with prominent ribs and hooked central spines. Produces yellow-orange flowers at crown.',
    notes: 'Leans south-west — used as a compass by desert travellers. Ribs expand to store water after rain.',
  },
  {
    id: 'herb-dicranum',
    titleId: 'herb-dicranum-title',
    descId: 'herb-dicranum-desc',
    imgId: 'herb-img-dicranum-o5p6',
    name: 'Dicranum scoparium',
    category: 'Moss',
    collected: '11 August 2023',
    location: 'Białowieża Forest, Poland',
    altitude: '160 m',
    collector: 'A. Kowalski',
    desc: 'Broom moss with leaves swept to one side, forming distinctive tufts on forest floor.',
    notes: 'Indicator of ancient woodland. Leaves have a single costa and are strongly falcate-secund.',
  },
  {
    id: 'herb-gasteria',
    titleId: 'herb-gasteria-title',
    descId: 'herb-gasteria-desc',
    imgId: 'herb-img-gasteria-q7r8',
    name: 'Gasteria batesiana',
    category: 'Succulents',
    collected: '19 May 2024',
    location: 'KwaZulu-Natal, South Africa',
    altitude: '900 m',
    collector: 'N. Dlamini',
    desc: 'Distichous succulent with dark green, white-spotted leaves arranged in two opposite rows.',
    notes: 'Shade-tolerant. Stomach-shaped flowers (hence Gasteria) are pollinated by sunbirds.',
  },
  {
    id: 'herb-osmunda',
    titleId: 'herb-osmunda-title',
    descId: 'herb-osmunda-desc',
    imgId: 'herb-img-osmunda-s9t0',
    name: 'Osmunda regalis',
    category: 'Ferns',
    collected: '28 July 2023',
    location: 'Killarney, Ireland',
    altitude: '30 m',
    collector: 'S. O\'Brien',
    desc: 'Royal fern with bipinnate sterile fronds and distinctive fertile pinnae at frond tips.',
    notes: 'Can live for centuries. Osmunda fibre (from roots) used as orchid growing medium.',
  },
  {
    id: 'herb-pellia',
    titleId: 'herb-pellia-title',
    descId: 'herb-pellia-desc',
    imgId: 'herb-img-pellia-u1v2',
    name: 'Pellia epiphylla',
    category: 'Liverworts',
    collected: '2 March 2024',
    location: 'Brecon Beacons, Wales',
    altitude: '280 m',
    collector: 'G. Evans',
    desc: 'Smooth, dark green thallus without midrib. Forms dense mats on stream banks.',
    notes: 'Sporophytes emerge in early spring on long, pale seta. Capsules split into four valves.',
  },
  {
    id: 'herb-opuntia',
    titleId: 'herb-opuntia-title',
    descId: 'herb-opuntia-desc',
    imgId: 'herb-img-opuntia-w3x4',
    name: 'Opuntia microdasys',
    category: 'Cacti',
    collected: '14 November 2023',
    location: 'Chihuahuan Desert, Mexico',
    altitude: '1,400 m',
    collector: 'L. Hernández',
    desc: 'Bunny ears cactus with flat, oval pads covered in dense clusters of golden glochids.',
    notes: 'Glochids detach easily and are difficult to remove from skin. Produces yellow flowers in summer.',
  },
];

export default function Herbarium() {
  const [activeTag, setActiveTag] = useState('All');
  const containerRef = useRef(null);

  const filtered = activeTag === 'All'
    ? SPECIMENS
    : SPECIMENS.filter(s => s.category === activeTag);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeTag])

  return (
    <div ref={containerRef} className="min-h-screen bg-clay">
      {/* Header */}
      <section className="pt-40 pb-12 px-8 md:px-16 max-w-[1440px] mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase text-sage mb-4">
          Herbarium
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-ink leading-tight">
          Digital Archive
        </h1>
        <p className="font-sans text-sm text-muted-ink leading-relaxed mt-4 max-w-[480px]">
          A systematic record of collected specimens. Each entry documents
          provenance, morphology, and field observations.
        </p>

        {/* Tag navigation */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTag(cat)}
              className={`font-sans text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                activeTag === cat
                  ? 'bg-sage text-clay border-sage'
                  : 'bg-transparent text-muted-ink border-divider hover:border-sage hover:text-sage'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 h-px bg-divider" />
      </section>

      {/* Archive grid */}
      <section
        className="px-8 md:px-16 max-w-[1440px] mx-auto pb-32"
      >
        {/* Column headers */}
        <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 pb-3 border-b border-divider mb-0">
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink">Specimen</p>
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink">Location</p>
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink">Collected</p>
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink">Collector</p>
        </div>

        <div>
          {filtered.map((sp, i) => (
            <HerbariumRow key={sp.id} specimen={sp} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-sans text-sm text-muted-ink py-16 text-center">
            No specimens in this category.
          </p>
        )}
      </section>
    </div>
  );
}

function HerbariumRow({ specimen, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-divider">
      {/* Main row */}
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full text-left py-5 group"
        aria-expanded={expanded}
      >
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 items-start">
          {/* Specimen name + category */}
          <div className="flex items-start gap-4">
            <span className="font-sans text-[10px] tracking-widest uppercase text-muted-ink w-6 shrink-0 pt-0.5 hidden md:block">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p
                id={specimen.titleId}
                className="font-serif text-lg font-light text-ink italic group-hover:text-sage transition-colors duration-300"
              >
                {specimen.name}
              </p>
              <span className="font-sans text-[10px] tracking-widest uppercase text-sage mt-0.5 inline-block">
                {specimen.category}
              </span>
            </div>
          </div>

          {/* Location */}
          <p className="font-sans text-sm text-muted-ink hidden md:block pt-0.5">
            {specimen.location}
          </p>

          {/* Date */}
          <p className="font-sans text-sm text-muted-ink hidden md:block pt-0.5">
            {specimen.collected}
          </p>

          {/* Collector + expand indicator */}
          <div className="hidden md:flex items-center justify-between pt-0.5">
            <p className="font-sans text-sm text-muted-ink">{specimen.collector}</p>
            <span
              className={`font-sans text-xs text-muted-ink transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            >
              ↓
            </span>
          </div>

          {/* Mobile: show location inline */}
          <p className="font-sans text-xs text-muted-ink md:hidden col-span-full pl-0">
            {specimen.location} · {specimen.collected}
          </p>
        </div>
      </button>

      {/* Expanded detail */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-natural ${
          expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 pl-0 md:pl-10">
          {/* Thumbnail */}
          <div className="w-full md:w-48 shrink-0 bg-parchment overflow-hidden">
            <img
              data-strk-img-id={specimen.imgId}
              data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              alt={specimen.name}
              className="w-full h-auto object-cover block"
              style={{ aspectRatio: '4/3' }}
            />
          </div>

          {/* Details */}
          <div>
            <p id={specimen.descId} className="font-sans text-sm text-muted-ink leading-relaxed max-w-[560px]">
              {specimen.desc}
            </p>
            <div className="mt-4 pt-4 border-t border-divider">
              <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mb-2">
                Field Notes
              </p>
              <p className="font-sans text-sm text-ink leading-relaxed max-w-[560px]">
                {specimen.notes}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mb-1">Altitude</p>
                <p className="font-sans text-sm text-ink">{specimen.altitude}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mb-1">Category</p>
                <p className="font-sans text-sm text-ink">{specimen.category}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mb-1">Collector</p>
                <p className="font-sans text-sm text-ink">{specimen.collector}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mb-1">Date</p>
                <p className="font-sans text-sm text-ink">{specimen.collected}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
