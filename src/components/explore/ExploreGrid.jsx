import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'bacteria',
    category: 'Bacteria',
    title: 'Escherichia coli',
    subtitle: 'The Model Organism',
    desc: 'One of the most studied organisms in biology. E. coli lives in the intestines of warm-blooded animals and is a cornerstone of genetic research.',
    facts: ['0.5–2 μm in size', 'Divides every 20 minutes', 'Used in insulin production'],
    color: 'emerald',
    titleId: 'org-ecoli-title',
    descId: 'org-ecoli-desc',
    imgId: 'org-ecoli-img-p7q8r9',
  },
  {
    id: 'cyanobacteria',
    category: 'Bacteria',
    title: 'Cyanobacteria',
    subtitle: 'Earth\'s First Oxygen Producers',
    desc: 'These ancient photosynthetic bacteria transformed Earth\'s atmosphere 2.4 billion years ago, making complex life possible.',
    facts: ['Produce 20% of Earth\'s oxygen', 'Can fix atmospheric nitrogen', 'Form stromatolites'],
    color: 'cyan',
    titleId: 'org-cyano-title',
    descId: 'org-cyano-desc',
    imgId: 'org-cyano-img-s1t2u3',
  },
  {
    id: 'influenza',
    category: 'Viruses',
    title: 'Influenza Virus',
    subtitle: 'The Shape-Shifter',
    desc: 'The flu virus mutates rapidly, evading immune defenses. Its surface proteins hemagglutinin and neuraminidase are key targets for vaccines.',
    facts: ['80–120 nm diameter', 'RNA-based genome', 'Mutates every replication'],
    color: 'violet',
    titleId: 'org-flu-title',
    descId: 'org-flu-desc',
    imgId: 'org-flu-img-v4w5x6',
  },
  {
    id: 'bacteriophage',
    category: 'Viruses',
    title: 'Bacteriophage T4',
    subtitle: 'The Bacterial Predator',
    desc: 'Phages are viruses that infect bacteria. T4 looks like a lunar lander and injects its DNA with mechanical precision.',
    facts: ['200 nm long', 'Kills host in 25 minutes', 'Potential antibiotic alternative'],
    color: 'violet',
    titleId: 'org-phage-title',
    descId: 'org-phage-desc',
    imgId: 'org-phage-img-y7z8a9',
  },
  {
    id: 'penicillium',
    category: 'Fungi',
    title: 'Penicillium',
    subtitle: 'The Antibiotic Mold',
    desc: 'The discovery of penicillin from this mold in 1928 by Alexander Fleming revolutionized medicine and saved hundreds of millions of lives.',
    facts: ['Produces penicillin', 'Used in cheese making', 'Spores spread by air'],
    color: 'amber',
    titleId: 'org-pen-title',
    descId: 'org-pen-desc',
    imgId: 'org-pen-img-b1c2d3',
  },
  {
    id: 'mycorrhizae',
    category: 'Fungi',
    title: 'Mycorrhizal Fungi',
    subtitle: 'The Wood Wide Web',
    desc: 'These fungi form symbiotic networks with plant roots, connecting trees across entire forests and enabling nutrient sharing.',
    facts: ['90% of plants depend on them', 'Networks span kilometers', 'Increase drought resistance'],
    color: 'amber',
    titleId: 'org-myco-title',
    descId: 'org-myco-desc',
    imgId: 'org-myco-img-e4f5g6',
  },
  {
    id: 'amoeba',
    category: 'Protozoa',
    title: 'Amoeba proteus',
    subtitle: 'The Shape-Changer',
    desc: 'Amoebas move and feed by extending pseudopods — temporary projections of cytoplasm — engulfing bacteria and algae.',
    facts: ['Up to 1 mm in size', 'No fixed shape', 'Reproduces by binary fission'],
    color: 'rose',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    imgId: 'org-amoeba-img-h7i8j9',
  },
  {
    id: 'diatoms',
    category: 'Algae',
    title: 'Diatoms',
    subtitle: 'Glass-Walled Architects',
    desc: 'Diatoms build intricate silica shells called frustules. They produce 20% of Earth\'s oxygen and form the base of aquatic food chains.',
    facts: ['100,000+ species', 'Silica cell walls', 'Produce 20% of Earth\'s O₂'],
    color: 'sky',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'org-diatom-img-k1l2m3',
  },
];

const colorMap = {
  emerald: { badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20', accent: 'text-emerald-400', border: 'border-emerald-400/20' },
  cyan: { badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20', accent: 'text-[#00e5ff]', border: 'border-[#00e5ff]/20' },
  violet: { badge: 'bg-violet-400/10 text-violet-400 border-violet-400/20', accent: 'text-violet-400', border: 'border-violet-400/20' },
  amber: { badge: 'bg-amber-400/10 text-amber-400 border-amber-400/20', accent: 'text-amber-400', border: 'border-amber-400/20' },
  rose: { badge: 'bg-rose-400/10 text-rose-400 border-rose-400/20', accent: 'text-rose-400', border: 'border-rose-400/20' },
  sky: { badge: 'bg-sky-400/10 text-sky-400 border-sky-400/20', accent: 'text-sky-400', border: 'border-sky-400/20' },
};

const categories = ['All', 'Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Algae'];

const ExploreGrid = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch =
      search === '' ||
      o.title.toLowerCase().includes(search.toLowerCase()) ||
      o.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      o.category.toLowerCase().includes(search.toLowerCase());
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
            className="w-full bg-[#0a1628] border border-[#00e5ff]/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#00e5ff]/40 transition-colors"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#00e5ff] text-[#050d1a]'
                  : 'bg-[#0a1628] border border-[#00e5ff]/10 text-slate-400 hover:border-[#00e5ff]/30 hover:text-slate-200'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((org) => {
            const colors = colorMap[org.color] || colorMap.cyan;
            return (
              <div
                key={org.id}
                className={`card-hover bg-[#0a1628] border ${colors.border} rounded-2xl overflow-hidden group`}
              >
                {/* Image */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                    {org.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 id={org.titleId} className={`text-base font-bold ${colors.accent} mb-0.5`}>
                    {org.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 italic">{org.subtitle}</p>
                  <p id={org.descId} className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {org.desc}
                  </p>

                  {/* Facts */}
                  <ul className="space-y-1">
                    {org.facts.map((fact) => (
                      <li key={fact} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className={`w-1 h-1 rounded-full ${colors.accent} bg-current flex-shrink-0`} />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExploreGrid;
