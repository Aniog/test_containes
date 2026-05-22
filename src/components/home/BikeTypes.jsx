import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Mountain, Wind, Gauge } from 'lucide-react';

const bikes = [
  {
    id: 'bike-1',
    titleId: 'bike-title-1',
    subtitleId: 'bike-subtitle-1',
    icon: Zap,
    label: 'Road Racing',
    title: 'Aero Road Bike',
    subtitle: 'Carbon fiber road racing bike built for speed on tarmac',
    description: 'Engineered for maximum aerodynamic efficiency, these machines dominate flat stages and sprints. Ultra-light carbon frames, electronic groupsets, and deep-section wheels make every watt count.',
    specs: ['6.8 kg frame weight', 'Electronic shifting', 'Disc brakes', '28mm tires'],
    accent: 'text-brand-red',
    border: 'border-brand-red/30',
    bg: 'bg-brand-red/5',
  },
  {
    id: 'bike-2',
    titleId: 'bike-title-2',
    subtitleId: 'bike-subtitle-2',
    icon: Mountain,
    label: 'Mountain Racing',
    title: 'Full Suspension MTB',
    subtitle: 'High-performance mountain bike for enduro and downhill racing',
    description: 'Built to handle the most technical terrain on earth. Long-travel suspension, aggressive geometry, and burly components let riders push the limits on any trail.',
    specs: ['150mm travel', 'Boost 148 rear', '29" wheels', 'Carbon frame'],
    accent: 'text-brand-orange',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/5',
  },
  {
    id: 'bike-3',
    titleId: 'bike-title-3',
    subtitleId: 'bike-subtitle-3',
    icon: Wind,
    label: 'Gravel Racing',
    title: 'Gravel Racer',
    subtitle: 'Versatile gravel bike for mixed terrain ultra-endurance events',
    description: 'The ultimate adventure racing machine. Capable on pavement and dirt alike, gravel bikes blend road speed with off-road capability for the most demanding multi-surface events.',
    specs: ['Flared drop bars', '40mm tire clearance', 'Titanium frame', 'Dynamo lighting'],
    accent: 'text-yellow-400',
    border: 'border-yellow-400/30',
    bg: 'bg-yellow-400/5',
  },
  {
    id: 'bike-4',
    titleId: 'bike-title-4',
    subtitleId: 'bike-subtitle-4',
    icon: Gauge,
    label: 'Track Racing',
    title: 'Track Pursuit Bike',
    subtitle: 'Fixed gear velodrome bike optimized for track cycling events',
    description: 'Pure speed on the velodrome. No brakes, no gears — just raw power transfer and aerodynamic perfection. These bikes are built for one purpose: going as fast as humanly possible.',
    specs: ['Fixed gear drivetrain', 'Aero carbon frame', 'Disc front wheel', 'Clip-on bars'],
    accent: 'text-blue-400',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/5',
  },
];

const BikeCard = ({ bike }) => {
  const Icon = bike.icon;
  return (
    <div className={`group relative bg-brand-surface border ${bike.border} rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300`}>
      <div className="relative h-56 overflow-hidden">
        <img
          alt={bike.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`bike-img-${bike.id}`}
          data-strk-img={`[${bike.subtitleId}] [${bike.titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface to-transparent" />
        <div className={`absolute top-4 left-4 ${bike.bg} border ${bike.border} rounded-full p-2.5`}>
          <Icon className={`w-5 h-5 ${bike.accent}`} />
        </div>
      </div>

      <div className="p-6">
        <p className={`text-xs font-semibold uppercase tracking-widest ${bike.accent} mb-2`}>
          {bike.label}
        </p>
        <h3 id={bike.titleId} className="font-display font-bold uppercase text-2xl text-neutral-100 mb-1">
          {bike.title}
        </h3>
        <p id={bike.subtitleId} className="text-neutral-500 text-sm mb-3">
          {bike.subtitle}
        </p>
        <p className="text-neutral-400 text-sm leading-relaxed mb-5">
          {bike.description}
        </p>

        <div className="grid grid-cols-2 gap-2">
          {bike.specs.map((spec) => (
            <div key={spec} className="flex items-center gap-2 text-xs text-neutral-400">
              <div className={`w-1 h-1 rounded-full ${bike.accent.replace('text-', 'bg-')}`} />
              {spec}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BikeTypes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="bikes" ref={containerRef} className="py-20 md:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3">
            Built for Victory
          </p>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl text-neutral-100 leading-none mb-4">
            Race-Ready <span className="text-brand-red">Machines</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed">
            Every discipline demands a different weapon. Explore the bikes that define modern competitive cycling.
          </p>
        </div>

        {/* Bikes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeTypes;
