import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const animals = [
  {
    id: 'lion',
    name: 'African Lion',
    category: 'Mammal',
    habitat: 'Savanna',
    description: 'The king of the savanna, known for its majestic mane and powerful roar that can be heard 8 km away.',
    emoji: '🦁',
    imgId: 'animal-lion-d4e5f6',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    category: 'Mammal',
    habitat: 'Grassland',
    description: 'The largest land animal on Earth, with remarkable intelligence and a complex social structure.',
    emoji: '🐘',
    imgId: 'animal-elephant-g7h8i9',
    bgColor: 'bg-gray-50',
  },
  {
    id: 'dolphin',
    name: 'Bottlenose Dolphin',
    category: 'Marine Mammal',
    habitat: 'Ocean',
    description: 'Highly intelligent and playful, dolphins communicate using a complex system of clicks and whistles.',
    emoji: '🐬',
    imgId: 'animal-dolphin-j1k2l3',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'eagle',
    name: 'Bald Eagle',
    category: 'Bird',
    habitat: 'Forest & Coast',
    description: 'A symbol of freedom and power, with eyesight up to 8 times stronger than that of humans.',
    emoji: '🦅',
    imgId: 'animal-eagle-m4n5o6',
    bgColor: 'bg-sky-50',
  },
  {
    id: 'panda',
    name: 'Giant Panda',
    category: 'Mammal',
    habitat: 'Mountain Forest',
    description: 'One of the world\'s most beloved animals, spending up to 14 hours a day eating bamboo.',
    emoji: '🐼',
    imgId: 'animal-panda-p7q8r9',
    bgColor: 'bg-green-50',
  },
  {
    id: 'tiger',
    name: 'Bengal Tiger',
    category: 'Mammal',
    habitat: 'Jungle',
    description: 'The largest wild cat species, with distinctive orange and black stripes unique to each individual.',
    emoji: '🐯',
    imgId: 'animal-tiger-s1t2u3',
    bgColor: 'bg-orange-50',
  },
];

const AnimalCard = ({ animal }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden h-52">
      <img
        alt={animal.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={animal.imgId}
        data-strk-img={`[animal-desc-${animal.id}] [animal-name-${animal.id}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute top-3 left-3">
        <span className="bg-white/90 text-[#2d6a4f] text-xs font-semibold px-3 py-1 rounded-full">
          {animal.category}
        </span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{animal.emoji}</span>
        <h3 id={`animal-name-${animal.id}`} className="text-xl font-bold text-[#1c1c1c]">
          {animal.name}
        </h3>
      </div>
      <div className="flex items-center gap-1 mb-3">
        <span className="text-xs text-gray-400">📍</span>
        <span className="text-xs text-gray-500 font-medium">{animal.habitat}</span>
      </div>
      <p id={`animal-desc-${animal.id}`} className="text-gray-600 text-sm leading-relaxed">
        {animal.description}
      </p>
    </div>
  </div>
);

const FeaturedAnimals = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="animals" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#52b788] font-semibold text-sm uppercase tracking-widest mb-3">
            Meet the residents
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c1c1c] mb-4">
            Featured Animals
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From the vast savannas to the deep oceans, these remarkable creatures share our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
