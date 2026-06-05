import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'tardigrade', name: 'Tardigrade', scientificName: 'Ramazzottius oberhaeuseri', category: 'Micro-animal', description: 'Microscopic animals capable of surviving extreme conditions including outer space.', imgId: 'explore-tardigrade-img-a1b2c3' },
  { id: 'diatom', name: 'Diatom', scientificName: 'Coscinodiscus radiatus', category: 'Algae', description: 'Single-celled algae with intricate glass-like silica shells called frustules.', imgId: 'explore-diatom-img-d4e5f6' },
  { id: 'radiolaria', name: 'Radiolaria', scientificName: 'Aulacantha scolymantha', category: 'Protozoa', description: 'Ocean-dwelling protozoa with stunning geometric mineral skeletons.', imgId: 'explore-radiolaria-img-g7h8i9' },
  { id: 'ecoli', name: 'E. coli', scientificName: 'Escherichia coli', category: 'Bacteria', description: 'A common gut bacterium that is both a model organism and occasional pathogen.', imgId: 'explore-ecoli-img-j1k2l3' },
  { id: 'penicillium', name: 'Penicillium', scientificName: 'Penicillium chrysogenum', category: 'Fungi', description: 'The mold that gave us penicillin, the world\'s first antibiotic.', imgId: 'explore-penicillium-img-m4n5o6' },
  { id: 'amoeba', name: 'Amoeba', scientificName: 'Amoeba proteus', category: 'Protozoa', description: 'Shape-shifting single-celled organisms that engulf food through phagocytosis.', imgId: 'explore-amoeba-img-p7q8r9' },
  { id: 'cyanobacteria', name: 'Cyanobacteria', scientificName: 'Anabaena spiroides', category: 'Bacteria', description: 'Ancient photosynthetic bacteria that oxygenated Earth\'s atmosphere billions of years ago.', imgId: 'explore-cyanobacteria-img-s1t2u3' },
  { id: 'vorticella', name: 'Vorticella', scientificName: 'Vorticella convallaria', category: 'Protozoa', description: 'Bell-shaped ciliates that attach to surfaces and create feeding currents with their cilia.', imgId: 'explore-vorticella-img-v4w5x6' },
  { id: 'aspergillus', name: 'Aspergillus', scientificName: 'Aspergillus niger', category: 'Fungi', description: 'Ubiquitous mold used in food production and as a source of citric acid.', imgId: 'explore-aspergillus-img-y7z8a9' },
  { id: 'paramecium', name: 'Paramecium', scientificName: 'Paramecium caudatum', category: 'Protozoa', description: 'Slipper-shaped ciliates covered in tiny hair-like structures used for movement and feeding.', imgId: 'explore-paramecium-img-b1c2d3' },
  { id: 'spirulina', name: 'Spirulina', scientificName: 'Arthrospira platensis', category: 'Algae', description: 'Spiral-shaped cyanobacteria packed with protein and nutrients, used as a superfood.', imgId: 'explore-spirulina-img-e4f5g6' },
  { id: 'staphylococcus', name: 'Staphylococcus', scientificName: 'Staphylococcus aureus', category: 'Bacteria', description: 'Grape-cluster-forming bacteria found on skin, some strains causing serious infections.', imgId: 'explore-staphylococcus-img-h7i8j9' },
];

const categories = ['All', 'Bacteria', 'Algae', 'Fungi', 'Protozoa', 'Micro-animal'];

const ExploreGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const filtered = organisms.filter((org) => {
    const matchesCategory = activeCategory === 'All' || org.category === activeCategory;
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, searchQuery]);

  return (
    <div ref={containerRef}>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-teal-500/60 transition-colors"
          />
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-500 border-teal-500 text-slate-950'
                  : 'bg-transparent border-slate-700 text-slate-400 hover:border-teal-500/50 hover:text-teal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-slate-500 text-sm mb-6">
        Showing <span className="text-teal-400 font-medium">{filtered.length}</span> organisms
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((org) => (
            <article
              key={org.id}
              className="group bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[explore-desc-${org.id}] [explore-title-${org.id}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <span className="absolute top-2.5 left-2.5 bg-slate-950/70 backdrop-blur-sm border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {org.category}
                </span>
              </div>
              <div className="p-4">
                <h3 id={`explore-title-${org.id}`} className="text-slate-100 font-semibold text-base mb-0.5">
                  {org.name}
                </h3>
                <p className="text-xs font-mono italic text-teal-400 mb-2">{org.scientificName}</p>
                <p id={`explore-desc-${org.id}`} className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {org.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">No organisms found matching your search.</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-4 text-teal-400 hover:text-teal-300 text-sm transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreGallery;
