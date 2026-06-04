import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Lightbox from '@/components/Lightbox';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

const SLIDES = [
  {
    id: 'slide-01',
    title: 'Radiolarian Skeleton',
    species: 'Acantharia sp.',
    specimenId: 'RAD-2024-001',
    magnification: '400x',
    collector: 'Dr. Helena Voss',
    date: '14 March 2024',
    stain: 'Unstained — Darkfield Illumination',
    notes: 'The geometric perfection of this siliceous skeleton never ceases to amaze. Each spine radiates with mathematical precision, a testament to the biomineralization processes of these ancient protists.',
    titleId: 'gallery-slide-01-title',
    descId: 'gallery-slide-01-desc',
    imgId: 'gallery-slide-01-thumb-a1b2',
  },
  {
    id: 'slide-02',
    title: 'Diatom Frustule',
    species: 'Navicula lyra',
    specimenId: 'DIA-2024-017',
    magnification: '630x',
    collector: 'Prof. Marcus Chen',
    date: '28 January 2024',
    stain: 'Unstained — Phase Contrast',
    notes: 'The intricate areolae patterns on this pennate diatom frustule display remarkable symmetry. Collected from freshwater sediment in Lake Baikal.',
    titleId: 'gallery-slide-02-title',
    descId: 'gallery-slide-02-desc',
    imgId: 'gallery-slide-02-thumb-c3d4',
  },
  {
    id: 'slide-03',
    title: 'Onion Root Tip — Mitosis',
    species: 'Allium cepa',
    specimenId: 'PLA-2024-042',
    magnification: '400x',
    collector: 'Dr. Sarah Nakamura',
    date: '05 February 2024',
    stain: 'Acetocarmine',
    notes: 'A classic preparation for observing the stages of mitosis. Several cells in anaphase are visible, with chromosomes clearly separating toward opposite poles.',
    titleId: 'gallery-slide-03-title',
    descId: 'gallery-slide-03-desc',
    imgId: 'gallery-slide-03-thumb-e5f6',
  },
  {
    id: 'slide-04',
    title: 'Stentor coeruleus',
    species: 'Stentor coeruleus',
    specimenId: 'PRO-2024-008',
    magnification: '200x',
    collector: 'Dr. Helena Voss',
    date: '22 March 2024',
    stain: 'Unstained — Brightfield',
    notes: 'One of the largest single-celled organisms known. The characteristic trumpet shape and the beaded macronucleus are clearly visible in this living specimen.',
    titleId: 'gallery-slide-04-title',
    descId: 'gallery-slide-04-desc',
    imgId: 'gallery-slide-04-thumb-g7h8',
  },
  {
    id: 'slide-05',
    title: 'Cardiac Muscle — Intercalated Discs',
    species: 'Homo sapiens',
    specimenId: 'HUM-2024-023',
    magnification: '400x',
    collector: 'Prof. Marcus Chen',
    date: '10 April 2024',
    stain: 'Hematoxylin & Eosin',
    notes: 'The branching pattern of cardiac myocytes and the prominent intercalated discs are exquisitely preserved. Note the central nuclei and striations.',
    titleId: 'gallery-slide-05-title',
    descId: 'gallery-slide-05-desc',
    imgId: 'gallery-slide-05-thumb-i9j0',
  },
  {
    id: 'slide-06',
    title: 'Volvox globator Colony',
    species: 'Volvox globator',
    specimenId: 'PRO-2024-031',
    magnification: '100x',
    collector: 'Dr. Sarah Nakamura',
    date: '19 February 2024',
    stain: 'Unstained — Darkfield',
    notes: 'A stunning spherical colony of Volvox containing daughter colonies within. The coordinated flagellar movement of somatic cells is mesmerizing.',
    titleId: 'gallery-slide-06-title',
    descId: 'gallery-slide-06-desc',
    imgId: 'gallery-slide-06-thumb-k1l2',
  },
  {
    id: 'slide-07',
    title: 'Leaf Epidermis — Stomata',
    species: 'Tradescantia zebrina',
    specimenId: 'PLA-2024-055',
    magnification: '200x',
    collector: 'Dr. Helena Voss',
    date: '30 March 2024',
    stain: 'Unstained — Whole Mount',
    notes: 'The guard cells flanking each stoma are beautifully turgid in this preparation. The purple pigmentation of the epidermal cells adds a painterly quality.',
    titleId: 'gallery-slide-07-title',
    descId: 'gallery-slide-07-desc',
    imgId: 'gallery-slide-07-thumb-m3n4',
  },
  {
    id: 'slide-08',
    title: 'Human Cerebellum — Purkinje Cells',
    species: 'Homo sapiens',
    specimenId: 'HUM-2024-041',
    magnification: '200x',
    collector: 'Prof. Marcus Chen',
    date: '02 May 2024',
    stain: 'Golgi Silver Impregnation',
    notes: 'The elaborate dendritic arbor of Purkinje cells is rendered in exquisite detail by the Golgi method. These cells form the sole output of the cerebellar cortex.',
    titleId: 'gallery-slide-08-title',
    descId: 'gallery-slide-08-desc',
    imgId: 'gallery-slide-08-thumb-o5p6',
  },
  {
    id: 'slide-09',
    title: 'Euglena gracilis',
    species: 'Euglena gracilis',
    specimenId: 'PRO-2024-019',
    magnification: '400x',
    collector: 'Dr. Sarah Nakamura',
    date: '15 January 2024',
    stain: 'Unstained — Phase Contrast',
    notes: 'The single flagellum, eyespot (stigma), and numerous chloroplasts are all visible in this actively swimming specimen. A bridge between plant and animal kingdoms.',
    titleId: 'gallery-slide-09-title',
    descId: 'gallery-slide-09-desc',
    imgId: 'gallery-slide-09-thumb-q7r8',
  },
  {
    id: 'slide-10',
    title: 'Paramecium — Silverline System',
    species: 'Paramecium caudatum',
    specimenId: 'PRO-2024-052',
    magnification: '400x',
    collector: 'Prof. Marcus Chen',
    date: '08 May 2024',
    stain: 'Silver Nitrate Impregnation',
    notes: 'The silverline system reveals the hexagonal cortical units and the precise arrangement of trichocysts. This staining method was perfected by Klein in the 1920s.',
    titleId: 'gallery-slide-10-title',
    descId: 'gallery-slide-10-desc',
    imgId: 'gallery-slide-10-thumb-s9t0',
  },
  {
    id: 'slide-11',
    title: 'Human Blood Smear',
    species: 'Homo sapiens',
    specimenId: 'HUM-2024-058',
    magnification: '630x',
    collector: 'Dr. Helena Voss',
    date: '23 April 2024',
    stain: "Wright's Stain",
    notes: 'Erythrocytes dominate the field, with a single neutrophil and two lymphocytes visible. The biconcave disc morphology of red blood cells is beautifully preserved.',
    titleId: 'gallery-slide-11-title',
    descId: 'gallery-slide-11-desc',
    imgId: 'gallery-slide-11-thumb-u1v2',
  },
  {
    id: 'slide-12',
    title: 'Spirogyra — Conjugation',
    species: 'Spirogyra sp.',
    specimenId: 'PLA-2024-063',
    magnification: '200x',
    collector: 'Dr. Sarah Nakamura',
    date: '17 March 2024',
    stain: 'Unstained — Brightfield',
    notes: 'Two filaments aligned in conjugation, with conjugation tubes forming between adjacent cells. The spiral chloroplasts, for which Spirogyra is named, are especially prominent.',
    titleId: 'gallery-slide-12-title',
    descId: 'gallery-slide-12-desc',
    imgId: 'gallery-slide-12-thumb-w3x4',
  },
  {
    id: 'slide-13',
    title: 'Foraminifera — Calcareous Test',
    species: 'Globigerina bulloides',
    specimenId: 'PRO-2024-071',
    magnification: '200x',
    collector: 'Dr. Helena Voss',
    date: '12 February 2024',
    stain: 'Unstained — Darkfield',
    notes: 'The multi-chambered calcareous test of this planktonic foraminiferan is a work of natural architecture. Each chamber is added in a logarithmic spiral during growth.',
    titleId: 'gallery-slide-13-title',
    descId: 'gallery-slide-13-desc',
    imgId: 'gallery-slide-13-thumb-y5z6',
  },
  {
    id: 'slide-14',
    title: 'Motor Neuron — Nissl Bodies',
    species: 'Bos taurus',
    specimenId: 'HUM-2024-066',
    magnification: '400x',
    collector: 'Prof. Marcus Chen',
    date: '29 May 2024',
    stain: 'Cresyl Violet',
    notes: 'Large multipolar motor neuron from the spinal cord showing characteristic Nissl bodies (rough ER) in the perikaryon. The axon hillock is clearly distinguishable.',
    titleId: 'gallery-slide-14-title',
    descId: 'gallery-slide-14-desc',
    imgId: 'gallery-slide-14-thumb-a7b8',
  },
  {
    id: 'slide-15',
    title: 'Amoeba proteus — Pseudopodia',
    species: 'Amoeba proteus',
    specimenId: 'PRO-2024-083',
    magnification: '200x',
    collector: 'Dr. Sarah Nakamura',
    date: '03 April 2024',
    stain: 'Unstained — Phase Contrast',
    notes: 'Captured mid-locomotion, this amoeba extends lobose pseudopodia with visible cytoplasmic streaming. The contractile vacuole and numerous food vacuoles are prominent.',
    titleId: 'gallery-slide-15-title',
    descId: 'gallery-slide-15-desc',
    imgId: 'gallery-slide-15-thumb-c9d0',
  },
  {
    id: 'slide-16',
    title: 'Dicot Stem — Vascular Bundles',
    species: 'Helianthus annuus',
    specimenId: 'PLA-2024-078',
    magnification: '100x',
    collector: 'Dr. Helena Voss',
    date: '19 May 2024',
    stain: 'Safranin & Fast Green',
    notes: 'Transverse section showing the characteristic ring arrangement of vascular bundles. Xylem stains red with safranin; phloem and cortex stain blue-green with fast green.',
    titleId: 'gallery-slide-16-title',
    descId: 'gallery-slide-16-desc',
    imgId: 'gallery-slide-16-thumb-e1f2',
  },
  {
    id: 'slide-17',
    title: 'Penicillium — Conidiophores',
    species: 'Penicillium chrysogenum',
    specimenId: 'FUN-2024-005',
    magnification: '400x',
    collector: 'Prof. Marcus Chen',
    date: '26 March 2024',
    stain: 'Lactophenol Cotton Blue',
    notes: 'The characteristic brush-shaped conidiophores are unmistakable. Chains of conidia radiate from each phialide like delicate beaded necklaces.',
    titleId: 'gallery-slide-17-title',
    descId: 'gallery-slide-17-desc',
    imgId: 'gallery-slide-17-thumb-g3h4',
  },
  {
    id: 'slide-18',
    title: 'Lily Anther — Meiosis I',
    species: 'Lilium longiflorum',
    specimenId: 'PLA-2024-089',
    magnification: '400x',
    collector: 'Dr. Sarah Nakamura',
    date: '07 May 2024',
    stain: 'Acetocarmine',
    notes: 'Cross-section through a pollen sac showing multiple meiocytes in various stages of prophase I. Chiasmata are visible in several cells during diplotene.',
    titleId: 'gallery-slide-18-title',
    descId: 'gallery-slide-18-desc',
    imgId: 'gallery-slide-18-thumb-i5j6',
  },
  {
    id: 'slide-19',
    title: 'Skeletal Muscle — Sarcomeres',
    species: 'Homo sapiens',
    specimenId: 'HUM-2024-072',
    magnification: '630x',
    collector: 'Dr. Helena Voss',
    date: '15 April 2024',
    stain: 'Iron Hematoxylin',
    notes: 'Longitudinal section showing the characteristic cross-striations of skeletal muscle. Individual A-bands and I-bands are resolvable, with Z-lines marking sarcomere boundaries.',
    titleId: 'gallery-slide-19-title',
    descId: 'gallery-slide-19-desc',
    imgId: 'gallery-slide-19-thumb-k7l8',
  },
  {
    id: 'slide-20',
    title: 'Vorticella — Contracted Stalk',
    species: 'Vorticella campanula',
    specimenId: 'PRO-2024-094',
    magnification: '400x',
    collector: 'Prof. Marcus Chen',
    date: '10 May 2024',
    stain: 'Unstained — Darkfield',
    notes: 'The bell-shaped zooid sits atop a coiled, contractile stalk. The peristomial cilia create feeding currents visible in this living preparation. The contractile vacuole pulses rhythmically.',
    titleId: 'gallery-slide-20-title',
    descId: 'gallery-slide-20-desc',
    imgId: 'gallery-slide-20-thumb-m9n0',
  },
  {
    id: 'slide-21',
    title: 'Yeast — Budding Cells',
    species: 'Saccharomyces cerevisiae',
    specimenId: 'FUN-2024-011',
    magnification: '630x',
    collector: 'Dr. Sarah Nakamura',
    date: '21 April 2024',
    stain: 'Methylene Blue',
    notes: 'Numerous budding yeast cells in various stages of asexual reproduction. The mother-daughter cell junctions are clearly visible. Vital staining confirms metabolic activity.',
    titleId: 'gallery-slide-21-title',
    descId: 'gallery-slide-21-desc',
    imgId: 'gallery-slide-21-thumb-o1p2',
  },
];

