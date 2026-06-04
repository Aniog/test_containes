import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', title: 'Diatom Colony', category: 'Algae', desc: 'Intricate silica shells of marine diatoms under polarized light', imgId: 'gal-diatom-a1b2', titleId: 'gal-diatom-title', descId: 'gal-diatom-desc', ratio: '1x1', width: '600' },
  { id: 'g2', title: 'Neuron Network', category: 'Cells', desc: 'Fluorescent staining reveals the branching dendrites of neurons', imgId: 'gal-neuron-c3d4', titleId: 'gal-neuron-title', descId: 'gal-neuron-desc', ratio: '3x2', width: '800' },
  { id: 'g3', title: 'Pollen Grain', category: 'Botany', desc: 'Scanning electron microscope image of a flower pollen grain surface', imgId: 'gal-pollen-e5f6', titleId: 'gal-pollen-title', descId: 'gal-pollen-desc', ratio: '1x1', width: '600' },
  { id: 'g4', title: 'Tardigrade', category: 'Micro-animals', desc: 'Water bear tardigrade, the most resilient animal on Earth', imgId: 'gal-tardigrade-g7h8', titleId: 'gal-tardigrade-title', descId: 'gal-tardigrade-desc', ratio: '3x2', width: '800' },
  { id: 'g5', title: 'Red Blood Cells', category: 'Cells', desc: 'Human erythrocytes flowing through a capillary vessel', imgId: 'gal-rbc-i9j0', titleId: 'gal-rbc-title', descId: 'gal-rbc-desc', ratio: '3x2', width: '800' },
  { id: 'g6', title: 'Radiolarian', category: 'Protozoa', desc: 'Geometric silica skeleton of a radiolarian protozoan', imgId: 'gal-radiolarian-k1l2', titleId: 'gal-radiolarian-title', descId: 'gal-radiolarian-desc', ratio: '1x1', width: '600' },
  { id: 'g7', title: 'Fungal Hyphae', category: 'Fungi', desc: 'Branching network of fungal hyphae growing through substrate', imgId: 'gal-hyphae-m3n4', titleId: 'gal-hyphae-title', descId: 'gal-hyphae-desc', ratio: '3x2', width: '800' },
  { id: 'g8', title: 'Spirulina', category: 'Algae', desc: 'Spiral-shaped cyanobacteria spirulina under bright field microscopy', imgId: 'gal-spirulina-o5p6', titleId: 'gal-spirulina-title', descId: 'gal-spirulina-desc', ratio: '3x2', width: '800' },
  { id: 'g9', title: 'Mitosis', category: 'Cells', desc: 'Cell division captured at metaphase with chromosomes aligned', imgId: 'gal-mitosis-q7r8', titleId: 'gal-mitosis-title', descId: 'gal-mitosis-desc', ratio: '1x1', width: '600' },
  { id: 'g10', title: 'Bacteriophage', category: 'Viruses', desc: 'T4 bacteriophage virus attaching to an E. coli bacterial cell', imgId: 'gal-phage-s9t0', titleId: 'gal-phage-title', descId: 'gal-phage-desc', ratio: '3x2', width: '800' },
  { id: 'g11', title: 'Snowflake Crystal', category: 'Crystals', desc: 'Hexagonal ice crystal snowflake under dark field microscopy', imgId: 'gal-snowflake-u1v2', titleId: 'gal-snowflake-title', descId: 'gal-snowflake-desc', ratio: '1x1', width: '600' },
  { id: 'g12', title: 'Ciliate Protozoa', category: 'Protozoa', desc: 'Vorticella ciliate protozoan attached to substrate by stalk', imgId: 'gal-ciliate-w3x4', titleId: 'gal-ciliate-title', descId: 'gal-ciliate-desc', ratio: '3x2', width: '800' },
];

const galleryCategories = ['All', 'Cells', 'Algae', 'Protozoa', 'Fungi', 'Viruses', 'Botany', 'Micro-animals', 'Crystals'];

const GalleryGrid = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, selected]);

  return (
    <div ref={containerRef}>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? 'bg-[#00d4c8] text-[#050d1a]'
                : 'bg-[#0f1f38] border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid bg-[#0f1f38] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 transition-all duration-300 group cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <div className="relative overflow-hidden">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] microscopy`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-slate-50 font-semibold text-sm">{item.title}</span>
                <ZoomIn className="w-5 h-5 text-[#00d4c8]" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 id={item.titleId} className="text-slate-50 font-semibold text-sm">{item.title}</h3>
                <span className="text-xs text-[#00d4c8] bg-[#00d4c8]/10 px-2 py-0.5 rounded-full border border-[#00d4c8]/20">
                  {item.category}
                </span>
              </div>
              <p id={item.descId} className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#050d1a]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0f1f38] border border-slate-700 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#050d1a]/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-50 transition"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              data-strk-img-id={`modal-${selected.imgId}`}
              data-strk-img={`[modal-${selected.descId}] [modal-${selected.titleId}] microscopy`}
              data-strk-img-ratio="3x2"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={selected.title}
              className="w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 id={`modal-${selected.titleId}`} className="text-slate-50 font-bold text-xl">{selected.title}</h2>
                <span className="text-xs text-[#00d4c8] bg-[#00d4c8]/10 px-3 py-1 rounded-full border border-[#00d4c8]/20">
                  {selected.category}
                </span>
              </div>
              <p id={`modal-${selected.descId}`} className="text-slate-400 text-sm leading-relaxed">{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
