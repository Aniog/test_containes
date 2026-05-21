import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import SpecimenCard from '../components/specimens/SpecimenCard';
import { SPECIMENS } from '../data/specimens';

const CATEGORIES = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Specimens() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? SPECIMENS
    : SPECIMENS.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-parchment pt-16">
      {/* ── Page header ── */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden">
        {/* Decorative background image */}
        <div className="absolute inset-0 opacity-8">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&q=60"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-parchment/90" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono-data text-ash mb-4">Specimen Catalogue · 2024–2026</p>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-ink leading-tight mb-6">
              The Specimen<br />
              <span className="italic font-normal">Hub</span>
            </h1>
            <p className="text-charcoal text-lg leading-relaxed max-w-2xl">
              A systematic catalogue of histological preparations spanning plant anatomy,
              protist morphology, and human cytology. Each entry includes annotated
              terminology, staining methodology, and collector provenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div className="sticky top-16 z-30 bg-parchment/80 backdrop-blur-md border-b border-silver/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto">
          <Filter className="w-4 h-4 text-ash flex-shrink-0" strokeWidth={1.5} />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ink text-parchment'
                  : 'bg-white/30 text-charcoal hover:bg-ink/10 hover:text-ink border border-silver/40'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono-data text-ash text-xs flex-shrink-0">
            {filtered.length} specimen{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ── Specimen list (Z-pattern) ── */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24 lg:space-y-32"
          >
            {filtered.map((specimen, index) => (
              <div key={specimen.id}>
                <SpecimenCard specimen={specimen} reverse={index % 2 !== 0} />
                {index < filtered.length - 1 && (
                  <div className="mt-24 lg:mt-32 border-t border-silver/30" />
                )}
              </div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-playfair text-2xl text-ash italic">No specimens in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Methodology note ── */}
      <section className="py-16 px-6 lg:px-10 bg-ink/3 border-t border-silver/30">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 lg:p-12 max-w-3xl">
            <p className="font-mono-data text-ash mb-4">Curatorial Note</p>
            <h3 className="font-playfair text-2xl font-semibold text-ink mb-4">
              On Preparation Methodology
            </h3>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              All specimens in this catalogue were prepared using standard histological
              protocols. Tissue fixation was performed in 10% neutral buffered formalin
              for a minimum of 24 hours prior to processing.
            </p>
            <p className="text-charcoal text-sm leading-relaxed">
              Paraffin-embedded sections were cut at 5–8μm using a rotary microtome.
              Staining protocols are indicated for each specimen. Digital images were
              captured using a calibrated CCD camera at the stated magnification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
