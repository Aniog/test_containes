import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'e-coli',
    name: 'Escherichia coli',
    common: 'E. coli',
    category: 'Bacteria',
    habitat: 'Gut',
    size: '1–2 µm',
    description: 'One of the most studied organisms in biology. Most strains are harmless gut residents essential for digestion and vitamin production.',
    tags: ['Prokaryote', 'Rod-shaped', 'Gram-negative'],
    color: 'cyan',
    imgId: 'org-ecoli-mc010',
  },
  {
    id: 'tardigrade',
    name: 'Ramazzottius varieornatus',
    common: 'Tardigrade',
    category: 'Micro-animal',
    habitat: 'Moss & Lichen',
    size: '0.1–1.5 mm',
    description: 'Known as "water bears," tardigrades are the most resilient animals on Earth — surviving vacuum, radiation, and extreme temperatures.',
    tags: ['Extremophile', 'Cryptobiosis', 'Eutardigrada'],
    color: 'emerald',
    imgId: 'org-tardigrade-mc011',
  },
  {
    id: 'diatom',
    name: 'Bacillariophyta',
    common: 'Diatom',
    category: 'Algae',
    habitat: 'Ocean & Freshwater',
    size: '2–200 µm',
    description: 'Microscopic algae encased in intricate silica shells. Responsible for 20% of global oxygen production and a key part of the carbon cycle.',
    tags: ['Photosynthetic', 'Silica shell', 'Plankton'],
    color: 'violet',
    imgId: 'org-diatom-mc012',
  },
  {
    id: 'amoeba',
    name: 'Amoeba proteus',
    common: 'Amoeba',
    category: 'Protozoa',
    habitat: 'Freshwater',
    size: '250–750 µm',
    description: 'Shape-shifting single-celled hunters that engulf prey using pseudopods. A classic model organism for studying cell movement.',
    tags: ['Eukaryote', 'Pseudopods', 'Predator'],
    color: 'cyan',
    imgId: 'org-amoeba-mc013',
  },
  {
    id: 'penicillium',
    name: 'Penicillium chrysogenum',
    common: 'Penicillium',
    category: 'Fungi',
    habitat: 'Soil & Decaying matter',
    size: '2–4 µm spores',
    description: 'The mold that changed medicine forever. Alexander Fleming\'s discovery of penicillin from this fungus revolutionized treatment of bacterial infections.',
    tags: ['Mold', 'Antibiotic', 'Saprophyte'],
    color: 'emerald',
    imgId: 'org-penicillium-mc014',
  },
  {
    id: 'paramecium',
    name: 'Paramecium caudatum',
    common: 'Paramecium',
    category: 'Protozoa',
    habitat: 'Freshwater',
    size: '50–330 µm',
    description: 'Slipper-shaped ciliates that swim using thousands of tiny hair-like cilia. A favorite in biology classrooms for observing single-cell behavior.',
    tags: ['Ciliate', 'Eukaryote', 'Heterotroph'],
    color: 'violet',
    imgId: 'org-paramecium-mc015',
  },
  {
    id: 'cyanobacteria',
    name: 'Anabaena spiroides',
    common: 'Cyanobacteria',
    category: 'Bacteria',
    habitat: 'Freshwater & Ocean',
    size: '1–10 µm',
    description: 'Ancient photosynthetic bacteria that oxygenated Earth\'s atmosphere 2.4 billion years ago. The ancestors of plant chloroplasts.',
    tags: ['Photosynthetic', 'Nitrogen-fixing', 'Colonial'],
    color: 'cyan',
    imgId: 'org-cyanobacteria-mc016',
  },
  {
    id: 'rotifer',
    name: 'Bdelloidea',
    common: 'Rotifer',
    category: 'Micro-animal',
    habitat: 'Freshwater & Soil',
    size: '100–500 µm',
    description: 'Microscopic animals with a crown of cilia that creates a whirlpool to draw in food. Some species reproduce entirely without males.',
    tags: ['Ciliary crown', 'Asexual', 'Filter feeder'],
    color: 'emerald',
    imgId: 'org-rotifer-mc017',
  },
];

const categories = ['All', 'Bacteria', 'Fungi', 'Protozoa', 'Algae', 'Micro-animal'];

const tagColorMap = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

const OrganismCard = ({ org }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.08)] flex flex-col"
    >
      <div className="relative h-44 overflow-hidden bg-slate-800">
        <img
          alt={org.common}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={org.imgId}
          data-strk-img={`[${org.id}-desc] [${org.id}-name]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full border ${tagColorMap[org.color]}`}>
          {org.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-slate-500 text-xs italic mb-1">{org.name}</p>
        <h3 id={`${org.id}-name`} className="font-grotesk font-bold text-lg text-white mb-1">{org.common}</h3>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span>📍 {org.habitat}</span>
          <span>📏 {org.size}</span>
        </div>
        <p id={`${org.id}-desc`} className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{org.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {org.tags.map((tag) => (
            <span key={tag} className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const OrganismGrid = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = organisms.filter((org) => {
    const matchesCategory = activeCategory === 'All' || org.category === activeCategory;
    const matchesSearch =
      org.common.toLowerCase().includes(search.toLowerCase()) ||
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-full pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 border-cyan-500 text-slate-900'
                  : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-slate-500 text-sm mb-6">
        Showing <span className="text-cyan-400 font-medium">{filtered.length}</span> organisms
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((org) => (
            <OrganismCard key={org.id} org={org} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No organisms found matching your search.</p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('All'); }}
            className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default OrganismGrid;
