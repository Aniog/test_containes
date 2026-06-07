import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'ecoli', titleId: 'org-ecoli-title', descId: 'org-ecoli-desc', imgId: 'org-img-ecoli-a1', name: 'Escherichia coli', category: 'Bacteria', size: '2 µm', habitat: 'Gut', desc: 'One of the most studied organisms on Earth. Most strains are harmless gut residents, but some cause severe illness.', color: 'teal' },
  { id: 'tardigrade', titleId: 'org-tardigrade-title', descId: 'org-tardigrade-desc', imgId: 'org-img-tardigrade-b2', name: 'Tardigrade', category: 'Micro-animal', size: '0.5 mm', habitat: 'Everywhere', desc: 'The most resilient animal known. Survives vacuum, radiation, extreme temperatures, and even the void of space.', color: 'cyan' },
  { id: 'amoeba', titleId: 'org-amoeba-title', descId: 'org-amoeba-desc', imgId: 'org-img-amoeba-c3', name: 'Amoeba proteus', category: 'Protozoa', size: '250–750 µm', habitat: 'Freshwater', desc: 'A shapeshifting single-celled predator that engulfs prey using flowing pseudopods.', color: 'purple' },
  { id: 'penicillium', titleId: 'org-penicillium-title', descId: 'org-penicillium-desc', imgId: 'org-img-penicillium-d4', name: 'Penicillium', category: 'Fungi', size: '2–4 µm spores', habitat: 'Soil / Food', desc: 'The mold that gave us penicillin — the antibiotic that has saved hundreds of millions of lives.', color: 'emerald' },
  { id: 'influenza', titleId: 'org-influenza-title', descId: 'org-influenza-desc', imgId: 'org-img-influenza-e5', name: 'Influenza A', category: 'Virus', size: '80–120 nm', habitat: 'Respiratory tract', desc: 'A rapidly mutating RNA virus responsible for seasonal flu epidemics and occasional pandemics.', color: 'red' },
  { id: 'diatom', titleId: 'org-diatom-title', descId: 'org-diatom-desc', imgId: 'org-img-diatom-f6', name: 'Diatom', category: 'Algae', size: '2–200 µm', habitat: 'Ocean / Freshwater', desc: 'Microscopic algae with intricate glass-like silica shells. Responsible for 20% of Earth\'s oxygen production.', color: 'cyan' },
  { id: 'streptococcus', titleId: 'org-strep-title', descId: 'org-strep-desc', imgId: 'org-img-strep-g7', name: 'Streptococcus', category: 'Bacteria', size: '0.5–2 µm', habitat: 'Throat / Skin', desc: 'Chain-forming bacteria that range from harmless mouth residents to the cause of strep throat and scarlet fever.', color: 'teal' },
  { id: 'paramecium', titleId: 'org-paramecium-title', descId: 'org-paramecium-desc', imgId: 'org-img-paramecium-h8', name: 'Paramecium', category: 'Protozoa', size: '50–330 µm', habitat: 'Freshwater', desc: 'A slipper-shaped ciliate that propels itself with thousands of tiny hair-like cilia, hunting bacteria for food.', color: 'purple' },
  { id: 'aspergillus', titleId: 'org-aspergillus-title', descId: 'org-aspergillus-desc', imgId: 'org-img-aspergillus-i9', name: 'Aspergillus niger', category: 'Fungi', size: '3–5 µm spores', habitat: 'Soil / Air', desc: 'The black mold used industrially to produce citric acid — found in nearly every soft drink on the planet.', color: 'emerald' },
];

const categories = ['All', 'Bacteria', 'Virus', 'Fungi', 'Protozoa', 'Algae', 'Micro-animal'];

const colorMap = {
  teal: { badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30', border: 'hover:border-teal-500/50' },
  cyan: { badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30', border: 'hover:border-cyan-500/50' },
  purple: { badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', border: 'hover:border-purple-500/50' },
  emerald: { badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', border: 'hover:border-emerald-500/50' },
  red: { badge: 'bg-red-500/20 text-red-300 border-red-500/30', border: 'hover:border-red-500/50' },
};

const ExploreGallery = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch =
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef}>
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/60 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-teal-500/50 hover:text-teal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-slate-500 text-sm mb-6">
        Showing {filtered.length} organism{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((org) => {
          const colors = colorMap[org.color] || colorMap.teal;
          return (
            <article
              key={org.id}
              className={`bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${colors.border} hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 group`}
            >
              <div className="relative overflow-hidden h-44">
                <img
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colors.badge}`}>
                    {org.category}
                  </span>
                  <span className="text-slate-500 text-xs">{org.size}</span>
                </div>
                <h3 id={org.titleId} className="font-grotesk font-semibold text-slate-100 text-base mb-1 italic">
                  {org.name}
                </h3>
                <p className="text-slate-500 text-xs mb-2">Habitat: {org.habitat}</p>
                <p id={org.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {org.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No organisms found matching your search.</p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('All'); }}
            className="mt-4 text-teal-400 hover:text-teal-300 text-sm underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreGallery;
