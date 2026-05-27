import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'org-1', name: 'Escherichia coli', category: 'Bacteria', habitat: 'Gut', size: '2 µm', threat: 'Low', description: 'A common gut bacterium, mostly harmless, but certain strains cause severe food poisoning.' },
  { id: 'org-2', name: 'SARS-CoV-2', category: 'Virus', habitat: 'Respiratory', size: '0.1 µm', threat: 'High', description: 'The coronavirus responsible for the COVID-19 pandemic, reshaping global health.' },
  { id: 'org-3', name: 'Saccharomyces cerevisiae', category: 'Fungi', habitat: 'Soil/Food', size: '5 µm', threat: 'None', description: 'Baker\'s yeast — used for millennia to make bread, beer, and wine.' },
  { id: 'org-4', name: 'Plasmodium falciparum', category: 'Protozoa', habitat: 'Blood', size: '1 µm', threat: 'High', description: 'The deadliest malaria parasite, responsible for over 600,000 deaths annually.' },
  { id: 'org-5', name: 'Methanobrevibacter', category: 'Archaea', habitat: 'Gut/Wetlands', size: '1.5 µm', threat: 'None', description: 'A methane-producing archaeon found in the human gut and wetland environments.' },
  { id: 'org-6', name: 'Tardigrade', category: 'Micro-animal', habitat: 'Everywhere', size: '0.5 mm', threat: 'None', description: 'The most resilient animal on Earth — survives radiation, vacuum, and extreme temperatures.' },
  { id: 'org-7', name: 'Cyanobacteria', category: 'Bacteria', habitat: 'Aquatic', size: '3 µm', threat: 'Low', description: 'Ancient photosynthesizers that oxygenated Earth\'s atmosphere 2.4 billion years ago.' },
  { id: 'org-8', name: 'Influenza A', category: 'Virus', habitat: 'Respiratory', size: '0.1 µm', threat: 'Medium', description: 'The flu virus — highly mutable, causing seasonal epidemics and occasional pandemics.' },
  { id: 'org-9', name: 'Aspergillus niger', category: 'Fungi', habitat: 'Soil/Air', size: '3 µm', threat: 'Low', description: 'Used industrially to produce citric acid, found in nearly every environment on Earth.' },
  { id: 'org-10', name: 'Giardia lamblia', category: 'Protozoa', habitat: 'Water', size: '12 µm', threat: 'Medium', description: 'A waterborne parasite causing giardiasis, affecting millions in developing regions.' },
  { id: 'org-11', name: 'Sulfolobus acidocaldarius', category: 'Archaea', habitat: 'Hot Springs', size: '1 µm', threat: 'None', description: 'Thrives in acidic hot springs at 75°C — a model organism for extremophile research.' },
  { id: 'org-12', name: 'Penicillium chrysogenum', category: 'Fungi', habitat: 'Soil/Air', size: '2 µm', threat: 'None', description: 'The mold that produces penicillin — one of the most important medical discoveries in history.' },
];

const categories = ['All', 'Bacteria', 'Virus', 'Fungi', 'Protozoa', 'Archaea', 'Micro-animal'];

const threatColors = {
  None: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Low: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Medium: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  High: 'text-red-400 bg-red-400/10 border-red-400/20',
};

const OrganismCard = ({ org }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-[#0d1f35] rounded-2xl border border-[rgba(0,212,255,0.15)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          alt={org.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`explore-img-${org.id}`}
          data-strk-img={`[explore-desc-${org.id}] [explore-name-${org.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] via-transparent to-transparent" />
        <span className="absolute top-3 left-3 text-xs font-medium tracking-widest uppercase text-[#00d4ff] bg-[#050d1a]/80 rounded-full px-3 py-1 border border-[rgba(0,212,255,0.2)]">
          {org.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 id={`explore-name-${org.id}`} className="text-[#e8f4f8] font-semibold text-base leading-tight italic">
            {org.name}
          </h3>
          <span className={`shrink-0 text-xs font-medium rounded-full px-2.5 py-0.5 border ${threatColors[org.threat]}`}>
            {org.threat}
          </span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#4a7a94] text-xs">Size: <span className="text-[#8ab4c8]">{org.size}</span></span>
          <span className="text-[#4a7a94] text-xs">Habitat: <span className="text-[#8ab4c8]">{org.habitat}</span></span>
        </div>
        <p id={`explore-desc-${org.id}`} className="text-[#8ab4c8] text-sm leading-relaxed line-clamp-3">
          {org.description}
        </p>
      </div>
    </div>
  );
};

const Explore = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = organisms.filter((org) => {
    const matchesCategory = activeCategory === 'All' || org.category === activeCategory;
    const matchesSearch =
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050d1a] pt-20">
      {/* Page Header */}
      <div className="bg-[#0d1f35] border-b border-[rgba(0,212,255,0.1)] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">The Microbial Zoo</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8f4f8] mt-3 mb-4">
            Explore Microorganisms
          </h1>
          <p className="text-[#8ab4c8] max-w-xl mx-auto leading-relaxed">
            Browse our curated collection of microorganisms — from life-saving fungi to world-altering viruses.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4a7a94]" />
            <input
              type="text"
              placeholder="Search organisms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0d1f35] border border-[rgba(0,212,255,0.15)] rounded-full pl-11 pr-5 py-3 text-[#e8f4f8] placeholder-[#4a7a94] text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-[#4a7a94] shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium rounded-full px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00d4ff] text-[#050d1a] border-[#00d4ff]'
                    : 'bg-transparent text-[#8ab4c8] border-[rgba(0,212,255,0.2)] hover:border-[#00d4ff] hover:text-[#00d4ff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-[#4a7a94] text-sm mb-6">
          Showing <span className="text-[#00d4ff]">{filtered.length}</span> organisms
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((org) => (
              <OrganismCard key={org.id} org={org} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#4a7a94] text-lg">No organisms found matching your search.</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="mt-4 text-[#00d4ff] text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
