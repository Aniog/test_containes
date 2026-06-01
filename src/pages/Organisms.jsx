import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    commonName: 'Water Bear',
    kingdom: 'Animalia',
    size: '0.1 – 1.5 mm',
    habitat: 'Everywhere on Earth',
    desc: 'Tardigrades are microscopic animals famous for their extraordinary resilience. They can survive in outer space, withstand radiation 1,000 times the lethal human dose, and endure complete dehydration for decades.',
    funFact: 'Can survive in the vacuum of space',
    color: '#00d4ff',
    imgId: 'org-tardigrade-img-a1b2c3',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    commonName: 'Glass Algae',
    kingdom: 'Chromista',
    size: '2 – 500 μm',
    habitat: 'Oceans & Freshwater',
    desc: 'Diatoms are single-celled algae encased in intricate silica shells called frustules. Their geometric patterns are among the most beautiful structures in nature, and they produce about 20% of Earth\'s oxygen.',
    funFact: 'Produce 20% of Earth\'s oxygen',
    color: '#06b6d4',
    imgId: 'org-diatom-img-d4e5f6',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
  },
  {
    id: 'e-coli',
    name: 'Escherichia coli',
    commonName: 'E. coli',
    kingdom: 'Bacteria',
    size: '1 – 2 μm',
    habitat: 'Intestinal tract',
    desc: 'One of the most studied organisms in biology. Most strains are harmless and essential for gut health, producing vitamin K. E. coli is also a workhorse of biotechnology and genetic research.',
    funFact: 'Divides every 20 minutes',
    color: '#10b981',
    imgId: 'org-ecoli-img-g7h8i9',
    titleId: 'org-ecoli-title',
    descId: 'org-ecoli-desc',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    commonName: 'Slipper Animalcule',
    kingdom: 'Protozoa',
    size: '50 – 350 μm',
    habitat: 'Freshwater ponds',
    desc: 'A classic microscopy subject, paramecia are covered in thousands of tiny hair-like cilia that propel them through water. They are voracious predators of bacteria and algae.',
    funFact: 'Has two nuclei — macro and micro',
    color: '#7c3aed',
    imgId: 'org-paramecium-img-j1k2l3',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
  },
  {
    id: 'penicillium',
    name: 'Penicillium',
    commonName: 'Blue-Green Mold',
    kingdom: 'Fungi',
    size: '2 – 4 μm spores',
    habitat: 'Soil & decaying matter',
    desc: 'The source of penicillin, the world\'s first antibiotic. Penicillium molds produce beautiful blue-green colonies and their spores are among the most common airborne particles.',
    funFact: 'Gave us the first antibiotic',
    color: '#84cc16',
    imgId: 'org-penicillium-img-m4n5o6',
    titleId: 'org-penicillium-title',
    descId: 'org-penicillium-desc',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    commonName: 'Wheel Animal',
    kingdom: 'Animalia',
    size: '100 – 500 μm',
    habitat: 'Freshwater & soil',
    desc: 'Rotifers are microscopic animals with a crown of cilia that spin like a wheel, creating currents to draw food into their mouths. They are among the smallest animals on Earth.',
    funFact: 'Some species reproduce without males',
    color: '#f59e0b',
    imgId: 'org-rotifer-img-p7q8r9',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
  },
  {
    id: 'amoeba',
    name: 'Amoeba',
    commonName: 'Shape-Shifter',
    kingdom: 'Protozoa',
    size: '250 – 750 μm',
    habitat: 'Soil & freshwater',
    desc: 'Amoebas move and feed by extending pseudopods — temporary projections of their cell body. They engulf prey by surrounding it, a process called phagocytosis.',
    funFact: 'Can change shape continuously',
    color: '#ec4899',
    imgId: 'org-amoeba-img-s1t2u3',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
  },
  {
    id: 'vorticella',
    name: 'Vorticella',
    commonName: 'Bell Animalcule',
    kingdom: 'Protozoa',
    size: '30 – 150 μm',
    habitat: 'Freshwater & marine',
    desc: 'Vorticella are bell-shaped protists attached to surfaces by a coiled stalk. When disturbed, the stalk contracts rapidly, pulling the organism away from danger in milliseconds.',
    funFact: 'Stalk contracts at 8 cm/second',
    color: '#0ea5e9',
    imgId: 'org-vorticella-img-v4w5x6',
    titleId: 'org-vorticella-title',
    descId: 'org-vorticella-desc',
  },
];

