import { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
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
    color: '#3DBFA8', bg: '#E8F7F4',
    titleId: 'org-ecoli-title', descId: 'org-ecoli-desc', imgId: 'org-ecoli-img-p7q8r9',
  },
  {
    id: 'cyanobacteria',
    category: 'Bacteria',
    title: 'Cyanobacteria',
    subtitle: "Earth's First Oxygen Producers",
    desc: "These ancient photosynthetic bacteria transformed Earth's atmosphere 2.4 billion years ago, making complex life possible.",
    facts: ["Produce 20% of Earth's oxygen", 'Can fix atmospheric nitrogen', 'Form stromatolites'],
    color: '#3DBFA8', bg: '#E8F7F4',
    titleId: 'org-cyano-title', descId: 'org-cyano-desc', imgId: 'org-cyano-img-s1t2u3',
  },
  {
    id: 'influenza',
    category: 'Viruses',
    title: 'Influenza Virus',
    subtitle: 'The Shape-Shifter',
    desc: 'The flu virus mutates rapidly, evading immune defenses. Its surface proteins hemagglutinin and neuraminidase are key targets for vaccines.',
    facts: ['80–120 nm diameter', 'RNA-based genome', 'Mutates every replication'],
    color: '#5BA4CF', bg: '#EAF4FB',
    titleId: 'org-flu-title', descId: 'org-flu-desc', imgId: 'org-flu-img-v4w5x6',
  },
  {
    id: 'bacteriophage',
    category: 'Viruses',
    title: 'Bacteriophage T4',
    subtitle: 'The Bacterial Predator',
    desc: 'Phages are viruses that infect bacteria. T4 looks like a lunar lander and injects its DNA with mechanical precision.',
    facts: ['200 nm long', 'Kills host in 25 minutes', 'Potential antibiotic alternative'],
    color: '#5BA4CF', bg: '#EAF4FB',
    titleId: 'org-phage-title', descId: 'org-phage-desc', imgId: 'org-phage-img-y7z8a9',
  },
  {
    id: 'penicillium',
    category: 'Fungi',
    title: 'Penicillium',
    subtitle: 'The Antibiotic Mold',
    desc: 'The discovery of penicillin from this mold in 1928 by Alexander Fleming revolutionized medicine and saved hundreds of millions of lives.',
    facts: ['Produces penicillin', 'Used in cheese making', 'Spores spread by air'],
    color: '#FF8B64', bg: '#FFF0EB',
    titleId: 'org-pen-title', descId: 'org-pen-desc', imgId: 'org-pen-img-b1c2d3',
  },
  {
    id: 'mycorrhizae',
    category: 'Fungi',
    title: 'Mycorrhizal Fungi',
    subtitle: 'The Wood Wide Web',
    desc: 'These fungi form symbiotic networks with plant roots, connecting trees across entire forests and enabling nutrient sharing.',
    facts: ['90% of plants depend on them', 'Networks span kilometers', 'Increase drought resistance'],
    color: '#FF8B64', bg: '#FFF0EB',
    titleId: 'org-myco-title', descId: 'org-myco-desc', imgId: 'org-myco-img-e4f5g6',
  },
  {
    id: 'amoeba',
    category: 'Protozoa',
    title: 'Amoeba proteus',
    subtitle: 'The Shape-Changer',
    desc: 'Amoebas move and feed by extending pseudopods — temporary projections of cytoplasm — engulfing bacteria and algae.',
    facts: ['Up to 1 mm in size', 'No fixed shape', 'Reproduces by binary fission'],
    color: '#9B8EC4', bg: '#F0EDF9',
    titleId: 'org-amoeba-title', descId: 'org-amoeba-desc', imgId: 'org-amoeba-img-h7i8j9',
  },
  {
    id: 'diatoms',
    category: 'Algae',
    title: 'Diatoms',
    subtitle: 'Glass-Walled Architects',
    desc: "Diatoms build intricate silica shells called frustules. They produce 20% of Earth's oxygen and form the base of aquatic food chains.",
    facts: ['100,000+ species', 'Silica cell walls', "Produce 20% of Earth's O₂"],
    color: '#6BCB77', bg: '#EDFAF0',
    titleId: 'org-diatom-title', descId: 'org-diatom-desc', imgId: 'org-diatom-img-k1l2m3',
  },
];

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
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B2CFC8]" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-[#D9EDE8] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#2C3E50] placeholder-[#B2CFC8] focus:outline-none focus:border-[#3DBFA8] transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-[#3DBFA8] text-white'
                  : 'bg-white border border-[#D9EDE8] text-[#7F8C8D] hover:border-[#3DBFA8] hover:text-[#3DBFA8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#B2CFC8]">
          No organisms found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((org) => (
            <div
              key={org.id}
              className="bg-white border border-[#D9EDE8] rounded-xl overflow-hidden hover:border-[#3DBFA8] transition-colors"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <span
                  className="absolute top-2.5 left-2.5 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-md"
                  style={{ background: org.bg, color: org.color }}
                >
                  {org.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 id={org.titleId} className="text-sm font-bold text-[#2C3E50] mb-0.5">
                  {org.title}
                </h3>
                <p className="text-xs text-[#B2CFC8] mb-2 italic">{org.subtitle}</p>
                <p id={org.descId} className="text-xs text-[#7F8C8D] leading-relaxed mb-3 line-clamp-3">
                  {org.desc}
                </p>
                <ul className="space-y-1">
                  {org.facts.map((fact) => (
                    <li key={fact} className="flex items-center gap-2 text-xs text-[#7F8C8D]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: org.color }} />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreGrid;

