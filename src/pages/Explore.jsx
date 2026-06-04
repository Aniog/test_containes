import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Viruses', 'Cells', 'Fungi', 'Protozoa', 'Archaea'];

const organisms = [
  {
    id: 'ecoli',
    name: 'Escherichia coli',
    category: 'Bacteria',
    size: '1–2 µm',
    habitat: 'Intestinal tract',
    description: 'One of the most studied organisms in biology. E. coli is a gram-negative bacterium that lives in the intestines of warm-blooded organisms and is a cornerstone of genetic research.',
    tags: ['Gram-negative', 'Rod-shaped', 'Model organism'],
    titleId: 'org-ecoli-title',
    descId: 'org-ecoli-desc',
    imgId: 'org-ecoli-img-a1b2',
  },
  {
    id: 'sars-cov2',
    name: 'SARS-CoV-2',
    category: 'Viruses',
    size: '0.1 µm',
    habitat: 'Respiratory tract',
    description: 'The coronavirus responsible for COVID-19. Its distinctive spike proteins allow it to bind to human ACE2 receptors, making it highly infectious and a subject of intense global research.',
    tags: ['Coronavirus', 'RNA virus', 'Enveloped'],
    titleId: 'org-sarscov2-title',
    descId: 'org-sarscov2-desc',
    imgId: 'org-sarscov2-img-c3d4',
  },
  {
    id: 'neuron',
    name: 'Neuron Cell',
    category: 'Cells',
    size: '4–100 µm',
    habitat: 'Brain & nervous system',
    description: 'The fundamental unit of the nervous system. Neurons transmit electrical and chemical signals across the body, forming the basis of thought, memory, and sensation.',
    tags: ['Eukaryote', 'Excitable cell', 'Synaptic'],
    titleId: 'org-neuron-title',
    descId: 'org-neuron-desc',
    imgId: 'org-neuron-img-e5f6',
  },
  {
    id: 'aspergillus',
    name: 'Aspergillus niger',
    category: 'Fungi',
    size: '2–3 µm spores',
    habitat: 'Soil & decaying matter',
    description: 'A common black mold found worldwide. Used industrially to produce citric acid and enzymes, but can cause infections in immunocompromised individuals.',
    tags: ['Mold', 'Saprophyte', 'Industrial use'],
    titleId: 'org-aspergillus-title',
    descId: 'org-aspergillus-desc',
    imgId: 'org-aspergillus-img-g7h8',
  },
  {
    id: 'amoeba',
    name: 'Amoeba proteus',
    category: 'Protozoa',
    size: '250–750 µm',
    habitat: 'Freshwater ponds',
    description: 'A shapeshifting single-celled organism that moves using pseudopods. Amoeba proteus is a classic subject in cell biology for studying phagocytosis and cell motility.',
    tags: ['Unicellular', 'Pseudopods', 'Phagocyte'],
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    imgId: 'org-amoeba-img-i9j0',
  },
  {
    id: 'methanogen',
    name: 'Methanobrevibacter',
    category: 'Archaea',
    size: '0.5–1 µm',
    habitat: 'Anaerobic environments',
    description: 'A methane-producing archaeon found in the guts of animals and in wetlands. These ancient microbes are key players in the global carbon cycle and climate regulation.',
    tags: ['Methanogen', 'Anaerobic', 'Extremophile'],
    titleId: 'org-methanogen-title',
    descId: 'org-methanogen-desc',
    imgId: 'org-methanogen-img-k1l2',
  },
  {
    id: 'streptococcus',
    name: 'Streptococcus pyogenes',
    category: 'Bacteria',
    size: '0.6–1 µm',
    habitat: 'Throat & skin',
    description: 'A gram-positive bacterium responsible for strep throat and scarlet fever. Its chain-forming growth pattern and virulence factors make it a significant human pathogen.',
    tags: ['Gram-positive', 'Cocci', 'Pathogen'],
    titleId: 'org-streptococcus-title',
    descId: 'org-streptococcus-desc',
    imgId: 'org-streptococcus-img-m3n4',
  },
  {
    id: 't4-phage',
    name: 'Bacteriophage T4',
    category: 'Viruses',
    size: '0.2 µm',
    habitat: 'Infects E. coli',
    description: 'A complex virus that infects bacteria. Its intricate structure — resembling a lunar lander — makes it one of the most visually striking entities in the microscopic world.',
    tags: ['Bacteriophage', 'DNA virus', 'Icosahedral'],
    titleId: 'org-t4phage-title',
    descId: 'org-t4phage-desc',
    imgId: 'org-t4phage-img-o5p6',
  },
  {
    id: 'red-blood-cell',
    name: 'Erythrocyte',
    category: 'Cells',
    size: '6–8 µm',
    habitat: 'Bloodstream',
    description: 'Red blood cells are the most abundant cells in human blood. Their biconcave disc shape maximizes surface area for oxygen transport via hemoglobin molecules.',
    tags: ['Anucleate', 'Biconcave', 'Oxygen transport'],
    titleId: 'org-rbc-title',
    descId: 'org-rbc-desc',
    imgId: 'org-rbc-img-q7r8',
  },
];

