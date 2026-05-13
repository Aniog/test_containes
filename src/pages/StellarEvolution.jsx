import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stages = [
  {
    id: 'nebula',
    phase: '01',
    title: 'Molecular Cloud & Nebula',
    duration: '~10 million years',
    color: 'text-teal-400',
    dot: 'bg-teal-400',
    desc: 'Stars are born inside vast clouds of gas and dust called molecular clouds. Gravity causes regions to collapse, heating the core until nuclear fusion ignites — a protostar is born.',
    physics: 'Gravitational potential energy → thermal energy. Jeans instability criterion: M > M_J',
    imgQuery: 'stellar nebula molecular cloud star formation protostar',
  },
  {
    id: 'main-sequence',
    phase: '02',
    title: 'Main Sequence Star',
    duration: '~10 billion years (Sun-like)',
    color: 'text-amber-400',
    dot: 'bg-amber-400',
    desc: 'The star reaches hydrostatic equilibrium — the outward pressure from nuclear fusion balances the inward pull of gravity. The Sun has been in this stable phase for 4.6 billion years.',
    physics: 'H → He fusion: 4¹H → ⁴He + 2e⁺ + 2νe + energy (26.7 MeV)',
    imgQuery: 'main sequence star yellow dwarf sun stellar fusion',
  },
  {
    id: 'red-giant',
    phase: '03',
    title: 'Red Giant / Supergiant',
    duration: '~1 billion years',
    color: 'text-red-400',
    dot: 'bg-red-400',
    desc: 'As hydrogen in the core is exhausted, the core contracts while the outer layers expand dramatically. The star swells to 100–1000× its original size, cooling and reddening.',
    physics: 'Shell hydrogen burning. Helium flash in low-mass stars. Luminosity ∝ R² × T⁴',
    imgQuery: 'red giant star expanding stellar evolution Betelgeuse',
  },
  {
    id: 'planetary-nebula',
    phase: '04a',
    title: 'Planetary Nebula',
    duration: '~20,000 years',
    color: 'text-indigo-400',
    dot: 'bg-indigo-400',
    desc: 'Low-to-medium mass stars (like our Sun) shed their outer layers in a beautiful expanding shell of ionized gas. The exposed hot core becomes a white dwarf.',
    physics: 'Ionized gas glows via recombination radiation. Expansion velocity ~20 km/s',
    imgQuery: 'planetary nebula ring nebula ionized gas white dwarf',
  },
  {
    id: 'supernova',
    phase: '04b',
    title: 'Supernova Explosion',
    duration: 'Seconds to weeks',
    color: 'text-orange-400',
    dot: 'bg-orange-400',
    desc: 'Massive stars (>8 M☉) end in a catastrophic core collapse. The iron core implodes in milliseconds, releasing more energy in seconds than the Sun will emit in its entire lifetime.',
    physics: 'Core collapse: ρ → 10¹⁴ g/cm³. Energy release: ~3×10⁴⁶ J (99% as neutrinos)',
    imgQuery: 'supernova explosion massive star core collapse remnant',
  },
  {
    id: 'white-dwarf',
    phase: '05a',
    title: 'White Dwarf',
    duration: 'Billions of years',
    color: 'text-slate-300',
    dot: 'bg-slate-300',
    desc: 'The remnant core of a low-mass star, supported by electron degeneracy pressure. About the size of Earth but with the mass of the Sun. It slowly cools over billions of years.',
    physics: 'Chandrasekhar limit: M < 1.4 M☉. Electron degeneracy pressure prevents collapse',
    imgQuery: 'white dwarf star remnant electron degeneracy cooling',
  },
  {
    id: 'neutron-star',
    phase: '05b',
    title: 'Neutron Star / Pulsar',
    duration: 'Billions of years',
    color: 'text-cyan-400',
    dot: 'bg-cyan-400',
    desc: 'The collapsed core of a massive star, composed almost entirely of neutrons. Incredibly dense — a teaspoon would weigh ~1 billion tons. Rapidly rotating ones emit radio beams as pulsars.',
    physics: 'Neutron degeneracy pressure. Density ~10¹⁴ g/cm³. Rotation period: milliseconds',
    imgQuery: 'neutron star pulsar rotating magnetic field radio beams',
  },
  {
    id: 'black-hole',
    phase: '05c',
    title: 'Black Hole',
    duration: 'Effectively forever',
    color: 'text-purple-400',
    dot: 'bg-purple-400',
    desc: 'When a stellar remnant exceeds ~3 M☉, no known force can halt gravitational collapse. A singularity forms, surrounded by an event horizon — the point of no return for light itself.',
    physics: 'Schwarzschild radius: r_s = 2GM/c². For 10 M☉: r_s ≈ 30 km',
    imgQuery: 'black hole accretion disk event horizon gravitational lensing',
  },
];

