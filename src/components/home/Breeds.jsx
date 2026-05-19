import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BREEDS = [
  {
    id: 'breed-golden',
    name: 'Golden Retriever',
    trait: 'Friendly & Loyal',
    description: 'Known for their gentle temperament and intelligence, Golden Retrievers are one of the most popular family dogs worldwide.',
    size: 'Large',
    energy: 'High',
    imgId: 'breed-img-golden-a1b2',
  },
  {
    id: 'breed-bulldog',
    name: 'French Bulldog',
    trait: 'Playful & Adaptable',
    description: 'Compact and charming, French Bulldogs thrive in apartments and love being the center of attention.',
    size: 'Small',
    energy: 'Low',
    imgId: 'breed-img-bulldog-c3d4',
  },
  {
    id: 'breed-border',
    name: 'Border Collie',
    trait: 'Intelligent & Energetic',
    description: 'Widely regarded as the most intelligent dog breed, Border Collies excel at agility, herding, and learning new tricks.',
    size: 'Medium',
    energy: 'Very High',
    imgId: 'breed-img-border-e5f6',
  },
  {
    id: 'breed-beagle',
    name: 'Beagle',
    trait: 'Curious & Merry',
    description: 'With their keen nose and cheerful disposition, Beagles are wonderful companions for active families.',
    size: 'Small',
    energy: 'Medium',
    imgId: 'breed-img-beagle-g7h8',
  },
  {
    id: 'breed-husky',
    name: 'Siberian Husky',
    trait: 'Adventurous & Vocal',
    description: 'Built for endurance in cold climates, Huskies are striking, spirited dogs that love outdoor adventures.',
    size: 'Large',
    energy: 'Very High',
    imgId: 'breed-img-husky-i9j0',
  },
  {
    id: 'breed-poodle',
    name: 'Poodle',
    trait: 'Elegant & Smart',
    description: 'Poodles are highly trainable, hypoallergenic, and come in three sizes — making them perfect for many lifestyles.',
    size: 'Varies',
    energy: 'Medium',
    imgId: 'breed-img-poodle-k1l2',
  },
];

const ENERGY_COLOR = {
  'Low': 'bg-green-100 text-green-700',
  'Medium': 'bg-blue-100 text-blue-700',
  'High': 'bg-amber-100 text-amber-700',
  'Very High': 'bg-red-100 text-red-700',
};

const BreedCard = ({ breed }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
    <div
      className="w-full"
      style={{ aspectRatio: '4/3' }}
      data-strk-bg-id={breed.imgId}
      data-strk-bg={`[${breed.id}-desc] [${breed.id}-name]`}
      data-strk-bg-ratio="4x3"
      data-strk-bg-width="500"
    />
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 id={`${breed.id}-name`} className="text-xl font-bold text-stone-900">{breed.name}</h3>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${ENERGY_COLOR[breed.energy]}`}>
          {breed.energy}
        </span>
      </div>
      <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-3">{breed.trait}</p>
      <p id={`${breed.id}-desc`} className="text-stone-600 text-sm leading-relaxed flex-1">{breed.description}</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-xs text-stone-400 uppercase tracking-wide">Size:</span>
        <span className="text-xs font-semibold text-stone-700 bg-stone-100 px-3 py-1 rounded-full">{breed.size}</span>
      </div>
    </div>
  </div>
);

const Breeds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="breeds" ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            Popular Breeds
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Find Your Perfect Match</h2>
          <p className="text-stone-600 max-w-xl mx-auto leading-relaxed">
            From energetic working dogs to laid-back lap dogs, there's a breed for every lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BREEDS.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breeds;
