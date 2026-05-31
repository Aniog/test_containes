import { useEffect, useRef } from 'react';
import { Navigation2, Zap, Wind, Anchor } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const transportModes = [
  {
    id: 'current-rail',
    icon: Zap,
    name: 'Current Rail Network',
    tagline: 'Riding the Ocean\'s Own Force',
    desc: 'Magnetic levitation tubes suspended in engineered ocean current channels. Pods travel at 900 km/h between cities, using the natural pressure differential of deep-sea currents as propulsion. Zero energy cost — the ocean does the work.',
    stats: [{ label: 'Top Speed', value: '900 km/h' }, { label: 'Network Length', value: '180,000 km' }, { label: 'Daily Riders', value: '4.2 Billion' }],
    titleId: 'transport-rail-title',
    descId: 'transport-rail-desc',
    imgId: 'transport-rail-img-m4n5o6',
  },
  {
    id: 'bio-submersible',
    icon: Navigation2,
    name: 'Bio-Submersibles',
    tagline: 'Living Vessels of the Deep',
    desc: 'Grown rather than built, bio-submersibles are engineered organisms — part machine, part living creature. They navigate autonomously using echolocation and bioluminescent signaling, carrying passengers in pressurized bio-gel cabins.',
    stats: [{ label: 'Fleet Size', value: '12 Million' }, { label: 'Range', value: 'Global' }, { label: 'Depth Rating', value: '11,000m' }],
    titleId: 'transport-bio-title',
    descId: 'transport-bio-desc',
    imgId: 'transport-bio-img-p7q8r9',
  },
  {
    id: 'pressure-lift',
    icon: Wind,
    name: 'Pressure Lifts',
    tagline: 'Vertical Transit Between Layers',
    desc: 'Within cities, vertical transit is achieved through controlled pressure columns — sealed shafts where engineered pressure differentials propel capsules between city layers at speeds up to 200 km/h. No motors, no cables.',
    stats: [{ label: 'Shafts per City', value: '2,400+' }, { label: 'Capacity', value: '800/pod' }, { label: 'Wait Time', value: '< 30 sec' }],
    titleId: 'transport-lift-title',
    descId: 'transport-lift-desc',
    imgId: 'transport-lift-img-s1t2u3',
  },
];

const TransportSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="transport" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-abyss relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-deep/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-heading text-bio-cyan uppercase tracking-[0.3em] text-xs font-semibold">Mobility</span>
          <h2 className="font-display text-4xl md:text-5xl text-pearl mt-3 tracking-wide">Transportation Systems</h2>
          <p className="text-muted-slate mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
            Abyssian transit harnesses the ocean itself — pressure, current, and living biology — to move billions of citizens across a civilization spanning the entire ocean floor.
          </p>
        </div>

        {/* Transport Cards */}
        <div className="space-y-8">
          {transportModes.map((mode, idx) => {
            const Icon = mode.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={mode.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 border border-bio-cyan/15 bg-ocean-dark/50 backdrop-blur-md rounded-2xl overflow-hidden hover:border-bio-cyan/30 hover:shadow-[0_0_50px_rgba(0,212,255,0.08)] transition-all duration-500`}
              >
                {/* Image */}
                <div className="lg:w-2/5 h-56 lg:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    alt={mode.name}
                    data-strk-img-id={mode.imgId}
                    data-strk-img={`[${mode.descId}] [${mode.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-ocean-dark/80`} />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-bio-cyan/10 border border-bio-cyan/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-bio-cyan" />
                    </div>
                    <span className="font-heading text-xs text-glow-aqua uppercase tracking-widest font-semibold">{mode.tagline}</span>
                  </div>

                  <h3 id={mode.titleId} className="font-display text-2xl md:text-3xl text-pearl mb-3 tracking-wide">{mode.name}</h3>
                  <p id={mode.descId} className="font-sans text-muted-slate leading-relaxed mb-6">{mode.desc}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6">
                    {mode.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-display text-xl text-bio-cyan font-bold">{stat.value}</div>
                        <div className="font-heading text-xs text-muted-slate uppercase tracking-wider mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 border border-glow-aqua/20 bg-glow-aqua/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <Anchor className="w-10 h-10 text-glow-aqua flex-shrink-0" />
          <div>
            <h4 className="font-heading text-lg font-semibold text-pearl mb-1">Zero Surface Dependency</h4>
            <p className="font-sans text-muted-slate text-sm leading-relaxed">
              Abyssia's entire transportation network operates without any surface infrastructure. No satellites, no GPS, no fossil fuels. Navigation relies on a proprietary deep-field sonar grid and geomagnetic positioning accurate to 0.3 meters anywhere on the ocean floor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