export default function StellarEvolution() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-space-950 pt-24">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8">
        <Link to="/knowledge" className="flex items-center gap-2 text-sm text-slate-500 hover:text-amber-400 transition-colors w-fit">
          <ArrowLeft className="w-3.5 h-3.5" />
          Knowledge Hub
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <p className="section-label mb-4">Section B</p>
        <h1 id="stellar-title" className="font-serif text-5xl md:text-6xl font-light text-star-silver mb-6 max-w-3xl">
          Stellar Evolution
          <br />
          <span className="text-amber-400">Life & Death of Stars</span>
        </h1>
        <div className="amber-divider" />
        <p id="stellar-subtitle" className="text-slate-300 text-lg leading-relaxed max-w-2xl mt-6">
          Every star you see in the night sky is at a different stage of its life.
          From the swirling chaos of a molecular cloud to the serene glow of a white
          dwarf or the terrifying singularity of a black hole — stellar evolution is
          the grandest story in physics.
        </p>
      </section>

      {/* HR Diagram Banner */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 img-overlay">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Hertzsprung-Russell diagram showing stellar classification from main sequence to giants and white dwarfs"
            className="w-full h-full object-cover"
            data-strk-img-id="stellar-hr-img-4c8b"
            data-strk-img="[stellar-subtitle] [stellar-title] Hertzsprung Russell diagram stellar classification luminosity temperature"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              Hertzsprung–Russell Diagram — The Map of Stellar Life
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-light text-star-silver mb-3">The Stellar Life Cycle</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Follow the journey of a star from birth to its final form. The path depends
            critically on the star's initial mass.
          </p>
        </div>

        <div className="space-y-6">
          {stages.map((stage, i) => (
            <div key={stage.id} className="glass-card rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-56 h-40 md:h-auto flex-shrink-0 relative overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={stage.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`stellar-stage-${i}-img-2e7f`}
                    data-strk-img={`[stellar-stage-${i}-desc] [stellar-stage-${i}-title] ${stage.imgQuery}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-space-800/60 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-800/60 to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 ${stage.dot}`} />
                      <div>
                        <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">Phase {stage.phase}</span>
                        <h3
                          id={`stellar-stage-${i}-title`}
                          className={`font-serif text-xl font-light ${stage.color} mt-0.5`}
                        >
                          {stage.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 whitespace-nowrap">{stage.duration}</span>
                  </div>

                  <p
                    id={`stellar-stage-${i}-desc`}
                    className="text-slate-400 text-sm leading-relaxed mb-4"
                  >
                    {stage.desc}
                  </p>

                  <div className="flex items-start gap-2 bg-white/5 rounded-lg px-4 py-2.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-slate-300 leading-relaxed">{stage.physics}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Insight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <div className="glass-card rounded-2xl p-10 border-l-2 border-amber-400">
          <p className="section-label mb-3">Key Insight</p>
          <p className="font-serif text-xl font-light text-slate-200 leading-relaxed italic">
            "We are literally made of stardust. Every atom of carbon in your body,
            every atom of oxygen you breathe, was forged in the nuclear furnace of
            a star that died before our Sun was born."
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 flex justify-between items-center">
        <Link to="/knowledge/constellations" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Constellations
        </Link>
        <Link to="/knowledge/observational-physics" className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors">
          Next: Observational Physics
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
