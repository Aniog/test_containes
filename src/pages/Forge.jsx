import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, Flame, Layers, Settings } from 'lucide-react';

const categories = ['All', 'Molten Metal', 'Carbon Fiber', 'CNC Machining'];

const forgeItems = [
  {
    id: 'forge-molten-1',
    title: 'Liquid Aluminum Pour',
    category: 'Molten Metal',
    desc: 'High-purity aluminum alloy at 660°C being poured into precision molds for heatsink casting.',
    size: 'large',
    titleId: 'forge-molten-1-title',
    descId: 'forge-molten-1-desc',
    imgId: 'forge-img-molten-1-a1b2c3',
  },
  {
    id: 'forge-carbon-1',
    title: 'Carbon Fiber Layup',
    category: 'Carbon Fiber',
    desc: 'Pre-preg carbon fiber sheets being hand-laid at precise 45° angles for maximum tensile strength.',
    size: 'medium',
    titleId: 'forge-carbon-1-title',
    descId: 'forge-carbon-1-desc',
    imgId: 'forge-img-carbon-1-d4e5f6',
  },
  {
    id: 'forge-cnc-1',
    title: '5-Axis CNC Milling',
    category: 'CNC Machining',
    desc: 'Titanium billet being precision-machined on a 5-axis CNC mill to ±0.001mm tolerance.',
    size: 'medium',
    titleId: 'forge-cnc-1-title',
    descId: 'forge-cnc-1-desc',
    imgId: 'forge-img-cnc-1-g7h8i9',
  },
  {
    id: 'forge-molten-2',
    title: 'Copper Ingot Casting',
    category: 'Molten Metal',
    desc: 'OFHC copper being cast into custom heat pipe blanks for extreme thermal conductivity.',
    size: 'medium',
    titleId: 'forge-molten-2-title',
    descId: 'forge-molten-2-desc',
    imgId: 'forge-img-molten-2-j1k2l3',
  },
  {
    id: 'forge-carbon-2',
    title: 'Autoclave Curing',
    category: 'Carbon Fiber',
    desc: 'Carbon fiber components under 7-bar pressure at 180°C in the autoclave for aerospace-grade consolidation.',
    size: 'large',
    titleId: 'forge-carbon-2-title',
    descId: 'forge-carbon-2-desc',
    imgId: 'forge-img-carbon-2-m4n5o6',
  },
  {
    id: 'forge-cnc-2',
    title: 'EDM Wire Cutting',
    category: 'CNC Machining',
    desc: 'Electrical discharge machining cutting complex internal geometries in hardened tool steel.',
    size: 'medium',
    titleId: 'forge-cnc-2-title',
    descId: 'forge-cnc-2-desc',
    imgId: 'forge-img-cnc-2-p7q8r9',
  },
  {
    id: 'forge-molten-3',
    title: 'Vacuum Arc Remelting',
    category: 'Molten Metal',
    desc: 'Titanium alloy being refined in a vacuum arc remelting furnace to eliminate inclusions.',
    size: 'medium',
    titleId: 'forge-molten-3-title',
    descId: 'forge-molten-3-desc',
    imgId: 'forge-img-molten-3-s1t2u3',
  },
  {
    id: 'forge-cnc-3',
    title: 'Surface Grinding',
    category: 'CNC Machining',
    desc: 'Precision surface grinding achieving Ra 0.1μm finish on mating surfaces for thermal interface.',
    size: 'medium',
    titleId: 'forge-cnc-3-title',
    descId: 'forge-cnc-3-desc',
    imgId: 'forge-img-cnc-3-v4w5x6',
  },
  {
    id: 'forge-carbon-3',
    title: 'Filament Winding',
    category: 'Carbon Fiber',
    desc: 'Continuous carbon fiber filament being wound onto mandrels for tubular structural components.',
    size: 'large',
    titleId: 'forge-carbon-3-title',
    descId: 'forge-carbon-3-desc',
    imgId: 'forge-img-carbon-3-y7z8a9',
  },
];

const categoryIcons = {
  'Molten Metal': Flame,
  'Carbon Fiber': Layers,
  'CNC Machining': Settings,
};

const categoryColors = {
  'Molten Metal': '#FF6B2B',
  'Carbon Fiber': '#C0C0C0',
  'CNC Machining': '#4A90D9',
};

