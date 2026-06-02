import { useState, useEffect, useRef } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    sciName: 'Ramazzottius varieornatus',
    category: 'Animal',
    size: '0.1–1.5 mm',
    habitat: 'Ubiquitous',
    description: 'Known as "water bears," tardigrades are the toughest animals on Earth. They can survive in outer space, extreme radiation, and complete desiccation by entering cryptobiosis.',
    facts: ['Survive -272°C', 'Withstand 6,000 atm pressure', 'Live 30 years without water'],
    tag: 'Extremophile',
    tagColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/10',
    imgId: 'explore-tardigrade-img-a1b2c3',
    titleId: 'explore-tardigrade-title',
    descId: 'explore-tardigrade-desc',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    sciName: 'Coscinodiscus radiatus',
    category: 'Algae',
    size: '2–500 µm',
    habitat: 'Aquatic',
    description: 'Single-celled algae encased in intricate silica shells called frustules. Diatoms produce roughly 20% of Earth\'s oxygen and form the base of many aquatic food chains.',
    facts: ['Produce 20% of Earth\'s O₂', 'Over 100,000 species', 'Silica shells last millions of years'],
    tag: 'Algae',
    tagColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    imgId: 'explore-diatom-img-d4e5f6',
    titleId: 'explore-diatom-title',
    descId: 'explore-diatom-desc',
  },
  {
    id: 'ecoli',
    name: 'E. coli',
    sciName: 'Escherichia coli',
    category: 'Bacteria',
    size: '1–2 µm',
    habitat: 'Gut / Soil',
    description: 'One of the most studied organisms in biology. Most strains are harmless gut residents that aid digestion, though some pathogenic strains cause illness.',
    facts: ['Divides every 20 minutes', 'Key model organism', 'Produces vitamin K2'],
    tag: 'Bacteria',
    tagColor: 'text-amber-400 border-amber-400/20 bg-amber-400/10',
    imgId: 'explore-ecoli-img-g7h8i9',
    titleId: 'explore-ecoli-title',
    descId: 'explore-ecoli-desc',
  },
  {
    id: 'rotifer',
    name: 'Bdelloid Rotifer',
    sciName: 'Adineta vaga',
    category: 'Animal',
    size: '0.1–0.5 mm',
    habitat: 'Freshwater',
    description: 'Ancient microscopic animals that have reproduced asexually for over 80 million years. They can survive complete desiccation and even incorporate foreign DNA into their genome.',
    facts: ['80M years without sex', 'Absorb foreign DNA', 'Survive complete drying'],
    tag: 'Rotifer',
    tagColor: 'text-violet-400 border-violet-400/20 bg-violet-400/10',
    imgId: 'explore-rotifer-img-j1k2l3',
    titleId: 'explore-rotifer-title',
    descId: 'explore-rotifer-desc',
  },
  {
    id: 'penicillium',
    name: 'Penicillium',
    sciName: 'Penicillium chrysogenum',
    category: 'Fungi',
    size: '2–4 µm spores',
    habitat: 'Soil / Food',
    description: 'The mold that changed medicine forever. Alexander Fleming discovered that Penicillium produces penicillin, the world\'s first antibiotic, saving hundreds of millions of lives.',
    facts: ['Source of penicillin', 'Used in cheese making', 'Produces mycotoxins'],
    tag: 'Fungi',
    tagColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    imgId: 'explore-penicillium-img-m4n5o6',
    titleId: 'explore-penicillium-title',
    descId: 'explore-penicillium-desc',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    sciName: 'Paramecium caudatum',
    category: 'Protozoa',
    size: '50–330 µm',
    habitat: 'Freshwater',
    description: 'Slipper-shaped single-celled organisms covered in tiny hair-like cilia. They are voracious predators of bacteria and are a classic subject in biology education.',
    facts: ['Covered in 2,500+ cilia', 'Two nuclei (macro & micro)', 'Hunts bacteria actively'],
    tag: 'Protozoa',
    tagColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/10',
    imgId: 'explore-paramecium-img-p7q8r9',
    titleId: 'explore-paramecium-title',
    descId: 'explore-paramecium-desc',
  },
  {
    id: 'cyanobacteria',
    name: 'Cyanobacteria',
    sciName: 'Anabaena spiroides',
    category: 'Bacteria',
    size: '1–10 µm',
    habitat: 'Aquatic / Soil',
    description: 'The original oxygen producers. Cyanobacteria were responsible for the Great Oxidation Event 2.4 billion years ago, transforming Earth\'s atmosphere and enabling complex life.',
    facts: ['Created Earth\'s oxygen', '2.4 billion years old', 'Fix atmospheric nitrogen'],
    tag: 'Bacteria',
    tagColor: 'text-amber-400 border-amber-400/20 bg-amber-400/10',
    imgId: 'explore-cyanobacteria-img-s1t2u3',
    titleId: 'explore-cyanobacteria-title',
    descId: 'explore-cyanobacteria-desc',
  },
  {
    id: 'vorticella',
    name: 'Vorticella',
    sciName: 'Vorticella convallaria',
    category: 'Protozoa',
    size: '30–150 µm',
    habitat: 'Freshwater',
    description: 'Bell-shaped protozoa that attach to surfaces via a coiled stalk. They create water currents with their cilia to draw in bacteria and organic particles for feeding.',
    facts: ['Stalk contracts in milliseconds', 'Filter feeders', 'Form colonies'],
    tag: 'Protozoa',
    tagColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/10',
    imgId: 'explore-vorticella-img-v4w5x6',
    titleId: 'explore-vorticella-title',
    descId: 'explore-vorticella-desc',
  },
  {
    id: 'aspergillus',
    name: 'Aspergillus',
    sciName: 'Aspergillus niger',
    category: 'Fungi',
    size: '3–5 µm spores',
    habitat: 'Soil / Air',
    description: 'A ubiquitous mold found in soil and air worldwide. Used industrially to produce citric acid (found in most sodas) and various enzymes used in food processing.',
    facts: ['Produces citric acid', 'Used in soy sauce', 'Can cause lung infections'],
    tag: 'Fungi',
    tagColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    imgId: 'explore-aspergillus-img-y7z8a9',
    titleId: 'explore-aspergillus-title',
    descId: 'explore-aspergillus-desc',
  },
];

