import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'bacteria-ecoli',
    category: 'Bacteria',
    title: 'Escherichia coli',
    subtitle: 'E. coli',
    description: 'A gram-negative bacterium found in the intestines of warm-blooded organisms. Most strains are harmless and are part of the normal gut flora.',
    size: '1–2 μm',
    habitat: 'Intestinal tract',
    discovery: '1885',
    badge: 'text-cosmos-cyan bg-cyan-400/10 border-cyan-400/20',
    titleId: 'exp-ecoli-title',
    descId: 'exp-ecoli-desc',
    imgId: 'exp-ecoli-img-a1b2',
  },
  {
    id: 'bacteria-strep',
    category: 'Bacteria',
    title: 'Streptococcus',
    subtitle: 'Chain-forming cocci',
    description: 'Spherical bacteria that form chains or pairs. Some species cause strep throat and other infections, while others are used in cheese production.',
    size: '0.5–2 μm',
    habitat: 'Throat, skin',
    discovery: '1874',
    badge: 'text-cosmos-cyan bg-cyan-400/10 border-cyan-400/20',
    titleId: 'exp-strep-title',
    descId: 'exp-strep-desc',
    imgId: 'exp-strep-img-c3d4',
  },
  {
    id: 'virus-influenza',
    category: 'Viruses',
    title: 'Influenza Virus',
    subtitle: 'Orthomyxoviridae',
    description: 'An RNA virus responsible for seasonal flu. Its surface is covered with hemagglutinin and neuraminidase proteins that enable cell entry.',
    size: '80–120 nm',
    habitat: 'Respiratory tract',
    discovery: '1933',
    badge: 'text-cosmos-violet bg-violet-400/10 border-violet-400/20',
    titleId: 'exp-flu-title',
    descId: 'exp-flu-desc',
    imgId: 'exp-flu-img-e5f6',
  },
  {
    id: 'virus-bacteriophage',
    category: 'Viruses',
    title: 'Bacteriophage T4',
    subtitle: 'Myoviridae',
    description: 'A virus that infects E. coli bacteria. Its intricate structure resembles a lunar lander, with a head, tail, and leg-like fibers.',
    size: '200 nm',
    habitat: 'Bacterial cells',
    discovery: '1940s',
    badge: 'text-cosmos-violet bg-violet-400/10 border-violet-400/20',
    titleId: 'exp-phage-title',
    descId: 'exp-phage-desc',
    imgId: 'exp-phage-img-g7h8',
  },
  {
    id: 'cell-neuron',
    category: 'Cells',
    title: 'Neuron',
    subtitle: 'Nerve cell',
    description: 'Specialized cells that transmit electrical signals throughout the nervous system. A single neuron can have thousands of connections to other cells.',
    size: '4–100 μm',
    habitat: 'Brain, nervous system',
    discovery: '1873',
    badge: 'text-cosmos-teal bg-teal-400/10 border-teal-400/20',
    titleId: 'exp-neuron-title',
    descId: 'exp-neuron-desc',
    imgId: 'exp-neuron-img-i9j0',
  },
  {
    id: 'cell-rbc',
    category: 'Cells',
    title: 'Red Blood Cell',
    subtitle: 'Erythrocyte',
    description: 'Biconcave disc-shaped cells that carry oxygen throughout the body. They lack a nucleus, maximizing space for hemoglobin molecules.',
    size: '6–8 μm',
    habitat: 'Bloodstream',
    discovery: '1658',
    badge: 'text-cosmos-teal bg-teal-400/10 border-teal-400/20',
    titleId: 'exp-rbc-title',
    descId: 'exp-rbc-desc',
    imgId: 'exp-rbc-img-k1l2',
  },
  {
    id: 'fungi-penicillium',
    category: 'Fungi',
    title: 'Penicillium',
    subtitle: 'Blue-green mold',
    description: 'The mold that gave us penicillin — the world\'s first antibiotic. Its spores are found in soil, decaying matter, and food.',
    size: '2–4 μm spores',
    habitat: 'Soil, food',
    discovery: '1809',
    badge: 'text-cosmos-green bg-lime-400/10 border-lime-400/20',
    titleId: 'exp-pen-title',
    descId: 'exp-pen-desc',
    imgId: 'exp-pen-img-m3n4',
  },
  {
    id: 'protozoa-amoeba',
    category: 'Protozoa',
    title: 'Amoeba proteus',
    subtitle: 'Shape-shifting predator',
    description: 'A single-celled organism that moves and feeds by extending pseudopods. It engulfs prey through phagocytosis in a mesmerizing display.',
    size: '250–750 μm',
    habitat: 'Freshwater, soil',
    discovery: '1755',
    badge: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    titleId: 'exp-amoeba-title',
    descId: 'exp-amoeba-desc',
    imgId: 'exp-amoeba-img-o5p6',
  },
];

const categories = ['All', 'Bacteria', 'Viruses', 'Cells', 'Fungi', 'Protozoa'];

const ExploreGrid = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch =
      o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <section ref={containerRef} className="py-24 bg-cosmos-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search organisms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cosmos-navy border border-cyan-900/40 text-slate-200 placeholder-slate-500 rounded-full pl-11 pr-5 py-3 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cosmos-cyan text-cosmos-black'
                    : 'bg-cosmos-navy border border-cyan-900/40 text-slate-300 hover:border-cyan-400/40 hover:text-cosmos-cyan'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-slate-500 text-sm mb-8">
          Showing {filtered.length} organism{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((org) => (
            <div
              key={org.id}
              className="bg-cosmos-navy border border-cyan-900/30 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] microscope`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/80 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full border ${org.badge}`}>
                  {org.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 id={org.titleId} className="font-heading font-semibold text-slate-50 text-base mb-0.5">
                  {org.title}
                </h3>
                <p className="text-slate-500 text-xs italic mb-3">{org.subtitle}</p>
                <p id={org.descId} className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {org.description}
                </p>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-cosmos-dark rounded-lg p-2">
                    <div className="text-slate-500 mb-0.5">Size</div>
                    <div className="text-slate-300 font-medium">{org.size}</div>
                  </div>
                  <div className="bg-cosmos-dark rounded-lg p-2">
                    <div className="text-slate-500 mb-0.5">Habitat</div>
                    <div className="text-slate-300 font-medium">{org.habitat}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No organisms found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreGrid;
