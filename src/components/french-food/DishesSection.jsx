import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const dishes = [
  {
    id: 'dish-1',
    titleId: 'dish-title-1',
    subtitleId: 'dish-sub-1',
    title: 'Coq au Vin',
    subtitle: 'Braised chicken in red wine',
    description: 'A classic Burgundian dish of chicken slow-braised with wine, mushrooms, lardons, and aromatic herbs. Rich, warming, and deeply satisfying.',
    category: 'Main Course',
    origin: 'Burgundy',
  },
  {
    id: 'dish-2',
    titleId: 'dish-title-2',
    subtitleId: 'dish-sub-2',
    title: 'Bouillabaisse',
    subtitle: 'Provençal fish stew',
    description: 'A fragrant Marseille seafood stew made with multiple varieties of fish, shellfish, saffron, and served with rouille on crusty bread.',
    category: 'Soup',
    origin: 'Provence',
  },
  {
    id: 'dish-3',
    titleId: 'dish-title-3',
    subtitleId: 'dish-sub-3',
    title: 'Crème Brûlée',
    subtitle: 'Caramelised vanilla custard',
    description: 'Silky vanilla custard topped with a perfectly caramelised sugar crust. One of France\'s most beloved and iconic desserts.',
    category: 'Dessert',
    origin: 'Paris',
  },
  {
    id: 'dish-4',
    titleId: 'dish-title-4',
    subtitleId: 'dish-sub-4',
    title: 'Croissant',
    subtitle: 'Buttery laminated pastry',
    description: 'The quintessential French breakfast pastry — flaky, golden, and impossibly buttery. A masterpiece of laminated dough technique.',
    category: 'Pastry',
    origin: 'Paris',
  },
  {
    id: 'dish-5',
    titleId: 'dish-title-5',
    subtitleId: 'dish-sub-5',
    title: 'Ratatouille',
    subtitle: 'Provençal vegetable medley',
    description: 'A vibrant Provençal stew of summer vegetables — courgette, aubergine, tomatoes, and peppers — slow-cooked with olive oil and herbs.',
    category: 'Vegetarian',
    origin: 'Provence',
  },
  {
    id: 'dish-6',
    titleId: 'dish-title-6',
    subtitleId: 'dish-sub-6',
    title: 'Soupe à l\'Oignon',
    subtitle: 'French onion soup',
    description: 'Deeply caramelised onions in a rich beef broth, topped with a thick slice of baguette and melted Gruyère cheese. A Parisian bistro staple.',
    category: 'Soup',
    origin: 'Paris',
  },
];

const categoryColors = {
  'Main Course': 'bg-[#8B1A2F]/10 text-[#8B1A2F]',
  'Soup': 'bg-amber-100 text-amber-800',
  'Dessert': 'bg-pink-100 text-pink-800',
  'Pastry': 'bg-yellow-100 text-yellow-800',
  'Vegetarian': 'bg-green-100 text-green-800',
};

const DishCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] shadow-md hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden h-52">
        <img
          alt={dish.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={dish.id}
          data-strk-img={`[${dish.subtitleId}] [${dish.titleId}] french food dish`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[dish.category] || 'bg-gray-100 text-gray-700'}`}>
            {dish.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 id={dish.titleId} className="font-['Playfair_Display'] text-xl font-bold text-[#1C1C1C]">
            {dish.title}
          </h3>
          <span className="text-[#C9A84C] text-xs font-medium ml-2 mt-1 whitespace-nowrap">{dish.origin}</span>
        </div>
        <p id={dish.subtitleId} className="text-[#8B1A2F] text-sm font-medium italic mb-3">
          {dish.subtitle}
        </p>
        <p className="text-[#6B6560] text-sm leading-relaxed">{dish.description}</p>
      </div>
    </div>
  );
};

const DishesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="dishes" ref={containerRef} className="bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Must-Try Classics
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            Iconic French Dishes
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8" />
          <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
            From hearty country stews to delicate pastries, these are the dishes that define French gastronomy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DishesSection;
