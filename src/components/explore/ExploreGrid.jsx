import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'ecoli',
    category: 'Bacteria',
    name: 'Escherichia coli',
    commonName: 'E. coli',
    size: '1–2 µm',
    habitat: 'Intestinal tract',
    description: 'One of the most studied organisms in biology. Most strains are harmless and essential for gut health, though some cause illness.',
    color: 'text-[#00d4c8]',
    badge: 'bg-[#00d4c8]/15 text-[#00d4c8] border-[#00d4c8]/30',
    imgId: 'org-ecoli-a1b2c3',
    titleId: 'org-ecoli-title',
    descId: 'org-ecoli-desc',
  },
  {
    id: 'streptococcus',
    category: 'Bacteria',
    name: 'Streptococcus pneumoniae',
    commonName: 'Pneumococcus',
    size: '0.5–1.25 µm',
    habitat: 'Respiratory tract',
    description: 'A leading cause of pneumonia and meningitis, this bacterium forms characteristic pairs and chains under the microscope.',
    color: 'text-[#00d4c8]',
    badge: 'bg-[#00d4c8]/15 text-[#00d4c8] border-[#00d4c8]/30',
    imgId: 'org-strep-d4e5f6',
    titleId: 'org-strep-title',
    descId: 'org-strep-desc',
  },
  {
    id: 'sars-cov2',
    category: 'Viruses',
    name: 'SARS-CoV-2',
    commonName: 'COVID-19 Virus',
    size: '0.1–0.14 µm',
    habitat: 'Respiratory cells',
    description: 'The coronavirus responsible for the COVID-19 pandemic. Its distinctive spike proteins allow it to bind to human ACE2 receptors.',
    color: 'text-violet-400',
    badge: 'bg-violet-400/15 text-violet-400 border-violet-400/30',
    imgId: 'org-sarscov2-g7h8i9',
    titleId: 'org-sarscov2-title',
    descId: 'org-sarscov2-desc',
  },
  {
    id: 'influenza',
    category: 'Viruses',
    name: 'Influenza A virus',
    commonName: 'Flu Virus',
    size: '80–120 nm',
    habitat: 'Respiratory epithelium',
    description: 'Responsible for seasonal flu epidemics, this RNA virus mutates rapidly, requiring annual vaccine updates.',
    color: 'text-violet-400',
    badge: 'bg-violet-400/15 text-violet-400 border-violet-400/30',
    imgId: 'org-influenza-j1k2l3',
    titleId: 'org-influenza-title',
    descId: 'org-influenza-desc',
  },
  {
    id: 'aspergillus',
    category: 'Fungi',
    name: 'Aspergillus niger',
    commonName: 'Black Mold',
    size: '2–3.5 µm spores',
    habitat: 'Soil, decaying matter',
    description: 'A common mold used industrially to produce citric acid. Its spores are ubiquitous in the environment.',
    color: 'text-green-400',
    badge: 'bg-green-400/15 text-green-400 border-green-400/30',
    imgId: 'org-aspergillus-m4n5o6',
    titleId: 'org-aspergillus-title',
    descId: 'org-aspergillus-desc',
  },
  {
    id: 'penicillium',
    category: 'Fungi',
    name: 'Penicillium chrysogenum',
    commonName: 'Penicillin Mold',
    size: '2–4 µm',
    habitat: 'Soil, food surfaces',
    description: 'The source of the world\'s first antibiotic, penicillin. Alexander Fleming\'s discovery in 1928 revolutionized medicine.',
    color: 'text-green-400',
    badge: 'bg-green-400/15 text-green-400 border-green-400/30',
    imgId: 'org-penicillium-p7q8r9',
    titleId: 'org-penicillium-title',
    descId: 'org-penicillium-desc',
  },
  {
    id: 'paramecium',
    category: 'Protozoa',
    name: 'Paramecium caudatum',
    commonName: 'Paramecium',
    size: '50–330 µm',
    habitat: 'Freshwater ponds',
    description: 'A slipper-shaped ciliate that moves using thousands of tiny hair-like cilia. One of the most recognizable protozoa.',
    color: 'text-sky-400',
    badge: 'bg-sky-400/15 text-sky-400 border-sky-400/30',
    imgId: 'org-paramecium-s1t2u3',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
  },
  {
    id: 'amoeba',
    category: 'Protozoa',
    name: 'Amoeba proteus',
    commonName: 'Amoeba',
    size: '250–750 µm',
    habitat: 'Freshwater, soil',
    description: 'Famous for its constantly changing shape, the amoeba moves and feeds by extending pseudopods to engulf prey.',
    color: 'text-sky-400',
    badge: 'bg-sky-400/15 text-sky-400 border-sky-400/30',
    imgId: 'org-amoeba-v4w5x6',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
  },
];

const categories = ['All', 'Bacteria', 'Viruses', 'Fungi', 'Protozoa'];

const ExploreGrid = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = organisms.filter((org) => {
    const matchCat = activeCategory === 'All' || org.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      org.name.toLowerCase().includes(q) ||
      org.commonName.toLowerCase().includes(q) ||
      org.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, searchQuery]);

  return (
    <div ref={containerRef}>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0f1f38] border border-slate-700 rounded-xl text-slate-50 placeholder-slate-500 text-sm focus:outline-none focus:border-[#00d4c8]/50 transition"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-[#00d4c8] text-[#050d1a]'
                  : 'bg-[#0f1f38] border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          No organisms found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((org) => (
            <div
              key={org.id}
              className="bg-[#0f1f38] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/70 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] microscopy`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${org.badge}`}>
                  {org.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-slate-500 text-xs mb-1">{org.commonName}</p>
                <h3 id={org.titleId} className="text-slate-50 font-bold text-base mb-2 italic">{org.name}</h3>
                <p id={org.descId} className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">{org.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-700/50 pt-3">
                  <span>Size: <span className="text-slate-300">{org.size}</span></span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-300">{org.habitat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreGrid;
