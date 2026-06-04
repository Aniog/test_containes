import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'e-tardigrade', titleId: 'exp-tardigrade-title', descId: 'exp-tardigrade-desc', imgId: 'exp-img-tardigrade-aa01', category: 'Extremophile', name: 'Tardigrade', desc: 'Microscopic animals capable of surviving extreme conditions including outer space.', size: '0.1–1.5 mm', habitat: 'Ubiquitous' },
  { id: 'e-diatom', titleId: 'exp-diatom-title', descId: 'exp-diatom-desc', imgId: 'exp-img-diatom-bb02', category: 'Algae', name: 'Diatom', desc: 'Single-celled algae with ornate silica cell walls called frustules.', size: '2–500 µm', habitat: 'Aquatic' },
  { id: 'e-ecoli', titleId: 'exp-ecoli-title', descId: 'exp-ecoli-desc', imgId: 'exp-img-ecoli-cc03', category: 'Bacteria', name: 'E. coli', desc: 'Rod-shaped bacterium found in the intestines of warm-blooded organisms.', size: '1–2 µm', habitat: 'Gut flora' },
  { id: 'e-amoeba', titleId: 'exp-amoeba-title', descId: 'exp-amoeba-desc', imgId: 'exp-img-amoeba-dd04', category: 'Protozoa', name: 'Amoeba', desc: 'Shape-shifting single-celled organism that moves using pseudopods.', size: '250–750 µm', habitat: 'Freshwater' },
  { id: 'e-penicillium', titleId: 'exp-penicillium-title', descId: 'exp-penicillium-desc', imgId: 'exp-img-penicillium-ee05', category: 'Fungi', name: 'Penicillium', desc: 'The mold that gave us penicillin — one of the most important medical discoveries.', size: '2–4 µm spores', habitat: 'Soil, food' },
  { id: 'e-vorticella', titleId: 'exp-vorticella-title', descId: 'exp-vorticella-desc', imgId: 'exp-img-vorticella-ff06', category: 'Protozoa', name: 'Vorticella', desc: 'Bell-shaped ciliate that contracts its stalk at extraordinary speed.', size: '30–150 µm', habitat: 'Freshwater' },
  { id: 'e-spirulina', titleId: 'exp-spirulina-title', descId: 'exp-spirulina-desc', imgId: 'exp-img-spirulina-gg07', category: 'Bacteria', name: 'Spirulina', desc: 'Spiral-shaped cyanobacterium rich in protein and used as a superfood supplement.', size: '200–500 µm', habitat: 'Alkaline lakes' },
  { id: 'e-radiolaria', titleId: 'exp-radiolaria-title', descId: 'exp-radiolaria-desc', imgId: 'exp-img-radiolaria-hh08', category: 'Protozoa', name: 'Radiolaria', desc: 'Marine protozoa with intricate mineral skeletons of stunning geometric beauty.', size: '0.1–0.2 mm', habitat: 'Ocean' },
  { id: 'e-rotifer', titleId: 'exp-rotifer-title', descId: 'exp-rotifer-desc', imgId: 'exp-img-rotifer-ii09', category: 'Extremophile', name: 'Rotifer', desc: 'Microscopic animals with a crown of cilia used for locomotion and feeding.', size: '100–500 µm', habitat: 'Freshwater' },
  { id: 'e-aspergillus', titleId: 'exp-aspergillus-title', descId: 'exp-aspergillus-desc', imgId: 'exp-img-aspergillus-jj10', category: 'Fungi', name: 'Aspergillus', desc: 'Common mold used in food production and as a source of industrial enzymes.', size: '2–3 µm spores', habitat: 'Soil, air' },
  { id: 'e-paramecium', titleId: 'exp-paramecium-title', descId: 'exp-paramecium-desc', imgId: 'exp-img-paramecium-kk11', category: 'Protozoa', name: 'Paramecium', desc: 'Slipper-shaped ciliate, a classic subject of microscopy and biology education.', size: '50–330 µm', habitat: 'Freshwater' },
  { id: 'e-cyanobacteria', titleId: 'exp-cyanobacteria-title', descId: 'exp-cyanobacteria-desc', imgId: 'exp-img-cyanobacteria-ll12', category: 'Bacteria', name: 'Cyanobacteria', desc: 'Ancient photosynthetic bacteria that oxygenated Earth\'s atmosphere 2.4 billion years ago.', size: '0.5–40 µm', habitat: 'Aquatic, soil' },
];

const categories = ['All', 'Bacteria', 'Algae', 'Protozoa', 'Fungi', 'Extremophile'];

const categoryColors = {
  Bacteria: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  Algae: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
  Protozoa: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  Fungi: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  Extremophile: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
};

const ExploreGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch = o.name.toLowerCase().includes(search.toLowerCase()) || o.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef}>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0d1526] border border-cyan-500/20 text-slate-200 placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-500 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-[#050b18] border-cyan-500'
                  : 'bg-transparent text-slate-400 border-slate-700 hover:border-cyan-500/40 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-slate-500 text-sm mb-6">
        Showing <span className="text-slate-300">{filtered.length}</span> organisms
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl overflow-hidden card-hover group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt={item.name}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/80 to-transparent" />
              <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[item.category]}`}>
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <h3 id={item.titleId} className="font-display font-semibold text-slate-100 mb-1.5">
                {item.name}
              </h3>
              <p id={item.descId} className="text-slate-400 text-xs leading-relaxed mb-3">
                {item.desc}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-cyan-500/10 pt-3">
                <span>Size: <span className="text-slate-400">{item.size}</span></span>
                <span>{item.habitat}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No organisms found matching your search.</p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('All'); }}
            className="mt-4 text-cyan-300 hover:text-cyan-200 text-sm transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreGallery;
