import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const pizzas = [
  {
    id: 'margherita',
    name: 'Margherita Classica',
    description: 'San Marzano tomatoes, fresh fior di latte mozzarella, basil, extra virgin olive oil',
    price: '$16',
    badge: 'Classic',
    imgId: 'menu-img-d4e5f6',
  },
  {
    id: 'diavola',
    name: 'Diavola',
    description: 'Spicy Calabrian salami, tomato, smoked mozzarella, chili flakes, fresh basil',
    price: '$19',
    badge: 'Spicy',
    imgId: 'menu-img-g7h8i9',
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    description: 'Mozzarella, gorgonzola, parmigiano reggiano, pecorino, honey drizzle',
    price: '$20',
    badge: 'Chef\'s Pick',
    imgId: 'menu-img-j1k2l3',
  },
  {
    id: 'prosciutto',
    name: 'Prosciutto e Rucola',
    description: 'San Daniele prosciutto, fresh arugula, cherry tomatoes, shaved parmigiano',
    price: '$22',
    badge: 'Premium',
    imgId: 'menu-img-m4n5o6',
  },
  {
    id: 'funghi',
    name: 'Funghi Selvatici',
    description: 'Wild mushroom medley, truffle oil, fontina, fresh thyme, garlic cream base',
    price: '$21',
    badge: 'Vegetarian',
    imgId: 'menu-img-p7q8r9',
  },
  {
    id: 'bufala',
    name: 'Bufala e Pomodorini',
    description: 'Buffalo mozzarella DOP, slow-roasted cherry tomatoes, basil pesto, sea salt',
    price: '$23',
    badge: 'Seasonal',
    imgId: 'menu-img-s1t2u3',
  },
];

const badgeColors = {
  Classic: 'bg-warm-gray text-white',
  Spicy: 'bg-pizza-red text-white',
  "Chef's Pick": 'bg-warm-orange text-white',
  Premium: 'bg-dark-brown text-cream',
  Vegetarian: 'bg-green-700 text-white',
  Seasonal: 'bg-gold text-dark-brown',
};

const PizzaCard = ({ pizza }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
    <div className="relative overflow-hidden h-52">
      <img
        alt={pizza.name}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        data-strk-img-id={pizza.imgId}
        data-strk-img={`[menu-name-${pizza.id}] [menu-desc-${pizza.id}] authentic Italian pizza`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[pizza.badge]}`}>
        {pizza.badge}
      </span>
    </div>
    <div className="p-6">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 id={`menu-name-${pizza.id}`} className="font-display text-xl font-semibold text-dark-brown leading-tight">
          {pizza.name}
        </h3>
        <span className="text-pizza-red font-bold text-lg shrink-0">{pizza.price}</span>
      </div>
      <p id={`menu-desc-${pizza.id}`} className="text-warm-gray text-sm leading-relaxed">
        {pizza.description}
      </p>
      <div className="flex items-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>
    </div>
  </div>
);

const MenuSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="menu" ref={containerRef} className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-warm-orange text-xs tracking-widest uppercase font-semibold mb-3">
            Our Specialties
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-brown mb-4">
            The Menu
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
            Every pizza is hand-stretched, topped with care, and baked in our
            900°F wood-fired oven for the perfect char and chew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-pizza-red text-white px-10 py-3 rounded-full font-semibold hover:bg-deep-red transition"
          >
            Order Your Favorite
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
