import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    classification: 'Phylum Tardigrada',
    category: 'Animal',
    habitat: 'Ubiquitous',
    size: '0.1–1.5 mm',
    description: 'Known as "water bears," tardigrades are the toughest animals on Earth. They can survive in outer space, extreme radiation, and temperatures from -272°C to 150°C.',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    imgId: 'org-img-tardigrade-001',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    classification: 'Class Bacillariophyceae',
    category: 'Algae',
    habitat: 'Aquatic',
    size: '2–500 µm',
    description: 'Single-celled algae with ornate silica cell walls called frustules. They produce about 20% of the oxygen we breathe and form the base of aquatic food chains.',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'org-img-diatom-002',
  },
  {
    id: 'radiolaria',
    name: 'Radiolaria',
    classification: 'Phylum Radiolaria',
    category: 'Protist',
    habitat: 'Marine',
    size: '0.1–2 mm',
    description: 'Marine protists with intricate mineral skeletons of silica or strontium sulfate. Their geometric beauty inspired Ernst Haeckel\'s famous biological illustrations.',
    titleId: 'org-radiolaria-title',
    descId: 'org-radiolaria-desc',
    imgId: 'org-img-radiolaria-003',
  },
  {
    id: 'vorticella',
    name: 'Vorticella',
    classification: 'Class Peritrichia',
    category: 'Protist',
    habitat: 'Freshwater',
    size: '30–150 µm',
    description: 'Bell-shaped ciliates that attach to surfaces via a contractile stalk. They create water currents with their cilia to draw in bacteria and algae for food.',
    titleId: 'org-vorticella-title',
    descId: 'org-vorticella-desc',
    imgId: 'org-img-vorticella-004',
  },
  {
    id: 'spirulina',
    name: 'Spirulina',
    classification: 'Genus Arthrospira',
    category: 'Bacteria',
    habitat: 'Alkaline Lakes',
    size: '200–500 µm',
    description: 'Spiral-shaped cyanobacteria rich in protein, vitamins, and antioxidants. Used as a superfood supplement and studied as a potential food source for space missions.',
    titleId: 'org-spirulina-title',
    descId: 'org-spirulina-desc',
    imgId: 'org-img-spirulina-005',
  },
  {
    id: 'foraminifera',
    name: 'Foraminifera',
    classification: 'Order Foraminifera',
    category: 'Protist',
    habitat: 'Marine',
    size: '0.1–20 cm',
    description: 'Ancient marine protists with chambered shells. Their fossilized remains form limestone deposits and are used by geologists to date rock formations.',
    titleId: 'org-foraminifera-title',
    descId: 'org-foraminifera-desc',
    imgId: 'org-img-foraminifera-006',
  },
  {
    id: 'euglena',
    name: 'Euglena',
    classification: 'Genus Euglena',
    category: 'Protist',
    habitat: 'Freshwater',
    size: '15–500 µm',
    description: 'Fascinating single-celled organisms that can photosynthesize like plants or consume food like animals. They navigate using a light-sensitive eyespot.',
    titleId: 'org-euglena-title',
    descId: 'org-euglena-desc',
    imgId: 'org-img-euglena-007',
  },
  {
    id: 'bdelloid-rotifer',
    name: 'Bdelloid Rotifer',
    classification: 'Class Bdelloidea',
    category: 'Animal',
    habitat: 'Freshwater',
    size: '0.1–0.5 mm',
    description: 'Microscopic animals that have survived without sexual reproduction for 80 million years. They can survive complete desiccation and revive when rehydrated.',
    titleId: 'org-bdelloid-title',
    descId: 'org-bdelloid-desc',
    imgId: 'org-img-bdelloid-008',
  },
  {
    id: 'noctiluca',
    name: 'Noctiluca',
    classification: 'Genus Noctiluca',
    category: 'Protist',
    habitat: 'Marine',
    size: '0.2–2 mm',
    description: 'Bioluminescent marine dinoflagellates responsible for the magical blue glow seen in ocean waves at night. They flash light when disturbed by movement.',
    titleId: 'org-noctiluca-title',
    descId: 'org-noctiluca-desc',
    imgId: 'org-img-noctiluca-009',
  },
];

const categories = ['All', 'Protist', 'Bacteria', 'Algae', 'Animal'];

const ExploreGallery = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const filtered = organisms.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || org.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search organisms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 text-sm"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg">No organisms found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((org) => (
            <div
              key={org.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute top-3 right-3 bg-slate-950/80 text-slate-300 text-xs px-2 py-1 rounded-full border border-slate-700">
                  {org.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-mono text-teal-400 mb-1">{org.classification}</span>
                <h3 id={org.titleId} className="text-lg font-semibold text-slate-100 mb-2">{org.name}</h3>
                <p id={org.descId} className="text-slate-400 text-sm leading-relaxed flex-1">{org.description}</p>
                <div className="flex gap-4 mt-4 pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-xs text-slate-500 block">Habitat</span>
                    <span className="text-xs text-slate-300">{org.habitat}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Size</span>
                    <span className="text-xs text-slate-300">{org.size}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreGallery;
