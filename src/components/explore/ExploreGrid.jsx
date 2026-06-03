import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Archaea', 'Algae'];

const organisms = [
  {
    id: 'ecoli',
    category: 'Bacteria',
    name: 'Escherichia coli',
    commonName: 'E. coli',
    size: '1–2 μm',
    habitat: 'Intestinal tract',
    description: 'One of the most studied organisms on Earth. Most strains are harmless gut residents, but some cause severe illness. A cornerstone of genetic research.',
    tag: 'Bacteria',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    titleId: 'org-ecoli-title',
    descId: 'org-ecoli-desc',
    imgId: 'org-img-ecoli-a1b2c3',
  },
  {
    id: 'sars-cov2',
    category: 'Viruses',
    name: 'SARS-CoV-2',
    commonName: 'Coronavirus',
    size: '0.1 μm',
    habitat: 'Respiratory tract',
    description: 'A betacoronavirus with distinctive spike proteins that bind to ACE2 receptors. Its rapid global spread reshaped modern medicine and public health.',
    tag: 'Virus',
    tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
    titleId: 'org-sarscov2-title',
    descId: 'org-sarscov2-desc',
    imgId: 'org-img-sarscov2-d4e5f6',
  },
  {
    id: 'penicillium',
    category: 'Fungi',
    name: 'Penicillium chrysogenum',
    commonName: 'Penicillin Mold',
    size: '2–4 μm spores',
    habitat: 'Soil, decaying matter',
    description: 'The source of the world\'s first antibiotic. Alexander Fleming\'s accidental discovery of this mold in 1928 revolutionized medicine.',
    tag: 'Fungi',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    titleId: 'org-penicillium-title',
    descId: 'org-penicillium-desc',
    imgId: 'org-img-penicillium-g7h8i9',
  },
  {
    id: 'plasmodium',
    category: 'Protozoa',
    name: 'Plasmodium falciparum',
    commonName: 'Malaria Parasite',
    size: '1–2 μm',
    habitat: 'Blood cells, mosquitoes',
    description: 'The deadliest human parasite, responsible for the most severe form of malaria. Its complex life cycle spans two hosts and multiple developmental stages.',
    tag: 'Protozoa',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    titleId: 'org-plasmodium-title',
    descId: 'org-plasmodium-desc',
    imgId: 'org-img-plasmodium-j1k2l3',
  },
  {
    id: 'methanobrevibacter',
    category: 'Archaea',
    name: 'Methanobrevibacter smithii',
    commonName: 'Gut Archaeon',
    size: '0.5–1 μm',
    habitat: 'Human gut, wetlands',
    description: 'The most common archaeon in the human gut. Produces methane as a metabolic byproduct and plays a key role in energy harvest from food.',
    tag: 'Archaea',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    titleId: 'org-methanobrevibacter-title',
    descId: 'org-methanobrevibacter-desc',
    imgId: 'org-img-methanobrevibacter-m4n5o6',
  },
  {
    id: 'chlamydomonas',
    category: 'Algae',
    name: 'Chlamydomonas reinhardtii',
    commonName: 'Green Alga',
    size: '10 μm',
    habitat: 'Freshwater, soil',
    description: 'A model organism for studying photosynthesis and flagellar motility. Its ability to produce hydrogen gas makes it a candidate for biofuel production.',
    tag: 'Algae',
    tagColor: 'text-lime-400 bg-lime-400/10 border-lime-400/30',
    titleId: 'org-chlamydomonas-title',
    descId: 'org-chlamydomonas-desc',
    imgId: 'org-img-chlamydomonas-p7q8r9',
  },
  {
    id: 'streptococcus',
    category: 'Bacteria',
    name: 'Streptococcus thermophilus',
    commonName: 'Yogurt Bacteria',
    size: '0.7–0.9 μm',
    habitat: 'Dairy products',
    description: 'Essential for yogurt and cheese production. One of the first bacteria to have its genome sequenced, it has been consumed by humans for millennia.',
    tag: 'Bacteria',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    titleId: 'org-streptococcus-title',
    descId: 'org-streptococcus-desc',
    imgId: 'org-img-streptococcus-s1t2u3',
  },
  {
    id: 'aspergillus',
    category: 'Fungi',
    name: 'Aspergillus niger',
    commonName: 'Black Mold',
    size: '3–5 μm spores',
    habitat: 'Soil, decaying vegetation',
    description: 'Used industrially to produce citric acid — the same compound that gives lemons their tartness. Also produces enzymes used in food processing.',
    tag: 'Fungi',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    titleId: 'org-aspergillus-title',
    descId: 'org-aspergillus-desc',
    imgId: 'org-img-aspergillus-v4w5x6',
  },
];

const ExploreGrid = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = organisms.filter((org) => {
    const matchesCategory = activeCategory === 'All' || org.category === activeCategory;
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.commonName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, searchQuery]);

  return (
    <div ref={containerRef}>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a1628] border border-cyan-900/40 text-slate-300 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-400 text-black font-semibold'
                  : 'bg-[#0a1628] border border-cyan-900/40 text-slate-400 hover:border-cyan-400/40 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-slate-500 text-sm font-mono mb-6">
        {filtered.length} organism{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((org) => (
            <div
              key={org.id}
              className="group rounded-2xl bg-[#0a1628] border border-cyan-900/40 overflow-hidden hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full border ${org.tagColor}`}>
                  {org.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-slate-500 text-xs font-mono mb-1 italic">{org.name}</p>
                <h3 id={org.titleId} className="font-display font-bold text-base text-slate-50 mb-1">
                  {org.commonName}
                </h3>

                {/* Meta */}
                <div className="flex gap-3 mb-3">
                  <span className="text-xs text-slate-500 font-mono">⌀ {org.size}</span>
                  <span className="text-xs text-slate-500 font-mono">📍 {org.habitat}</span>
                </div>

                <p id={org.descId} className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {org.description}
                </p>

                <button className="inline-flex items-center gap-1 mt-4 text-cyan-400 text-xs font-medium hover:gap-2 transition-all duration-200">
                  Read more <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No organisms found matching your search.</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-4 text-cyan-400 text-sm hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreGrid;
