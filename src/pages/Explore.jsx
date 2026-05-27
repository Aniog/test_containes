import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'ecoli', name: 'Escherichia coli', category: 'Bacteria', habitat: 'Gut', size: '2 µm', threat: 'Low', desc: 'A common gut bacterium, mostly harmless, but certain strains cause severe illness. A workhorse of genetic research.' },
  { id: 'staph', name: 'Staphylococcus aureus', category: 'Bacteria', habitat: 'Skin', size: '1 µm', threat: 'Medium', desc: 'Found on human skin and nasal passages. Can cause infections ranging from minor skin issues to life-threatening sepsis.' },
  { id: 'influenza', name: 'Influenza A Virus', category: 'Virus', habitat: 'Respiratory', size: '100 nm', threat: 'High', desc: 'Responsible for seasonal flu epidemics and occasional pandemics. Mutates rapidly, requiring annual vaccine updates.' },
  { id: 'sars', name: 'SARS-CoV-2', category: 'Virus', habitat: 'Respiratory', size: '120 nm', threat: 'High', desc: 'The coronavirus responsible for COVID-19. Its spike protein binds to ACE2 receptors in human cells.' },
  { id: 'candida', name: 'Candida albicans', category: 'Fungi', habitat: 'Mucous membranes', size: '4 µm', threat: 'Medium', desc: 'A commensal yeast that can become pathogenic. Causes thrush and systemic infections in immunocompromised patients.' },
  { id: 'aspergillus', name: 'Aspergillus fumigatus', category: 'Fungi', habitat: 'Soil/Air', size: '3 µm', threat: 'Medium', desc: 'A ubiquitous mold whose spores are inhaled daily. Dangerous only to those with weakened immune systems.' },
  { id: 'amoeba', name: 'Amoeba proteus', category: 'Protozoa', habitat: 'Freshwater', size: '500 µm', threat: 'Low', desc: 'A classic model organism. Moves using pseudopods and engulfs food by phagocytosis. Visible under a basic microscope.' },
  { id: 'plasmodium', name: 'Plasmodium falciparum', category: 'Protozoa', habitat: 'Blood', size: '5 µm', threat: 'High', desc: 'The deadliest malaria parasite. Transmitted by Anopheles mosquitoes, it infects red blood cells and causes severe disease.' },
  { id: 'lactobacillus', name: 'Lactobacillus acidophilus', category: 'Bacteria', habitat: 'Gut', size: '2 µm', threat: 'None', desc: 'A beneficial probiotic bacterium found in yogurt and the human gut. Produces lactic acid to maintain a healthy microbiome.' },
  { id: 'phage', name: 'T4 Bacteriophage', category: 'Virus', habitat: 'Bacteria', size: '200 nm', threat: 'None', desc: 'A virus that infects E. coli. Its intricate structure resembles a lunar lander. A key tool in molecular biology.' },
  { id: 'penicillium', name: 'Penicillium chrysogenum', category: 'Fungi', habitat: 'Soil', size: '3 µm', threat: 'None', desc: 'The mold that changed medicine. Alexander Fleming discovered it produces penicillin, the world\'s first antibiotic.' },
  { id: 'paramecium', name: 'Paramecium caudatum', category: 'Protozoa', habitat: 'Freshwater', size: '300 µm', threat: 'None', desc: 'A slipper-shaped ciliate that propels itself with thousands of tiny hair-like cilia. A classic subject for microscopy.' },
];

const categories = ['All', 'Bacteria', 'Virus', 'Fungi', 'Protozoa'];

const threatColors = {
  None: 'bg-slate-700 text-slate-300',
  Low: 'bg-emerald-500/15 text-emerald-400',
  Medium: 'bg-yellow-500/15 text-yellow-400',
  High: 'bg-red-500/15 text-red-400',
};

const categoryColors = {
  Bacteria: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  Virus: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  Fungi: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  Protozoa: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
};

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch = o.name.toLowerCase().includes(search.toLowerCase()) || o.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div className="min-h-screen bg-slate-950 pt-16">
      {/* Page Header */}
      <div className="relative py-20 px-4 md:px-8 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">
            Microbial Encyclopedia
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
            Explore Organisms
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse our curated collection of microorganisms — from helpful gut bacteria to fearsome pathogens.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-slate-500" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-teal-500 border-teal-500 text-slate-950 font-semibold'
                    : 'border-slate-700 text-slate-400 hover:border-teal-500/50 hover:text-teal-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search organisms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm pl-9 pr-4 py-2 rounded-full focus:outline-none focus:border-teal-500/60 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            <p className="text-lg">No organisms found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((org) => (
              <div
                key={org.id}
                className="group bg-slate-900 border border-slate-700 hover:border-teal-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/20 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-800">
                  <img
                    alt={org.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`explore-${org.id}-j1k2l3`}
                    data-strk-img={`[explore-desc-${org.id}] [explore-name-${org.id}] microscopy`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${threatColors[org.threat]}`}>
                      {org.threat === 'None' ? 'Benign' : `Threat: ${org.threat}`}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono uppercase tracking-widest border px-2.5 py-0.5 rounded-full ${categoryColors[org.category]}`}>
                      {org.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{org.size}</span>
                  </div>
                  <h3 id={`explore-name-${org.id}`} className="text-lg font-semibold text-slate-100 italic mb-1">
                    {org.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">Habitat: {org.habitat}</p>
                  <p id={`explore-desc-${org.id}`} className="text-slate-400 text-sm leading-relaxed flex-1">
                    {org.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
