import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-bacteria',
    name: 'Bacteria',
    count: '10³⁰ species',
    description: 'The oldest and most abundant life forms on Earth. Prokaryotic cells that colonize every environment from deep ocean vents to the human gut.',
    color: 'from-emerald-500/20 to-transparent',
    accent: 'text-emerald-400',
    border: 'border-emerald-400/30',
    imgId: 'cat-img-mc022',
    imgQuery: '[cat-bacteria-desc] [cat-bacteria-name] bacteria microscope colorful',
    examples: ['E. coli', 'Streptococcus', 'Cyanobacteria', 'Lactobacillus'],
  },
  {
    id: 'cat-virus',
    name: 'Viruses',
    count: '10³¹ particles',
    description: 'Not quite alive, not quite dead — viruses are molecular machines that hijack cellular machinery to replicate, driving evolution across all life.',
    color: 'from-rose-500/20 to-transparent',
    accent: 'text-rose-400',
    border: 'border-rose-400/30',
    imgId: 'cat-img-mc023',
    imgQuery: '[cat-virus-desc] [cat-virus-name] virus electron microscope 3d render',
    examples: ['Bacteriophage', 'Influenza', 'Tobacco Mosaic', 'Adenovirus'],
  },
  {
    id: 'cat-fungi',
    name: 'Fungi',
    count: '5.1M species',
    description: 'Masters of decomposition and symbiosis. Fungi form vast underground networks, produce life-saving antibiotics, and create the world\'s largest organisms.',
    color: 'from-amber-500/20 to-transparent',
    accent: 'text-amber-400',
    border: 'border-amber-400/30',
    imgId: 'cat-img-mc024',
    imgQuery: '[cat-fungi-desc] [cat-fungi-name] fungi spores hyphae microscope',
    examples: ['Penicillium', 'Aspergillus', 'Yeast', 'Mycelium'],
  },
  {
    id: 'cat-algae',
    name: 'Algae',
    count: '72,500 species',
    description: 'Photosynthetic powerhouses responsible for half of Earth\'s oxygen production. From single-celled diatoms to giant kelp forests.',
    color: 'from-[#00d4ff]/20 to-transparent',
    accent: 'text-[#00d4ff]',
    border: 'border-[#00d4ff]/30',
    imgId: 'cat-img-mc025',
    imgQuery: '[cat-algae-desc] [cat-algae-name] algae diatom microscope colorful',
    examples: ['Diatoms', 'Chlorella', 'Spirogyra', 'Volvox'],
  },
  {
    id: 'cat-protozoa',
    name: 'Protozoa',
    count: '50,000+ species',
    description: 'Single-celled eukaryotes with complex behaviors — hunting prey, forming colonies, and navigating environments with remarkable intelligence.',
    color: 'from-purple-500/20 to-transparent',
    accent: 'text-purple-400',
    border: 'border-purple-400/30',
    imgId: 'cat-img-mc026',
    imgQuery: '[cat-protozoa-desc] [cat-protozoa-name] protozoa amoeba paramecium microscope',
    examples: ['Amoeba', 'Paramecium', 'Euglena', 'Plasmodium'],
  },
  {
    id: 'cat-archaea',
    name: 'Archaea',
    count: '1,300+ species',
    description: 'Ancient extremophiles that thrive where nothing else can — boiling acid, frozen tundra, and crushing ocean depths. The toughest life on Earth.',
    color: 'from-orange-500/20 to-transparent',
    accent: 'text-orange-400',
    border: 'border-orange-400/30',
    imgId: 'cat-img-mc027',
    imgQuery: '[cat-archaea-desc] [cat-archaea-name] archaea extremophile hydrothermal vent',
    examples: ['Methanobacteria', 'Halobacteria', 'Thermophiles', 'Acidophiles'],
  },
];

const CategoriesSection = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cat = categories[active];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase">Taxonomy</span>
          <h2 id="cat-title" className="text-4xl md:text-5xl font-black text-[#f0f8ff] mt-3 mb-5">
            Kingdoms of the <span className="text-[#00d4ff]">Micro World</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Life at the microscopic scale is organized into distinct kingdoms, each with unique biology and ecological roles.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === i
                  ? `${c.accent} ${c.border} bg-white/5`
                  : 'text-slate-400 border-slate-700 hover:border-slate-500'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Active category display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-[#00d4ff]/20 shadow-[0_0_50px_rgba(0,212,255,0.1)]">
            <img
              key={cat.imgId}
              alt={cat.name}
              className="w-full h-[420px] object-cover"
              data-strk-img-id={cat.imgId}
              data-strk-img={cat.imgQuery}
              data-strk-img-ratio="3x2"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cat.accent} ${cat.border} bg-black/30`}>
                {cat.count}
              </span>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 id={cat.id} className={`text-5xl font-black mb-4 ${cat.accent}`}>{cat.name}</h3>
            <p id={`${cat.id}-desc`} className="text-slate-300 text-lg leading-relaxed mb-8">{cat.description}</p>

            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Notable Examples</p>
              <div className="flex flex-wrap gap-3">
                {cat.examples.map((ex) => (
                  <span
                    key={ex}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${cat.accent} ${cat.border} bg-white/5`}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>

            {/* Mini image row */}
            <div className="grid grid-cols-4 gap-3 mt-10">
              {categories.filter((_, i) => i !== active).slice(0, 4).map((other) => (
                <button
                  key={other.id}
                  onClick={() => setActive(categories.indexOf(other))}
                  className="relative rounded-xl overflow-hidden border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-200 group"
                >
                  <img
                    alt={other.name}
                    className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                    data-strk-img-id={`${other.imgId}-thumb`}
                    data-strk-img={other.imgQuery}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-[#0a1628]/50 flex items-end p-1.5">
                    <span className="text-[#f0f8ff] text-xs font-semibold leading-tight">{other.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
