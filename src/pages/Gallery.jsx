import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', title: 'E. coli Bacteria', category: 'Bacteria', desc: 'Escherichia coli under electron microscope', size: 'large' },
  { id: 'g2', title: 'Diatom Frustule', category: 'Algae', desc: 'Intricate silica shell of a marine diatom', size: 'small' },
  { id: 'g3', title: 'Tardigrade', category: 'Micro-animals', desc: 'Water bear in cryptobiosis state', size: 'small' },
  { id: 'g4', title: 'Pollen Grain', category: 'Plants', desc: 'Colorized scanning electron micrograph of pollen', size: 'small' },
  { id: 'g5', title: 'Radiolarian Skeleton', category: 'Protozoa', desc: 'Geometric mineral skeleton of a radiolarian', size: 'large' },
  { id: 'g6', title: 'Paramecium', category: 'Protozoa', desc: 'Ciliated protozoan swimming in pond water', size: 'small' },
  { id: 'g7', title: 'Penicillium Mold', category: 'Fungi', desc: 'Spore-bearing structures of Penicillium', size: 'small' },
  { id: 'g8', title: 'Rotifer', category: 'Micro-animals', desc: 'Wheel animalcule feeding in freshwater', size: 'large' },
  { id: 'g9', title: 'Staphylococcus', category: 'Bacteria', desc: 'Grape-like clusters of Staphylococcus aureus', size: 'small' },
  { id: 'g10', title: 'Amoeba', category: 'Protozoa', desc: 'Amoeba extending pseudopods to engulf prey', size: 'small' },
  { id: 'g11', title: 'Spirulina', category: 'Algae', desc: 'Spiral-shaped cyanobacteria filaments', size: 'small' },
  { id: 'g12', title: 'Nematode Worm', category: 'Micro-animals', desc: 'Microscopic roundworm in soil', size: 'large' },
];

const categories = ['All', 'Bacteria', 'Algae', 'Protozoa', 'Fungi', 'Micro-animals', 'Plants'];

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
    <div className="bg-cosmos-dark text-slate-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-cosmos-navy border-b border-teal-900/30 py-16 px-4 text-center">
        <p className="text-teal-400 font-heading font-medium tracking-widest uppercase text-sm mb-3">Visual Collection</p>
        <h1 id="gallery-page-title" className="font-heading font-bold text-4xl md:text-6xl text-slate-100 mb-4">
          Microscopy Gallery
        </h1>
        <p id="gallery-page-sub" className="text-slate-400 max-w-xl mx-auto text-lg">
          Stunning images from the microscopic world — captured through electron and light microscopes.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-16 z-30 bg-cosmos-dark/90 backdrop-blur-md border-b border-teal-900/20 py-4 px-4">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-[0_0_20px_rgba(13,148,136,0.4)]'
                  : 'border border-teal-900/50 text-slate-400 hover:border-teal-500/60 hover:text-teal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group bg-cosmos-blue rounded-2xl overflow-hidden border border-teal-900/40 hover:border-teal-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
            >
              <div className={`relative overflow-hidden ${item.size === 'large' ? 'h-72' : 'h-52'}`}>
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`gallery-${item.id}-j1k2l3`}
                  data-strk-img={`[gallery-item-desc-${item.id}] [gallery-item-title-${item.id}] [gallery-page-sub] [gallery-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-blue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 right-3 bg-teal-600/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 id={`gallery-item-title-${item.id}`} className="font-heading font-semibold text-slate-100 text-lg mb-1">{item.title}</h3>
                <p id={`gallery-item-desc-${item.id}`} className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
