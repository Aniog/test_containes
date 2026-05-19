import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    label: 'Bacteria',
    color: 'border-cyan-500 text-cyan-400 bg-cyan-500/10',
    inactive: 'border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400',
  },
  {
    id: 'viruses',
    label: 'Viruses',
    color: 'border-purple-500 text-purple-400 bg-purple-500/10',
    inactive: 'border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-purple-400',
  },
  {
    id: 'cells',
    label: 'Cells',
    color: 'border-blue-500 text-blue-400 bg-blue-500/10',
    inactive: 'border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-blue-400',
  },
  {
    id: 'fungi',
    label: 'Fungi',
    color: 'border-green-500 text-green-400 bg-green-500/10',
    inactive: 'border-slate-700 text-slate-400 hover:border-green-500/50 hover:text-green-400',
  },
  {
    id: 'crystals',
    label: 'Crystals',
    color: 'border-amber-500 text-amber-400 bg-amber-500/10',
    inactive: 'border-slate-700 text-slate-400 hover:border-amber-500/50 hover:text-amber-400',
  },
  {
    id: 'plankton',
    label: 'Plankton',
    color: 'border-teal-500 text-teal-400 bg-teal-500/10',
    inactive: 'border-slate-700 text-slate-400 hover:border-teal-500/50 hover:text-teal-400',
  },
];

const organisms = [
  { id: 'ecoli', category: 'bacteria', name: 'E. coli', desc: 'Rod-shaped bacterium found in the intestines of warm-blooded organisms.', size: '2 μm', habitat: 'Intestinal tract' },
  { id: 'streptococcus', category: 'bacteria', name: 'Streptococcus', desc: 'Spherical bacteria that form chains, responsible for strep throat.', size: '0.5–2 μm', habitat: 'Throat, skin' },
  { id: 'cyanobacteria', category: 'bacteria', name: 'Cyanobacteria', desc: 'Photosynthetic bacteria that produce oxygen and form stromatolites.', size: '1–10 μm', habitat: 'Aquatic environments' },
  { id: 'influenza', category: 'viruses', name: 'Influenza Virus', desc: 'Enveloped RNA virus causing seasonal flu with characteristic spikes.', size: '80–120 nm', habitat: 'Respiratory tract' },
  { id: 'bacteriophage', category: 'viruses', name: 'Bacteriophage T4', desc: 'Virus that infects bacteria, with a distinctive lunar-lander shape.', size: '200 nm', habitat: 'Bacterial cells' },
  { id: 'coronavirus', category: 'viruses', name: 'Coronavirus', desc: 'Enveloped RNA virus with crown-like spike proteins on its surface.', size: '100–160 nm', habitat: 'Respiratory tract' },
  { id: 'redbloodcell', category: 'cells', name: 'Red Blood Cell', desc: 'Biconcave disc-shaped cells that transport oxygen throughout the body.', size: '6–8 μm', habitat: 'Bloodstream' },
  { id: 'neuron', category: 'cells', name: 'Neuron', desc: 'Electrically excitable cells that transmit nerve impulses.', size: '4–100 μm', habitat: 'Brain, nervous system' },
  { id: 'macrophage', category: 'cells', name: 'Macrophage', desc: 'Large immune cells that engulf and digest pathogens and debris.', size: '21 μm', habitat: 'Tissues, bloodstream' },
  { id: 'penicillium', category: 'fungi', name: 'Penicillium', desc: 'Mold that produces penicillin, the world\'s first antibiotic.', size: '2–4 μm spores', habitat: 'Soil, decaying matter' },
  { id: 'yeast', category: 'fungi', name: 'Saccharomyces', desc: 'Yeast used in baking and brewing, reproduces by budding.', size: '5–10 μm', habitat: 'Soil, plant surfaces' },
  { id: 'snowflake', category: 'crystals', name: 'Ice Crystal', desc: 'Hexagonal water crystals with infinite unique geometric patterns.', size: '1–5 mm', habitat: 'Atmosphere' },
  { id: 'salt', category: 'crystals', name: 'Salt Crystal', desc: 'Cubic sodium chloride crystals with perfect geometric structure.', size: '0.1–1 mm', habitat: 'Evaporated water' },
  { id: 'diatom', category: 'plankton', name: 'Diatom', desc: 'Algae with intricate silica cell walls called frustules.', size: '2–200 μm', habitat: 'Oceans, freshwater' },
  { id: 'copepod', category: 'plankton', name: 'Copepod', desc: 'Tiny crustaceans that form the base of marine food chains.', size: '1–2 mm', habitat: 'Marine, freshwater' },
];

export default function ExploreGrid() {
  const [active, setActive] = useState('bacteria');
  const containerRef = useRef(null);

  const filtered = organisms.filter((o) => o.category === active);
  const activeCat = categories.find((c) => c.id === active);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [active]);

  return (
    <div ref={containerRef}>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
              active === cat.id ? cat.color : cat.inactive
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((org) => (
          <div
            key={org.id}
            className="group card-glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                alt={org.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={`explore-${org.id}-m4n5o6`}
                data-strk-img={`[explore-${org.id}-desc] [explore-${org.id}-name] microscopic ${org.category}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute top-3 right-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${activeCat?.color}`}>
                  {org.size}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 id={`explore-${org.id}-name`} className="text-white font-bold text-lg mb-1">{org.name}</h3>
              <p id={`explore-${org.id}-desc`} className="text-slate-400 text-sm leading-relaxed mb-3">{org.desc}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Habitat: <span className="text-slate-400">{org.habitat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
