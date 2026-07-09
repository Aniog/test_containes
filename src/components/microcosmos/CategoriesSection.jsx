import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-biology',
    label: 'Biology',
    color: 'text-cyan-400',
    activeBg: 'bg-cyan-500',
    items: [
      { id: 'bio-01', imgId: 'cat-bio-01-ab1cd2', titleId: 'cat-bio-01-title', descId: 'cat-bio-01-desc', title: 'Mitochondria', desc: 'Mitochondria powerhouse of the cell electron microscopy' },
      { id: 'bio-02', imgId: 'cat-bio-02-ef3gh4', titleId: 'cat-bio-02-title', descId: 'cat-bio-02-desc', title: 'DNA Strand', desc: 'DNA double helix strand molecular biology visualization' },
      { id: 'bio-03', imgId: 'cat-bio-03-ij5kl6', titleId: 'cat-bio-03-title', descId: 'cat-bio-03-desc', title: 'White Blood Cell', desc: 'White blood cell leukocyte attacking bacteria immune system' },
      { id: 'bio-04', imgId: 'cat-bio-04-mn7op8', titleId: 'cat-bio-04-title', descId: 'cat-bio-04-desc', title: 'Chloroplast', desc: 'Chloroplast plant cell photosynthesis green organelle' },
    ],
  },
  {
    id: 'cat-minerals',
    label: 'Minerals',
    color: 'text-purple-400',
    activeBg: 'bg-purple-500',
    items: [
      { id: 'min-01', imgId: 'cat-min-01-qr1st2', titleId: 'cat-min-01-title', descId: 'cat-min-01-desc', title: 'Amethyst', desc: 'Amethyst purple quartz crystal mineral macro photography' },
      { id: 'min-02', imgId: 'cat-min-02-uv3wx4', titleId: 'cat-min-02-title', descId: 'cat-min-02-desc', title: 'Pyrite', desc: 'Pyrite fool gold cubic crystal mineral formation' },
      { id: 'min-03', imgId: 'cat-min-03-yz5ab6', titleId: 'cat-min-03-title', descId: 'cat-min-03-desc', title: 'Bismuth', desc: 'Bismuth rainbow iridescent crystal staircase formation' },
      { id: 'min-04', imgId: 'cat-min-04-cd7ef8', titleId: 'cat-min-04-title', descId: 'cat-min-04-desc', title: 'Fluorite', desc: 'Fluorite mineral crystal fluorescent glowing ultraviolet light' },
    ],
  },
  {
    id: 'cat-insects',
    label: 'Insects',
    color: 'text-green-400',
    activeBg: 'bg-green-500',
    items: [
      { id: 'ins-01', imgId: 'cat-ins-01-gh9ij0', titleId: 'cat-ins-01-title', descId: 'cat-ins-01-desc', title: 'Bee Eye', desc: 'Honeybee compound eye macro photography extreme close-up' },
      { id: 'ins-02', imgId: 'cat-ins-02-kl1mn2', titleId: 'cat-ins-02-title', descId: 'cat-ins-02-desc', title: 'Dragonfly Wing', desc: 'Dragonfly wing venation pattern macro photography iridescent' },
      { id: 'ins-03', imgId: 'cat-ins-03-op3qr4', titleId: 'cat-ins-03-title', descId: 'cat-ins-03-desc', title: 'Flea', desc: 'Flea insect scanning electron microscope detailed anatomy' },
      { id: 'ins-04', imgId: 'cat-ins-04-st5uv6', titleId: 'cat-ins-04-title', descId: 'cat-ins-04-desc', title: 'Moth Scales', desc: 'Moth wing scales colorful pattern electron microscope' },
    ],
  },
  {
    id: 'cat-water',
    label: 'Water Life',
    color: 'text-blue-400',
    activeBg: 'bg-blue-500',
    items: [
      { id: 'wat-01', imgId: 'cat-wat-01-wx7yz8', titleId: 'cat-wat-01-title', descId: 'cat-wat-01-desc', title: 'Plankton', desc: 'Marine plankton microscopic ocean life fluorescent microscopy' },
      { id: 'wat-02', imgId: 'cat-wat-02-ab9cd0', titleId: 'cat-wat-02-title', descId: 'cat-wat-02-desc', title: 'Hydra', desc: 'Hydra freshwater polyp tentacles microscopic aquatic organism' },
      { id: 'wat-03', imgId: 'cat-wat-03-ef1gh2', titleId: 'cat-wat-03-title', descId: 'cat-wat-03-desc', title: 'Copepod', desc: 'Copepod crustacean microscopic water flea zooplankton' },
      { id: 'wat-04', imgId: 'cat-wat-04-ij3kl4', titleId: 'cat-wat-04-title', descId: 'cat-wat-04-desc', title: 'Algae Bloom', desc: 'Green algae bloom microscopic freshwater pond life' },
    ],
  },
];

const CategoriesSection = () => {
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
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Explore by Category
          </div>
          <h2 id="cat-section-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dive Deeper
          </h2>
          <p id="cat-section-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore the microcosmos by category — from living organisms to mineral formations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === cat.id
                  ? `${cat.activeBg} text-white border-transparent`
                  : `border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white bg-transparent`
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image grid for active category */}
        {activeCategory && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {activeCategory.items.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl group border border-cyan-900/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-[#0d1f35]">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [cat-section-desc] [cat-section-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 id={item.titleId} className="text-white font-semibold text-sm">{item.title}</h3>
                  <p id={item.descId} className="text-slate-400 text-xs mt-0.5 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
