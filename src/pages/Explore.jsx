import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Viruses', 'Fungi', 'Protists', 'Archaea'];

const organisms = [
  {
    id: 'ecoli',
    titleId: 'org-ecoli-title',
    descId: 'org-ecoli-desc',
    imgId: 'explore-ecoli-a1b2c3',
    name: 'Escherichia coli',
    category: 'Bacteria',
    size: '1–2 μm',
    habitat: 'Intestinal tract',
    color: 'cosmos-teal',
    description: 'One of the most studied organisms in biology. Most strains are harmless and form part of the normal gut flora, aiding digestion and producing vitamin K.',
    fact: 'E. coli can divide every 20 minutes under ideal conditions.',
  },
  {
    id: 'tardigrade',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    imgId: 'explore-tardigrade-b2c3d4',
    name: 'Tardigrade',
    category: 'Protists',
    size: '0.1–1.5 mm',
    habitat: 'Everywhere on Earth',
    color: 'cosmos-purple',
    description: 'Known as "water bears," tardigrades are the most resilient animals on Earth. They can survive extreme temperatures, radiation, and even the vacuum of space.',
    fact: 'Tardigrades can survive being frozen for 30 years and then revive.',
  },
  {
    id: 'sars-cov2',
    titleId: 'org-sarscov2-title',
    descId: 'org-sarscov2-desc',
    imgId: 'explore-sarscov2-c3d4e5',
    name: 'Coronavirus',
    category: 'Viruses',
    size: '0.1–0.16 μm',
    habitat: 'Host respiratory cells',
    color: 'cosmos-cyan',
    description: 'Coronaviruses are a family of RNA viruses with characteristic spike proteins. They infect mammals and birds, causing respiratory illnesses ranging from mild to severe.',
    fact: 'The spike proteins give coronaviruses their crown-like appearance under electron microscopy.',
  },
  {
    id: 'penicillium',
    titleId: 'org-penicillium-title',
    descId: 'org-penicillium-desc',
    imgId: 'explore-penicillium-d4e5f6',
    name: 'Penicillium',
    category: 'Fungi',
    size: '2–4 μm spores',
    habitat: 'Soil, decaying matter',
    color: 'cosmos-teal',
    description: 'The genus that gave us penicillin — the world\'s first antibiotic. These blue-green molds are found in soil and on decaying organic matter worldwide.',
    fact: 'Alexander Fleming discovered penicillin from Penicillium notatum in 1928.',
  },
  {
    id: 'diatom',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'explore-diatom-e5f6g7',
    name: 'Diatom',
    category: 'Protists',
    size: '2–200 μm',
    habitat: 'Aquatic environments',
    color: 'cosmos-cyan',
    description: 'Single-celled algae encased in intricate glass-like silica shells called frustules. Diatoms are responsible for about 20% of global oxygen production.',
    fact: 'Diatom shells are so precise they are used as quality standards in microscopy.',
  },
  {
    id: 'methanogens',
    titleId: 'org-methanogens-title',
    descId: 'org-methanogens-desc',
    imgId: 'explore-methanogens-f6g7h8',
    name: 'Methanogens',
    category: 'Archaea',
    size: '0.5–2 μm',
    habitat: 'Anaerobic environments',
    color: 'cosmos-purple',
    description: 'Ancient microorganisms that produce methane as a metabolic byproduct. They thrive in oxygen-free environments like deep-sea sediments and animal digestive tracts.',
    fact: 'Methanogens are among the oldest life forms, dating back over 3.5 billion years.',
  },
  {
    id: 'cyanobacteria',
    titleId: 'org-cyanobacteria-title',
    descId: 'org-cyanobacteria-desc',
    imgId: 'explore-cyanobacteria-g7h8i9',
    name: 'Cyanobacteria',
    category: 'Bacteria',
    size: '0.5–40 μm',
    habitat: 'Aquatic & terrestrial',
    color: 'cosmos-teal',
    description: 'The original oxygen producers. Cyanobacteria were responsible for the Great Oxidation Event 2.4 billion years ago, transforming Earth\'s atmosphere and enabling complex life.',
    fact: 'Cyanobacteria are the ancestors of chloroplasts in plant cells.',
  },
  {
    id: 'influenza',
    titleId: 'org-influenza-title',
    descId: 'org-influenza-desc',
    imgId: 'explore-influenza-h8i9j0',
    name: 'Influenza Virus',
    category: 'Viruses',
    size: '80–120 nm',
    habitat: 'Respiratory tract',
    color: 'cosmos-cyan',
    description: 'A highly mutable RNA virus that causes seasonal flu epidemics. Its rapid mutation rate allows it to evade immune responses, requiring annual vaccine updates.',
    fact: 'The 1918 influenza pandemic infected 500 million people worldwide.',
  },
];

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedOrganism, setSelectedOrganism] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? organisms
    : organisms.filter((o) => o.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, selectedOrganism]);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-cosmos-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cosmos-purple/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-cosmos-teal/10 border border-cosmos-teal/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cosmos-teal animate-pulse" />
            <span className="text-cosmos-teal text-sm font-medium">Microscopic Life</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-white mb-4">
            Explore the Kingdoms
          </h1>
          <p className="text-cosmos-light text-lg max-w-2xl leading-relaxed">
            From ancient archaea to complex protists, discover the extraordinary diversity of life that exists beyond the limits of human vision.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-cosmos-black/90 backdrop-blur-md border-b border-cosmos-teal/10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cosmos-teal text-cosmos-black'
                    : 'border border-cosmos-teal/30 text-cosmos-light hover:border-cosmos-teal hover:text-cosmos-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Organism Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((org) => (
              <div
                key={org.id}
                onClick={() => setSelectedOrganism(org)}
                className="bg-cosmos-navy border border-cosmos-teal/20 rounded-2xl overflow-hidden hover:border-cosmos-teal/50 hover:shadow-[0_0_30px_rgba(0,201,177,0.12)] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    alt={org.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/80 to-transparent" />
                  <span className="absolute top-3 right-3 bg-cosmos-black/60 backdrop-blur-sm text-cosmos-teal text-xs px-2.5 py-1 rounded-full border border-cosmos-teal/30">
                    {org.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    id={org.titleId}
                    className="font-grotesk font-semibold text-cosmos-white text-base mb-1 italic group-hover:text-cosmos-teal transition-colors"
                  >
                    {org.name}
                  </h3>
                  <p id={org.descId} className="text-cosmos-muted text-xs leading-relaxed line-clamp-2 mb-3">
                    {org.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-cosmos-muted">
                    <span>Size: <span className="text-cosmos-teal">{org.size}</span></span>
                    <span className="text-cosmos-teal/60">View details →</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cosmos-black/80 backdrop-blur-sm"
          onClick={() => setSelectedOrganism(null)}
        >
          <div
            className="bg-cosmos-dark border border-cosmos-teal/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(0,201,177,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img
                alt={selectedOrganism.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`modal-${selectedOrganism.imgId}`}
                data-strk-img={`[modal-${selectedOrganism.descId}] [modal-${selectedOrganism.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark via-transparent to-transparent" />
              <button
                onClick={() => setSelectedOrganism(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-cosmos-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-cosmos-light hover:text-cosmos-white border border-cosmos-teal/20 hover:border-cosmos-teal/50 transition-all"
              >
                ✕
              </button>
              <span className="absolute bottom-4 left-4 bg-cosmos-teal/20 border border-cosmos-teal/40 text-cosmos-teal text-xs px-3 py-1 rounded-full">
                {selectedOrganism.category}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h2
                id={`modal-${selectedOrganism.titleId}`}
                className="font-grotesk font-bold text-2xl text-cosmos-white italic mb-2"
              >
                {selectedOrganism.name}
              </h2>

              <div className="flex gap-4 mb-5">
                <div className="text-xs text-cosmos-muted">
                  Size: <span className="text-cosmos-teal font-medium">{selectedOrganism.size}</span>
                </div>
                <div className="text-xs text-cosmos-muted">
                  Habitat: <span className="text-cosmos-light font-medium">{selectedOrganism.habitat}</span>
                </div>
              </div>

              <p id={`modal-${selectedOrganism.descId}`} className="text-cosmos-light text-sm leading-relaxed mb-5">
                {selectedOrganism.description}
              </p>

              <div className="bg-cosmos-navy border border-cosmos-teal/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-cosmos-teal text-lg mt-0.5">💡</span>
                  <div>
                    <div className="text-cosmos-teal text-xs font-semibold uppercase tracking-wider mb-1">
                      Fascinating Fact
                    </div>
                    <p className="text-cosmos-light text-sm leading-relaxed">
                      {selectedOrganism.fact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
