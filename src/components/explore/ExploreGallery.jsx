import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Virus', 'Protozoa', 'Fungi', 'Algae', 'Archaea', 'Extremophile'];

const organisms = [
  {
    id: 'e-coli',
    name: 'Escherichia coli',
    common: 'E. coli',
    category: 'Bacteria',
    size: '2 µm',
    habitat: 'Gut flora',
    description: 'One of the most studied organisms on Earth. Most strains are harmless and essential to gut health.',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    titleId: 'org-ecoli-title',
    descId: 'org-ecoli-desc',
    imgId: 'org-img-ecoli-a1b2c3',
  },
  {
    id: 'influenza',
    name: 'Influenza A',
    common: 'Flu Virus',
    category: 'Virus',
    size: '80–120 nm',
    habitat: 'Respiratory tract',
    description: 'A segmented RNA virus that mutates rapidly, requiring annual vaccine reformulation.',
    tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    titleId: 'org-influenza-title',
    descId: 'org-influenza-desc',
    imgId: 'org-img-influenza-d4e5f6',
  },
  {
    id: 'tardigrade',
    name: 'Ramazzottius varieornatus',
    common: 'Tardigrade',
    category: 'Extremophile',
    size: '0.5 mm',
    habitat: 'Moss & lichen',
    description: 'The most resilient animal known — survives vacuum, radiation, and extreme temperatures.',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    imgId: 'org-img-tardigrade-g7h8i9',
  },
  {
    id: 'diatom',
    name: 'Thalassiosira weissflogii',
    common: 'Diatom',
    category: 'Algae',
    size: '10–50 µm',
    habitat: 'Ocean surface',
    description: 'Microscopic algae with intricate silica shells that produce a fifth of Earth\'s oxygen.',
    tagColor: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'org-img-diatom-j1k2l3',
  },
  {
    id: 'amoeba',
    name: 'Amoeba proteus',
    common: 'Amoeba',
    category: 'Protozoa',
    size: '250–750 µm',
    habitat: 'Freshwater ponds',
    description: 'A shapeshifting single-celled predator that engulfs prey using pseudopods.',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    imgId: 'org-img-amoeba-m4n5o6',
  },
  {
    id: 'penicillium',
    name: 'Penicillium chrysogenum',
    common: 'Penicillin Mold',
    category: 'Fungi',
    size: '2–4 µm spores',
    habitat: 'Soil & decaying matter',
    description: 'The source of the world\'s first antibiotic, discovered by Alexander Fleming in 1928.',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    titleId: 'org-penicillium-title',
    descId: 'org-penicillium-desc',
    imgId: 'org-img-penicillium-p7q8r9',
  },
  {
    id: 'thermophilus',
    name: 'Thermus aquaticus',
    common: 'Taq Polymerase Source',
    category: 'Archaea',
    size: '5–10 µm',
    habitat: 'Hot springs (70–75°C)',
    description: 'Lives in boiling hot springs. Its heat-stable enzyme revolutionized DNA amplification (PCR).',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    titleId: 'org-thermophilus-title',
    descId: 'org-thermophilus-desc',
    imgId: 'org-img-thermophilus-s1t2u3',
  },
  {
    id: 'paramecium',
    name: 'Paramecium caudatum',
    common: 'Paramecium',
    category: 'Protozoa',
    size: '50–330 µm',
    habitat: 'Stagnant freshwater',
    description: 'A slipper-shaped ciliate that navigates using thousands of hair-like cilia in coordinated waves.',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
    imgId: 'org-img-paramecium-v4w5x6',
  },
  {
    id: 'cyanobacteria',
    name: 'Anabaena spiroides',
    common: 'Cyanobacteria',
    category: 'Bacteria',
    size: '5–10 µm',
    habitat: 'Freshwater & soil',
    description: 'Ancient photosynthetic bacteria that oxygenated Earth\'s atmosphere 2.4 billion years ago.',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    titleId: 'org-cyanobacteria-title',
    descId: 'org-cyanobacteria-desc',
    imgId: 'org-img-cyanobacteria-y7z8a9',
  },
];

export default function ExploreGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const filtered = organisms.filter((org) => {
    const matchesCategory = activeCategory === 'All' || org.category === activeCategory;
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.common.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef}>
      {/* Search & Filter Bar */}
      <div className="sticky top-16 z-40 bg-[#050d1a]/95 backdrop-blur-md border-b border-slate-700/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search organisms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0a1628] border border-slate-700/50 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-cyan-400 text-slate-900 border-cyan-400'
                      : 'bg-transparent text-slate-400 border-slate-700/50 hover:border-cyan-400/40 hover:text-cyan-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <p className="text-slate-500 text-sm font-mono-label">
          {filtered.length} organism{filtered.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No organisms match your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 text-cyan-400 text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((org) => (
              <div
                key={org.id}
                className="bg-[#0a1628] border border-cyan-900/40 rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:border-cyan-400/40 group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={org.name}
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full border ${org.tagColor}`}>
                    {org.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 id={org.titleId} className="text-slate-50 font-bold text-lg leading-tight">{org.name}</h3>
                  <span className="text-cyan-400 text-xs font-mono-label">{org.common}</span>

                  <p id={org.descId} className="text-slate-400 text-sm leading-relaxed mt-3 mb-4">{org.description}</p>

                  {/* Meta */}
                  <div className="flex gap-4 pt-3 border-t border-slate-700/50">
                    <div>
                      <span className="text-slate-600 text-xs font-mono-label block">SIZE</span>
                      <span className="text-slate-300 text-xs font-mono-label">{org.size}</span>
                    </div>
                    <div>
                      <span className="text-slate-600 text-xs font-mono-label block">HABITAT</span>
                      <span className="text-slate-300 text-xs font-mono-label">{org.habitat}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
