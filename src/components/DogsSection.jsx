import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const dogs = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '8 weeks',
    price: '$1,200',
    gender: 'Male',
    status: 'available',
    description: 'Playful and affectionate Golden Retriever puppy. Great with kids and other pets.',
  },
  {
    id: 2,
    name: 'Luna',
    breed: 'French Bulldog',
    age: '10 weeks',
    price: '$2,500',
    gender: 'Female',
    status: 'available',
    description: 'Adorable Frenchie with a calm temperament. Perfect for apartment living.',
  },
  {
    id: 3,
    name: 'Max',
    breed: 'German Shepherd',
    age: '12 weeks',
    price: '$1,800',
    gender: 'Male',
    status: 'available',
    description: 'Intelligent and loyal German Shepherd. Excellent for families and protection.',
  },
  {
    id: 4,
    name: 'Bella',
    breed: 'Labrador Retriever',
    age: '9 weeks',
    price: '$1,100',
    gender: 'Female',
    status: 'sold',
    description: 'Sweet and energetic Labrador. Loves water and outdoor adventures.',
  },
  {
    id: 5,
    name: 'Charlie',
    breed: 'Beagle',
    age: '11 weeks',
    price: '$900',
    gender: 'Male',
    status: 'available',
    description: 'Curious and friendly Beagle puppy. Great nose and loves to explore.',
  },
  {
    id: 6,
    name: 'Daisy',
    breed: 'Poodle',
    age: '8 weeks',
    price: '$2,000',
    gender: 'Female',
    status: 'available',
    description: 'Hypoallergenic Poodle with a gentle and smart personality. Easy to train.',
  },
];

const DogCard = ({ dog, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          id={`dog-name-${dog.id}`}
          alt={dog.name}
          className="w-full h-full object-cover"
          data-strk-img-id={`dog-img-${dog.id}-${index}a3f`}
          data-strk-img={`[dog-breed-${dog.id}] [dog-name-${dog.id}] puppy dog`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
            dog.status === 'available'
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-rose-100 text-rose-600'
          }`}
        >
          {dog.status === 'available' ? 'Available' : 'Sold'}
        </span>
        <span className="absolute top-3 right-3 bg-white/90 text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {dog.gender}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-lg font-bold text-stone-900">{dog.name}</h3>
          <span className="text-amber-700 font-bold text-lg">{dog.price}</span>
        </div>
        <p id={`dog-breed-${dog.id}`} className="text-sm font-medium text-amber-700 mb-1">{dog.breed}</p>
        <p className="text-xs text-stone-500 mb-3">Age: {dog.age}</p>
        <p className="text-sm text-stone-600 flex-1 mb-4">{dog.description}</p>
        <a
          href="#contact"
          className={`block text-center font-semibold rounded-full px-4 py-2.5 text-sm transition-colors ${
            dog.status === 'available'
              ? 'bg-amber-700 hover:bg-amber-800 text-white'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed pointer-events-none'
          }`}
        >
          {dog.status === 'available' ? 'Inquire About ' + dog.name : 'No Longer Available'}
        </a>
      </div>
    </div>
  );
};

const DogsSection = () => (
  <section id="dogs" className="py-20 px-4 sm:px-6 bg-stone-100">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Our Puppies
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Available Dogs</h2>
        <p className="text-stone-600 max-w-xl mx-auto">
          All our puppies are vet-checked, vaccinated, and come with health guarantees. Each one is raised with love in our home.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogs.map((dog, i) => (
          <DogCard key={dog.id} dog={dog} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default DogsSection;
