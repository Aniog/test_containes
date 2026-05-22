import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Clock, Trophy } from 'lucide-react';

const races = [
  {
    id: 'race-1',
    titleId: 'race-title-1',
    subtitleId: 'race-subtitle-1',
    title: 'Tour de Mont Blanc',
    subtitle: 'Alpine mountain stage race through France, Italy and Switzerland',
    location: 'Chamonix, France',
    duration: '7 Days',
    category: 'Grand Tour',
    difficulty: 'Elite',
    prize: '$250,000',
  },
  {
    id: 'race-2',
    titleId: 'race-title-2',
    subtitleId: 'race-subtitle-2',
    title: 'Pacific Coast Classic',
    subtitle: 'Coastal road race along the stunning California shoreline',
    location: 'San Francisco, USA',
    duration: '3 Days',
    category: 'Road Race',
    difficulty: 'Pro',
    prize: '$120,000',
  },
  {
    id: 'race-3',
    titleId: 'race-title-3',
    subtitleId: 'race-subtitle-3',
    title: 'Dolomites Enduro',
    subtitle: 'Technical mountain bike enduro through the Italian Dolomites',
    location: 'Cortina, Italy',
    duration: '2 Days',
    category: 'Enduro MTB',
    difficulty: 'Expert',
    prize: '$80,000',
  },
  {
    id: 'race-4',
    titleId: 'race-title-4',
    subtitleId: 'race-subtitle-4',
    title: 'Sahara Desert Challenge',
    subtitle: 'Ultra-endurance gravel race across the North African desert',
    location: 'Marrakech, Morocco',
    duration: '5 Days',
    category: 'Gravel Ultra',
    difficulty: 'Extreme',
    prize: '$150,000',
  },
  {
    id: 'race-5',
    titleId: 'race-title-5',
    subtitleId: 'race-subtitle-5',
    title: 'Tokyo Criterium',
    subtitle: 'High-speed urban criterium race through the streets of Tokyo',
    location: 'Tokyo, Japan',
    duration: '1 Day',
    category: 'Criterium',
    difficulty: 'Pro',
    prize: '$60,000',
  },
  {
    id: 'race-6',
    titleId: 'race-title-6',
    subtitleId: 'race-subtitle-6',
    title: 'Andes Crossing',
    subtitle: 'Epic multi-day mountain bike race across the Andes mountains',
    location: 'Santiago, Chile',
    duration: '6 Days',
    category: 'Stage Race',
    difficulty: 'Elite',
    prize: '$200,000',
  },
];

const difficultyColor = {
  Pro: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  Elite: 'text-brand-orange border-orange-400/30 bg-orange-400/10',
  Expert: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  Extreme: 'text-brand-red border-red-400/30 bg-red-400/10',
};

const RaceCard = ({ race }) => (
  <div className="group bg-brand-surface border border-neutral-800 rounded-xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/10">
    <div className="relative overflow-hidden h-48">
      <img
        alt={race.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={`race-img-${race.id}`}
        data-strk-img={`[${race.subtitleId}] [${race.titleId}]`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest bg-brand-red text-white px-2.5 py-1 rounded-full">
          {race.category}
        </span>
      </div>
    </div>

    <div className="p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 id={race.titleId} className="font-display font-bold uppercase text-xl text-neutral-100 leading-tight">
          {race.title}
        </h3>
        <span className={`shrink-0 text-xs font-semibold uppercase tracking-widest border rounded-full px-2.5 py-1 ${difficultyColor[race.difficulty]}`}>
          {race.difficulty}
        </span>
      </div>

      <p id={race.subtitleId} className="text-neutral-400 text-sm leading-relaxed mb-4">
        {race.subtitle}
      </p>

      <div className="flex flex-wrap gap-3 text-xs text-neutral-400 mb-4">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-brand-red" />
          {race.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-brand-red" />
          {race.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-brand-orange" />
          {race.prize}
        </span>
      </div>

      <button className="w-full border border-neutral-700 hover:border-brand-red hover:text-brand-red text-neutral-300 text-xs font-semibold uppercase tracking-widest rounded-lg py-2.5 transition-colors">
        View Race Details
      </button>
    </div>
  </div>
);

const FeaturedRaces = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="races" ref={containerRef} className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3">
              World-Class Competition
            </p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl text-neutral-100 leading-none">
              Featured<br />
              <span className="text-brand-red">Races</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-base leading-relaxed">
            From alpine grand tours to desert ultras — the most prestigious cycling events on the planet.
          </p>
        </div>

        {/* Race grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {races.map((race) => (
            <RaceCard key={race.id} race={race} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-neutral-700 hover:border-brand-red text-neutral-300 hover:text-brand-red font-semibold uppercase tracking-widest rounded-full px-8 py-4 transition-colors text-sm">
            View All Races
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRaces;