const filters = ['All', 'Animalia', 'Bacteria', 'Protozoa', 'Fungi', 'Chromista'];

const Organisms = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = activeFilter === 'All'
    ? organisms
    : organisms.filter((o) => o.kingdom === activeFilter);

  return (
    <div ref={containerRef} className="bg-[#050d1a] text-white min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-15"
          data-strk-bg-id="org-header-bg-y7z8a9"
          data-strk-bg="[org-header-title] microscopic organisms biology"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/80 to-[#050d1a]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4">Organisms</p>
          <h1
            id="org-header-title"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Meet the Micro Inhabitants
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            From indestructible water bears to oxygen-producing diatoms, discover the remarkable creatures that make up the invisible world.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === f
                  ? 'bg-[#00d4ff] text-[#050d1a] border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                  : 'border-[rgba(0,212,255,0.2)] text-slate-300 hover:border-[#00d4ff] hover:text-[#00d4ff] bg-transparent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Organisms Grid */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((org) => (
            <div
              key={org.id}
              className="group rounded-2xl overflow-hidden border border-[rgba(0,212,255,0.1)] bg-[#0a1628] hover:border-[rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <div
                  className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${org.color}20`, color: org.color, border: `1px solid ${org.color}40` }}
                >
                  {org.kingdom}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-slate-500 text-xs mb-0.5">{org.commonName}</p>
                <h3
                  id={org.titleId}
                  className="text-lg font-bold text-white mb-2 italic"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {org.name}
                </h3>
                <p id={org.descId} className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {org.desc}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-[#050d1a] rounded-lg p-2">
                    <p className="text-slate-500 text-xs">Size</p>
                    <p className="text-white text-xs font-semibold">{org.size}</p>
                  </div>
                  <div className="bg-[#050d1a] rounded-lg p-2">
                    <p className="text-slate-500 text-xs">Habitat</p>
                    <p className="text-white text-xs font-semibold">{org.habitat}</p>
                  </div>
                </div>

                {/* Fun Fact */}
                <div
                  className="rounded-lg p-3 text-xs"
                  style={{ backgroundColor: `${org.color}10`, borderLeft: `2px solid ${org.color}` }}
                >
                  <span className="font-semibold" style={{ color: org.color }}>Fun fact: </span>
                  <span className="text-slate-300">{org.funFact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scale Comparison */}
      <section className="py-20 px-4 md:px-8 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3">Scale of Life</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            How Small Is Small?
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Human Hair', size: '70,000 nm', width: 'w-full', color: '#475569' },
              { label: 'Tardigrade', size: '500,000 nm', width: 'w-4/5', color: '#00d4ff' },
              { label: 'Amoeba', size: '500,000 nm', width: 'w-3/4', color: '#7c3aed' },
              { label: 'Paramecium', size: '200,000 nm', width: 'w-1/2', color: '#ec4899' },
              { label: 'E. coli', size: '2,000 nm', width: 'w-1/4', color: '#10b981' },
              { label: 'Virus', size: '100 nm', width: 'w-1/12', color: '#f59e0b' },
              { label: 'DNA strand', size: '2 nm', width: 'w-1/24', color: '#06b6d4' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-28 text-right text-sm text-slate-400 flex-shrink-0">{item.label}</div>
                <div className="flex-1 bg-[#0a1628] rounded-full h-6 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.width} transition-all duration-700`}
                    style={{ backgroundColor: item.color, minWidth: '4px' }}
                  />
                </div>
                <div className="w-24 text-xs text-slate-500 flex-shrink-0">{item.size}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organisms;
