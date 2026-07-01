import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const menuData = {
  pizza: [
    { id: 'margherita', title: 'Margherita', desc: 'San Marzano tomato, fior di latte, fresh basil, extra-virgin olive oil', price: '$18', tag: 'Classic' },
    { id: 'diavola', title: 'Diavola', desc: 'Spicy Calabrian salami, smoked mozzarella, chilli oil, oregano', price: '$22', tag: 'Spicy' },
    { id: 'funghi', title: 'Funghi e Tartufo', desc: 'Wild mushrooms, truffle cream, fontina, thyme, crispy shallots', price: '$24', tag: 'Chef\'s Pick' },
    { id: 'prosciutto', title: 'Prosciutto e Rucola', desc: 'San Daniele prosciutto, rocket, shaved parmesan, lemon zest', price: '$26', tag: '' },
    { id: 'quattro', title: 'Quattro Formaggi', desc: 'Mozzarella, gorgonzola, fontina, pecorino, honey drizzle', price: '$23', tag: '' },
    { id: 'vegana', title: 'Ortolana', desc: 'Roasted seasonal vegetables, tomato, basil pesto, pine nuts', price: '$20', tag: 'Vegan' },
  ],
  bakery: [
    { id: 'sourdough', title: 'Country Sourdough', desc: 'Long-fermented heritage wheat loaf with a crackling crust', price: '$9', tag: 'Bestseller' },
    { id: 'croissant', title: 'Butter Croissant', desc: 'Classic French laminated dough, 72-hour cold proof', price: '$5', tag: '' },
    { id: 'focaccia', title: 'Rosemary Focaccia', desc: 'Thick Ligurian-style, sea salt, rosemary, olive oil', price: '$7', tag: '' },
    { id: 'cinnamon', title: 'Cinnamon Roll', desc: 'Brioche dough, brown butter cinnamon filling, cream cheese glaze', price: '$6', tag: 'Sweet' },
    { id: 'olive', title: 'Olive & Herb Loaf', desc: 'Kalamata olives, rosemary, thyme, semolina crust', price: '$10', tag: '' },
    { id: 'eclair', title: 'Chocolate Éclair', desc: 'Choux pastry, dark chocolate ganache, vanilla pastry cream', price: '$6', tag: 'Sweet' },
  ],
};

const tabs = [
  { key: 'pizza', label: '🍕 Pizza' },
  { key: 'bakery', label: '🥐 Bakery' },
];

function MenuCard({ item, category }) {
  const titleId = `menu-${category}-${item.id}-title`;
  const descId = `menu-${category}-${item.id}-desc`;

  return (
    <div className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          alt={item.title}
          data-strk-img-id={`menu-img-${category}-${item.id}-7g8h9i`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.tag && (
          <span className="absolute top-3 left-3 bg-ember text-white text-xs font-semibold font-inter px-3 py-1 rounded-full">
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 id={titleId} className="font-playfair text-lg font-semibold text-charcoal leading-snug">
            {item.title}
          </h3>
          <span className="font-playfair text-lg font-bold text-ember shrink-0">{item.price}</span>
        </div>
        <p id={descId} className="font-inter text-sm text-smoke leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('pizza');
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <section id="menu" ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-inter text-sm uppercase tracking-widest text-crust mb-3">What We Offer</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">Our Menu</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-ash rounded-full p-1 gap-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-6 py-2 rounded-full font-inter text-sm font-semibold transition-all ${
                  active === t.key
                    ? 'bg-ember text-white shadow'
                    : 'text-smoke hover:text-charcoal bg-transparent border-0'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuData[active].map((item) => (
            <MenuCard key={item.id} item={item} category={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
