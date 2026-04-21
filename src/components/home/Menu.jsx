import { useState } from 'react';

const categories = ['All', 'Classic', 'Specialty', 'Vegetarian', 'Calzone'];

const pizzas = [
  {
    name: 'Margherita',
    category: 'Classic',
    emoji: '🍕',
    price: '$14',
    description: 'San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil',
    badge: 'Fan Favorite',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    name: 'Pepperoni',
    category: 'Classic',
    emoji: '🍕',
    price: '$16',
    description: 'Tomato sauce, mozzarella, generous layers of crispy pepperoni',
    badge: 'Best Seller',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'Truffle Funghi',
    category: 'Specialty',
    emoji: '🍄',
    price: '$22',
    description: 'Black truffle cream, wild mushrooms, fontina, fresh thyme',
    badge: 'Chef\'s Pick',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Diavola',
    category: 'Specialty',
    emoji: '🌶️',
    price: '$18',
    description: 'Spicy salami, nduja, chili flakes, smoked mozzarella, honey drizzle',
    badge: 'Spicy',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    name: 'Quattro Formaggi',
    category: 'Vegetarian',
    emoji: '🧀',
    price: '$19',
    description: 'Mozzarella, gorgonzola, pecorino, parmigiano, walnut, honey',
    badge: 'Vegetarian',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    name: 'Prosciutto e Rucola',
    category: 'Specialty',
    emoji: '🥗',
    price: '$21',
    description: 'Prosciutto di Parma, fresh arugula, shaved parmigiano, lemon zest',
    badge: null,
    badgeColor: '',
  },
  {
    name: 'Marinara',
    category: 'Vegetarian',
    emoji: '🍅',
    price: '$12',
    description: 'San Marzano tomato, garlic, oregano, extra virgin olive oil — no cheese',
    badge: 'Vegan',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    name: 'Calzone Classico',
    category: 'Calzone',
    emoji: '🥙',
    price: '$17',
    description: 'Ricotta, mozzarella, salami, mushrooms, folded and baked golden',
    badge: null,
    badgeColor: '',
  },
];

const PizzaCard = ({ pizza }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-orange-50 overflow-hidden group">
    <div className="bg-gradient-to-br from-orange-50 to-red-50 h-40 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
      {pizza.emoji}
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between mb-2">
        <h3
          className="text-xl font-bold text-stone-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {pizza.name}
        </h3>
        <span
          className="text-red-600 font-bold text-lg ml-2 shrink-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {pizza.price}
        </span>
      </div>
      {pizza.badge && (
        <span
          className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${pizza.badgeColor}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {pizza.badge}
        </span>
      )}
      <p
        className="text-stone-500 text-sm leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {pizza.description}
      </p>
    </div>
  </div>
);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? pizzas
      : pizzas.filter((p) => p.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#fffbf5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Menu
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-stone-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every Slice Tells a Story
          </h2>
          <p
            className="text-stone-500 max-w-xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            All pizzas are 12" and baked fresh to order in our wood-fired oven.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-red-600 text-white border-red-600 shadow-md'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-red-300 hover:text-red-600'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((pizza) => (
            <PizzaCard key={pizza.name} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
