import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stages = [
  {
    step:        '01',
    name:        'Molecular Cloud / Nebula',
    duration:    'Millions of years',
    description: 'Vast clouds of hydrogen and helium gas collapse under gravity. As density increases, temperature rises — the protostar ignites nuclear fusion.',
    physics:     'Gravitational potential energy → thermal energy. Jeans instability criterion: M > M_J',
    color:       'border-star-purple/50 bg-star-purple/5',
    accent:      'text-star-purple',
    imgId:       'stellar-img-nebula-6c2d9f',
    imgQuery:    '[stellar-nebula-desc] [stellar-nebula-name]',
    nameId:      'stellar-nebula-name',
    descId:      'stellar-nebula-desc',
  },
  {
    step:        '02',
    name:        'Main Sequence Star',
    duration:    '10 million – 10 billion years',
    description: 'Hydrostatic equilibrium: radiation pressure from fusion balances gravitational collapse. Our Sun has been in this stable phase for 4.6 billion years.',
    physics:     'Nuclear fusion: 4¹H → ⁴He + 2e⁺ + 2ν + energy (E=mc²)',
    color:       'border-amber-glow/50 bg-amber-glow/5',
    accent:      'text-amber-glow',
    imgId:       'stellar-img-mainseq-3a7e1b',
    imgQuery:    '[stellar-mainseq-desc] [stellar-mainseq-name]',
    nameId:      'stellar-mainseq-name',
    descId:      'stellar-mainseq-desc',
  },
  {
    step:        '03',
    name:        'Red Giant / Supergiant',
    duration:    '100 million – 1 billion years',
    description: 'Hydrogen in the core is exhausted. The core contracts while the outer layers expand dramatically. Helium fusion begins — the triple-alpha process.',
    physics:     'Triple-alpha: 3⁴He → ¹²C + γ. Stellar radius expands 100–1000×',
    color:       'border-red-500/50 bg-red-500/5',
    accent:      'text-red-400',
    imgId:       'stellar-img-redgiant-8f4b2c',
    imgQuery:    '[stellar-redgiant-desc] [stellar-redgiant-name]',
    nameId:      'stellar-redgiant-name',
    descId:      'stellar-redgiant-desc',
  },
  {
    step:        '04',
    name:        'Supernova Explosion',
    duration:    'Seconds to weeks',
    description: 'For massive stars (>8 M☉), the iron core collapses in milliseconds. The resulting shockwave ejects the outer layers at 10,000 km/s — forging heavy elements.',
    physics:     'Core collapse: gravitational energy ~3×10⁴⁶ J released. Neutrino burst.',
    color:       'border-orange-400/50 bg-orange-400/5',
    accent:      'text-orange-400',
    imgId:       'stellar-img-supernova-2e9d5a',
    imgQuery:    '[stellar-supernova-desc] [stellar-supernova-name]',
    nameId:      'stellar-supernova-name',
    descId:      'stellar-supernova-desc',
  },
  {
    step:        '05',
    name:        'Neutron Star / Black Hole',
    duration:    'Billions of years',
    description: 'The remnant core becomes either a neutron star (density ~10¹⁷ kg/m³) or, if mass exceeds ~3 M☉, a black hole — where escape velocity exceeds the speed of light.',
    physics:     'Schwarzschild radius: r_s = 2GM/c². Event horizon — no information escapes.',
    color:       'border-star-blue/50 bg-star-blue/5',
    accent:      'text-star-blue',
    imgId:       'stellar-img-blackhole-7b3f1d',
    imgQuery:    '[stellar-blackhole-desc] [stellar-blackhole-name]',
    nameId:      'stellar-blackhole-name',
    descId:      'stellar-blackhole-desc',
  },
];

export default function KnowledgeStellarEvolution() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      id="stellar-evolution"
      ref={containerRef}
      className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-cosmos-void"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-amber-glow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
            Section B
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-star-white mb-4">
          Stellar Evolution
        </h2>
        <p className="text-cosmos-subtle max-w-2xl text-base leading-relaxed mb-16">
          Every atom heavier than hydrogen was forged inside a star. Follow the complete lifecycle of a massive star — from a cold molecular cloud to a black hole — and understand the nuclear physics driving each transformation.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-star-purple via-amber-glow to-star-blue opacity-30 hidden md:block" />

          <div className="space-y-10 md:space-y-0">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={stage.step}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                    isEven ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Step indicator (desktop center) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cosmos-deep border-2 border-cosmos-border items-center justify-center z-10">
                    <span className={`text-xs font-bold font-display ${stage.accent}`}>{stage.step}</span>
                  </div>

                  {/* Image side */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'} mb-6 md:mb-0`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                      <img
                        alt={stage.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-strk-img-id={stage.imgId}
                        data-strk-img={stage.imgQuery}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                      <div className="absolute inset-0 img-overlay-bottom" />
                      {/* Step badge */}
                      <div className="absolute top-4 left-4 md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-cosmos-void/80 backdrop-blur-sm">
                        <span className={`text-xs font-bold ${stage.accent}`}>{stage.step}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`${isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8 md:text-right'}`}>
                    <div className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-3 ${stage.color} ${stage.accent}`}>
                      {stage.duration}
                    </div>
                    <h3
                      id={stage.nameId}
                      className="font-display font-bold text-2xl text-star-white mb-3"
                    >
                      {stage.name}
                    </h3>
                    <p
                      id={stage.descId}
                      className="text-cosmos-subtle text-sm leading-relaxed mb-4"
                    >
                      {stage.description}
                    </p>
                    {/* Physics formula */}
                    <div className={`inline-flex items-start gap-2 px-4 py-3 rounded-xl bg-cosmos-surface border border-cosmos-border text-left`}>
                      <span className="text-xs text-cosmos-subtle uppercase tracking-wider shrink-0 mt-0.5">Physics:</span>
                      <span className={`text-xs font-mono ${stage.accent} leading-relaxed`}>{stage.physics}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
