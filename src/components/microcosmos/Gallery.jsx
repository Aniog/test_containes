import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Cells', 'Fungi', 'Plankton', 'Viruses', 'Protozoa'];

const galleryItems = [
  { id: 'g1', title: 'Staphylococcus Aureus', category: 'Bacteria', caption: 'Golden staph bacteria cluster', ratio: '4x3', width: 600, size: 'large' },
  { id: 'g2', title: 'Human Red Blood Cells', category: 'Cells', caption: 'Erythrocytes in bloodstream', ratio: '1x1', width: 400, size: 'small' },
  { id: 'g3', title: 'Aspergillus Spores', category: 'Fungi', caption: 'Fungal spore head structure', ratio: '1x1', width: 400, size: 'small' },
  { id: 'g4', title: 'Marine Diatom', category: 'Plankton', caption: 'Silica shell of ocean plankton', ratio: '4x3', width: 600, size: 'large' },
  { id: 'g5', title: 'T4 Bacteriophage', category: 'Viruses', caption: 'Virus attacking a bacterium', ratio: '1x1', width: 400, size: 'small' },
  { id: 'g6', title: 'Paramecium', category: 'Protozoa', caption: 'Single-celled ciliate organism', ratio: '1x1', width: 400, size: 'small' },
  { id: 'g7', title: 'E. Coli Colony', category: 'Bacteria', caption: 'Escherichia coli biofilm', ratio: '16x9', width: 800, size: 'wide' },
  { id: 'g8', title: 'Mitochondria', category: 'Cells', caption: 'Powerhouse of the cell', ratio: '4x3', width: 600, size: 'large' },
  { id: 'g9', title: 'Penicillium Mold', category: 'Fungi', caption: 'Antibiotic-producing fungus', ratio: '1x1', width: 400, size: 'small' },
  { id: 'g10', title: 'Dinoflagellate', category: 'Plankton', caption: 'Bioluminescent ocean organism', ratio: '1x1', width: 400, size: 'small' },
  { id: 'g11', title: 'Coronavirus Spike', category: 'Viruses', caption: 'Spike protein structure', ratio: '4x3', width: 600, size: 'large' },
  { id: 'g12', title: 'Amoeba Proteus', category: 'Protozoa', caption: 'Shape-shifting predator', ratio: '16x9', width: 800, size: 'wide' },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Gallery</p>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            Microscopic Wonders
          </h2>
          <p id="gallery-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stunning imagery captured through electron microscopes and fluorescence techniques, revealing the hidden architecture of life.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-violet-500 text-white shadow-[0_0_20px_rgba(167,139,250,0.4)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]"
            >
              <div className={`overflow-hidden ${item.size === 'wide' ? 'aspect-video' : item.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`gallery-${item.id}-img`}
                  data-strk-img={`[gallery-${item.id}-caption] [gallery-${item.id}-title] [gallery-subtitle] [gallery-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">{item.category}</span>
                <h3 id={`gallery-${item.id}-title`} className="text-white font-bold mt-1 mb-1">{item.title}</h3>
                <p id={`gallery-${item.id}-caption`} className="text-gray-400 text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