export default function Forge() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = activeCategory === 'All'
    ? forgeItems
    : forgeItems.filter(item => item.category === activeCategory);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  return (
    <div ref={containerRef} className="bg-[#1A1A1B] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a08] via-[#111112] to-[#1A1A1B]" />

        {/* Heat glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#FF6B2B]/5 blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-[#FF6B2B]/3 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-[#FF6B2B]/30 rounded bg-[#FF6B2B]/5">
            <Flame className="w-3 h-3 text-[#FF6B2B]" />
            <span className="font-orbitron text-[10px] tracking-[0.25em] uppercase text-[#FF6B2B]/80">
              Raw Materials & Process
            </span>
          </div>
          <h1 className="font-orbitron font-black text-3xl md:text-5xl tracking-tight mb-4">
            <span className="text-[#FF6B2B]">THE</span>
            <span className="text-metallic"> FORGE</span>
          </h1>
          <p className="font-inter text-[#C0C0C0]/50 max-w-xl leading-relaxed">
            Where raw materials become precision instruments. Molten metal, woven carbon, and machined titanium — the building blocks of TITAN-CORE hardware.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            {categories.map(cat => {
              const Icon = cat !== 'All' ? categoryIcons[cat] : Flame;
              const color = cat !== 'All' ? categoryColors[cat] : '#C0C0C0';
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded font-orbitron text-[10px] tracking-widest uppercase transition-all duration-300`}
                  style={{
                    borderColor: isActive ? `${color}60` : 'rgba(192,192,192,0.15)',
                    color: isActive ? color : 'rgba(192,192,192,0.4)',
                    background: isActive ? `${color}10` : 'transparent',
                  }}
                >
                  <Icon className="w-3 h-3" />
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((item) => {
              const Icon = categoryIcons[item.category];
              const color = categoryColors[item.category];
              return (
                <article
                  key={item.id}
                  className="break-inside-avoid glass-panel overflow-hidden group cursor-pointer hover:border-[#C0C0C0]/30 transition-all duration-300 shadow-lg shadow-black/40"
                  onClick={() => openLightbox(item)}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-[#111112] ${
                      item.size === 'large' ? 'h-64' : 'h-44'
                    }`}
                  >
                    <img
                      alt={item.title}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}] industrial manufacturing process`}
                      data-strk-img-ratio={item.size === 'large' ? '16x9' : '4x3'}
                      data-strk-img-width={item.size === 'large' ? '800' : '600'}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B]/80 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="flex items-center gap-1.5 font-orbitron text-[9px] tracking-[0.15em] uppercase px-2 py-1 rounded backdrop-blur-sm border"
                        style={{
                          color,
                          borderColor: `${color}40`,
                          background: `${color}15`,
                        }}
                      >
                        <Icon className="w-2.5 h-2.5" />
                        {item.category}
                      </span>
                    </div>

                    {/* Hover zoom icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="glass-panel p-2 rounded-full">
                        <X className="w-4 h-4 text-[#C0C0C0] rotate-45" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3
                      id={item.titleId}
                      className="font-orbitron font-semibold text-xs tracking-wider text-[#C0C0C0] mb-1.5"
                    >
                      {item.title}
                    </h3>
                    <p
                      id={item.descId}
                      className="font-inter text-xs text-[#C0C0C0]/45 leading-relaxed"
                    >
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative z-10 glass-panel-strong max-w-3xl w-full overflow-hidden shadow-2xl shadow-black/80"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center border border-[#C0C0C0]/20 rounded hover:border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/5 transition-all"
            >
              <X className="w-4 h-4 text-[#C0C0C0]" />
            </button>

            {/* Image */}
            <div className="relative h-72 md:h-96 bg-[#111112]">
              <img
                alt={lightbox.title}
                data-strk-img-id={`${lightbox.imgId}-lb`}
                data-strk-img={`[${lightbox.descId}] [${lightbox.titleId}] industrial manufacturing`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B]/60 to-transparent" />
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="font-orbitron text-[9px] tracking-[0.2em] uppercase mb-2 block"
                    style={{ color: categoryColors[lightbox.category] }}
                  >
                    {lightbox.category}
                  </span>
                  <h2
                    id={lightbox.titleId}
                    className="font-orbitron font-bold text-base tracking-wider text-[#C0C0C0] mb-2"
                  >
                    {lightbox.title}
                  </h2>
                  <p
                    id={lightbox.descId}
                    className="font-inter text-sm text-[#C0C0C0]/55 leading-relaxed"
                  >
                    {lightbox.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
