import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const habitats = [
  {
    id: 'ocean',
    name: 'Ocean & Sea',
    desc: 'Covering over 70% of Earth, the ocean is home to the most diverse array of life, from microscopic plankton to the blue whale.',
    animals: ['Blue Whale', 'Sea Turtle', 'Octopus', 'Clownfish'],
    color: 'from-blue-900/70 to-blue-600/50',
    emoji: '🌊',
  },
  {
    id: 'rainforest',
    name: 'Tropical Rainforest',
    desc: 'Dense, humid forests near the equator that host more than half of the world\'s plant and animal species.',
    animals: ['Jaguar', 'Toucan', 'Tree Frog', 'Gorilla'],
    color: 'from-green-900/70 to-green-600/50',
    emoji: '🌿',
  },
  {
    id: 'savanna',
    name: 'African Savanna',
    desc: 'Vast grasslands dotted with trees, home to the iconic "Big Five" and spectacular annual migrations.',
    animals: ['Lion', 'Elephant', 'Giraffe', 'Zebra'],
    color: 'from-amber-900/70 to-amber-600/50',
    emoji: '🌾',
  },
];

const HabitatCard = ({ habitat }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
      <div
        className="absolute inset-0"
        data-strk-bg-id={`habitat-bg-${habitat.id}-9p3m`}
        data-strk-bg={`[habitat-desc-${habitat.id}] [habitat-name-${habitat.id}]`}
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="600"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${habitat.color} group-hover:opacity-90 transition-opacity duration-300`} />
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="text-4xl mb-3">{habitat.emoji}</div>
        <h3
          id={`habitat-name-${habitat.id}`}
          className="text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {habitat.name}
        </h3>
        <p
          id={`habitat-desc-${habitat.id}`}
          className="text-white/80 text-sm leading-relaxed mb-4"
        >
          {habitat.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {habitat.animals.map((a) => (
            <span key={a} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/30">
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const HabitatsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="habitats" ref={containerRef} className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Where They Live</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Natural Habitats
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every ecosystem on Earth has evolved unique conditions that support extraordinary communities of wildlife.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {habitats.map((habitat) => (
            <HabitatCard key={habitat.id} habitat={habitat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HabitatsSection;