const categoryColors = {
  Bacteria: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
  Viruses: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
  Cells: 'text-teal-400 bg-teal-400/10 border-teal-400/30',
  Fungi: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  Protozoa: 'text-green-400 bg-green-400/10 border-green-400/30',
  Archaea: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
};

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const filtered = organisms.filter((org) => {
    const matchesCategory = activeCategory === 'All' || org.category === activeCategory;
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, searchQuery, selected]);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
            The Microscopic World
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            Explore <span className="gradient-text">Organisms</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse our curated collection of microscopic life forms — from ancient archaea to modern viruses. Each entry reveals the extraordinary complexity hidden at the smallest scales.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-cyan-400 text-cosmos-black border-cyan-400'
                      : 'border-cyan-900/40 text-slate-400 hover:border-cyan-400/40 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search organisms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cosmos-navy border border-cyan-900/40 text-slate-200 placeholder-slate-500 text-sm pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-cyan-400/60 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg">No organisms found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((org) => (
                <div
                  key={org.id}
                  onClick={() => setSelected(selected?.id === org.id ? null : org)}
                  className="bg-cosmos-navy border border-cyan-900/40 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-cosmos-dark">
                    <img
                      data-strk-img-id={org.imgId}
                      data-strk-img={`[${org.descId}] [${org.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={org.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/80 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${categoryColors[org.category]}`}>
                        {org.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-mono text-slate-400 bg-cosmos-black/60 px-2 py-1 rounded">
                        {org.size}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      id={org.titleId}
                      className="font-heading font-semibold text-lg text-slate-50 mb-1 italic"
                    >
                      {org.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mb-3">
                      Habitat: {org.habitat}
                    </p>
                    <p
                      id={org.descId}
                      className="text-slate-400 text-sm leading-relaxed line-clamp-3"
                    >
                      {org.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {org.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-slate-500 bg-cosmos-dark px-2 py-0.5 rounded font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="mt-4 flex items-center gap-1 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors group/btn">
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detail Panel */}
          {selected && (
            <div className="mt-8 bg-cosmos-navy border border-cyan-400/30 rounded-2xl p-8 shadow-xl shadow-cyan-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    data-strk-img-id={`detail-${selected.imgId}`}
                    data-strk-img={`[${selected.descId}] [${selected.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${categoryColors[selected.category]}`}>
                    {selected.category}
                  </span>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-50 mt-3 mb-2 italic">
                    {selected.name}
                  </h2>
                  <div className="flex gap-4 mb-4">
                    <div>
                      <span className="text-xs text-slate-500 font-mono uppercase tracking-widest block">Size</span>
                      <span className="text-cyan-400 font-mono text-sm">{selected.size}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-mono uppercase tracking-widest block">Habitat</span>
                      <span className="text-cyan-400 font-mono text-sm">{selected.habitat}</span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">{selected.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-400 bg-cosmos-dark border border-cyan-900/30 px-3 py-1 rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-6 text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
