import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Burgers', 'Sides', 'Drinks', 'Desserts'];

const menuItems = [
  {
    id: 1,
    category: 'Burgers',
    name: 'The Classic',
    description: 'Beef patty, cheddar, lettuce, tomato, pickles, and our secret sauce.',
    price: '$12.99',
    badge: 'Fan Favorite',
  },
  {
    id: 2,
    category: 'Burgers',
    name: 'Smoky BBQ Stack',
    description: 'Double patty, smoked bacon, BBQ sauce, crispy onion rings, and jalapeños.',
    price: '$16.99',
    badge: 'Best Seller',
  },
  {
    id: 3,
    category: 'Burgers',
    name: 'Mushroom Swiss',
    description: 'Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli, and arugula.',
    price: '$14.99',
    badge: null,
  },
  {
    id: 4,
    category: 'Burgers',
    name: 'Spicy Inferno',
    description: 'Crispy chicken, ghost pepper sauce, pepper jack, coleslaw, and pickled chili.',
    price: '$15.49',
    badge: '🔥 Hot',
  },
  {
    id: 5,
    category: 'Burgers',
    name: 'Garden Delight',
    description: 'Black bean patty, avocado, roasted peppers, sprouts, and chipotle mayo.',
    price: '$13.99',
    badge: 'Veggie',
  },
  {
    id: 6,
    category: 'Sides',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese sauce, bacon bits, and green onions.',
    price: '$7.99',
    badge: null,
  },
  {
    id: 7,
    category: 'Sides',
    name: 'Onion Rings',
    description: 'Golden-fried onion rings served with smoky dipping sauce.',
    price: '$6.49',
    badge: null,
  },
  {
    id: 8,
    category: 'Drinks',
    name: 'Craft Milkshake',
    description: 'Thick and creamy shakes in vanilla, chocolate, or strawberry.',
    price: '$6.99',
    badge: 'New',
  },
  {
    id: 9,
    category: 'Desserts',
    name: 'Brownie Sundae',
    description: 'Warm fudge brownie topped with vanilla ice cream and caramel drizzle.',
    price: '$8.49',
    badge: null,
  },
];

const MenuCard = ({ item, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-[#FFF8F0]">
        <img
          alt={item.name}
          className="w-full h-full object-cover"
          data-strk-img-id={`menu-img-${item.id}-a${index}`}
          data-strk-img={`[menu-item-desc-${item.id}] [menu-item-name-${item.id}] [menu-section-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {item.badge && (
          <span className="absolute top-3 left-3 bg-[#E63946] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            id={`menu-item-name-${item.id}`}
            className="text-lg font-semibold text-[#1A1A2E]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.name}
          </h3>
          <span className="text-[#E63946] font-bold text-lg whitespace-nowrap">{item.price}</span>
        </div>
        <p id={`menu-item-desc-${item.id}`} className="text-[#6B6B6B] text-sm flex-1">
          {item.description}
        </p>
        <button className="mt-4 w-full bg-[#1A1A2E] text-white rounded-full py-2 text-sm font-semibold hover:bg-[#E63946] transition-colors border-none cursor-pointer">
          Add to Order
        </button>
      </div>
    </div>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-6 md:px-16 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#E63946] text-sm font-semibold tracking-widest uppercase mb-3">
            What We Serve
          </p>
          <h2
            id="menu-section-title"
            className="text-3xl md:text-4xl font-bold text-[#1A1A2E]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h2>
          <p className="text-[#6B6B6B] mt-4 max-w-xl mx-auto">
            Every item is made fresh to order with quality ingredients sourced locally.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border-2 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#E63946] border-[#E63946] text-white'
                  : 'border-[#1A1A2E]/20 text-[#1A1A2E] bg-white hover:border-[#E63946] hover:text-[#E63946]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
