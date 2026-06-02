import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Bacteria', 'Cells', 'Fungi', 'Plankton', 'Viruses', 'Archaea'];

const organisms = [
  {
    id: 'ecoli',
    name: 'Escherichia coli',
    category: 'Bacteria',
    habitat: 'Intestinal tract',
    size: '1–2 μm',
    desc: 'One of the most studied organisms on Earth. E. coli plays a vital role in gut health and is a cornerstone of genetic research.',
    fact: 'Can divide every 20 minutes under ideal conditions.',
    titleId: 'explore-ecoli-title',
    descId: 'explore-ecoli-desc',
    imgId: 'explore-ecoli-img-a1b2',
  },
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    category: 'Cells',
    habitat: 'Moss, lichens, water',
    size: '0.1–1.5 mm',
    desc: 'Known as "water bears," tardigrades are virtually indestructible — surviving extreme temperatures, radiation, and even the vacuum of space.',
    fact: 'Can survive in space without protection.',
    titleId: 'explore-tardigrade-title',
    descId: 'explore-tardigrade-desc',
    imgId: 'explore-tardigrade-img-c3d4',
  },
  {
    id: 'penicillium',
    name: 'Penicillium',
    category: 'Fungi',
    habitat: 'Soil, decaying matter',
    size: '2–4 μm spores',
    desc: 'The source of penicillin, the world\'s first antibiotic. This blue-green mold revolutionized medicine and saved millions of lives.',
    fact: 'Discovered accidentally by Alexander Fleming in 1928.',
    titleId: 'explore-penicillium-title',
    descId: 'explore-penicillium-desc',
    imgId: 'explore-penicillium-img-e5f6',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    category: 'Plankton',
    habitat: 'Oceans, freshwater',
    size: '2–200 μm',
    desc: 'Microscopic algae with intricate glass-like silica shells. Diatoms produce about 20% of the oxygen we breathe.',
    fact: 'Their fossilized shells form diatomaceous earth.',
    titleId: 'explore-diatom-title',
    descId: 'explore-diatom-desc',
    imgId: 'explore-diatom-img-g7h8',
  },
  {
    id: 'bacteriophage',
    name: 'Bacteriophage T4',
    category: 'Viruses',
    habitat: 'Wherever bacteria exist',
    size: '200 nm',
    desc: 'A virus that infects bacteria, bacteriophages are the most abundant biological entities on Earth — outnumbering all other life forms combined.',
    fact: 'There are 10³¹ phages on Earth — more than stars in the universe.',
    titleId: 'explore-phage-title',
    descId: 'explore-phage-desc',
    imgId: 'explore-phage-img-i9j0',
  },
  {
    id: 'thermophile',
    name: 'Sulfolobus',
    category: 'Archaea',
    habitat: 'Hot springs, volcanoes',
    size: '0.8–1 μm',
    desc: 'An extremophile archaea thriving in acidic hot springs at temperatures up to 90°C. It challenges our understanding of life\'s limits.',
    fact: 'Thrives in conditions that would destroy most life.',
    titleId: 'explore-sulfolobus-title',
    descId: 'explore-sulfolobus-desc',
    imgId: 'explore-sulfolobus-img-k1l2',
  },
  {
    id: 'cyanobacteria',
    name: 'Cyanobacteria',
    category: 'Bacteria',
    habitat: 'Oceans, soil, freshwater',
    size: '0.5–40 μm',
    desc: 'The original oxygen producers. Cyanobacteria transformed Earth\'s atmosphere 2.4 billion years ago, making complex life possible.',
    fact: 'Responsible for the Great Oxidation Event.',
    titleId: 'explore-cyano-title',
    descId: 'explore-cyano-desc',
    imgId: 'explore-cyano-img-m3n4',
  },
  {
    id: 'mycorrhizae',
    name: 'Mycorrhizal Fungi',
    category: 'Fungi',
    habitat: 'Soil, plant roots',
    size: 'Network spans km',
    desc: 'Forming symbiotic relationships with 90% of plant species, mycorrhizal networks transfer nutrients and chemical signals across entire forests.',
    fact: 'A single network can span hundreds of acres.',
    titleId: 'explore-mycorrhizae-title',
    descId: 'explore-mycorrhizae-desc',
    imgId: 'explore-mycorrhizae-img-o5p6',
  },
  {
    id: 'dinoflagellate',
    name: 'Dinoflagellate',
    category: 'Plankton',
    habitat: 'Marine environments',
    size: '5–2000 μm',
    desc: 'These bioluminescent plankton create the magical blue glow seen in ocean waves at night. Some species can cause harmful algal blooms.',
    fact: 'Responsible for bioluminescent ocean waves.',
    titleId: 'explore-dino-title',
    descId: 'explore-dino-desc',
    imgId: 'explore-dino-img-q7r8',
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
  }, [activeCategory]);

  return (
    <div className="bg-[#050d1a] text-[#e2f0ff] min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-40" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#00d4c8]/10 border border-[#00d4c8]/20 text-[#00d4c8] text-xs font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4c8] animate-pulse" />
            Microscopic Life Database
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-[#e2f0ff] mb-4">
            Explore the <span className="gradient-text">Micro World</span>
          </h1>
          <p className="text-[#7ba7cc] text-lg max-w-2xl">
            Browse our curated collection of microscopic organisms — from ancient bacteria to complex fungi networks.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 sticky top-16 md:top-20 z-30 bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00d4c8] text-[#050d1a]'
                    : 'border border-[#1a3a5c] text-[#7ba7cc] hover:border-[#00d4c8]/50 hover:text-[#e2f0ff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Organism Grid */}
      <section ref={containerRef} className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((organism) => (
              <div
                key={organism.id}
                className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 hover:shadow-xl hover:shadow-[#00d4c8]/8 transition-all group cursor-pointer"
                onClick={() => setSelectedOrganism(organism)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={organism.name}
                    data-strk-img-id={organism.imgId}
                    data-strk-img={`[${organism.descId}] [${organism.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#0a1628]/80 border border-[#1a3a5c] text-[#7ba7cc] text-xs px-3 py-1 rounded-full">
                    {organism.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-[#00d4c8]/10 border border-[#00d4c8]/20 text-[#00d4c8] text-xs px-3 py-1 rounded-full">
                    {organism.size}
                  </span>
                </div>
                <div className="p-6">
                  <h3 id={organism.titleId} className="font-heading font-bold text-lg text-[#e2f0ff] mb-1 italic">
                    {organism.name}
                  </h3>
                  <p className="text-[#7ba7cc] text-xs mb-3">📍 {organism.habitat}</p>
                  <p id={organism.descId} className="text-[#7ba7cc] text-sm leading-relaxed line-clamp-3">
                    {organism.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#1a3a5c]">
                    <p className="text-[#00d4c8] text-xs font-medium">💡 {organism.fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#7ba7cc]">
              <p className="text-4xl mb-4">🔬</p>
              <p className="text-lg">No organisms found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedOrganism && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedOrganism(null)}
        >
          <div
            className="bg-[#0a1628] border border-[#1a3a5c] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                alt={selectedOrganism.name}
                data-strk-img-id={`modal-${selectedOrganism.imgId}`}
                data-strk-img={`[modal-${selectedOrganism.descId}] [modal-${selectedOrganism.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              <button
                onClick={() => setSelectedOrganism(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#050d1a]/80 border border-[#1a3a5c] text-[#7ba7cc] hover:text-[#e2f0ff] flex items-center justify-center text-lg"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[#00d4c8] text-xs font-medium uppercase tracking-wider">{selectedOrganism.category}</span>
                  <h2 id={`modal-${selectedOrganism.titleId}`} className="font-heading font-bold text-2xl text-[#e2f0ff] mt-1 italic">
                    {selectedOrganism.name}
                  </h2>
                </div>
                <span className="bg-[#00d4c8]/10 border border-[#00d4c8]/20 text-[#00d4c8] text-sm px-3 py-1 rounded-full flex-shrink-0">
                  {selectedOrganism.size}
                </span>
              </div>
              <p className="text-[#7ba7cc] text-sm mb-2">📍 Habitat: {selectedOrganism.habitat}</p>
              <p id={`modal-${selectedOrganism.descId}`} className="text-[#7ba7cc] leading-relaxed mb-6">
                {selectedOrganism.desc}
              </p>
              <div className="bg-[#0f2040] border border-[#1a3a5c] rounded-xl p-4">
                <p className="text-[#00d4c8] text-sm font-medium">💡 Amazing Fact</p>
                <p className="text-[#e2f0ff] text-sm mt-1">{selectedOrganism.fact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
