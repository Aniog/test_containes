import { Zap } from 'lucide-react';

const stages = [
  {
    step: '01',
    title: 'Nebula',
    subtitle: 'The Stellar Nursery',
    description:
      'Stars are born inside vast clouds of gas and dust called nebulae. Gravity slowly pulls material together, and as the cloud collapses, it heats up. When the core reaches ~10 million Kelvin, nuclear fusion ignites.',
    color: 'text-aurora',
    bg: 'bg-aurora/10',
    border: 'border-aurora/30',
  },
  {
    step: '02',
    title: 'Protostar',
    subtitle: 'The Awakening',
    description:
      'A protostar forms as the collapsing cloud\'s core grows denser. It radiates energy from gravitational contraction, not yet from fusion. This phase can last hundreds of thousands of years.',
    color: 'text-amber-star',
    bg: 'bg-amber-star/10',
    border: 'border-amber-star/30',
  },
  {
    step: '03',
    title: 'Main Sequence Star',
    subtitle: 'The Prime of Life',
    description:
      'Our Sun has spent 4.6 billion years here. Hydrogen fuses into helium in the core, releasing enormous energy. A star\'s mass determines how long it stays on the main sequence — massive stars burn fast and die young.',
    color: 'text-aurora',
    bg: 'bg-aurora/10',
    border: 'border-aurora/30',
  },
  {
    step: '04',
    title: 'Red Giant / Supergiant',
    subtitle: 'The Expansion',
    description:
      'When hydrogen in the core is exhausted, the core contracts while the outer layers expand dramatically. The Sun will eventually engulf Mercury and Venus. Massive stars become supergiants hundreds of times larger.',
    color: 'text-amber-star',
    bg: 'bg-amber-star/10',
    border: 'border-amber-star/30',
  },
  {
    step: '05',
    title: 'Supernova / Planetary Nebula',
    subtitle: 'The Spectacular End',
    description:
      'Low-mass stars shed their outer layers as a beautiful planetary nebula. Massive stars die in a catastrophic supernova explosion — briefly outshining entire galaxies and forging heavy elements like gold and uranium.',
    color: 'text-aurora',
    bg: 'bg-aurora/10',
    border: 'border-aurora/30',
  },
  {
    step: '06',
    title: 'White Dwarf / Neutron Star / Black Hole',
    subtitle: 'The Remnant',
    description:
      'The stellar core that remains determines the final fate. Low-mass stars leave a white dwarf. Massive stars leave a neutron star — so dense a teaspoon weighs a billion tons. The most massive leave a black hole, where gravity is so strong that not even light can escape.',
    color: 'text-amber-star',
    bg: 'bg-amber-star/10',
    border: 'border-amber-star/30',
  },
];

export default function StellarEvolutionSection() {
  return (
    <section id="stellar-evolution" className="py-20 md:py-28 bg-deep-space border-y border-stardust/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 space-y-3 max-w-2xl">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Section B</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-moonlight">
            Stellar Evolution
          </h2>
          <p className="font-inter text-sm text-comet leading-relaxed">
            Every atom of carbon in your body was forged inside a star that died billions of years ago.
            The life cycle of stars is one of the most profound stories in all of physics.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-aurora/40 via-stardust/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {stages.map((stage, i) => (
              <div
                key={stage.step}
                className={`relative flex flex-col sm:flex-row gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Step bubble */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className={`w-8 h-8 rounded-full ${stage.bg} border ${stage.border} flex items-center justify-center`}>
                    <Zap className={`w-3.5 h-3.5 ${stage.color}`} />
                  </div>
                </div>

                {/* Card */}
                <div className={`sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
                  <div className={`bg-cosmos border ${stage.border} rounded-xl p-6 space-y-3`}>
                    <div className="flex items-center gap-3">
                      <span className={`font-inter text-xs font-medium ${stage.color} opacity-60`}>{stage.step}</span>
                      <div className={`w-6 h-px ${stage.color === 'text-aurora' ? 'bg-aurora/40' : 'bg-amber-star/40'}`} />
                    </div>
                    <h3 className="font-cormorant text-2xl font-medium text-moonlight">{stage.title}</h3>
                    <p className={`font-inter text-xs uppercase tracking-widest ${stage.color}`}>{stage.subtitle}</p>
                    <p className="font-inter text-sm text-comet leading-relaxed">{stage.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
