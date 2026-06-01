import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'prokaryotes',
    name: 'Prokaryotes',
    subtitle: 'Life Without a Nucleus',
    desc: 'The oldest and most abundant life forms on Earth. Bacteria and archaea thrive in every environment imaginable — from boiling hydrothermal vents to frozen Antarctic ice.',
    color: '#00d4ff',
    imgId: 'explore-prokaryotes-img-a1b2c3',
    titleId: 'explore-prokaryotes-title',
    descId: 'explore-prokaryotes-desc',
    facts: ['Found in every habitat on Earth', 'Can survive extreme temperatures', 'Essential for nutrient cycling'],
  },
  {
    id: 'eukaryotes',
    name: 'Eukaryotes',
    subtitle: 'Complex Cellular Life',
    desc: 'Cells with a true nucleus and complex organelles. This domain includes all animals, plants, fungi, and protists — the building blocks of complex life.',
    color: '#7c3aed',
    imgId: 'explore-eukaryotes-img-d4e5f6',
    titleId: 'explore-eukaryotes-title',
    descId: 'explore-eukaryotes-desc',
    facts: ['Contain membrane-bound nucleus', 'Include all multicellular life', 'More complex than prokaryotes'],
  },
  {
    id: 'viruses',
    name: 'Viruses',
    subtitle: 'On the Edge of Life',
    desc: 'Neither fully alive nor dead, viruses are nanoscale entities that hijack cellular machinery to replicate. They are the most abundant biological entities on Earth.',
    color: '#f59e0b',
    imgId: 'explore-viruses-img-g7h8i9',
    titleId: 'explore-viruses-title',
    descId: 'explore-viruses-desc',
    facts: ['10x smaller than bacteria', 'Most abundant on Earth', 'Drive evolutionary change'],
  },
  {
    id: 'fungi',
    name: 'Fungi',
    subtitle: 'The Hidden Network',
    desc: 'From microscopic spores to vast underground mycelial networks, fungi are the great decomposers and connectors of ecosystems.',
    color: '#10b981',
    imgId: 'explore-fungi-img-j1k2l3',
    titleId: 'explore-fungi-title',
    descId: 'explore-fungi-desc',
    facts: ['Largest organism is a fungus', 'Connect forest trees underground', 'Essential for decomposition'],
  },
  {
    id: 'algae',
    name: 'Algae',
    subtitle: 'Oxygen Factories',
    desc: 'Microscopic algae produce over half of the world\'s oxygen. These photosynthetic powerhouses form the base of aquatic food chains.',
    color: '#06b6d4',
    imgId: 'explore-algae-img-m4n5o6',
    titleId: 'explore-algae-title',
    descId: 'explore-algae-desc',
    facts: ['Produce 50% of Earth\'s oxygen', 'Base of aquatic food chains', 'Incredibly diverse forms'],
  },
  {
    id: 'protozoa',
    name: 'Protozoa',
    subtitle: 'Microscopic Predators',
    desc: 'Single-celled hunters that stalk and consume bacteria and other microorganisms. Some are parasitic, others are vital ecosystem engineers.',
    color: '#ec4899',
    imgId: 'explore-protozoa-img-p7q8r9',
    titleId: 'explore-protozoa-title',
    descId: 'explore-protozoa-desc',
    facts: ['Active predators at micro scale', 'Some cause major diseases', 'Vital for soil health'],
  },
];

const Explore = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] text-white min-h-screen">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          data-strk-bg-id="explore-header-bg-s1t2u3"
          data-strk-bg="[explore-header-title] microscopic world biology"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/80 to-[#050d1a]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4">Explore</p>
          <h1
            id="explore-header-title"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Kingdoms of the Micro World
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Dive into the six major domains of microscopic life. Each kingdom holds secrets that have shaped our planet for billions of years.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-2xl overflow-hidden border border-[rgba(0,212,255,0.1)] bg-[#0a1628] hover:border-[rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-400 cursor-pointer"
              onClick={() => setActiveCategory(activeCategory?.id === cat.id ? null : cat)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: cat.color, color: cat.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: cat.color }}>
                  {cat.subtitle}
                </p>
                <h3
                  id={cat.titleId}
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>

                {/* Facts */}
                <div className="space-y-1.5">
                  {cat.facts.map((fact) => (
                    <div key={fact} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                      {fact}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Microscopy Techniques Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3">How We See</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Microscopy Techniques
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Electron Microscopy',
                desc: 'Uses beams of electrons to create images with resolution up to 0.1 nanometers — revealing atomic-level structures.',
                id: 'tech-electron',
                imgId: 'explore-tech-electron-img-v4w5x6',
              },
              {
                name: 'Fluorescence Microscopy',
                desc: 'Fluorescent dyes illuminate specific cellular structures, creating stunning neon-colored images of living cells.',
                id: 'tech-fluorescence',
                imgId: 'explore-tech-fluor-img-y7z8a9',
              },
              {
                name: 'Confocal Microscopy',
                desc: 'Optical sectioning technique that creates sharp 3D images of thick biological specimens with incredible detail.',
                id: 'tech-confocal',
                imgId: 'explore-tech-confocal-img-b1c2d3',
              },
              {
                name: 'Atomic Force Microscopy',
                desc: 'A probe scans surfaces at the nanoscale, creating topographic maps of molecules and atomic structures.',
                id: 'tech-afm',
                imgId: 'explore-tech-afm-img-e4f5g6',
              },
            ].map((tech) => (
              <div
                key={tech.id}
                className="flex gap-5 rounded-2xl border border-[rgba(0,212,255,0.1)] bg-[#0a1628] p-5 hover:border-[rgba(0,212,255,0.25)] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden">
                  <img
                    alt={tech.name}
                    data-strk-img-id={tech.imgId}
                    data-strk-img={`[${tech.id}-desc] [${tech.id}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 id={`${tech.id}-name`} className="text-white font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {tech.name}
                  </h3>
                  <p id={`${tech.id}-desc`} className="text-slate-400 text-sm leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
