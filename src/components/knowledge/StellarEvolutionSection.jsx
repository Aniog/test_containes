import { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

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
    imgId: 'stellar-nebula-4c8d2f',
    imgQuery: 'colorful emission nebula gas dust stellar nursery astronomy',
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
    imgId: 'stellar-protostar-9e1b7c',
    imgQuery: 'protostar forming young stellar object infrared astronomy',
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
    imgId: 'stellar-mainseq-2a5f8e',
    imgQuery: 'yellow dwarf star sun surface solar flare astronomy',
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
    imgId: 'stellar-redgiant-6d3c1a',
    imgQuery: 'red giant star expanding outer atmosphere astronomy',
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
    imgId: 'stellar-supernova-8f4b2d',
    imgQuery: 'supernova explosion planetary nebula colorful astronomy Hubble',
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
    imgId: 'stellar-blackhole-3e7a9c',
    imgQuery: 'black hole accretion disk event horizon neutron star astronomy',
  },
];

export default function StellarEvolutionSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="stellar-evolution" ref={containerRef} className="py-20 md:py-28 bg-deep-space border-y border-stardust/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 space-y-3 max-w-2xl">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Section B</p>
          <h2 id="stellar-heading" className="font-cormorant text-3xl md:text-4xl font-light text-moonlight">
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
                  <div className={`bg-cosmos border ${stage.border} rounded-xl overflow-hidden`}>
                    {/* Stage image */}
                    <div className="relative h-36 bg-deep-space overflow-hidden">
                      <img
                        data-strk-img-id={stage.imgId}
                        data-strk-img={`[stellar-stage-${stage.step}] [stellar-heading]`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="600"
                        alt={`${stage.title} — ${stage.subtitle}`}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
                      />
                      <span id={`stellar-stage-${stage.step}`} className="sr-only">{stage.imgQuery}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-cosmos/80 to-transparent" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className={`font-inter text-xs font-medium ${stage.color} opacity-60`}>{stage.step}</span>
                        <div className={`w-6 h-px ${stage.color === 'text-aurora' ? 'bg-aurora/40' : 'bg-amber-star/40'}`} />
                      </div>
                      <h3 className="font-cormorant text-2xl font-medium text-moonlight">{stage.title}</h3>
                      <p className={`font-inter text-xs uppercase tracking-widest ${stage.color}`}>{stage.subtitle}</p>
                      <p className="font-inter text-sm text-comet leading-relaxed">{stage.description}</p>
                    </div>
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
