import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'bacteria', label: 'Bacteria' },
  { id: 'fungi', label: 'Fungi' },
  { id: 'protozoa', label: 'Protozoa' },
  { id: 'algae', label: 'Algae' },
  { id: 'viruses', label: 'Viruses' },
  { id: 'archaea', label: 'Archaea' },
];

const organisms = [
  {
    id: 'ecoli',
    titleId: 'explore-ecoli-title',
    descId: 'explore-ecoli-desc',
    imgId: 'explore-ecoli-img-a1b2c3',
    name: 'Escherichia coli',
    commonName: 'E. coli',
    category: 'bacteria',
    tagColor: 'text-cyan-400 bg-cyan-900/30 border-cyan-900/50',
    size: '1–2 μm',
    habitat: 'Intestinal tract',
    desc: 'One of the most studied organisms on Earth. Most strains are harmless and essential for gut health, producing vitamin K.',
    funFact: 'E. coli can divide every 20 minutes under ideal conditions.',
  },
  {
    id: 'penicillium',
    titleId: 'explore-penicillium-title',
    descId: 'explore-penicillium-desc',
    imgId: 'explore-penicillium-img-d4e5f6',
    name: 'Penicillium chrysogenum',
    commonName: 'Penicillin Mold',
    category: 'fungi',
    tagColor: 'text-violet-400 bg-violet-900/30 border-violet-900/50',
    size: '2–4 μm spores',
    habitat: 'Soil, decaying matter',
    desc: 'The source of the world\'s first antibiotic. Alexander Fleming\'s accidental discovery of this mold changed medicine forever.',
    funFact: 'Penicillin has saved over 200 million lives since its discovery.',
  },
  {
    id: 'amoeba',
    titleId: 'explore-amoeba-title',
    descId: 'explore-amoeba-desc',
    imgId: 'explore-amoeba-img-g7h8i9',
    name: 'Amoeba proteus',
    commonName: 'Amoeba',
    category: 'protozoa',
    tagColor: 'text-amber-400 bg-amber-900/30 border-amber-900/50',
    size: '250–750 μm',
    habitat: 'Freshwater ponds',
    desc: 'A shapeshifting single-celled organism that moves by extending pseudopods. A classic model organism for cell biology.',
    funFact: 'Amoeba can engulf bacteria whole through a process called phagocytosis.',
  },
  {
    id: 'spirulina',
    titleId: 'explore-spirulina-title',
    descId: 'explore-spirulina-desc',
    imgId: 'explore-spirulina-img-j1k2l3',
    name: 'Arthrospira platensis',
    commonName: 'Spirulina',
    category: 'algae',
    tagColor: 'text-emerald-400 bg-emerald-900/30 border-emerald-900/50',
    size: '200–500 μm',
    habitat: 'Alkaline lakes',
    desc: 'A spiral-shaped cyanobacterium packed with protein, vitamins, and antioxidants. Used as a superfood and studied for space missions.',
    funFact: 'Spirulina is 60–70% protein by dry weight — more than beef.',
  },
  {
    id: 'influenza',
    titleId: 'explore-influenza-title',
    descId: 'explore-influenza-desc',
    imgId: 'explore-influenza-img-m4n5o6',
    name: 'Influenza A virus',
    commonName: 'Flu Virus',
    category: 'viruses',
    tagColor: 'text-rose-400 bg-rose-900/30 border-rose-900/50',
    size: '80–120 nm',
    habitat: 'Respiratory tract',
    desc: 'A segmented RNA virus responsible for seasonal flu epidemics. Its ability to mutate rapidly makes it a persistent challenge for vaccines.',
    funFact: 'The 1918 flu pandemic infected 500 million people — one-third of the world\'s population.',
  },
  {
    id: 'methanobacterium',
    titleId: 'explore-methanobacterium-title',
    descId: 'explore-methanobacterium-desc',
    imgId: 'explore-methanobacterium-img-p7q8r9',
    name: 'Methanobacterium thermoautotrophicum',
    commonName: 'Methanogen',
    category: 'archaea',
    tagColor: 'text-orange-400 bg-orange-900/30 border-orange-900/50',
    size: '0.5–1 μm',
    habitat: 'Hydrothermal vents',
    desc: 'Ancient microbes that produce methane as a metabolic byproduct. They thrive in extreme environments and are among the oldest life forms.',
    funFact: 'Methanogens are found in the guts of cows and contribute to greenhouse gas emissions.',
  },
  {
    id: 'diatom-explore',
    titleId: 'explore-diatom-title',
    descId: 'explore-diatom-desc',
    imgId: 'explore-diatom-img-s1t2u3',
    name: 'Coscinodiscus radiatus',
    commonName: 'Radial Diatom',
    category: 'algae',
    tagColor: 'text-emerald-400 bg-emerald-900/30 border-emerald-900/50',
    size: '50–500 μm',
    habitat: 'Marine & freshwater',
    desc: 'Diatoms are single-celled algae encased in intricate silica shells called frustules. They produce 20% of Earth\'s oxygen.',
    funFact: 'Diatom shells are so precise they are used as calibration standards in microscopy.',
  },
  {
    id: 'streptococcus',
    titleId: 'explore-streptococcus-title',
    descId: 'explore-streptococcus-desc',
    imgId: 'explore-streptococcus-img-v4w5x6',
    name: 'Streptococcus thermophilus',
    commonName: 'Yogurt Bacteria',
    category: 'bacteria',
    tagColor: 'text-cyan-400 bg-cyan-900/30 border-cyan-900/50',
    size: '0.7–0.9 μm',
    habitat: 'Dairy products',
    desc: 'A beneficial bacterium used in the production of yogurt and cheese. It converts lactose into lactic acid, creating the characteristic tangy flavor.',
    funFact: 'Humans have been using this bacterium to ferment dairy for over 5,000 years.',
  },
  {
    id: 'paramecium',
    titleId: 'explore-paramecium-title',
    descId: 'explore-paramecium-desc',
    imgId: 'explore-paramecium-img-y7z8a9',
    name: 'Paramecium caudatum',
    commonName: 'Paramecium',
    category: 'protozoa',
    tagColor: 'text-amber-400 bg-amber-900/30 border-amber-900/50',
    size: '50–330 μm',
    habitat: 'Freshwater',
    desc: 'A slipper-shaped ciliate covered in thousands of tiny hair-like cilia used for movement and feeding. A classic subject in biology education.',
    funFact: 'Paramecia can sense and avoid obstacles using mechanosensory channels.',
  },
];

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedOrganism, setSelectedOrganism] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeCategory === 'all'
    ? organisms
    : organisms.filter((o) => o.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <div ref={containerRef} className="bg-space-black text-slate-200 min-h-screen">
      {/* Page Header */}
      <section className="pt-28 pb-12 px-4 md:px-8 bg-gradient-to-b from-dark-teal/20 to-space-black">
        <div className="max-w-7xl mx-auto">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            The Microbial World
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-50 mb-4">
            Explore Organisms
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Browse through the diverse kingdoms of microscopic life. Each organism tells a story millions of years in the making.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 md:px-8 pb-8 sticky top-16 z-30 bg-space-black/90 backdrop-blur-md border-b border-cyan-900/20 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-black border-cyan-500'
                    : 'border-cyan-900/50 text-slate-400 hover:text-slate-200 hover:border-cyan-700/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Organisms Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((org) => (
              <div
                key={org.id}
                className="group bg-midnight border border-cyan-900/40 rounded-xl overflow-hidden hover:border-cyan-700/50 hover:shadow-glow-cyan transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedOrganism(org)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={org.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${org.tagColor}`}>
                      {org.category.charAt(0).toUpperCase() + org.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={org.titleId} className="font-display font-semibold text-base text-slate-50 mb-0.5">
                    {org.name}
                  </h3>
                  <p className="text-cyan-400 text-xs mb-3 font-medium">{org.commonName}</p>
                  <p id={org.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {org.desc}
                  </p>
                  <div className="mt-4 flex gap-4 text-xs text-slate-500">
                    <span>Size: <span className="text-slate-300">{org.size}</span></span>
                    <span>Habitat: <span className="text-slate-300">{org.habitat}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedOrganism && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-black/80 backdrop-blur-sm"
          onClick={() => setSelectedOrganism(null)}
        >
          <div
            className="bg-midnight border border-cyan-900/50 rounded-2xl max-w-lg w-full overflow-hidden shadow-glow-cyan-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden">
              <img
                data-strk-img-id={`modal-${selectedOrganism.imgId}`}
                data-strk-img={`[${selectedOrganism.descId}] [${selectedOrganism.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selectedOrganism.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-display font-bold text-xl text-slate-50">{selectedOrganism.name}</h2>
                  <p className="text-cyan-400 text-sm font-medium">{selectedOrganism.commonName}</p>
                </div>
                <button
                  onClick={() => setSelectedOrganism(null)}
                  className="text-slate-500 hover:text-slate-200 text-xl leading-none p-1"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{selectedOrganism.desc}</p>
              <div className="bg-cyan-900/20 border border-cyan-900/40 rounded-lg p-4">
                <p className="text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-1">Fun Fact</p>
                <p className="text-slate-300 text-sm">{selectedOrganism.funFact}</p>
              </div>
              <div className="mt-4 flex gap-6 text-sm">
                <div>
                  <span className="text-slate-500 text-xs uppercase tracking-wider block mb-0.5">Size</span>
                  <span className="text-slate-200">{selectedOrganism.size}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs uppercase tracking-wider block mb-0.5">Habitat</span>
                  <span className="text-slate-200">{selectedOrganism.habitat}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs uppercase tracking-wider block mb-0.5">Kingdom</span>
                  <span className="text-slate-200 capitalize">{selectedOrganism.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
