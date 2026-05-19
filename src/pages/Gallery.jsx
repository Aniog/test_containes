import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', title: 'E. coli Bacteria', category: 'Bacteria', desc: 'Scanning electron microscopy of Escherichia coli', size: 'large' },
  { id: 'g2', title: 'Diatom Frustule', category: 'Algae', desc: 'Intricate silica shell of a marine diatom', size: 'small' },
  { id: 'g3', title: 'Tardigrade', category: 'Micro-animals', desc: 'Water bear in cryptobiosis state', size: 'small' },
  { id: 'g4', title: 'Penicillium Spores', category: 'Fungi', desc: 'Fluorescence image of Penicillium conidiophores', size: 'small' },
  { id: 'g5', title: 'Paramecium', category: 'Protozoa', desc: 'Ciliated protozoan under phase contrast', size: 'large' },
  { id: 'g6', title: 'Staphylococcus', category: 'Bacteria', desc: 'Grape-like clusters of Staphylococcus aureus', size: 'small' },
  { id: 'g7', title: 'Radiolarian', category: 'Protozoa', desc: 'Geometric silica skeleton of a radiolarian', size: 'small' },
  { id: 'g8', title: 'Aspergillus Niger', category: 'Fungi', desc: 'Black mold spore head under microscope', size: 'large' },
  { id: 'g9', title: 'Volvox Colony', category: 'Algae', desc: 'Spherical colony of green algae cells', size: 'small' },
  { id: 'g10', title: 'Spirulina', category: 'Cyanobacteria', desc: 'Spiral-shaped blue-green algae filaments', size: 'small' },
  { id: 'g11', title: 'Amoeba', category: 'Protozoa', desc: 'Amoeba proteus extending pseudopods', size: 'small' },
  { id: 'g12', title: 'Rotifer', category: 'Micro-animals', desc: 'Wheel animalcule with corona of cilia', size: 'large' },
  { id: 'g13', title: 'Bacillus Subtilis', category: 'Bacteria', desc: 'Rod-shaped spore-forming bacteria', size: 'small' },
  { id: 'g14', title: 'Euglena', category: 'Protozoa', desc: 'Flagellated microorganism with chloroplasts', size: 'small' },
  { id: 'g15', title: 'Trichoderma', category: 'Fungi', desc: 'Biocontrol fungus with branching hyphae', size: 'small' },
  { id: 'g16', title: 'Noctiluca', category: 'Dinoflagellate', desc: 'Bioluminescent sea sparkle organism', size: 'large' },
];

const categories = ['All', 'Bacteria', 'Fungi', 'Algae', 'Protozoa', 'Micro-animals', 'Cyanobacteria', 'Dinoflagellate'];

const Gallery = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loaded, setLoaded] = useState(false);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
      setLoaded(true);
    }
  }, [activeCategory]);

  return (
    <div className="bg-[#050d1a] text-[#f0f8ff] min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-12 px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
          <span className="text-[#00d4ff] text-sm font-medium tracking-wide">Visual Archive</span>
        </div>
        <h1 className="font-grotesk font-bold text-4xl md:text-6xl text-[#f0f8ff] mb-4">
          Microscopy Gallery
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A curated collection of stunning microscopy images — from electron scanning to 
          fluorescence photography — revealing the hidden beauty of the micro world.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 md:px-8 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#00d4ff] text-[#050d1a]'
                  : 'bg-[#0f1f3d] text-slate-300 border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 hover:text-[#00d4ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div ref={containerRef} className="px-4 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl overflow-hidden hover:border-[#00d4ff]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all cursor-pointer"
            >
              <div className={`relative overflow-hidden ${item.size === 'large' ? 'h-72' : 'h-48'}`}>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={`gallery-img-${item.id}`}
                  data-strk-img={`[gallery-desc-${item.id}] [gallery-title-${item.id}] microscopy`}
                  data-strk-img-ratio={item.size === 'large' ? '4x3' : '1x1'}
                  data-strk-img-width={item.size === 'large' ? 800 : 500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#050d1a]/80 backdrop-blur-sm text-[#00d4ff] text-xs font-medium px-3 py-1 rounded-full border border-[#00d4ff]/30">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 id={`gallery-title-${item.id}`} className="font-grotesk font-semibold text-[#f0f8ff] text-base mb-1">
                  {item.title}
                </h3>
                <p id={`gallery-desc-${item.id}`} className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No images found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
