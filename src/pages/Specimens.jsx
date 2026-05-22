import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpecimenCard from '../components/SpecimenCard';
import ScientificTooltip from '../components/ScientificTooltip';
import { specimens } from '../data/specimens';

const categories = ['All', 'Plant Histology', 'Protists', 'Human Cytology'];

const categoryDescriptions = {
  'Plant Histology': 'The microscopic study of plant tissues — examining the cellular architecture of leaves, stems, and roots to understand the structural basis of plant physiology.',
  'Protists': 'A diverse kingdom of eukaryotic microorganisms, including algae, protozoa, and slime moulds, exhibiting remarkable morphological and ecological diversity.',
  'Human Cytology': 'The examination of human cells and tissues, providing the foundation for understanding normal physiology and the diagnosis of pathological conditions.',
};

export default function Specimens() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  const filtered = specimens.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.commonName.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.tags.some((t) => t.includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      {/* ── Page Header ── */}
      <section className="pt-32 pb-16 border-b border-ash">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-graphite tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
              <Microscope className="w-3.5 h-3.5" />
              Biological Catalogue
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Specimen Hub
            </h1>
            <p className="text-charcoal max-w-2xl leading-relaxed text-lg">
              A systematic catalogue of prepared microscopy specimens, each documented with
              technical precision. Hover over{' '}
              <ScientificTooltip term="parenchyma">underlined terms</ScientificTooltip>{' '}
              to reveal scientific definitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Description ── */}
      {activeCategory !== 'All' && (
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-bone border-b border-ash"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <p className="text-sm text-charcoal leading-relaxed max-w-3xl">
              <span className="font-semibold text-ink">{activeCategory}: </span>
              {categoryDescriptions[activeCategory]}
            </p>
          </div>
        </motion.section>
      )}

      {/* ── Filters & Search ── */}
      <section className="sticky top-16 md:top-20 z-30 glass-nav border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-3.5 h-3.5 text-graphite flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-mono tracking-wide px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-ink text-parchment border-ink'
                      : 'bg-transparent text-graphite border-ash hover:border-charcoal hover:text-charcoal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-graphite" />
              <input
                type="text"
                placeholder="Search specimens..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 text-xs font-mono bg-bone border border-ash rounded-full focus:outline-none focus:border-charcoal text-ink placeholder:text-silver w-48 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Z-Pattern Grid ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <Microscope className="w-12 h-12 text-ash mx-auto mb-4" />
              <p className="font-serif text-xl text-graphite">No specimens found</p>
              <p className="text-sm text-silver mt-2">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="space-y-20">
              {/* Z-pattern: alternating featured + grid rows */}
              {filtered.reduce((rows, specimen, i) => {
                if (i % 3 === 0) {
                  rows.push(filtered.slice(i, i + 3));
                }
                return rows;
              }, []).map((row, rowIndex) => (
                <ZPatternRow key={rowIndex} row={row} rowIndex={rowIndex} />
              ))}
            </div>
          )}

          {/* Result count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-mono text-graphite tracking-widest uppercase text-center mt-12"
          >
            {filtered.length} specimen{filtered.length !== 1 ? 's' : ''} in catalogue
          </motion.p>
        </div>
      </section>

      {/* ── Methodology Note ── */}
      <section className="py-16 bg-bone border-t border-ash">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mb-3">Preparation</p>
              <p className="text-sm text-charcoal leading-relaxed">
                All specimens are prepared using standard histological protocols. Tissues are fixed in
                10% neutral buffered formalin, processed through graded alcohols, and embedded in paraffin wax.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mb-3">Staining</p>
              <p className="text-sm text-charcoal leading-relaxed">
                Staining protocols are selected to maximise contrast for the structures of interest.
                Haematoxylin & Eosin remains the gold standard for general histology, supplemented by
                specialised stains as required.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mb-3">Documentation</p>
              <p className="text-sm text-charcoal leading-relaxed">
                Each specimen is photographed using a calibrated digital camera mounted on a research-grade
                compound microscope. All images are captured at the stated magnification with scale bars.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ZPatternRow({ row, rowIndex }) {
  const isEven = rowIndex % 2 === 0;

  if (row.length === 1) {
    return (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className={isEven ? 'order-1' : 'order-2'}>
          <SpecimenCard specimen={row[0]} index={0} />
        </div>
        <div className={`${isEven ? 'order-2' : 'order-1'} hidden md:block`}>
          <SpecimenCategoryNote category={row[0].category} />
        </div>
      </div>
    );
  }

  if (row.length === 2) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {row.map((specimen, i) => (
          <SpecimenCard key={specimen.id} specimen={specimen} index={i} />
        ))}
      </div>
    );
  }

  // 3 items: Z-pattern — featured large + 2 stacked
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-start`}>
      <div className={isEven ? 'order-1' : 'order-2'}>
        <SpecimenCard specimen={row[0]} index={0} />
      </div>
      <div className={`${isEven ? 'order-2' : 'order-1'} grid gap-6`}>
        {row.slice(1).map((specimen, i) => (
          <SpecimenCard key={specimen.id} specimen={specimen} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

function SpecimenCategoryNote({ category }) {
  const notes = {
    'Plant Histology': {
      quote: '"The cell is the fundamental unit of life — and in the plant kingdom, each cell is a masterwork of evolutionary engineering."',
      author: 'Matthias Jakob Schleiden, 1838',
    },
    'Protists': {
      quote: '"In a single drop of pond water, one may observe more diversity of form than in an entire forest."',
      author: 'Antonie van Leeuwenhoek, c. 1674',
    },
    'Human Cytology': {
      quote: '"All cells come from cells. The body is a republic of cells, each with its own function and its own story."',
      author: 'Rudolf Virchow, 1858',
    },
  };

  const note = notes[category];
  if (!note) return null;

  return (
    <div className="bg-bone border border-ash rounded-2xl p-8">
      <p className="font-serif text-xl text-ink italic leading-relaxed mb-4">{note.quote}</p>
      <p className="text-xs font-mono text-graphite tracking-widest uppercase">— {note.author}</p>
    </div>
  );
}
