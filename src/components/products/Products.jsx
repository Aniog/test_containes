import { ShoppingCart } from 'lucide-react';

const plants = [
  {
    id: 1,
    emoji: '🌿',
    name: 'Monstera Deliciosa',
    category: 'Tropical',
    price: '$24.99',
    description: 'Iconic split leaves that make a bold statement in any room.',
    care: 'Low maintenance',
    bg: 'bg-green-50',
    badge: 'Best Seller',
    badgeColor: 'bg-green-600',
  },
  {
    id: 2,
    emoji: '🪴',
    name: 'Golden Pothos',
    category: 'Trailing',
    price: '$12.99',
    description: 'Cascading vines with heart-shaped leaves, perfect for shelves.',
    care: 'Very easy',
    bg: 'bg-emerald-50',
    badge: 'Easy Care',
    badgeColor: 'bg-emerald-600',
  },
  {
    id: 3,
    emoji: '🌵',
    name: 'Barrel Cactus',
    category: 'Succulent',
    price: '$9.99',
    description: 'A classic desert beauty that thrives on neglect.',
    care: 'Minimal water',
    bg: 'bg-lime-50',
    badge: 'Drought Proof',
    badgeColor: 'bg-lime-600',
  },
  {
    id: 4,
    emoji: '🌱',
    name: 'Boston Fern',
    category: 'Fern',
    price: '$18.99',
    description: 'Lush, feathery fronds that purify the air naturally.',
    care: 'Moderate',
    bg: 'bg-teal-50',
    badge: 'Air Purifier',
    badgeColor: 'bg-teal-600',
  },
  {
    id: 5,
    emoji: '🌺',
    name: 'Peace Lily',
    category: 'Flowering',
    price: '$21.99',
    description: 'Elegant white blooms that brighten any corner.',
    care: 'Easy',
    bg: 'bg-green-50',
    badge: 'Flowering',
    badgeColor: 'bg-green-700',
  },
  {
    id: 6,
    emoji: '🎋',
    name: 'Lucky Bamboo',
    category: 'Bamboo',
    price: '$14.99',
    description: 'A symbol of good fortune, grows in water or soil.',
    care: 'Very easy',
    bg: 'bg-emerald-50',
    badge: 'Good Luck',
    badgeColor: 'bg-emerald-700',
  },
];

const PlantCard = ({ plant }) => (
  <div className={`${plant.bg} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group`}>
    <div className="relative p-6 flex flex-col items-center">
      <span className={`absolute top-3 left-3 text-xs font-semibold text-white px-2 py-0.5 rounded-full ${plant.badgeColor}`}>
        {plant.badge}
      </span>
      <span className="text-7xl mb-3 group-hover:scale-110 transition-transform duration-300 block">
        {plant.emoji}
      </span>
      <span className="text-xs text-green-600 font-medium uppercase tracking-wide">{plant.category}</span>
    </div>
    <div className="px-5 pb-5">
      <h3 className="text-base font-bold text-green-900 mb-1">{plant.name}</h3>
      <p className="text-sm text-green-700 mb-3 leading-relaxed">{plant.description}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-extrabold text-green-800">{plant.price}</p>
          <p className="text-xs text-green-500">Care: {plant.care}</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors">
          <ShoppingCart className="w-3.5 h-3.5" />
          Add
        </button>
      </div>
    </div>
  </div>
);

const Products = () => {
  return (
    <section id="plants" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
            Our Collection
          </span>
          <h2 className="text-4xl font-extrabold text-green-900 mb-4">
            Find Your Perfect Plant
          </h2>
          <p className="text-green-700 max-w-xl mx-auto">
            Every plant is hand-selected, healthy, and ready to thrive in your home. Free delivery on orders over $40.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
          >
            View Full Catalog →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
