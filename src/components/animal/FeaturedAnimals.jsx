import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const animals = [
  {
    id: 'lion',
    name: 'African Lion',
    desc: 'The majestic king of the savanna, known for its powerful roar and social pride structure.',
    habitat: 'Savanna',
    status: 'Vulnerable',
    statusColor: 'bg-amber-100 text-amber-800',
    emoji: '🦁',
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    desc: 'The largest land animal on Earth, celebrated for its intelligence and deep family bonds.',
    habitat: 'Grasslands',
    status: 'Endangered',
    statusColor: 'bg-red-100 text-red-800',
    emoji: '🐘',
  },
  {
    id: 'dolphin',
    name: 'Bottlenose Dolphin',
    desc: 'Highly intelligent marine mammals known for their playful behavior and complex communication.',
    habitat: 'Ocean',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    emoji: '🐬',
  },
  {
    id: 'eagle',
    name: 'Bald Eagle',
    desc: 'A symbol of freedom and power, soaring high above rivers and coastlines with keen eyesight.',
    habitat: 'Forests',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    emoji: '🦅',
  },
  {
    id: 'tiger',
    name: 'Bengal Tiger',
    desc: 'The largest wild cat species, a solitary and powerful predator of the dense jungle.',
    habitat: 'Rainforest',
    status: 'Endangered',
    statusColor: 'bg-red-100 text-red-800',
    emoji: '🐯',
  },
  {
    id: 'panda',
    name: 'Giant Panda',
    desc: 'A beloved symbol of conservation, spending most of its day eating bamboo in mountain forests.',
    habitat: 'Mountains',
    status: 'Vulnerable',
    statusColor: 'bg-amber-100 text-amber-800',
    emoji: '🐼',
  },
];

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100">
      <div className="relative overflow-hidden h-52">
        <img
          alt={animal.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`animal-img-${animal.id}-7x2k`}
          data-strk-img={`[animal-desc-${animal.id}] [animal-name-${animal.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${animal.statusColor}`}>
            {animal.status}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{animal.emoji}</span>
          <h3
            id={`animal-name-${animal.id}`}
            className="text-lg font-bold text-stone-800"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {animal.name}
          </h3>
        </div>
        <p
          id={`animal-desc-${animal.id}`}
          className="text-stone-500 text-sm leading-relaxed mb-4"
        >
          {animal.desc}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 font-medium uppercase tracking-wide">Habitat:</span>
          <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">
            {animal.habitat}
          </span>
        </div>
      </div>
    </div>
  );
};

const FeaturedAnimals = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="animals" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Featured Wildlife</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-800 mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Remarkable Animals
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From the vast savannas to the deep oceans, meet some of the most extraordinary creatures sharing our planet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
