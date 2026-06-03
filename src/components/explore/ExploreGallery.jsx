import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'tardigrade', titleId: 'exp-tardigrade-title', descId: 'exp-tardigrade-desc', imgId: 'exp-img-tardigrade-aa01', title: 'Tardigrade', desc: 'Microscopic animals that survive extreme conditions including the vacuum of space.', category: 'Extremophile', size: '0.1–1.5 mm' },
  { id: 'e-coli', titleId: 'exp-ecoli-title', descId: 'exp-ecoli-desc', imgId: 'exp-img-ecoli-bb02', title: 'E. coli', desc: 'A common gut bacterium that is both a vital research tool and occasional pathogen.', category: 'Bacteria', size: '2 µm' },
  { id: 'penicillium', titleId: 'exp-penicillium-title', descId: 'exp-penicillium-desc', imgId: 'exp-img-penicillium-cc03', title: 'Penicillium', desc: 'The mold that gave us penicillin — one of the most important medical discoveries in history.', category: 'Fungi', size: '2–4 µm spores' },
  { id: 'diatom', titleId: 'exp-diatom-title', descId: 'exp-diatom-desc', imgId: 'exp-img-diatom-dd04', title: 'Diatom', desc: 'Single-celled algae with intricate glass-like silica shells, producing 20% of Earth\'s oxygen.', category: 'Algae', size: '2–200 µm' },
  { id: 'amoeba', titleId: 'exp-amoeba-title', descId: 'exp-amoeba-desc', imgId: 'exp-img-amoeba-ee05', title: 'Amoeba', desc: 'Shape-shifting single-celled organisms that engulf prey using pseudopods.', category: 'Protozoa', size: '250–750 µm' },
  { id: 'influenza', titleId: 'exp-influenza-title', descId: 'exp-influenza-desc', imgId: 'exp-img-influenza-ff06', title: 'Influenza Virus', desc: 'A rapidly mutating RNA virus responsible for seasonal flu epidemics worldwide.', category: 'Virus', size: '80–120 nm' },
  { id: 'cyanobacteria', titleId: 'exp-cyano-title', descId: 'exp-cyano-desc', imgId: 'exp-img-cyano-gg07', title: 'Cyanobacteria', desc: 'Ancient photosynthetic bacteria that oxygenated Earth\'s atmosphere 2.4 billion years ago.', category: 'Bacteria', size: '0.5–40 µm' },
  { id: 'paramecium', titleId: 'exp-paramecium-title', descId: 'exp-paramecium-desc', imgId: 'exp-img-paramecium-hh08', title: 'Paramecium', desc: 'Slipper-shaped ciliates that swim using thousands of tiny hair-like cilia.', category: 'Protozoa', size: '50–330 µm' },
  { id: 'aspergillus', titleId: 'exp-aspergillus-title', descId: 'exp-aspergillus-desc', imgId: 'exp-img-aspergillus-ii09', title: 'Aspergillus', desc: 'A genus of molds used in food production, pharmaceuticals, and industrial enzymes.', category: 'Fungi', size: '3–5 µm spores' },
  { id: 'rotavirus', titleId: 'exp-rotavirus-title', descId: 'exp-rotavirus-desc', imgId: 'exp-img-rotavirus-jj10', title: 'Rotavirus', desc: 'A wheel-shaped virus and leading cause of severe diarrhea in young children globally.', category: 'Virus', size: '70–75 nm' },
  { id: 'chlorella', titleId: 'exp-chlorella-title', descId: 'exp-chlorella-desc', imgId: 'exp-img-chlorella-kk11', title: 'Chlorella', desc: 'A green microalga packed with nutrients, studied as a sustainable food and biofuel source.', category: 'Algae', size: '2–10 µm' },
  { id: 'thermophile', titleId: 'exp-thermophile-title', descId: 'exp-thermophile-desc', imgId: 'exp-img-thermophile-ll12', title: 'Thermus aquaticus', desc: 'A heat-loving bacterium from Yellowstone hot springs whose enzyme powers PCR DNA testing.', category: 'Extremophile', size: '3–5 µm' },
];

const categories = ['All', 'Bacteria', 'Fungi', 'Algae', 'Protozoa', 'Virus', 'Extremophile'];

const categoryColors = {
  Bacteria: 'text-cosmos-teal border-cosmos-teal/20 bg-cosmos-teal/10',
  Fungi: 'text-cosmos-emerald border-cosmos-emerald/20 bg-cosmos-emerald/10',
  Algae: 'text-cosmos-cyan border-cosmos-cyan/20 bg-cosmos-cyan/10',
  Protozoa: 'text-cosmos-violet border-cosmos-violet/20 bg-cosmos-violet/10',
  Virus: 'text-red-400 border-red-400/20 bg-red-400/10',
  Extremophile: 'text-cosmos-amber border-cosmos-amber/20 bg-cosmos-amber/10',
};

const ExploreGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch = o.title.toLowerCase().includes(search.toLowerCase()) || o.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, search]);

  return (
    <div ref={containerRef}>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cosmos-dim" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-cosmos-surface border border-cosmos-border rounded-full pl-11 pr-10 py-3 text-cosmos-text text-sm placeholder:text-cosmos-dim focus:outline-none focus:border-cosmos-teal/50 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cosmos-dim hover:text-cosmos-muted"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cosmos-teal text-cosmos-bg border-cosmos-teal'
                  : 'bg-transparent text-cosmos-muted border-cosmos-border hover:border-cosmos-teal/40 hover:text-cosmos-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-cosmos-dim text-sm mb-6">
        Showing <span className="text-cosmos-teal font-medium">{filtered.length}</span> organisms
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((org) => (
            <article
              key={org.id}
              className="bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-[0_0_25px_rgba(0,212,200,0.1)] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface/70 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[org.category]}`}>
                  {org.category}
                </span>
              </div>
              <div className="p-4">
                <h3 id={org.titleId} className="text-cosmos-text font-semibold text-base mb-1">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-cosmos-muted text-xs leading-relaxed mb-3 line-clamp-2">
                  {org.desc}
                </p>
                <div className="flex items-center gap-1 text-cosmos-dim text-xs">
                  <span className="font-medium text-cosmos-teal">Size:</span>
                  <span>{org.size}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-cosmos-muted text-lg">No organisms found matching your search.</p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('All'); }}
            className="mt-4 text-cosmos-teal text-sm hover:text-cosmos-cyan transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreGallery;
