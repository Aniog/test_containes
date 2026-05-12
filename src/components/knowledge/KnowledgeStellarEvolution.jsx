import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stages = [
  {
    step: '01', name: 'Nebula', titleId: 'stage-t1', descId: 'stage-d1', imgId: 'stage-img-1a2b',
    desc: 'A vast cloud of gas and dust — the birthplace of stars. Gravity slowly pulls material together over millions of years.',
    color: '#6366f1', detail: 'Composition: ~75% hydrogen, ~24% helium, ~1% heavier elements',
  },
  {
    step: '02', name: 'Protostar', titleId: 'stage-t2', descId: 'stage-d2', imgId: 'stage-img-3c4d',
    desc: 'As the nebula collapses, a dense core forms. Gravitational energy heats the core until nuclear fusion ignites.',
    color: '#f5c842', detail: 'Core temperature: ~10 million K to ignite fusion',
  },
  {
    step: '03', name: 'Main Sequence Star', titleId: 'stage-t3', descId: 'stage-d3', imgId: 'stage-img-5e6f',
    desc: 'The stable phase where hydrogen fuses into helium. Our Sun has been in this phase for ~4.6 billion years.',
    color: '#f5c842', detail: 'Our Sun: ~10 billion years on the main sequence',
  },
  {
    step: '04', name: 'Red Giant / Supergiant', titleId: 'stage-t4', descId: 'stage-d4', imgId: 'stage-img-7g8h',
    desc: 'When hydrogen runs out, the core contracts and outer layers expand dramatically. The star becomes a red giant.',
    color: '#ef4444', detail: 'Radius expands up to 200× the original size',
  },
  {
    step: '05', name: 'Planetary Nebula / Supernova', titleId: 'stage-t5', descId: 'stage-d5', imgId: 'stage-img-9i0j',
    desc: 'Low-mass stars shed their outer layers as a planetary nebula. Massive stars explode in a spectacular supernova.',
    color: '#2dd4bf', detail: 'Supernova briefly outshines an entire galaxy',
  },
  {
    step: '06', name: 'White Dwarf / Neutron Star / Black Hole', titleId: 'stage-t6', descId: 'stage-d6', imgId: 'stage-img-1k2l',
    desc: 'The stellar remnant: a white dwarf (low mass), neutron star (medium mass), or black hole (high mass).',
    color: '#8892b0', detail: 'Black hole escape velocity exceeds the speed of light',
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
    <section id="stellar-evolution" ref={containerRef} className="py-24 md:py-32 bg-[#0f1629] border-t border-[#1e2a4a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#f5c842]" />
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#f5c842]">Section B</p>
        </div>

        <h2 id="stellar-heading" className="font-serif text-3xl md:text-5xl font-light text-[#f0f4ff] mb-4">
          Stellar Evolution
        </h2>
        <p id="stellar-subheading" className="text-[#8892b0] text-lg leading-relaxed max-w-2xl mb-16">
          Stars are not eternal. They are born, live for billions of years, and
          die in spectacular fashion. The mass of a star determines its entire
          life story — from a gentle planetary nebula to a violent supernova.
        </p>

        <div className="space-y-8">
          {stages.map(({ step, name, titleId, descId, imgId, desc, color, detail }, index) => (
            <div
              key={step}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
                index % 2 !== 0 ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''
              }`}
            >
              <div className="p-6 bg-[#0a0e1a] border border-[#1e2a4a] rounded-2xl">
                <span className="text-xs font-mono tracking-widest mb-3 block" style={{ color }}>
                  STAGE {step}
                </span>
                <h3 id={titleId} className="text-xl font-medium text-[#f0f4ff] mb-3">{name}</h3>
                <p id={descId} className="text-sm text-[#8892b0] leading-relaxed mb-4">{desc}</p>
                <p
                  className="text-xs font-mono px-3 py-1.5 rounded-lg inline-block"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  {detail}
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#1e2a4a] aspect-video">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${name} — stellar evolution stage`}
                  data-strk-img-id={imgId}
                  data-strk-img={`[${descId}] [${titleId}] [stellar-subheading] astronomy`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629]/40 to-transparent" />
                <div
                  className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  style={{ backgroundColor: `${color}30`, color, border: `1px solid ${color}50` }}
                >
                  {step}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
