import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    size: '0.1 – 1.5 mm',
    habitat: 'Everywhere on Earth',
    color: 'cyan',
    description:
      'The toughest animal on Earth. Tardigrades can survive the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C by entering a state called cryptobiosis.',
    superpower: 'Near-indestructible',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    imgId: 'org-img-tardigrade-3b7e9f',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    nickname: 'Glass Algae',
    size: '2 – 500 µm',
    habitat: 'Oceans & Freshwater',
    color: 'teal',
    description:
      'Single-celled algae encased in intricate glass-like shells called frustules. Diatoms produce about 20% of all oxygen on Earth and form the base of aquatic food chains.',
    superpower: 'Oxygen factory',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'org-img-diatom-5c2a8d',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    nickname: 'Wheel Animal',
    size: '0.1 – 0.5 mm',
    habitat: 'Freshwater & Soil',
    color: 'emerald',
    description:
      'Named for their crown of cilia that spin like a wheel to draw food into their mouths. Rotifers are masters of survival, capable of desiccating completely and reviving centuries later.',
    superpower: 'Resurrection',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
    imgId: 'org-img-rotifer-7d4f1e',
  },
  {
    id: 'vorticella',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    size: '30 – 150 µm',
    habitat: 'Freshwater',
    color: 'violet',
    description:
      'A bell-shaped protozoan that attaches to surfaces via a coiled stalk. When disturbed, it contracts its stalk in milliseconds — one of the fastest movements in the animal kingdom.',
    superpower: 'Lightning contraction',
    titleId: 'org-vorticella-title',
    descId: 'org-vorticella-desc',
    imgId: 'org-img-vorticella-2e6b3c',
  },
  {
    id: 'paramecium',
    name: 'Paramecium',
    nickname: 'Slipper Animalcule',
    size: '50 – 350 µm',
    habitat: 'Stagnant Water',
    color: 'cyan',
    description:
      'A slipper-shaped single-celled organism covered in thousands of tiny hair-like cilia. Paramecia are among the most studied organisms in biology and can even learn from experience.',
    superpower: 'Primitive learning',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
    imgId: 'org-img-paramecium-9a1d5f',
  },
  {
    id: 'bdelloid',
    name: 'Bdelloid Rotifer',
    nickname: 'Ancient Survivor',
    size: '0.1 – 0.5 mm',
    habitat: 'Soil & Moss',
    color: 'teal',
    description:
      'An all-female species that has survived for 80 million years without sexual reproduction. They steal DNA from bacteria, fungi, and plants to evolve — a phenomenon called horizontal gene transfer.',
    superpower: 'DNA theft',
    titleId: 'org-bdelloid-title',
    descId: 'org-bdelloid-desc',
    imgId: 'org-img-bdelloid-4f8c2a',
  },
];

const colorMap = {
  cyan: {
    border: 'border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-400',
    glow: 'hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]',
    dot: 'bg-cyan-400',
    tag: 'text-cyan-400',
  },
  teal: {
    border: 'border-teal-500/30',
    badge: 'bg-teal-500/10 text-teal-400',
    glow: 'hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]',
    dot: 'bg-teal-400',
    tag: 'text-teal-400',
  },
  emerald: {
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-400',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]',
    dot: 'bg-emerald-400',
    tag: 'text-emerald-400',
  },
  violet: {
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/10 text-violet-400',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]',
    dot: 'bg-violet-400',
    tag: 'text-violet-400',
  },
};

const OrganismsSection = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(organisms[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeOrganism = organisms.find((o) => o.id === active);
  const colors = colorMap[activeOrganism.color];

  return (
    <section
      id="organisms"
      ref={containerRef}
      className="py-28 px-6"
      style={{ background: '#030b18' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-cyan-500/40" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Inhabitants</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2
            className="font-space text-4xl md:text-5xl font-bold text-sky-50 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Meet the <span className="gradient-text">Residents</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Six extraordinary microscopic creatures that define the hidden world around us.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {organisms.map((org) => {
            const c = colorMap[org.color];
            return (
              <button
                key={org.id}
                onClick={() => setActive(org.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === org.id
                    ? `${c.badge} ${c.border}`
                    : 'border-slate-700/50 text-slate-500 hover:text-slate-300 hover:border-slate-600'
                }`}
              >
                {org.name}
              </button>
            );
          })}
        </div>

        {/* Active organism detail */}
        {organisms
          .filter((o) => o.id === active)
          .map((org) => {
            const c = colorMap[org.color];
            return (
              <div
                key={org.id}
                className={`grid md:grid-cols-2 gap-10 rounded-3xl border ${c.border} bg-[#0a1628] p-8 md:p-12 transition-all duration-500 ${c.glow}`}
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    alt={org.name}
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-full object-cover min-h-[280px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                  <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${c.badge}`}>
                    ⚡ {org.superpower}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <div className={`text-sm font-medium tracking-widest uppercase mb-2 ${c.tag}`}>
                    {org.nickname}
                  </div>
                  <h3
                    id={org.titleId}
                    className="font-space text-4xl font-bold text-sky-50 mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {org.name}
                  </h3>
                  <p id={org.descId} className="text-slate-400 text-base leading-relaxed mb-8">
                    {org.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#060f20] border border-slate-700/40">
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Size</div>
                      <div className={`font-semibold ${c.tag}`}>{org.size}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#060f20] border border-slate-700/40">
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Habitat</div>
                      <div className={`font-semibold ${c.tag}`}>{org.habitat}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default OrganismsSection;