const categories = ['All', 'Bacteria', 'Algae', 'Fungi', 'Protozoa', 'Animal'];

const Explore = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = organisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch =
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.sciName.toLowerCase().includes(search.toLowerCase()) ||
      o.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div ref={containerRef} className="bg-[#050d1a] min-h-screen text-white">
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-[#1a3a5c]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Organism Database</span>
          <h1 id="explore-page-title" className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Explore Microorganisms
          </h1>
          <p id="explore-page-subtitle" className="text-slate-400 max-w-xl">
            Browse our curated collection of microscopic life forms — from ancient bacteria
            to indestructible tardigrades.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search organisms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0a1628] border border-[#1a3a5c] text-slate-200 placeholder-slate-500 text-sm pl-9 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-400 text-[#050d1a] border-cyan-400 font-semibold'
                    : 'border-[#1a3a5c] text-slate-400 hover:border-cyan-400/40 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <p className="text-slate-500 text-xs font-mono mb-6">
          {filtered.length} organism{filtered.length !== 1 ? 's' : ''} found
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No organisms match your search.</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
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
                onClick={() => setSelected(org)}
                className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] [explore-page-subtitle]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${org.tagColor}`}>
                      {org.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={org.titleId} className="text-white font-semibold text-lg mb-0.5">
                    {org.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-mono italic mb-3">{org.sciName}</p>
                  <p id={org.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
                    {org.description}
                  </p>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Size: <span className="text-slate-300">{org.size}</span></span>
                    <span>Habitat: <span className="text-slate-300">{org.habitat}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img
                data-strk-img-id={`modal-${selected.imgId}`}
                data-strk-img={`[modal-desc-${selected.id}] [modal-title-${selected.id}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selected.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-[#050d1a]/80 border border-[#1a3a5c] text-slate-300 hover:text-white p-2 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${selected.tagColor} mb-3 inline-block`}>
                {selected.tag}
              </span>
              <h2 id={`modal-title-${selected.id}`} className="text-white text-2xl font-bold mb-1">
                {selected.name}
              </h2>
              <p className="text-slate-500 text-sm font-mono italic mb-4">{selected.sciName}</p>
              <p id={`modal-desc-${selected.id}`} className="text-slate-300 text-sm leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0f1f38] border border-[#1a3a5c] rounded-xl p-4">
                  <p className="text-slate-500 text-xs font-mono mb-1">Size</p>
                  <p className="text-white text-sm font-semibold">{selected.size}</p>
                </div>
                <div className="bg-[#0f1f38] border border-[#1a3a5c] rounded-xl p-4">
                  <p className="text-slate-500 text-xs font-mono mb-1">Habitat</p>
                  <p className="text-white text-sm font-semibold">{selected.habitat}</p>
                </div>
              </div>

              <div>
                <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-3">Key Facts</p>
                <ul className="space-y-2">
                  {selected.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-cyan-400 mt-0.5">▸</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
