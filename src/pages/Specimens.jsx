import { motion } from 'framer-motion';
import SpecimenCard from '../components/SpecimenCard';

const specimens = [
  {
    id: 'MC-001',
    category: 'Plant Histology',
    name: 'Vascular Bundle',
    latinName: 'Zea mays — Monocot Cross-Section',
    magnification: '100×',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80',
    description:
      'The vascular bundle of Zea mays presents a characteristic scattered arrangement within the ground tissue, distinguishing monocots from their dicotyledonous counterparts. Xylem vessels and phloem sieve tubes are encased within a bundle sheath of sclerenchyma fibres, providing both structural rigidity and metabolic compartmentalisation.',
    data: [
      { label: 'Stain', value: 'Safranin / Fast Green' },
      { label: 'Section', value: 'Transverse, 10 µm' },
      { label: 'Fixative', value: 'FAA Solution' },
      { label: 'Preparation', value: 'Paraffin Embedded' },
    ],
    terms: [
      { term: 'Sclerenchyma', definition: 'Dead, thick-walled cells providing mechanical support; includes fibres and sclereids.' },
      { term: 'Phloem', definition: 'Vascular tissue responsible for translocation of photosynthates from source to sink organs.' },
      { term: 'Xylem', definition: 'Water-conducting tissue composed of tracheids and vessel elements with lignified secondary walls.' },
    ],
  },
  {
    id: 'MC-002',
    category: 'Protists',
    name: 'Radiolarian Skeleton',
    latinName: 'Acantharia — Polycystinea Order',
    magnification: '400×',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80',
    description:
      'Radiolarians are marine amoeboid protists distinguished by their intricate mineral skeletons of opaline silica or strontium sulphate. Their geometric precision—often exhibiting icosahedral or spherical symmetry—has fascinated naturalists since Ernst Haeckel\'s monumental Challenger expedition monographs of 1887. Each pseudopodial ray serves dual roles in prey capture and buoyancy regulation.',
    data: [
      { label: 'Skeleton', value: 'Opaline SiO₂' },
      { label: 'Habitat', value: 'Pelagic Marine' },
      { label: 'Size Range', value: '0.1 – 2.0 mm' },
      { label: 'Symmetry', value: 'Radial / Icosahedral' },
    ],
    terms: [
      { term: 'Axopodium', definition: 'Stiff, needle-like pseudopod supported by a microtubule array; used for prey capture and locomotion.' },
      { term: 'Siliceous', definition: 'Composed of or containing silicon dioxide (SiO₂); characteristic of radiolarian and diatom skeletons.' },
      { term: 'Polycystinea', definition: 'A major subgroup of radiolarians with latticed siliceous skeletons, abundant in marine sediments.' },
    ],
  },
  {
    id: 'MC-003',
    category: 'Human Cytology',
    name: 'Erythrocyte Smear',
    latinName: 'Homo sapiens — Peripheral Blood Film',
    magnification: '1000×',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80',
    description:
      'The peripheral blood film remains the cornerstone of haematological diagnosis. Mature erythrocytes present as biconcave discs approximately 6–8 µm in diameter, devoid of nuclei and organelles, optimised for maximal haemoglobin packing and deformability through the microvasculature. Morphological aberrations—poikilocytosis, anisocytosis—provide critical diagnostic indices.',
    data: [
      { label: 'Stain', value: 'Giemsa / Wright\'s' },
      { label: 'Cell Diameter', value: '6–8 µm' },
      { label: 'Preparation', value: 'Air-dried smear' },
      { label: 'Oil Immersion', value: '100× objective' },
    ],
    terms: [
      { term: 'Poikilocytosis', definition: 'Abnormal variation in the shape of erythrocytes; a non-specific indicator of haematological pathology.' },
      { term: 'Anisocytosis', definition: 'Abnormal variation in the size of red blood cells; associated with anaemia and nutritional deficiencies.' },
      { term: 'Biconcave', definition: 'A disc shape that is concave on both faces, maximising surface area-to-volume ratio for gas exchange.' },
    ],
  },
];

export default function Specimens() {
  return (
    <div className="bg-[#F2F0E9] min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p
            className="text-[#9E9E9E] text-xs tracking-[0.35em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Catalogue · Vol. I
          </p>
          <h1
            className="text-[#1A1A1A] text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Specimen Hub
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E0DED7]" />
            <p
              className="text-[#9E9E9E] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {specimens.length} Specimens
            </p>
          </div>
          <p
            className="text-[#6B6B6B] text-base leading-relaxed mt-5 max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            A systematic survey of representative specimens across the kingdoms of life.
            Each entry provides morphological data, preparation methodology, and annotated
            scientific terminology for instructional reference.
          </p>
        </motion.div>

        {/* Z-pattern specimen list */}
        <div className="flex flex-col gap-24">
          {specimens.map((specimen, i) => (
            <SpecimenCard key={specimen.id} specimen={specimen} reverse={i % 2 !== 0} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 pt-10 border-t border-[#E0DED7] text-center">
          <p
            className="text-[#C8C6BF] text-sm italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "In every grain of sand there is a story of the earth." — Rachel Carson
          </p>
        </div>
      </div>
    </div>
  );
}
