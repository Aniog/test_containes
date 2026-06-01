import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-01', title: 'Tardigrade Close-Up', category: 'Animals', desc: 'Scanning electron microscope image of a water bear tardigrade', titleId: 'gal-01-title', descId: 'gal-01-desc', imgId: 'gallery-01-img-a1b2c3', size: 'large' },
  { id: 'gal-02', title: 'Diatom Frustule', category: 'Algae', desc: 'Intricate silica shell of a marine diatom under electron microscope', titleId: 'gal-02-title', descId: 'gal-02-desc', imgId: 'gallery-02-img-d4e5f6', size: 'small' },
  { id: 'gal-03', title: 'Neuron Network', category: 'Cells', desc: 'Fluorescent microscopy of interconnected neurons in the brain', titleId: 'gal-03-title', descId: 'gal-03-desc', imgId: 'gallery-03-img-g7h8i9', size: 'small' },
  { id: 'gal-04', title: 'Pollen Grains', category: 'Plants', desc: 'Colorized SEM image of various flower pollen grains', titleId: 'gal-04-title', descId: 'gal-04-desc', imgId: 'gallery-04-img-j1k2l3', size: 'small' },
  { id: 'gal-05', title: 'E. coli Colony', category: 'Bacteria', desc: 'Escherichia coli bacteria colony under fluorescence microscopy', titleId: 'gal-05-title', descId: 'gal-05-desc', imgId: 'gallery-05-img-m4n5o6', size: 'large' },
  { id: 'gal-06', title: 'Snowflake Crystal', category: 'Crystals', desc: 'Macro photograph of a perfect hexagonal snowflake crystal', titleId: 'gal-06-title', descId: 'gal-06-desc', imgId: 'gallery-06-img-p7q8r9', size: 'small' },
  { id: 'gal-07', title: 'Paramecium', category: 'Protozoa', desc: 'Paramecium caudatum with visible cilia under light microscopy', titleId: 'gal-07-title', descId: 'gal-07-desc', imgId: 'gallery-07-img-s1t2u3', size: 'small' },
  { id: 'gal-08', title: 'Penicillium Spores', category: 'Fungi', desc: 'Blue-green Penicillium mold spores under scanning electron microscope', titleId: 'gal-08-title', descId: 'gal-08-desc', imgId: 'gallery-08-img-v4w5x6', size: 'small' },
  { id: 'gal-09', title: 'Red Blood Cells', category: 'Cells', desc: 'Human erythrocytes flowing through a capillary vessel', titleId: 'gal-09-title', descId: 'gal-09-desc', imgId: 'gallery-09-img-y7z8a9', size: 'large' },
  { id: 'gal-10', title: 'Rotifer Feeding', category: 'Animals', desc: 'Rotifer with spinning cilia crown drawing in food particles', titleId: 'gal-10-title', descId: 'gal-10-desc', imgId: 'gallery-10-img-b1c2d3', size: 'small' },
  { id: 'gal-11', title: 'Radiolarian Shell', category: 'Protozoa', desc: 'Intricate silica skeleton of a radiolarian protozoan', titleId: 'gal-11-title', descId: 'gal-11-desc', imgId: 'gallery-11-img-e4f5g6', size: 'small' },
  { id: 'gal-12', title: 'Mitosis', category: 'Cells', desc: 'Cell division captured under fluorescence microscopy showing chromosomes', titleId: 'gal-12-title', descId: 'gal-12-desc', imgId: 'gallery-12-img-h7i8j9', size: 'small' },
  { id: 'gal-13', title: 'Amoeba Pseudopods', category: 'Protozoa', desc: 'Amoeba extending pseudopods to engulf a bacterium', titleId: 'gal-13-title', descId: 'gal-13-desc', imgId: 'gallery-13-img-k1l2m3', size: 'large' },
  { id: 'gal-14', title: 'Spirulina Filaments', category: 'Algae', desc: 'Spiral-shaped cyanobacteria spirulina under light microscopy', titleId: 'gal-14-title', descId: 'gal-14-desc', imgId: 'gallery-14-img-n4o5p6', size: 'small' },
  { id: 'gal-15', title: 'Dust Mite', category: 'Animals', desc: 'Household dust mite Dermatophagoides pteronyssinus under SEM', titleId: 'gal-15-title', descId: 'gal-15-desc', imgId: 'gallery-15-img-q7r8s9', size: 'small' },
  { id: 'gal-16', title: 'Chloroplasts', category: 'Cells', desc: 'Green chloroplasts inside a plant leaf cell under confocal microscopy', titleId: 'gal-16-title', descId: 'gal-16-desc', imgId: 'gallery-16-img-t1u2v3', size: 'small' },
];

const categories = ['All', 'Animals', 'Bacteria', 'Algae', 'Cells', 'Protozoa', 'Fungi', 'Plants', 'Crystals'];

const Gallery = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div ref={containerRef} className="bg-[#050d1a] text-white min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-15"
          data-strk-bg-id="gallery-header-bg-w4x5y6"
          data-strk-bg="[gallery-header-title] microscopic photography science"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/80 to-[#050d1a]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4">Gallery</p>
          <h1
            id="gallery-header-title"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Microscopic Photography
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            A curated collection of stunning microscopy images revealing the hidden beauty of the invisible world.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-[#00d4ff] text-[#050d1a] border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                  : 'border-[rgba(0,212,255,0.2)] text-slate-300 hover:border-[#00d4ff] hover:text-[#00d4ff] bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style Gallery Grid */}
      <section className="py-4 px-4 md:px-8 pb-20">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-[rgba(0,212,255,0.1)] bg-[#0a1628] hover:border-[rgba(0,212,255,0.35)] hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className={`relative overflow-hidden ${item.size === 'large' ? 'h-72' : 'h-48'}`}>
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio={item.size === 'large' ? '3x4' : '3x2'}
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-medium bg-[#050d1a]/70 text-[#00d4ff] border border-[rgba(0,212,255,0.3)]">
                  {item.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 id={item.titleId} className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-slate-300 text-xs mt-1 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#050d1a]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-[rgba(0,212,255,0.2)] bg-[#0a1628] shadow-[0_0_60px_rgba(0,212,255,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 md:h-[500px]">
              <img
                alt={selectedItem.title}
                data-strk-img-id={`${selectedItem.imgId}-modal`}
                data-strk-img={`[${selectedItem.descId}] [${selectedItem.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[#00d4ff] text-xs font-semibold uppercase tracking-widest">{selectedItem.category}</span>
                  <h2 className="text-2xl font-bold text-white mt-1 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selectedItem.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedItem.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-[rgba(0,212,255,0.3)] text-slate-400 hover:text-white hover:border-[#00d4ff] flex items-center justify-center bg-transparent text-lg leading-none"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
