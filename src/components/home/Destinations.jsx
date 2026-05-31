import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, Thermometer, Zap, Waves, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 'steampunk-albion',
    name: 'Steampunk Albion',
    tagline: 'The Brass Empire',
    era: 'Alternate Victorian Era',
    duration: '7 or 14 nights',
    climate: 'Temperate, perpetual fog',
    accentColor: 'from-orange-700 to-amber-600',
    borderColor: 'border-orange-700/40',
    glowColor: 'rgba(234,88,12,0.3)',
    badgeColor: 'bg-orange-900/40 text-orange-300 border-orange-700/40',
    icon: Zap,
    description:
      'Soar above a city of towering brass clockwork spires and coal-fired airships. Dine in sky-parlors suspended by ornate dirigibles, and explore underground markets lit by amber gas lamps.',
    highlights: ['Airship Grand Tour', 'Clockwork Palace Suite', 'Inventor\'s Guild Dinner', 'Steam Rail Expedition'],
    titleId: 'dest-steampunk-albion-title',
    descId: 'dest-steampunk-albion-desc',
    imgId: 'dest-img-steampunk-albion-8f2a9c',
  },
  {
    id: 'neon-megacity-ix',
    name: 'Neon Megacity IX',
    tagline: 'The Infinite Horizon',
    era: 'Year 2387 CE',
    duration: '5 or 10 nights',
    climate: 'Climate-controlled, 22°C',
    accentColor: 'from-cyan-700 to-blue-600',
    borderColor: 'border-cyan-700/40',
    glowColor: 'rgba(6,182,212,0.3)',
    badgeColor: 'bg-cyan-900/40 text-cyan-300 border-cyan-700/40',
    icon: Zap,
    description:
      'A vertical city stretching 40 kilometers into the sky. Hover-suites with panoramic views of neon-drenched skylines, quantum cuisine, and neural-linked entertainment beyond anything imaginable.',
    highlights: ['Sky-Level Penthouse', 'Quantum Gastronomy', 'Neural Art Gallery', 'Hyperloop City Tour'],
    titleId: 'dest-neon-megacity-ix-title',
    descId: 'dest-neon-megacity-ix-desc',
    imgId: 'dest-img-neon-megacity-ix-3b7d1e',
  },
  {
    id: 'terra-prima',
    name: 'Terra Prima',
    tagline: 'The First Civilization',
    era: '12,000 BCE',
    duration: '10 or 21 nights',
    climate: 'Tropical, lush',
    accentColor: 'from-green-700 to-emerald-600',
    borderColor: 'border-green-700/40',
    glowColor: 'rgba(22,163,74,0.3)',
    badgeColor: 'bg-green-900/40 text-green-300 border-green-700/40',
    icon: Clock,
    description:
      'Witness the dawn of human civilization in a world untouched by modern industry. Vast crystal temples, megafauna safaris, and ancient wisdom ceremonies guided by the world\'s first philosophers.',
    highlights: ['Crystal Temple Retreat', 'Megafauna Safari', 'Ancient Ceremony Access', 'Jungle Canopy Villa'],
    titleId: 'dest-terra-prima-title',
    descId: 'dest-terra-prima-desc',
    imgId: 'dest-img-terra-prima-c4e8f2',
  },
  {
    id: 'aqua-infinitum',
    name: 'Aqua Infinitum',
    tagline: 'The Endless Ocean',
    era: 'Parallel Present',
    duration: '7 or 14 nights',
    climate: 'Oceanic, 26°C',
    accentColor: 'from-blue-700 to-indigo-600',
    borderColor: 'border-blue-700/40',
    glowColor: 'rgba(29,78,216,0.3)',
    badgeColor: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
    icon: Waves,
    description:
      'A planet where oceans cover 99% of the surface. Drift in bioluminescent floating cities, dive to ancient underwater ruins, and sleep in glass-domed suites beneath the waves.',
    highlights: ['Bioluminescent Bay Cruise', 'Deep Dive Ruins Tour', 'Underwater Glass Suite', 'Leviathan Encounter'],
    titleId: 'dest-aqua-infinitum-title',
    descId: 'dest-aqua-infinitum-desc',
    imgId: 'dest-img-aqua-infinitum-9a1b3c',
  },
];

function DestinationCard({ dest, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = dest.icon;

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border ${dest.borderColor} bg-void-dark transition-all duration-500 cursor-pointer`}
      style={{
        boxShadow: hovered ? `0 0 50px ${dest.glowColor}` : '0 4px 20px rgba(0,0,0,0.4)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          alt={dest.name}
          data-strk-img-id={dest.imgId}
          data-strk-img={`[${dest.descId}] [${dest.titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void-dark via-transparent to-transparent" />

        {/* Era badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-semibold font-inter tracking-wider ${dest.badgeColor}`}>
          {dest.era}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="mb-1">
          <span className="font-inter text-xs text-gray-500 tracking-[0.2em] uppercase">{dest.tagline}</span>
        </div>
        <h3 id={dest.titleId} className="font-cinzel text-2xl font-bold text-mist mb-3">
          {dest.name}
        </h3>
        <p id={dest.descId} className="font-inter text-sm text-gray-400 leading-relaxed mb-5">
          {dest.description}
        </p>

        {/* Meta info */}
        <div className="flex gap-4 mb-5">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{dest.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Thermometer className="w-3.5 h-3.5" />
            <span>{dest.climate}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {dest.highlights.map((h) => (
            <span
              key={h}
              className="font-inter text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
            >
              {h}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#book"
          className={`flex items-center gap-2 font-cinzel text-sm font-semibold bg-gradient-to-r ${dest.accentColor} bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-wider group/link`}
        >
          Explore This Reality
          <ArrowRight className="w-4 h-4 text-current transition-transform group-hover/link:translate-x-1" style={{ color: 'inherit' }} />
        </a>
      </div>
    </div>
  );
}

export default function Destinations() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="destinations" ref={containerRef} className="py-28 px-6 md:px-12 lg:px-24 bg-space-black">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/40 bg-purple-900/20 mb-6">
          <span className="font-inter text-xs font-semibold text-purple-300 tracking-[0.2em] uppercase">
            Curated Realities
          </span>
        </div>
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mist mb-5">
          Choose Your <span className="text-gold">Dimension</span>
        </h2>
        <p className="font-inter text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Each destination is a fully realized alternate reality, accessible only through our
          proprietary quantum portal network. Every journey is one-of-a-kind.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-700/60 to-transparent mb-16" />

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {destinations.map((dest, i) => (
          <DestinationCard key={dest.id} dest={dest} index={i} />
        ))}
      </div>
    </section>
  );
}
