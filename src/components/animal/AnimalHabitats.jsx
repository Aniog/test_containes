import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const habitats = [
  {
    id: 'ocean',
    name: 'Ocean',
    subtitle: 'The Deep Blue',
    description: 'Covering 71% of Earth\'s surface, the ocean is home to the most diverse ecosystems on the planet — from colorful coral reefs to the mysterious deep sea.',
    animals: ['Whale', 'Shark', 'Octopus', 'Sea Turtle'],
    emoji: '🌊',
    imgId: 'habitat-ocean-v4w5x6',
    accent: 'bg-blue-500',
  },
  {
    id: 'rainforest',
    name: 'Rainforest',
    subtitle: 'The Lungs of Earth',
    description: 'Tropical rainforests cover only 6% of Earth\'s surface but contain more than half of the world\'s plant and animal species.',
    animals: ['Jaguar', 'Toucan', 'Tree Frog', 'Gorilla'],
    emoji: '🌿',
    imgId: 'habitat-rainforest-y7z8a9',
    accent: 'bg-green-500',
  },
  {
    id: 'savanna',
    name: 'Savanna',
    subtitle: 'The Great Plains',
    description: 'The African savanna hosts the largest land animal migrations on Earth, with millions of wildebeest, zebras, and gazelles moving across the plains.',
    animals: ['Lion', 'Elephant', 'Giraffe', 'Cheetah'],
    emoji: '🌾',
    imgId: 'habitat-savanna-b1c2d3',
    accent: 'bg-amber-500',
  },
  {
    id: 'arctic',
    name: 'Arctic & Tundra',
    subtitle: 'The Frozen Frontier',
    description: 'Despite extreme cold and darkness, the Arctic and tundra regions support a surprising variety of wildlife uniquely adapted to survive harsh conditions.',
    animals: ['Polar Bear', 'Arctic Fox', 'Snowy Owl', 'Walrus'],
    emoji: '❄️',
    imgId: 'habitat-arctic-e4f5g6',
    accent: 'bg-sky-400',
  },
];

const HabitatCard = ({ habitat }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
    <div className="relative h-56 overflow-hidden">
      <img
        alt={habitat.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={habitat.imgId}
        data-strk-img={`[habitat-desc-${habitat.id}] [habitat-name-${habitat.id}]`}
        data-strk-img-ratio="16x9"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{habitat.emoji}</span>
          <div>
            <p className="text-white/70 text-xs font-medium">{habitat.subtitle}</p>
            <h3 id={`habitat-name-${habitat.id}`} className="text-white text-xl font-bold">
              {habitat.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="p-5">
      <p id={`habitat-desc-${habitat.id}`} className="text-gray-600 text-sm leading-relaxed mb-4">
        {habitat.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {habitat.animals.map((animal) => (
          <span
            key={animal}
            className="bg-[#f8f5f0] text-[#2d6a4f] text-xs font-semibold px-3 py-1 rounded-full"
          >
            {animal}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const AnimalHabitats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="habitats" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#52b788] font-semibold text-sm uppercase tracking-widest mb-3">
            Where they live
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c1c1c] mb-4">
            Animal Habitats
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every corner of our planet hosts unique ecosystems, each with its own extraordinary cast of wildlife.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {habitats.map((habitat) => (
            <HabitatCard key={habitat.id} habitat={habitat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalHabitats;
