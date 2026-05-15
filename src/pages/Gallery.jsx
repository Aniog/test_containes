import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import Lightbox from '../components/Lightbox';

const slides = [
  {
    id: 'SL-001',
    category: 'Plant Histology',
    name: 'Dicot Root',
    latinName: 'Ranunculus sp.',
    magnification: '100×',
    stain: 'Safranin / Fast Green',
    collector: 'Dr. E. Hartmann',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&sat=-100',
    notes: 'Excellent endodermis definition. Casparian strips clearly visible under polarised light. Pericycle intact. Prepared 14 March 2024.',
    height: 'h-56',
  },
  {
    id: 'SL-002',
    category: 'Protists',
    name: 'Paramecium',
    latinName: 'Paramecium caudatum',
    magnification: '400×',
    stain: 'Methylene Blue',
    collector: 'Prof. A. Lindqvist',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80&sat=-100',
    notes: 'Live culture fixed at peak motility. Macronucleus and micronucleus both resolved. Cilia visible along oral groove.',
    height: 'h-72',
  },
  {
    id: 'SL-003',
    category: 'Human Cytology',
    name: 'Squamous Epithelium',
    latinName: 'Homo sapiens — Buccal Smear',
    magnification: '400×',
    stain: 'Papanicolaou',
    collector: 'Dr. M. Okonkwo',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80&sat=-100',
    notes: 'Buccal smear from healthy adult volunteer. Nuclei well-defined. No evidence of dysplasia. Cytoplasm staining uniform.',
    height: 'h-48',
  },
  {
    id: 'SL-004',
    category: 'Microbiology',
    name: 'Bacterial Colony',
    latinName: 'Bacillus subtilis',
    magnification: '1000×',
    stain: 'Gram Stain (Positive)',
    collector: 'Dr. E. Hartmann',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&sat=-100',
    notes: 'Gram-positive rods in chains. Endospores visible as unstained oval bodies. Culture age: 48 hours on nutrient agar.',
    height: 'h-64',
  },
  {
    id: 'SL-005',
    category: 'Plant Histology',
    name: 'Leaf Epidermis',
    latinName: 'Tradescantia zebrina',
    magnification: '200×',
    stain: 'Unstained — Bright Field',
    collector: 'Prof. A. Lindqvist',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=80&sat=-100',
    notes: 'Stomatal complexes clearly resolved. Guard cell chloroplasts visible. Epidermal cell junctions well-defined. Cuticle intact.',
    height: 'h-52',
  },
  {
    id: 'SL-006',
    category: 'Protists',
    name: 'Diatom Frustule',
    latinName: 'Pinnularia viridis',
    magnification: '400×',
    stain: 'Unstained — Phase Contrast',
    collector: 'Dr. M. Okonkwo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&sat=-100',
    notes: 'Raphe system and striae clearly resolved at this magnification. Frustule symmetry consistent with species description. Isolated from freshwater pond sample.',
    height: 'h-80',
  },
  {
    id: 'SL-007',
    category: 'Human Cytology',
    name: 'Cardiac Muscle',
    latinName: 'Homo sapiens — Myocardium',
    magnification: '400×',
    stain: 'Haematoxylin & Eosin',
    collector: 'Dr. E. Hartmann',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&q=80&sat=-100',
    notes: 'Intercalated discs clearly visible. Branching fibres with central nuclei. Striations well-preserved. Post-mortem interval < 4 hours.',
    height: 'h-60',
  },
  {
    id: 'SL-008',
    category: 'Plant Histology',
    name: 'Pollen Grains',
    latinName: 'Lilium longiflorum',
    magnification: '200×',
    stain: 'Acetocarmine',
    collector: 'Prof. A. Lindqvist',
    image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc5e?w=900&q=80&sat=-100',
    notes: 'Mature pollen at anthesis. Exine sculpturing visible. Generative and tube nuclei resolved in some grains. Collected at peak dehiscence.',
    height: 'h-44',
  },
  {
    id: 'SL-009',
    category: 'Microbiology',
    name: 'Fungal Hyphae',
    latinName: 'Aspergillus niger',
    magnification: '400×',
    stain: 'Lactophenol Cotton Blue',
    collector: 'Dr. M. Okonkwo',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=80&sat=-100',
    notes: 'Conidiophores with vesicles and phialides clearly resolved. Conidia chains intact. Septate hyphae with regular branching pattern.',
    height: 'h-68',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-[#F2F0E9] min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p
            className="text-[#9E9E9E] text-xs tracking-[0.35em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Digital Archive · {slides.length} Preparations
          </p>
          <h1
            className="text-[#1A1A1A] text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Slide Gallery
          </h1>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-[#E0DED7]" />
          </div>
          <p
            className="text-[#6B6B6B] text-base leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            A high-density archive of histological preparations. Select any slide to
            examine the full-resolution image alongside specimen metadata and collector annotations.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="masonry-item"
            >
              <button
                className="w-full text-left group relative overflow-hidden rounded-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]"
                onClick={() => setSelected(slide)}
                aria-label={`Open ${slide.name} slide`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${slide.height}`}>
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.88)' }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(26,26,26,0.45)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(242,240,233,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
                    >
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom metadata strip */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ background: 'rgba(26,26,26,0.75)', backdropFilter: 'blur(8px)' }}
                  >
                    <p
                      className="text-white text-xs font-medium truncate"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {slide.name}
                    </p>
                    <p
                      className="text-[#9E9E9E] text-[10px] tracking-widest uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {slide.magnification} · {slide.id}
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div
                  className="px-3 py-2.5 rounded-b-xl"
                  style={{ background: 'rgba(26,26,26,0.04)', borderTop: '1px solid rgba(26,26,26,0.06)' }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="text-[#1A1A1A] text-xs font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {slide.name}
                      </p>
                      <p
                        className="text-[#9E9E9E] text-[10px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {slide.category}
                      </p>
                    </div>
                    <span
                      className="text-[#9E9E9E] text-[10px] tracking-widest"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {slide.magnification}
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox slide={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
