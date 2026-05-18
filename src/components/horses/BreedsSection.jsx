import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const breeds = [
  {
    id: 'thoroughbred',
    name: 'Thoroughbred',
    origin: 'England',
    trait: 'Speed & Racing',
    description: 'The ultimate racehorse, bred for speed and agility. Thoroughbreds dominate flat racing worldwide and are known for their fiery spirit.',
    color: 'Bay, Chestnut, Gray',
  },
  {
    id: 'arabian',
    name: 'Arabian',
    origin: 'Arabian Peninsula',
    trait: 'Endurance & Beauty',
    description: 'One of the oldest and most recognizable breeds, Arabians are prized for their dished profile, high tail carriage, and incredible stamina.',
    color: 'Bay, Gray, Chestnut, Black',
  },
  {
    id: 'friesian',
    name: 'Friesian',
    origin: 'Netherlands',
    trait: 'Elegance & Power',
    description: 'Striking black horses with flowing manes and feathered hooves, Friesians are known for their dramatic presence and willing temperament.',
    color: 'Black',
  },
  {
    id: 'appaloosa',
    name: 'Appaloosa',
    origin: 'United States',
    trait: 'Versatility & Pattern',
    description: 'Famous for their distinctive spotted coat patterns, Appaloosas are versatile western horses with a rich history among the Nez Perce people.',
    color: 'Spotted, Leopard, Blanket',
  },
  {
    id: 'andalusian',
    name: 'Andalusian',
    origin: 'Spain',
    trait: 'Dressage & Grace',
    description: 'The "Horse of Kings," Andalusians have been prized by royalty for centuries. Their natural collection and expressive movement excel in dressage.',
    color: 'Gray, Bay, Black',
  },
  {
    id: 'mustang',
    name: 'Mustang',
    origin: 'North America',
    trait: 'Freedom & Resilience',
    description: 'Descended from Spanish horses brought by conquistadors, wild Mustangs roam the American West as a symbol of untamed freedom.',
    color: 'All colors',
  },
];

const BreedCard = ({ breed, sectionTitle }) => {
  const nameId = `breed-name-${breed.id}`;
  const traitId = `breed-trait-${breed.id}`;

  return (
    <div className="bg-cream border border-hay/30 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="relative aspect-[3x2] overflow-hidden">
        <img
          alt={breed.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`breed-img-${breed.id}-7g8h`}
          data-strk-img={`[${traitId}] [${nameId}] [breeds-section-title] horse breed`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-saddle text-cream text-xs font-semibold px-3 py-1 rounded-full">
            {breed.origin}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 id={nameId} className="font-playfair text-xl font-bold text-bark">{breed.name}</h3>
          <span id={traitId} className="text-hay text-xs font-semibold bg-hay/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">
            {breed.trait}
          </span>
        </div>
        <p className="text-stone-custom text-sm leading-relaxed mb-3">{breed.description}</p>
        <p className="text-xs text-stone-custom">
          <span className="font-semibold text-bark">Colors:</span> {breed.color}
        </p>
      </div>
    </div>
  );
};

const BreedsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="breeds" ref={containerRef} className="bg-mist py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-saddle font-semibold tracking-widest uppercase text-sm mb-3">
            Horse Breeds
          </p>
          <h2 id="breeds-section-title" className="font-playfair text-4xl md:text-5xl font-bold text-bark mb-6">
            Remarkable Breeds
          </h2>
          <p className="text-stone-custom text-lg max-w-2xl mx-auto leading-relaxed">
            With over 350 recognized breeds worldwide, each horse carries a unique heritage, purpose, and personality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {breeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedsSection;
