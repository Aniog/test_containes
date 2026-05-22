import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Breads', 'Pastries', 'Cakes', 'Seasonal'];

const menuItems = [
  { id: 'sourdough', name: 'Classic Sourdough', category: 'Breads', price: '$8.50', desc: 'Slow-fermented 48-hour sourdough with a crispy crust and chewy crumb.' },
  { id: 'croissant', name: 'Butter Croissant', category: 'Pastries', price: '$4.00', desc: 'Flaky, golden layers of pure butter pastry, baked fresh every morning.' },
  { id: 'rye', name: 'Dark Rye Loaf', category: 'Breads', price: '$9.00', desc: 'Dense, hearty rye with caraway seeds and a rich, earthy flavor.' },
  { id: 'eclair', name: 'Chocolate Éclair', category: 'Pastries', price: '$5.50', desc: 'Choux pastry filled with vanilla cream and topped with dark chocolate glaze.' },
  { id: 'lemon-cake', name: 'Lemon Drizzle Cake', category: 'Cakes', price: '$32.00', desc: 'Moist lemon sponge with a tangy citrus glaze and candied lemon zest.' },
  { id: 'focaccia', name: 'Rosemary Focaccia', category: 'Breads', price: '$7.00', desc: 'Olive oil-rich Italian flatbread with fresh rosemary and sea salt flakes.' },
  { id: 'cinnamon', name: 'Cinnamon Roll', category: 'Pastries', price: '$4.50', desc: 'Soft, pillowy rolls swirled with cinnamon sugar and cream cheese frosting.' },
  { id: 'berry-tart', name: 'Mixed Berry Tart', category: 'Seasonal', price: '$6.50', desc: 'Buttery shortcrust filled with pastry cream and topped with seasonal berries.' },
  { id: 'choc-cake', name: 'Chocolate Ganache Cake', category: 'Cakes', price: '$38.00', desc: 'Rich dark chocolate layers with silky ganache and a mirror glaze finish.' },
];

function MenuCard({ item, containerRef }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          id={`menu-img-${item.id}`}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`menu-img-${item.id}-7g8h9i`}
          data-strk-img={`[menu-desc-${item.id}] [menu-name-${item.id}] [menu-section-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 id={`menu-name-${item.id}`} className="font-serif text-xl font-bold text-espresso">{item.name}</h3>
          <span className="text-golden font-bold text-lg ml-2 shrink-0">{item.price}</span>
        </div>
        <p id={`menu-desc-${item.id}`} className="text-brown-500 text-sm leading-relaxed mb-3">{item.desc}</p>
        <span className="inline-block bg-brown-100 text-brown-500 text-xs font-semibold rounded-full px-3 py-1">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export default function Menu() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="menu" ref={containerRef} className="py-24 bg-brown-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-golden font-semibold text-sm uppercase tracking-widest mb-3">
            Fresh Daily
          </span>
          <h2 id="menu-section-title" className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-4">
            Our Baked Goods
          </h2>
          <p className="text-brown-500 text-lg max-w-xl mx-auto">
            Everything is baked fresh each morning. Arrive early — our most popular items sell out fast!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="border-2 border-golden text-golden rounded-full px-5 py-2 text-sm font-semibold hover:bg-golden hover:text-white transition-colors duration-200 bg-transparent"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} containerRef={containerRef} />
          ))}
        </div>
      </div>
    </section>
  );
}
