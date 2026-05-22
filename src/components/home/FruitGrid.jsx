import { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';

const fruits = [
  { id: 1, name: 'Strawberries', emoji: '🍓', price: 3.99, unit: '250g', rating: 4.9, reviews: 128, badge: 'Best Seller', category: 'Berries' },
  { id: 2, name: 'Mango', emoji: '🥭', price: 2.49, unit: 'each', rating: 4.8, reviews: 95, badge: 'Seasonal', category: 'Tropical' },
  { id: 3, name: 'Blueberries', emoji: '🫐', price: 4.99, unit: '200g', rating: 4.7, reviews: 74, badge: null, category: 'Berries' },
  { id: 4, name: 'Watermelon', emoji: '🍉', price: 6.99, unit: 'half', rating: 4.9, reviews: 210, badge: 'Sale', category: 'Melons' },
  { id: 5, name: 'Pineapple', emoji: '🍍', price: 3.49, unit: 'each', rating: 4.6, reviews: 63, badge: null, category: 'Tropical' },
  { id: 6, name: 'Cherries', emoji: '🍒', price: 5.49, unit: '300g', rating: 4.8, reviews: 89, badge: 'New', category: 'Stone Fruits' },
  { id: 7, name: 'Grapes', emoji: '🍇', price: 3.29, unit: '500g', rating: 4.7, reviews: 112, badge: null, category: 'Grapes' },
  { id: 8, name: 'Peach', emoji: '🍑', price: 1.99, unit: 'each', rating: 4.5, reviews: 57, badge: 'Seasonal', category: 'Stone Fruits' },
];

const badgeColors = {
  'Best Seller': 'bg-green-600 text-white',
  'Seasonal': 'bg-yellow-400 text-yellow-900',
  'Sale': 'bg-orange-500 text-white',
  'New': 'bg-blue-500 text-white',
};

const FruitCard = ({ fruit, onAdd }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
    <div className="relative bg-green-50 flex items-center justify-center h-44 text-7xl select-none">
      <span>{fruit.emoji}</span>
      {fruit.badge && (
        <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${badgeColors[fruit.badge]}`}>
          {fruit.badge}
        </span>
      )}
    </div>
    <div className="p-4 flex flex-col gap-2 flex-1">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-gray-900">{fruit.name}</h3>
        <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">{fruit.unit}</span>
      </div>
      <div className="flex items-center gap-1">
        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        <span className="text-xs font-medium text-gray-700">{fruit.rating}</span>
        <span className="text-xs text-gray-400">({fruit.reviews})</span>
      </div>
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-xl font-extrabold text-green-700">${fruit.price.toFixed(2)}</span>
        <button
          onClick={() => onAdd(fruit)}
          className="flex items-center gap-1.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full px-4 py-2 transition-colors"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add
        </button>
      </div>
    </div>
  </div>
);

const FruitGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { addItem } = useCart();

  const handleAdd = (fruit) => {
    addItem(fruit);
    toast.success(`${fruit.name} added to cart!`, {
      description: `$${fruit.price.toFixed(2)} per ${fruit.unit}`,
      duration: 2000,
    });
  };
  const categories = ['All', ...Array.from(new Set(fruits.map((f) => f.category)))];

  const filtered = activeFilter === 'All' ? fruits : fruits.filter((f) => f.category === activeFilter);

  return (
    <section id="shop" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-2">Our Selection</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fresh Picks of the Day</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Handpicked every morning from local farms. All fruits are 100% organic and pesticide-free.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-400 hover:text-green-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((fruit) => (
            <FruitCard key={fruit.id} fruit={fruit} onAdd={handleAdd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FruitGrid;
