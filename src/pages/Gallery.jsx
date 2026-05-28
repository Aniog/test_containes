import { useEffect, useRef, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Viruses', 'Fungi', 'Algae', 'Protozoa', 'Diatoms', 'Cells'];

const galleryItems = [
  { id: 'gal-001', title: 'E. coli Colony', category: 'Bacteria', query: 'E coli bacteria colony microscope colorful', ratio: '4x3', width: 600, size: 'large' },
  { id: 'gal-002', title: 'Influenza Virus', category: 'Viruses', query: 'influenza virus particle electron microscopy', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-003', title: 'Penicillium Spores', category: 'Fungi', query: 'penicillium fungal spores microscope', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-004', title: 'Diatom Lattice', category: 'Diatoms', query: 'diatom silica lattice microscope beautiful', ratio: '3x2', width: 600, size: 'medium' },
  { id: 'gal-005', title: 'Chlorella Algae', category: 'Algae', query: 'chlorella algae green microscope', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-006', title: 'Amoeba Proteus', category: 'Protozoa', query: 'amoeba proteus microscope pseudopod', ratio: '4x3', width: 600, size: 'large' },
  { id: 'gal-007', title: 'Staphylococcus', category: 'Bacteria', query: 'staphylococcus bacteria cluster microscope', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-008', title: 'HIV Virus', category: 'Viruses', query: 'HIV virus electron microscopy science', ratio: '3x2', width: 600, size: 'medium' },
  { id: 'gal-009', title: 'Aspergillus Mold', category: 'Fungi', query: 'aspergillus mold spores microscope', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-010', title: 'Spirulina Filaments', category: 'Algae', query: 'spirulina algae filaments microscope blue green', ratio: '4x3', width: 600, size: 'large' },
  { id: 'gal-011', title: 'Paramecium', category: 'Protozoa', query: 'paramecium protozoa microscope cilia', ratio: '3x2', width: 600, size: 'medium' },
  { id: 'gal-012', title: 'Coscinodiscus Diatom', category: 'Diatoms', query: 'coscinodiscus diatom circular microscope', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-013', title: 'Red Blood Cell', category: 'Cells', query: 'red blood cell erythrocyte microscope', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-014', title: 'Neuron Network', category: 'Cells', query: 'neuron nerve cell fluorescence microscopy', ratio: '4x3', width: 600, size: 'large' },
  { id: 'gal-015', title: 'Streptococcus Chain', category: 'Bacteria', query: 'streptococcus bacteria chain microscope', ratio: '3x2', width: 600, size: 'medium' },
  { id: 'gal-016', title: 'Coronavirus', category: 'Viruses', query: 'coronavirus spike protein electron microscopy', ratio: '1x1', width: 400, size: 'small' },
  { id: 'gal-017', title: 'Yeast Cells', category: 'Fungi', query: 'yeast cells budding microscope', ratio: '3x2', width: 600, size: 'medium' },
  { id: 'gal-018', title: 'Volvox Colony', category: 'Algae', query: 'volvox algae colony microscope green', ratio: '1x1', width: 400, size: 'small' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const filtered = galleryItems.filter((item) => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filtered]);

  return (
    <div className="bg-[#050d1a] text-[#f0f9ff] min-h-screen">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 bg-[#0a1628] border-b border-[#1e3a5f] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00d4aa] text-sm font-medium">Visual Archive</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Microscopy <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            A curated collection of stunning microscopic imagery — from bacteria to viruses, 
            cells to spores. Each image reveals a hidden universe.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 md:top-20 z-30 bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1e3a5f] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0f1f38] border border-[#1e3a5f] rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00d4aa]/50 transition-colors"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-slate-500 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#00d4aa] text-[#050d1a]'
                      : 'bg-[#0f1f38] border border-[#1e3a5f] text-slate-400 hover:text-white hover:border-[#00d4aa]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">No images found for your search.</p>
          </div>
        ) : (
          <>
            <p className="text-slate-500 text-sm mb-8">
              Showing <span className="text-[#00d4aa] font-medium">{filtered.length}</span> images
            </p>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-[#0f1f38] border border-[#1e3a5f] card-hover"
                >
                  <div className="relative overflow-hidden">
                    <img
                      data-strk-img-id={item.id}
                      data-strk-img={item.query}
                      data-strk-img-ratio={item.ratio}
                      data-strk-img-width={item.width}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ minHeight: '160px' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
