import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpecimenCard from '@/components/SpecimenCard';

const SPECIMENS = [
  {
    id: 'ps001',
    category: 'Plant Histology',
    name: 'Monocot Stem Cross-Section',
    latinName: 'Zea mays — Corn Stem, T.S.',
    description:
      'A transverse section through the stem of Zea mays reveals the characteristic scattered vascular bundle arrangement of monocotyledonous plants. Each bundle is enclosed within a bundle sheath and contains xylem vessels, phloem sieve tubes, and companion cells embedded in a ground parenchyma matrix. The absence of a vascular cambium confirms the monocot classification.',
    magnification: '100×',
    stain: 'Safranin / Fast Green',
    scaleBar: '200 µm',
    imagePlaceholder: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    terms: [
      { word: 'Vascular Bundle', definition: 'A strand of conducting tissue comprising xylem and phloem, surrounded by a bundle sheath of parenchyma or sclerenchyma cells.' },
      { word: 'Parenchyma', definition: 'Thin-walled, living cells forming the ground tissue of plants; primary site of photosynthesis and storage.' },
      { word: 'Xylem', definition: 'Water-conducting tissue composed of tracheids and vessel elements; also provides structural support via lignified cell walls.' },
      { word: 'Phloem', definition: 'Sugar-transporting tissue consisting of sieve tube elements and companion cells, responsible for translocation of photosynthates.' },
    ],
    metadata: [
      { label: 'Specimen ID', value: 'PLT-ZM-001' },
      { label: 'Section Type', value: 'Transverse (T.S.)' },
      { label: 'Fixative', value: 'FAA Solution' },
      { label: 'Collector', value: 'Dr. A. Hartmann' },
    ],
  },
  {
    id: 'pr001',
    category: 'Protists',
    name: 'Radiolarian Assemblage',
    latinName: 'Polycystinea — Deep-Sea Siliceous Ooze',
    description:
      'Radiolarians are single-celled marine protists distinguished by their intricate siliceous (SiO₂) skeletons, known as tests. This preparation, derived from deep-sea sediment core material, displays a diverse assemblage of polycystine radiolarians. The geometric precision of their latticed tests — exhibiting icosahedral, spherical, and conical symmetries — reflects the biomineralisation processes governed by the organism\'s cytoskeleton.',
    magnification: '200×',
    stain: 'Unstained (Siliceous)',
    scaleBar: '100 µm',
    imagePlaceholder: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    terms: [
      { word: 'Test', definition: 'The mineralised skeleton or shell of a protist, composed of silica (radiolarians) or calcium carbonate (foraminifera).' },
      { word: 'Biomineralisation', definition: 'The biological process by which living organisms produce minerals, often to harden or stiffen existing tissues.' },
      { word: 'Axopodium', definition: 'Thin, needle-like pseudopods supported by microtubule arrays, used for prey capture and buoyancy regulation in radiolarians.' },
      { word: 'Polycystinea', definition: 'A major class of radiolarians characterised by a latticed siliceous skeleton and a central capsule dividing the cytoplasm.' },
    ],
    metadata: [
      { label: 'Specimen ID', value: 'PRO-RAD-007' },
      { label: 'Origin', value: 'Pacific Sediment Core' },
      { label: 'Depth', value: '3,200 m b.s.l.' },
      { label: 'Collector', value: 'R/V Challenger Archive' },
    ],
  },
  {
    id: 'hc001',
    category: 'Human Cytology',
    name: 'Stratified Squamous Epithelium',
    latinName: 'Homo sapiens — Oesophageal Mucosa, L.S.',
    description:
      'A longitudinal section through the human oesophageal wall demonstrates the non-keratinised stratified squamous epithelium characteristic of surfaces subject to mechanical abrasion. The basal layer (stratum basale) contains mitotically active columnar cells anchored to the basement membrane. Progressive flattening of cells toward the luminal surface reflects the maturation gradient from proliferative to terminally differentiated squamous cells.',
    magnification: '400×',
    stain: 'Haematoxylin & Eosin (H&E)',
    scaleBar: '50 µm',
    imagePlaceholder: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 3\'/%3E',
    terms: [
      { word: 'Stratum Basale', definition: 'The deepest layer of stratified squamous epithelium, containing stem cells that continuously divide to replenish upper layers.' },
      { word: 'Basement Membrane', definition: 'A thin, fibrous extracellular matrix layer separating epithelial cells from underlying connective tissue; composed of laminin and collagen IV.' },
      { word: 'Haematoxylin', definition: 'A basic dye that stains nuclei and other acidic structures blue-purple; used in combination with eosin in standard H&E histology.' },
      { word: 'Keratinisation', definition: 'The process by which epithelial cells accumulate keratin proteins and lose their nuclei, forming a protective dead-cell layer.' },
    ],
    metadata: [
      { label: 'Specimen ID', value: 'HUM-OES-014' },
      { label: 'Tissue Source', value: 'Oesophageal Biopsy' },
      { label: 'Staining Protocol', value: 'H&E Standard' },
      { label: 'Pathology Status', value: 'Normal (Control)' },
    ],
  },
];

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="bg-parchment min-h-screen" ref={containerRef}>
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 border-b border-silver/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-caps mb-4">Catalogue · Vol. III</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink leading-tight mb-4">
                  Specimen<br />
                  <span className="italic">Hub</span>
                </h1>
                <p className="body-text max-w-xl text-charcoal/80">
                  Technical breakdowns of curated histological preparations across three
                  biological kingdoms. Each entry includes annotated imagery, staining
                  protocols, and a glossary of observable microstructures.
                </p>
              </div>
              <div className="flex gap-6 md:gap-10 flex-shrink-0">
                {[
                  { n: '3', l: 'Kingdoms' },
                  { n: '12', l: 'Sections' },
                  { n: '48', l: 'Terms' },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <p className="font-serif text-3xl font-bold text-ink">{s.n}</p>
                    <p className="label-caps">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 bg-parchment/80 backdrop-blur-md border-b border-silver/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
            {['All Specimens', 'Plant Histology', 'Protists', 'Human Cytology'].map((cat) => (
              <button
                key={cat}
                className="label-caps whitespace-nowrap text-graphite hover:text-ink transition-colors pb-1 border-b border-transparent hover:border-ink"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Specimen Cards — Z-pattern */}
      <section className="py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {SPECIMENS.map((specimen, i) => (
            <SpecimenCard
              key={specimen.id}
              specimen={specimen}
              reverse={i % 2 !== 0}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="py-12 px-6 md:px-10 border-t border-silver/30 bg-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="meta-text text-graphite max-w-lg">
            All specimens prepared and catalogued by the Department of Biological Sciences.
            Sections are archived in the MicroCosmos Digital Repository under Creative Commons
            Attribution 4.0 International licence.
          </p>
          <p className="meta-text text-graphite whitespace-nowrap">
            Last updated: May 2026
          </p>
        </div>
      </section>
    </div>
  );
}
