import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-bacteria',
    imgId: 'cat-img-mc301',
    titleId: 'cat-title-bacteria',
    descId: 'cat-desc-bacteria',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes found in every environment on Earth. Some cause disease, others are essential for life.',
    count: '10,000+ species',
    color: 'cosmos-cyan',
  },
  {
    id: 'cat-viruses',
    imgId: 'cat-img-mc302',
    titleId: 'cat-title-viruses',
    descId: 'cat-desc-viruses',
    title: 'Viruses',
    desc: 'Nanoscale infectious agents that hijack host cells to replicate. Smaller than any living cell.',
    count: '6,000+ identified',
    color: 'cosmos-violet',
  },
  {
    id: 'cat-cells',
    imgId: 'cat-img-mc303',
    titleId: 'cat-title-cells',
    descId: 'cat-desc-cells',
    title: 'Human Cells',
    desc: 'The building blocks of the human body — from neurons to red blood cells, each with a unique structure.',
    count: '37 trillion in body',
    color: 'cosmos-emerald',
  },
  {
    id: 'cat-fungi',
    imgId: 'cat-img-mc304',
    titleId: 'cat-title-fungi',
    descId: 'cat-desc-fungi',
    title: 'Fungi & Spores',
    desc: 'Microscopic fungi and their spores form vast underground networks and play key roles in ecosystems.',
    count: '5 million+ species',
    color: 'cosmos-cyan',
  },
  {
    id: 'cat-crystals',
    imgId: 'cat-img-mc305',
    titleId: 'cat-title-crystals',
    descId: 'cat-desc-crystals',
    title: 'Crystals & Minerals',
    desc: 'Minerals form stunning geometric patterns at the atomic scale, revealed through polarized light microscopy.',
    count: '4,000+ minerals',
    color: 'cosmos-violet',
  },
  {
    id: 'cat-plankton',
    imgId: 'cat-img-mc306',
    titleId: 'cat-title-plankton',
    descId: 'cat-desc-plankton',
    title: 'Plankton & Algae',
    desc: 'Microscopic ocean life that produces half of Earth\'s oxygen and forms the base of the marine food chain.',
    count: 'Billions per liter',
    color: 'cosmos-emerald',
  },
];

const accentClasses = {
  'cosmos-cyan': {
    border: 'border-cosmos-cyan/30 hover:border-cosmos-cyan',
    text: 'text-cosmos-cyan',
    badge: 'bg-cosmos-cyan/10 text-cosmos-cyan',
  },
  'cosmos-violet': {
    border: 'border-cosmos-violet/30 hover:border-cosmos-violet',
    text: 'text-cosmos-violet',
    badge: 'bg-cosmos-violet/10 text-cosmos-violet',
  },
  'cosmos-emerald': {
    border: 'border-cosmos-emerald/30 hover:border-cosmos-emerald',
    text: 'text-cosmos-emerald',
    badge: 'bg-cosmos-emerald/10 text-cosmos-emerald',
  },
};

export default function Categories() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <section ref={containerRef} className="bg-cosmos-bg py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cosmos-cyan mb-4">
            Taxonomy of the Tiny
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-cosmos-text mb-6">
            Explore by Category
          </h2>
          <p className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            The microscopic world spans every domain of life. Dive into each category to discover its unique inhabitants.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const accent = accentClasses[cat.color];
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  active === cat.id
                    ? `${accent.border} ${accent.text} bg-cosmos-card`
                    : 'border-cosmos-border text-cosmos-muted hover:text-cosmos-text hover:border-cosmos-border/80 bg-transparent'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active category display */}
        {activeCategory && (() => {
          const accent = accentClasses[activeCategory.color];
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl border ${accent.border} bg-cosmos-card`}>
                <div className="aspect-[4x3] md:aspect-[3/2]">
                  <img
                    alt={activeCategory.title}
                    data-strk-img-id={activeCategory.imgId}
                    data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                    style={{ minHeight: '280px' }}
                  />
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col gap-5">
                <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full w-fit ${accent.badge}`}>
                  {activeCategory.count}
                </span>
                <h3 id={activeCategory.titleId} className={`text-3xl md:text-4xl font-bold ${accent.text}`}>
                  {activeCategory.title}
                </h3>
                <p id={activeCategory.descId} className="text-cosmos-muted text-lg leading-relaxed">
                  {activeCategory.desc}
                </p>
                <div className={`w-16 h-1 rounded-full bg-current ${accent.text}`} />
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
