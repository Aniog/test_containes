import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const categories = ['All', 'Bacteria', 'Fungi', 'Plankton', 'Viruses', 'Protozoa', 'Archaea'];

const organisms = [
  {
    id: 1,
    name: 'Escherichia coli',
    category: 'Bacteria',
    habitat: 'Gut, Soil',
    size: '1–2 µm',
    desc: 'One of the most studied organisms on Earth. Most strains are harmless and essential to gut health.',
    color: 'from-cosmos-teal/20 to-cosmos-teal/5',
    accent: 'text-cosmos-teal',
    badge: 'bg-cosmos-teal/10 text-cosmos-teal',
    emoji: '🦠',
  },
  {
    id: 2,
    name: 'Penicillium chrysogenum',
    category: 'Fungi',
    habitat: 'Soil, Air',
    size: '2–4 µm spores',
    desc: 'The mold that gave us penicillin — one of the most important medical discoveries in history.',
    color: 'from-amber-400/20 to-amber-400/5',
    accent: 'text-amber-400',
    badge: 'bg-amber-400/10 text-amber-400',
    emoji: '🍄',
  },
  {
    id: 3,
    name: 'Noctiluca scintillans',
    category: 'Plankton',
    habitat: 'Ocean Surface',
    size: '200–2000 µm',
    desc: 'The "sea sparkle" — a bioluminescent dinoflagellate that lights up ocean waves at night.',
    color: 'from-cosmos-cyan/20 to-cosmos-cyan/5',
    accent: 'text-cosmos-cyan',
    badge: 'bg-cosmos-cyan/10 text-cosmos-cyan',
    emoji: '✨',
  },
  {
    id: 4,
    name: 'SARS-CoV-2',
    category: 'Viruses',
    habitat: 'Respiratory Tract',
    size: '0.1 µm',
    desc: 'A coronavirus with a distinctive spike protein crown, responsible for the COVID-19 pandemic.',
    color: 'from-cosmos-violet/20 to-cosmos-violet/5',
    accent: 'text-cosmos-violet',
    badge: 'bg-cosmos-violet/10 text-cosmos-violet',
    emoji: '⚡',
  },
  {
    id: 5,
    name: 'Paramecium caudatum',
    category: 'Protozoa',
    habitat: 'Freshwater',
    size: '170–330 µm',
    desc: 'A slipper-shaped single-celled organism covered in cilia, a classic subject of biology labs.',
    color: 'from-green-400/20 to-green-400/5',
    accent: 'text-green-400',
    badge: 'bg-green-400/10 text-green-400',
    emoji: '🔬',
  },
  {
    id: 6,
    name: 'Thermus aquaticus',
    category: 'Bacteria',
    habitat: 'Hot Springs',
    size: '5–10 µm',
    desc: 'An extremophile from Yellowstone hot springs whose enzyme (Taq polymerase) powers PCR testing.',
    color: 'from-orange-400/20 to-orange-400/5',
    accent: 'text-orange-400',
    badge: 'bg-orange-400/10 text-orange-400',
    emoji: '🌋',
  },
  {
    id: 7,
    name: 'Diatoms',
    category: 'Plankton',
    habitat: 'Ocean, Freshwater',
    size: '2–200 µm',
    desc: 'Microscopic algae with intricate glass-like silica shells. Responsible for 20% of global oxygen.',
    color: 'from-cosmos-cyan/20 to-cosmos-cyan/5',
    accent: 'text-cosmos-cyan',
    badge: 'bg-cosmos-cyan/10 text-cosmos-cyan',
    emoji: '💎',
  },
  {
    id: 8,
    name: 'Methanobrevibacter smithii',
    category: 'Archaea',
    habitat: 'Human Gut',
    size: '0.5–1 µm',
    desc: 'The most common archaeon in the human gut, producing methane and aiding in energy extraction.',
    color: 'from-pink-400/20 to-pink-400/5',
    accent: 'text-pink-400',
    badge: 'bg-pink-400/10 text-pink-400',
    emoji: '🧬',
  },
  {
    id: 9,
    name: 'Aspergillus niger',
    category: 'Fungi',
    habitat: 'Soil, Food',
    size: '3–5 µm spores',
    desc: 'Used industrially to produce citric acid. Found in soil worldwide and on decaying plant matter.',
    color: 'from-amber-400/20 to-amber-400/5',
    accent: 'text-amber-400',
    badge: 'bg-amber-400/10 text-amber-400',
    emoji: '🍄',
  },
];

const OrganismCard = ({ organism }) => (
  <div className={`bg-gradient-to-br ${organism.color} border border-cosmos-border rounded-2xl p-6 hover:border-cosmos-teal/30 hover:shadow-[0_0_30px_rgba(0,212,170,0.1)] transition-all duration-300 group`}>
    <div className="flex items-start justify-between mb-4">
      <span className="text-4xl">{organism.emoji}</span>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${organism.badge}`}>
        {organism.category}
      </span>
    </div>
    <h3 className="font-heading font-semibold text-lg text-[#f0f9ff] mb-1 italic">{organism.name}</h3>
    <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{organism.desc}</p>
    <div className="flex items-center gap-4 text-xs text-[#475569]">
      <span>📍 {organism.habitat}</span>
      <span>📏 {organism.size}</span>
    </div>
  </div>
);

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch = o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-cosmos-bg text-[#f0f9ff] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">The Microbial World</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4 text-[#f0f9ff]">
            Explore Microorganisms
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Browse the diverse inhabitants of the microcosmos — from ancient bacteria to bioluminescent plankton.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" />
            <input
              type="text"
              placeholder="Search organisms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-cosmos-card border border-cosmos-border rounded-full pl-11 pr-5 py-3 text-[#f0f9ff] placeholder-[#475569] text-sm focus:outline-none focus:border-cosmos-teal/50 transition"
            />
          </div>
          <div className="flex items-center gap-2 text-[#94a3b8]">
            <Filter className="w-4 h-4" />
            <span className="text-sm">{filtered.length} organisms</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-cosmos-teal text-cosmos-bg'
                  : 'bg-cosmos-card border border-cosmos-border text-[#94a3b8] hover:text-[#f0f9ff] hover:border-cosmos-teal/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((organism) => (
              <OrganismCard key={organism.id} organism={organism} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#475569] text-lg">No organisms found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
