import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search } from 'lucide-react';

const allOrganisms = [
  { id: 'org-tardigrade', name: 'Tardigrade', category: 'Extremophile', desc: 'Water bear, indestructible micro-animal', imgId: 'gal-img-mc101', ratio: '4x3' },
  { id: 'org-diatom', name: 'Diatom', category: 'Microalgae', desc: 'Silica-shelled photosynthetic algae', imgId: 'gal-img-mc102', ratio: '1x1' },
  { id: 'org-rotifer', name: 'Rotifer', category: 'Microanimal', desc: 'Wheel animal with spinning cilia', imgId: 'gal-img-mc103', ratio: '3x4' },
  { id: 'org-amoeba', name: 'Amoeba', category: 'Protozoa', desc: 'Shape-shifting single-celled predator', imgId: 'gal-img-mc104', ratio: '4x3' },
  { id: 'org-paramecium', name: 'Paramecium', category: 'Protozoa', desc: 'Ciliated freshwater swimmer', imgId: 'gal-img-mc105', ratio: '1x1' },
  { id: 'org-vorticella', name: 'Vorticella', category: 'Protozoa', desc: 'Bell-shaped sessile filter feeder', imgId: 'gal-img-mc106', ratio: '3x4' },
  { id: 'org-nematode', name: 'Nematode', category: 'Microanimal', desc: 'Microscopic roundworm found everywhere', imgId: 'gal-img-mc107', ratio: '4x3' },
  { id: 'org-radiolaria', name: 'Radiolaria', category: 'Protozoa', desc: 'Intricate silica skeleton builder', imgId: 'gal-img-mc108', ratio: '1x1' },
  { id: 'org-copepod', name: 'Copepod', category: 'Microanimal', desc: 'Tiny crustacean, ocean\'s most abundant animal', imgId: 'gal-img-mc109', ratio: '4x3' },
  { id: 'org-euglena', name: 'Euglena', category: 'Microalgae', desc: 'Flagellated algae with an eyespot', imgId: 'gal-img-mc110', ratio: '3x4' },
  { id: 'org-volvox', name: 'Volvox', category: 'Microalgae', desc: 'Colonial green algae forming hollow spheres', imgId: 'gal-img-mc111', ratio: '1x1' },
  { id: 'org-stentor', name: 'Stentor', category: 'Protozoa', desc: 'Giant trumpet-shaped ciliate', imgId: 'gal-img-mc112', ratio: '4x3' },
  { id: 'org-hydra', name: 'Hydra', category: 'Microanimal', desc: 'Freshwater polyp with regenerative powers', imgId: 'gal-img-mc113', ratio: '3x4' },
  { id: 'org-foraminifera', name: 'Foraminifera', category: 'Protozoa', desc: 'Ancient shell-building ocean dwellers', imgId: 'gal-img-mc114', ratio: '1x1' },
  { id: 'org-spirulina', name: 'Spirulina', category: 'Microalgae', desc: 'Spiral cyanobacteria, superfood of the micro world', imgId: 'gal-img-mc115', ratio: '4x3' },
  { id: 'org-bdelloid', name: 'Bdelloid Rotifer', category: 'Microanimal', desc: 'Asexual rotifer that survives desiccation', imgId: 'gal-img-mc116', ratio: '3x4' },
];

const categories = ['All', 'Extremophile', 'Microalgae', 'Protozoa', 'Microanimal'];

const Explore = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allOrganisms.filter((o) => {
    const matchCat = activeCategory === 'All' || o.category === activeCategory;
    const matchSearch =
      o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div className="bg-cosmos-bg min-h-screen pt-16">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-3">
            The Gallery
          </p>
          <h1
            id="explore-title"
            className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-4"
          >
            Explore MicroCosmos
          </h1>
          <p
            id="explore-desc"
            className="font-body text-slate-400 max-w-xl mx-auto text-base md:text-lg"
          >
            Browse our collection of microscopic organisms from across the tree of life.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-heading font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-cosmos-primary text-cosmos-bg border-cosmos-primary'
                    : 'bg-transparent text-slate-300 border-cosmos-border hover:border-cosmos-primary hover:text-cosmos-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search organisms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cosmos-card border border-cosmos-border rounded-full pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cosmos-primary transition-colors"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-500 font-body">
            No organisms found matching your search.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((o) => (
              <div
                key={o.id}
                className="group break-inside-avoid bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,170,0.08)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    alt={o.name}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={o.imgId}
                    data-strk-img={`[${o.id}-desc] [${o.id}-name] [explore-desc] [explore-title]`}
                    data-strk-img-ratio={o.ratio}
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span className="absolute top-3 left-3 bg-cosmos-primary/10 text-cosmos-primary border border-cosmos-primary/30 rounded-full px-2.5 py-0.5 text-xs font-heading font-medium uppercase tracking-widest">
                    {o.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 id={`${o.id}-name`} className="font-heading font-semibold text-slate-50 text-base mb-1">
                    {o.name}
                  </h3>
                  <p id={`${o.id}-desc`} className="font-body text-xs text-slate-400 leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
