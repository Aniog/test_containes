import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'bacteria',
    imgId: 'cat-img-mc201',
    titleId: 'cat-bacteria-title',
    descId: 'cat-bacteria-desc',
    title: 'Bacteria & Microbes',
    desc: 'The oldest and most abundant life forms on Earth. Bacteria colonize every environment imaginable, from boiling hot springs to frozen tundra.',
    count: '10,000+ species',
    color: 'from-cyan-500/20 to-transparent',
    accent: 'text-cyan-400',
    border: 'border-cyan-400/30',
  },
  {
    id: 'cells',
    imgId: 'cat-img-mc202',
    titleId: 'cat-cells-title',
    descId: 'cat-cells-desc',
    title: 'Human Cells',
    desc: 'The building blocks of life. Each of the 37 trillion cells in your body is a marvel of molecular engineering, performing thousands of reactions per second.',
    count: '200+ cell types',
    color: 'from-violet-500/20 to-transparent',
    accent: 'text-violet-400',
    border: 'border-violet-400/30',
  },
  {
    id: 'crystals',
    imgId: 'cat-img-mc203',
    titleId: 'cat-crystals-title',
    descId: 'cat-crystals-desc',
    title: 'Crystals & Minerals',
    desc: 'Nature\'s geometric masterpieces. Under polarized light, ordinary minerals transform into breathtaking kaleidoscopes of color and symmetry.',
    count: '4,000+ minerals',
    color: 'from-amber-500/20 to-transparent',
    accent: 'text-amber-400',
    border: 'border-amber-400/30',
  },
  {
    id: 'insects',
    imgId: 'cat-img-mc204',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    title: 'Insects & Arthropods',
    desc: 'The most diverse group of animals on Earth. Up close, insects reveal intricate compound eyes, sensory hairs, and structural colors that defy imagination.',
    count: '1 million+ species',
    color: 'from-teal-500/20 to-transparent',
    accent: 'text-teal-400',
    border: 'border-teal-400/30',
  },
];

const spotlightItems = [
  {
    id: 'spot-1',
    imgId: 'spot-img-mc301',
    titleId: 'spot-1-title',
    descId: 'spot-1-desc',
    title: 'Radiolarian Shell',
    desc: 'Radiolarian protozoa silica skeleton intricate geometric microscopy ocean',
    size: 'col-span-1 row-span-2',
  },
  {
    id: 'spot-2',
    imgId: 'spot-img-mc302',
    titleId: 'spot-2-title',
    descId: 'spot-2-desc',
    title: 'Moth Eye',
    desc: 'Moth compound eye surface nanostructure anti-reflective scanning electron microscope',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'spot-3',
    imgId: 'spot-img-mc303',
    titleId: 'spot-3-title',
    descId: 'spot-3-desc',
    title: 'Aspirin Crystal',
    desc: 'Aspirin acetylsalicylic acid crystal polarized light microscopy colorful',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'spot-4',
    imgId: 'spot-img-mc304',
    titleId: 'spot-4-title',
    descId: 'spot-4-desc',
    title: 'Coral Polyp',
    desc: 'Coral polyp tentacles fluorescence microscopy ocean reef',
    size: 'col-span-2 row-span-1',
  },
];

export default function Categories() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const active = categories.find((c) => c.id === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section ref={containerRef} className="bg-cosmos-mid/30 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Explore by Category
          </span>
          <h2 id="cat-section-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Worlds Within Worlds
          </h2>
          <p id="cat-section-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            From living organisms to inorganic crystals, the microscopic realm spans every domain of science and nature.
          </p>
        </div>

        {/* Category tabs + featured image */}
        <div className="grid md:grid-cols-5 gap-6 mb-20">
          {/* Tabs */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? `bg-cosmos-mid border-opacity-60 ${cat.border} shadow-lg`
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-semibold ${activeCategory === cat.id ? cat.accent : 'text-white'}`}>
                    {cat.title}
                  </h3>
                  {activeCategory === cat.id && (
                    <ArrowRight className={`w-4 h-4 ${cat.accent}`} />
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{cat.desc}</p>
                <span className={`text-xs font-medium mt-2 block ${activeCategory === cat.id ? cat.accent : 'text-slate-500'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Featured image */}
          <div className="md:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 min-h-[400px]">
            <img
              key={active.id}
              alt={active.title}
              data-strk-img-id={active.imgId}
              data-strk-img={`[${active.descId}] [${active.titleId}] [cat-section-desc] [cat-section-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${active.color} via-transparent to-transparent`} />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cosmos-deep to-transparent">
              <span className={`text-xs font-semibold uppercase tracking-wider ${active.accent}`}>{active.count}</span>
              <h3 id={active.titleId} className="text-white font-bold text-2xl mt-1">{active.title}</h3>
              <p id={active.descId} className="text-slate-300 text-sm mt-2 leading-relaxed">{active.desc}</p>
            </div>
          </div>
        </div>

        {/* Spotlight mosaic */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Spotlight Specimens</h3>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
            {spotlightItems.map((item) => (
              <div
                key={item.id}
                className={`${item.size} relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group`}
              >
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 id={item.titleId} className="text-white font-semibold text-sm">{item.title}</h4>
                  <p id={item.descId} className="sr-only">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