export default function Gallery() {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredSlides = SLIDES.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.species.toLowerCase().includes(search.toLowerCase()) ||
      s.specimenId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="border-b border-ink/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-ink-faint mb-3">
            Digital Slide Archive
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            Interactive Gallery
          </h1>
          <p className="font-sans text-sm text-ink-muted max-w-2xl leading-relaxed mb-8">
            Browse a curated collection of high-resolution micrographs. Each
            digital slide includes specimen metadata, magnification data, and
            the collector&rsquo;s original field notes.
          </p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-faint" />
            <input
              type="text"
              placeholder="Search by name, species, or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg
                         font-sans text-sm text-ink placeholder-ink-faint/50
                         focus:outline-none focus:border-ink/40 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredSlides.map((slide, idx) => (
            <motion.button
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedSlide(slide)}
              className="block w-full text-left glass-card overflow-hidden group cursor-pointer
                         hover:bg-white/40 transition-all duration-500"
            >
              <div className="relative overflow-hidden bg-parchment-dark">
                <img
                  alt={slide.title}
                  data-strk-img-id={slide.imgId}
                  data-strk-img={`[${slide.descId}] [${slide.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                flex items-end p-4">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-parchment">
                    Click to examine
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-1">
                  {slide.magnification}
                </p>
                <h3
                  id={slide.titleId}
                  className="font-serif text-base font-semibold text-ink leading-snug"
                >
                  {slide.title}
                </h3>
                <p
                  id={slide.descId}
                  className="font-serif italic text-xs text-ink-muted mt-1"
                >
                  {slide.species}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {filteredSlides.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-lg text-ink-muted italic">
              No slides match your search criteria.
            </p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedSlide && (
        <Lightbox slide={selectedSlide} onClose={() => setSelectedSlide(null)} />
      )}
    </div>
  );
}