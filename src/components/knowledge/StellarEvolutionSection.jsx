import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stages = [
  {
    id: 'nebula',
    phase: '01',
    title: 'Molecular Cloud & Nebula',
    duration: '~10 million years',
    description:
      'Stars are born in vast clouds of gas and dust called molecular clouds. Gravity causes regions to collapse, heating the core until nuclear fusion ignites.',
    color: 'text-aurora',
    borderColor: 'border-aurora/30',
    imgQuery: 'stellar nebula molecular cloud star formation',
    imgId: 'stellar-nebula-g7h8i9',
  },
  {
    id: 'main-sequence',
    phase: '02',
    title: 'Main Sequence Star',
    duration: '~10 billion years (Sun-like)',
    description:
      'The longest phase of a star\'s life. Hydrogen fuses into helium in the core, releasing energy that balances gravitational collapse — a state called hydrostatic equilibrium.',
    color: 'text-amber',
    borderColor: 'border-amber/30',
    imgQuery: 'main sequence star yellow dwarf sun stellar physics',
    imgId: 'main-seq-j1k2l3',
  },
  {
    id: 'red-giant',
    phase: '03',
    title: 'Red Giant / Supergiant',
    duration: '~1 billion years',
    description:
      'When hydrogen in the core is exhausted, the star expands dramatically. Low-mass stars become red giants; massive stars become supergiants, fusing heavier elements.',
    color: 'text-nebula-pink',
    borderColor: 'border-nebula-pink/30',
    imgQuery: 'red giant star expanding stellar evolution',
    imgId: 'red-giant-m4n5o6',
  },
  {
    id: 'endpoint',
    phase: '04',
    title: 'Stellar Endpoints',
    duration: 'Final stage',
    description:
      'Low-mass stars shed their outer layers as a planetary nebula, leaving a white dwarf. Massive stars explode as supernovae, leaving neutron stars or black holes.',
    color: 'text-dim',
    borderColor: 'border-subtle',
    imgQuery: 'white dwarf neutron star black hole accretion disk supernova remnant',
    imgId: 'endpoint-p7q8r9',
  },
];

export default function StellarEvolutionSection() {
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
      className="py-24 md:py-32 px-6 md:px-12 bg-surface border-y border-subtle"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-aurora">Section B</span>
          <div className="section-divider mt-3 mb-5 mx-0 w-12" style={{ margin: '12px 0 20px', background: 'linear-gradient(90deg, transparent, #7dd3fc, transparent)' }} />
          <h2
            id="stellar-title"
            className="font-serif font-light text-3xl md:text-4xl text-star tracking-wide mb-4"
          >
            Stellar Evolution
          </h2>
          <p
            id="stellar-subtitle"
            className="text-muted text-base leading-relaxed max-w-2xl"
          >
            Every star you see is at a different stage of its life. From the collapse of a nebula to the final flash of a supernova, stellar evolution is one of physics' most dramatic stories.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border ${stage.borderColor} bg-nebula p-8 md:p-10 transition-all duration-300 hover:shadow-lg`}
            >
              {/* Phase number */}
              <div className="absolute -top-4 left-8 bg-surface border border-subtle rounded-full px-3 py-1">
                <span className={`text-xs font-bold tracking-widest ${stage.color}`}>
                  Phase {stage.phase}
                </span>
              </div>

              {/* Text content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-3 mt-2">
                  <h3
                    id={`stage-title-${stage.id}`}
                    className="font-sans text-xl font-semibold text-star"
                  >
                    {stage.title}
                  </h3>
                </div>
                <div className={`inline-block text-xs font-medium tracking-widest uppercase ${stage.color} bg-surface rounded-full px-3 py-1 mb-4`}>
                  {stage.duration}
                </div>
                <p
                  id={`stage-desc-${stage.id}`}
                  className="text-muted text-sm leading-relaxed"
                >
                  {stage.description}
                </p>
              </div>

              {/* Image */}
              <div className={`relative rounded-xl overflow-hidden aspect-video bg-surface border border-subtle ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  alt={`${stage.title} — stellar evolution stage`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={stage.imgId}
                  data-strk-img={`[stage-desc-${stage.id}] [stage-title-${stage.id}] [stellar-subtitle] [stellar-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos/40 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* HR Diagram callout */}
        <div className="mt-12 bg-nebula rounded-2xl border border-subtle p-8 md:p-10">
          <h3 className="font-serif text-xl font-light text-star mb-3">
            The Hertzsprung–Russell Diagram
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            The H–R diagram plots stellar luminosity against surface temperature, revealing that most stars fall along a diagonal band called the <span className="text-amber font-medium">Main Sequence</span>. This powerful tool allows astronomers to determine a star's age, mass, and evolutionary stage at a glance — one of the most important diagrams in all of astrophysics.
          </p>
        </div>
      </div>
    </section>
  );
}
