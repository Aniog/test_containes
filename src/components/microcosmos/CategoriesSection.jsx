import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes that thrive in every environment on Earth — from boiling vents to frozen tundra.',
    titleId: 'cat-bacteria-title',
    descId: 'cat-bacteria-desc',
    imgId: 'cat-img-bacteria-mc003',
    accent: 'cosmos-cyan',
    tag: 'Prokaryote',
  },
  {
    id: 'protists',
    title: 'Protists',
    desc: 'Eukaryotic microorganisms of stunning diversity — amoebas, diatoms, and ciliates with intricate glass-like shells.',
    titleId: 'cat-protists-title',
    descId: 'cat-protists-desc',
    imgId: 'cat-img-protists-mc004',
    accent: 'cosmos-emerald',
    tag: 'Eukaryote',
  },
  {
    id: 'fungi',
    title: 'Micro Fungi',
    desc: 'Spores, hyphae, and mycelial networks that decompose matter and form the hidden internet of the forest floor.',
    titleId: 'cat-fungi-title',
    descId: 'cat-fungi-desc',
    imgId: 'cat-img-fungi-mc005',
    accent: 'cosmos-violet',
    tag: 'Decomposer',
  },
  {
    id: 'viruses',
    title: 'Viruses',
    desc: 'Nanoscale entities on the boundary of life — geometric protein shells carrying genetic instructions.',
    titleId: 'cat-viruses-title',
    descId: 'cat-viruses-desc',
    imgId: 'cat-img-viruses-mc006',
    accent: 'cosmos-cyan',
    tag: 'Nanoscale',
  },
  {
    id: 'algae',
    title: 'Microalgae',
    desc: 'Photosynthetic powerhouses producing over half of Earth\'s oxygen, forming the base of aquatic food chains.',
    titleId: 'cat-algae-title',
    descId: 'cat-algae-desc',
    imgId: 'cat-img-algae-mc007',
    accent: 'cosmos-emerald',
    tag: 'Photosynthetic',
  },
  {
    id: 'archaea',
    title: 'Archaea',
    desc: 'Ancient extremophiles surviving in conditions that would destroy most life — acid lakes, salt flats, and deep-sea vents.',
    titleId: 'cat-archaea-title',
    descId: 'cat-archaea-desc',
    imgId: 'cat-img-archaea-mc008',
    accent: 'cosmos-violet',
    tag: 'Extremophile',
  },
];

const accentMap = {
  'cosmos-cyan': { border: 'border-cosmos-cyan/30', text: 'text-cosmos-cyan', bg: 'bg-cosmos-cyan/10' },
  'cosmos-emerald': { border: 'border-cosmos-emerald/30', text: 'text-cosmos-emerald', bg: 'bg-cosmos-emerald/10' },
  'cosmos-violet': { border: 'border-cosmos-violet/30', text: 'text-cosmos-violet', bg: 'bg-cosmos-violet/10' },
};

const CategoriesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-surface py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="cat-section-label" className="text-cosmos-cyan text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
            Kingdoms of the Invisible
          </p>
          <h2 id="cat-section-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text">
            Meet the Microorganisms
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const accent = accentMap[cat.accent];
            return (
              <div
                key={cat.id}
                className={`group bg-cosmos-card border ${accent.border} rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-500`}
              >
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [cat-section-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 id={cat.titleId} className="font-grotesk text-xl font-semibold text-cosmos-text">
                      {cat.title}
                    </h3>
                    <span className={`text-xs font-inter font-medium px-3 py-1 rounded-full ${accent.bg} ${accent.text}`}>
                      {cat.tag}
                    </span>
                  </div>
                  <p id={cat.descId} className="font-inter text-cosmos-muted text-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
