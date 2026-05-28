import { useState, useEffect, useRef } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Archaea', 'Fungi', 'Protozoa', 'Algae', 'Viruses'];

const organisms = [
  {
    id: 'org-1',
    name: 'Escherichia coli',
    category: 'Bacteria',
    habitat: 'Intestinal tract',
    size: '1–2 µm',
    desc: 'One of the most studied organisms on Earth. E. coli is a model organism for molecular biology and plays a vital role in the human gut microbiome.',
    tags: ['Gram-negative', 'Rod-shaped', 'Facultative anaerobe'],
    imgId: 'org-img-001abc',
    color: 'cyan',
  },
  {
    id: 'org-2',
    name: 'Methanobrevibacter',
    category: 'Archaea',
    habitat: 'Anaerobic environments',
    size: '0.5–1 µm',
    desc: 'Ancient methane-producing archaea that thrive in oxygen-free environments, from deep-sea vents to the human digestive system.',
    tags: ['Methanogen', 'Anaerobic', 'Extremophile'],
    imgId: 'org-img-002def',
    color: 'violet',
  },
  {
    id: 'org-3',
    name: 'Aspergillus niger',
    category: 'Fungi',
    habitat: 'Soil & decaying matter',
    size: '2–3 µm spores',
    desc: 'A black mold with enormous industrial importance — used to produce citric acid, enzymes, and various pharmaceuticals.',
    tags: ['Mold', 'Saprophyte', 'Industrial'],
    imgId: 'org-img-003ghi',
    color: 'emerald',
  },
  {
    id: 'org-4',
    name: 'Paramecium caudatum',
    category: 'Protozoa',
    habitat: 'Freshwater ponds',
    size: '150–300 µm',
    desc: 'A slipper-shaped ciliate that navigates freshwater environments using thousands of tiny hair-like cilia in coordinated waves.',
    tags: ['Ciliate', 'Heterotroph', 'Unicellular'],
    imgId: 'org-img-004jkl',
    color: 'cyan',
  },
  {
    id: 'org-5',
    name: 'Chlorella vulgaris',
    category: 'Algae',
    habitat: 'Freshwater & soil',
    size: '2–10 µm',
    desc: 'A single-celled green alga packed with chlorophyll, proteins, and nutrients. Studied for biofuel production and space food.',
    tags: ['Photosynthetic', 'Green alga', 'Eukaryote'],
    imgId: 'org-img-005mno',
    color: 'emerald',
  },
  {
    id: 'org-6',
    name: 'Bacteriophage T4',
    category: 'Viruses',
    habitat: 'Infects E. coli',
    size: '200 nm',
    desc: 'A complex virus that attacks bacteria with a precision landing mechanism, injecting its DNA like a molecular syringe.',
    tags: ['Phage', 'DNA virus', 'Lytic'],
    imgId: 'org-img-006pqr',
    color: 'violet',
  },
  {
    id: 'org-7',
    name: 'Streptomyces coelicolor',
    category: 'Bacteria',
    habitat: 'Soil',
    size: '0.5–1 µm',
    desc: 'The source of most natural antibiotics used in medicine today. This soil bacterium produces over 20 different antibiotic compounds.',
    tags: ['Actinobacteria', 'Antibiotic producer', 'Filamentous'],
    imgId: 'org-img-007stu',
    color: 'cyan',
  },
  {
    id: 'org-8',
    name: 'Trypanosoma brucei',
    category: 'Protozoa',
    habitat: 'Blood of mammals',
    size: '15–30 µm',
    desc: 'The parasite responsible for African sleeping sickness, with a remarkable ability to evade the immune system by switching surface proteins.',
    tags: ['Parasite', 'Flagellate', 'Pathogen'],
    imgId: 'org-img-008vwx',
    color: 'violet',
  },
  {
    id: 'org-9',
    name: 'Saccharomyces cerevisiae',
    category: 'Fungi',
    habitat: 'Fruit skins & soil',
    size: '5–10 µm',
    desc: 'Baker\'s yeast — humanity\'s oldest biotechnology partner. Used in bread, beer, wine, and as a model organism for genetics.',
    tags: ['Yeast', 'Fermentation', 'Model organism'],
    imgId: 'org-img-009yza',
    color: 'emerald',
  },
];

const colorMap = {
  cyan: { badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', dot: 'bg-cyan-400' },
  emerald: { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', dot: 'bg-emerald-400' },
  violet: { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30', dot: 'bg-violet-400' },
};

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch =
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-cyan-500/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Organism Database</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Explore Microorganisms
          </h1>
          <p className="text-slate-400 max-w-xl text-lg">
            Browse our curated collection of microscopic life forms — from ancient archaea to complex fungi.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search organisms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    activeCategory === cat
                      ? 'bg-cyan-500 border-cyan-500 text-slate-950'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section ref={containerRef} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-sm mb-6">
            Showing <span className="text-slate-300 font-medium">{filtered.length}</span> organisms
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-slate-500 text-lg">No organisms found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((org, i) => {
                const colors = colorMap[org.color] || colorMap.cyan;
                return (
                  <div
                    key={org.id}
                    className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col"
                  >
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden bg-slate-800">
                      <img
                        alt={org.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-strk-img-id={org.imgId}
                        data-strk-img={`[org-name-${i}] [org-cat-${i}] microscope scientific`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                      <span
                        id={`org-cat-${i}`}
                        className={`absolute top-3 left-3 border text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${colors.badge}`}
                      >
                        {org.category}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 id={`org-name-${i}`} className="text-lg font-semibold text-white mb-1 italic">{org.name}</h3>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs text-slate-500">{org.habitat}</span>
                        <span className="text-xs text-slate-500">·</span>
                        <span className="text-xs text-slate-500">{org.size}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{org.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {org.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-slate-400 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Ecosystems section */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Ecosystems</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where Microbes Thrive</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Microorganisms colonize every environment on Earth — from boiling hydrothermal vents to frozen Antarctic ice.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Deep Ocean', desc: 'Hydrothermal vents host extremophiles at 400°C', icon: '🌊', color: 'border-cyan-500/30 hover:border-cyan-500/60' },
              { name: 'Soil', desc: 'A teaspoon of soil contains a billion bacteria', icon: '🌱', color: 'border-emerald-500/30 hover:border-emerald-500/60' },
              { name: 'Human Gut', desc: '38 trillion microbes call your body home', icon: '🧬', color: 'border-violet-500/30 hover:border-violet-500/60' },
              { name: 'Atmosphere', desc: 'Microbes travel thousands of miles on air currents', icon: '☁️', color: 'border-cyan-500/30 hover:border-cyan-500/60' },
            ].map(({ name, desc, icon, color }) => (
              <div
                key={name}
                className={`bg-slate-900 border ${color} rounded-2xl p-6 transition-colors`}
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold mb-2">{name}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
