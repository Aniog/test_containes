import { useEffect, useRef, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'e-coli', titleId: 'org-e-coli-title', descId: 'org-e-coli-desc', imgId: 'org-img-ecoli-a1', title: 'Escherichia coli', desc: 'A common gut bacterium, both essential to digestion and a notorious pathogen in certain strains.', category: 'Bacteria', size: '2 µm', habitat: 'Intestines' },
  { id: 'amoeba', titleId: 'org-amoeba-title', descId: 'org-amoeba-desc', imgId: 'org-img-amoeba-b2', title: 'Amoeba proteus', desc: 'A shape-shifting protozoan that moves and engulfs food using pseudopods.', category: 'Protozoa', size: '250–750 µm', habitat: 'Freshwater' },
  { id: 'penicillium', titleId: 'org-penicillium-title', descId: 'org-penicillium-desc', imgId: 'org-img-penicillium-c3', title: 'Penicillium chrysogenum', desc: 'The mold that gave us penicillin — one of the most important medical discoveries in history.', category: 'Fungi', size: '2–4 µm spores', habitat: 'Soil, food' },
  { id: 'diatom', titleId: 'org-diatom-title', descId: 'org-diatom-desc', imgId: 'org-img-diatom-d4', title: 'Diatoms', desc: 'Microscopic algae with intricate glass-like silica shells, responsible for 20% of global oxygen.', category: 'Algae', size: '2–200 µm', habitat: 'Oceans, lakes' },
  { id: 'influenza', titleId: 'org-influenza-title', descId: 'org-influenza-desc', imgId: 'org-img-influenza-e5', title: 'Influenza Virus', desc: 'The flu virus — a master of mutation that evades immune systems year after year.', category: 'Virus', size: '80–120 nm', habitat: 'Respiratory tract' },
  { id: 'methanogen', titleId: 'org-methanogen-title', descId: 'org-methanogen-desc', imgId: 'org-img-methanogen-f6', title: 'Methanobrevibacter', desc: 'An archaeon that produces methane in the guts of animals and in deep ocean sediments.', category: 'Archaea', size: '0.5–2 µm', habitat: 'Gut, deep sea' },
  { id: 'cyanobacteria', titleId: 'org-cyanobacteria-title', descId: 'org-cyanobacteria-desc', imgId: 'org-img-cyanobacteria-g7', title: 'Cyanobacteria', desc: 'Ancient photosynthetic bacteria that oxygenated Earth\'s atmosphere 2.4 billion years ago.', category: 'Bacteria', size: '0.5–40 µm', habitat: 'Oceans, soil' },
  { id: 'giardia', titleId: 'org-giardia-title', descId: 'org-giardia-desc', imgId: 'org-img-giardia-h8', title: 'Giardia lamblia', desc: 'A pear-shaped parasite with two nuclei that causes giardiasis in contaminated water sources.', category: 'Protozoa', size: '10–20 µm', habitat: 'Water, intestines' },
  { id: 'aspergillus', titleId: 'org-aspergillus-title', descId: 'org-aspergillus-desc', imgId: 'org-img-aspergillus-i9', title: 'Aspergillus niger', desc: 'A black mold used industrially to produce citric acid, and a common cause of food spoilage.', category: 'Fungi', size: '3–5 µm spores', habitat: 'Soil, decaying matter' },
  { id: 'chlorella', titleId: 'org-chlorella-title', descId: 'org-chlorella-desc', imgId: 'org-img-chlorella-j10', title: 'Chlorella vulgaris', desc: 'A single-celled green alga packed with protein and chlorophyll, used as a superfood supplement.', category: 'Algae', size: '2–10 µm', habitat: 'Freshwater' },
  { id: 'bacteriophage', titleId: 'org-bacteriophage-title', descId: 'org-bacteriophage-desc', imgId: 'org-img-bacteriophage-k11', title: 'T4 Bacteriophage', desc: 'A virus that hunts and destroys bacteria — a potential weapon against antibiotic-resistant infections.', category: 'Virus', size: '200 nm', habitat: 'Wherever bacteria live' },
  { id: 'sulfolobus', titleId: 'org-sulfolobus-title', descId: 'org-sulfolobus-desc', imgId: 'org-img-sulfolobus-l12', title: 'Sulfolobus acidocaldarius', desc: 'An extremophile archaeon thriving in acidic hot springs at temperatures above 75°C.', category: 'Archaea', size: '0.8–1 µm', habitat: 'Hot springs' },
];

const categories = ['All', 'Bacteria', 'Protozoa', 'Fungi', 'Algae', 'Virus', 'Archaea'];

const categoryColors = {
  Bacteria: 'text-teal-400 bg-teal-400/10 border-teal-400/30',
  Protozoa: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
  Fungi: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
  Algae: 'text-green-400 bg-green-400/10 border-green-400/30',
  Virus: 'text-red-400 bg-red-400/10 border-red-400/30',
  Archaea: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
};

const OrganismGrid = () => {
  const containerRef = useRef(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch = o.title.toLowerCase().includes(search.toLowerCase()) ||
      o.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef}>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-teal-500/50 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-500 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-xl border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-500 border-teal-500 text-slate-900'
                  : 'bg-slate-800/60 border-slate-700/50 text-slate-400 hover:border-teal-500/40 hover:text-teal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-slate-500 text-sm mb-6">
        Showing <span className="text-teal-400 font-medium">{filtered.length}</span> organisms
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((org) => (
          <article
            key={org.id}
            className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-lg"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                alt={org.title}
                data-strk-img-id={org.imgId}
                data-strk-img={`[${org.descId}] [${org.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[org.category]}`}>
                  {org.category}
                </span>
                <span className="text-slate-500 text-xs">{org.size}</span>
              </div>
              <h3 id={org.titleId} className="text-slate-100 font-semibold text-base mb-1 italic">{org.title}</h3>
              <p id={org.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-2">{org.desc}</p>
              <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center gap-2">
                <span className="text-slate-500 text-xs">Habitat:</span>
                <span className="text-slate-300 text-xs">{org.habitat}</span>
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
            className="mt-4 text-teal-400 hover:text-teal-300 text-sm transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default OrganismGrid;
