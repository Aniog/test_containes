import { motion } from "framer-motion";
import SpecimenCard from "../components/SpecimenCard";

/* ── SVG micrograph generators ── */
const makePlantSVG = () => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>
  <rect width="800" height="600" fill="#d4d0c4"/>
  <!-- Vascular bundle cross-section -->
  ${Array.from({length:5}, (_,col) => Array.from({length:4}, (_,row) => {
    const cx = 100 + col*150, cy = 100 + row*140;
    return `<ellipse cx="${cx}" cy="${cy}" rx="55" ry="50" fill="#b8b4a8" stroke="#1a1a1a" stroke-width="1.5"/>
    <ellipse cx="${cx}" cy="${cy}" rx="35" ry="30" fill="#c8c4b8" stroke="#3d3d3d" stroke-width="1"/>
    <circle cx="${cx}" cy="${cy}" r="12" fill="#1a1a1a" opacity="0.8"/>
    ${Array.from({length:8}, (_,i) => {
      const a = i*45*Math.PI/180, x=cx+Math.cos(a)*22, y=cy+Math.sin(a)*22;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#3d3d3d" opacity="0.7"/>`;
    }).join('')}`;
  }).join('')).join('')}
  <rect width="800" height="600" filter="url(#n)" opacity="0.06"/>
</svg>`)}`;

const makeProtistSVG = () => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter>
    <radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e8e4d8"/><stop offset="100%" stop-color="#2a2a2a"/></radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <!-- Diatom frustule -->
  <g transform="translate(400,300)">
    <ellipse cx="0" cy="0" rx="180" ry="100" fill="none" stroke="#e8e4d8" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="160" ry="82" fill="none" stroke="#c8c4b8" stroke-width="1"/>
    ${Array.from({length:20}, (_,i) => {
      const x = -170 + i*17;
      return `<line x1="${x}" y1="-95" x2="${x}" y2="95" stroke="#c8c4b8" stroke-width="0.8" opacity="0.6"/>`;
    }).join('')}
    ${Array.from({length:12}, (_,i) => {
      const y = -88 + i*16;
      return `<line x1="-175" y1="${y}" x2="175" y2="${y}" stroke="#c8c4b8" stroke-width="0.5" opacity="0.4"/>`;
    }).join('')}
    ${Array.from({length:20}, (_,i) => Array.from({length:10}, (_,j) => {
      const x = -160 + i*17, y = -72 + j*16;
      return `<circle cx="${x}" cy="${y}" r="3" fill="none" stroke="#e8e4d8" stroke-width="0.8" opacity="0.7"/>`;
    }).join('')).join('')}
    <ellipse cx="0" cy="0" rx="30" ry="18" fill="#e8e4d8" opacity="0.9"/>
  </g>
  <rect width="800" height="600" filter="url(#n)" opacity="0.07"/>
</svg>`)}`;

const makeCytologySVG = () => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>
  <rect width="800" height="600" fill="#c8c4b8"/>
  <!-- Blood smear cells -->
  ${Array.from({length:18}, (_,i) => {
    const cx = 60 + (i%6)*130 + (Math.floor(i/6)%2)*65;
    const cy = 80 + Math.floor(i/6)*180;
    const isWBC = i%5===0;
    return isWBC
      ? `<circle cx="${cx}" cy="${cy}" r="38" fill="#e8e4d8" stroke="#1a1a1a" stroke-width="1.5"/>
         <circle cx="${cx}" cy="${cy}" r="18" fill="#3d3d3d" opacity="0.8"/>
         ${Array.from({length:6}, (_,j) => {
           const a=j*60*Math.PI/180, x=cx+Math.cos(a)*10, y=cy+Math.sin(a)*10;
           return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#1a1a1a" opacity="0.6"/>`;
         }).join('')}`
      : `<ellipse cx="${cx}" cy="${cy}" rx="32" ry="28" fill="#d4d0c4" stroke="#3d3d3d" stroke-width="1.2"/>
         <ellipse cx="${cx}" cy="${cy}" rx="14" ry="10" fill="none" stroke="#6b6b6b" stroke-width="1" opacity="0.7"/>`;
  }).join('')}
  <rect width="800" height="600" filter="url(#n)" opacity="0.07"/>
</svg>`)}`;

const specimens = [
  {
    id: "spec-001",
    specimenId: "SPEC-001-PH",
    name: "Vascular Bundle",
    latinName: "Zea mays — Monocot Stem",
    category: "Plant Histology",
    magnification: "100×",
    stain: "Safranin / Fast Green",
    imageSvg: makePlantSVG(),
    imageAlt: "Cross-section of Zea mays vascular bundle showing xylem and phloem under light microscopy",
    description:
      "The vascular bundle of Zea mays presents a characteristic monocot arrangement — scattered throughout the ground tissue rather than arranged in a ring. Each bundle is enclosed by a bundle sheath of sclerenchyma cells, providing structural rigidity. The xylem vessels, stained deep red with Safranin, are clearly distinguishable from the phloem sieve tubes.",
    terms: [
      { word: "Xylem", definition: "Water-conducting vascular tissue composed of tracheids and vessel elements, characterized by lignified secondary cell walls." },
      { word: "Phloem", definition: "Food-conducting vascular tissue consisting of sieve tubes, companion cells, and phloem parenchyma." },
      { word: "Sclerenchyma", definition: "Supportive plant tissue with heavily lignified cell walls; cells are typically dead at maturity." },
      { word: "Bundle Sheath", definition: "A layer of cells surrounding the vascular bundle, important in C4 photosynthesis in grasses." },
    ],
    technicalData: [
      { label: "Fixative", value: "FAA (10%)" },
      { label: "Section Thickness", value: "8–10 μm" },
      { label: "Stain Protocol", value: "Safranin / Fast Green" },
      { label: "Mounting Medium", value: "Canada Balsam" },
    ],
  },
  {
    id: "spec-002",
    specimenId: "SPEC-002-PR",
    name: "Pinnularia sp.",
    latinName: "Bacillariophyta — Diatom",
    category: "Protists",
    magnification: "400×",
    stain: "Unstained (Silica)",
    imageSvg: makeProtistSVG(),
    imageAlt: "Pinnularia diatom frustule showing striae and raphe under high-magnification brightfield microscopy",
    description:
      "Pinnularia is a pennate diatom distinguished by its elongated, boat-shaped frustule with a prominent raphe — a longitudinal slit through which cytoplasm streams to enable gliding motility. The striae (fine parallel lines) represent rows of areolae, pores through which metabolic exchange occurs. The siliceous cell wall, or frustule, is composed of two overlapping halves called thecae.",
    terms: [
      { word: "Frustule", definition: "The rigid, siliceous cell wall of a diatom, composed of two overlapping halves (thecae) that fit together like a petri dish." },
      { word: "Raphe", definition: "A longitudinal slit or groove in the valve of pennate diatoms, associated with gliding motility." },
      { word: "Striae", definition: "Fine parallel lines on the diatom valve surface, representing rows of pores (areolae) through which metabolic exchange occurs." },
      { word: "Areolae", definition: "Pores or chambers in the diatom frustule wall that allow exchange of gases, nutrients, and waste products." },
    ],
    technicalData: [
      { label: "Preparation", value: "Acid-cleaned" },
      { label: "Mounting", value: "Naphrax (n=1.74)" },
      { label: "Valve Length", value: "80–140 μm" },
      { label: "Collection Site", value: "Freshwater benthos" },
    ],
  },
  {
    id: "spec-003",
    specimenId: "SPEC-003-HC",
    name: "Blood Smear",
    latinName: "Homo sapiens — Peripheral Blood",
    category: "Human Cytology",
    magnification: "400×",
    stain: "Wright–Giemsa",
    imageSvg: makeCytologySVG(),
    imageAlt: "Human peripheral blood smear showing erythrocytes and leukocytes stained with Wright-Giemsa",
    description:
      "A Wright–Giemsa stained peripheral blood smear reveals the characteristic biconcave disc morphology of erythrocytes (red blood cells), which lack nuclei at maturity. Scattered among them are leukocytes (white blood cells) identifiable by their lobed or round nuclei. The differential count of leukocyte types provides critical diagnostic information about immune status and systemic disease.",
    terms: [
      { word: "Erythrocyte", definition: "Mature red blood cell; anucleate biconcave disc approximately 6–8 μm in diameter, specialized for oxygen transport via hemoglobin." },
      { word: "Leukocyte", definition: "White blood cell; nucleated cell of the immune system. Classified as granulocytes (neutrophils, eosinophils, basophils) or agranulocytes (lymphocytes, monocytes)." },
      { word: "Neutrophil", definition: "The most abundant granulocyte, characterized by a multi-lobed nucleus and granular cytoplasm; primary responder to bacterial infection." },
      { word: "Differential Count", definition: "Quantitative assessment of the relative proportions of each leukocyte type in a blood sample, used diagnostically." },
    ],
    technicalData: [
      { label: "Anticoagulant", value: "EDTA (1.8 mg/mL)" },
      { label: "Stain Time", value: "3 min / 15 min" },
      { label: "Cell Diameter", value: "6–8 μm (RBC)" },
      { label: "Normal WBC", value: "4.5–11.0 × 10⁹/L" },
    ],
  },
];

export default function Specimens() {
  return (
    <div className="bg-parchment min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-3">Laboratory Archive · Series IV</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-4">
                Specimen Hub
              </h1>
              <p className="font-sans text-charcoal text-base max-w-xl leading-relaxed">
                A curated selection of histological preparations, protist specimens, and
                cytological smears from the departmental teaching collection.
                Each entry includes annotated terminology and technical preparation data.
              </p>
            </div>
            <div className="flex gap-4 text-right shrink-0">
              <div className="glass-dark px-5 py-3 rounded-xl text-center">
                <p className="font-serif font-bold text-2xl text-ink">3</p>
                <p className="section-label text-[10px]">Categories</p>
              </div>
              <div className="glass-dark px-5 py-3 rounded-xl text-center">
                <p className="font-serif font-bold text-2xl text-ink">12</p>
                <p className="section-label text-[10px]">Terms Defined</p>
              </div>
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-ink/20 via-lightgray to-transparent" aria-hidden="true" />
        </motion.header>

        {/* Specimen cards — Z-pattern */}
        <div className="space-y-24 lg:space-y-32">
          {specimens.map((specimen, i) => (
            <div key={specimen.id}>
              <SpecimenCard specimen={specimen} reverse={i % 2 !== 0} />
              {i < specimens.length - 1 && (
                <div className="mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-lightgray to-transparent" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 glass-dark p-6 rounded-2xl"
        >
          <p className="section-label mb-2">Curatorial Note</p>
          <p className="font-sans text-charcoal text-sm leading-relaxed">
            All specimens in this archive were prepared according to standard histological
            protocols. Staining intensities may vary between preparations. Students are
            encouraged to cross-reference with the primary literature cited in the course
            bibliography. For questions regarding preparation methodology, consult the
            Lab Notes section.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
