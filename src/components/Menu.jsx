import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bakeryItems = [
  { id: 'b1', name: 'Country Sourdough', desc: 'Slow-fermented 48-hour sourdough with a crispy crust and chewy crumb.', price: '$8', tag: 'Bestseller' },
  { id: 'b2', name: 'Butter Croissant', desc: 'Flaky, golden layers of pure butter pastry, baked fresh every morning.', price: '$4', tag: 'Daily Fresh' },
  { id: 'b3', name: 'Cinnamon Roll', desc: 'Soft, pillowy rolls swirled with cinnamon sugar and topped with cream cheese glaze.', price: '$5', tag: '' },
  { id: 'b4', name: 'Focaccia', desc: 'Rosemary and sea salt focaccia drizzled with extra virgin olive oil.', price: '$7', tag: '' },
  { id: 'b5', name: 'Almond Danish', desc: 'Buttery pastry filled with almond cream and topped with toasted flakes.', price: '$5', tag: 'Popular' },
  { id: 'b6', name: 'Multigrain Loaf', desc: 'Hearty blend of seeds and grains for a nutritious, flavorful everyday bread.', price: '$9', tag: '' },
];

const pizzaItems = [
  { id: 'p1', name: 'Margherita', desc: 'San Marzano tomato, fresh mozzarella di bufala, basil, extra virgin olive oil.', price: '$16', tag: 'Classic' },
  { id: 'p2', name: 'Diavola', desc: 'Spicy Calabrian salami, tomato, fior di latte, chili flakes, fresh basil.', price: '$18', tag: 'Spicy' },
  { id: 'p3', name: 'Quattro Formaggi', desc: 'Mozzarella, gorgonzola, pecorino, and parmigiano on a white base.', price: '$19', tag: 'Bestseller' },
  { id: 'p4', name: 'Prosciutto e Rucola', desc: 'Prosciutto di Parma, fresh arugula, cherry tomatoes, shaved parmigiano.', price: '$20', tag: '' },
  { id: 'p5', name: 'Funghi Tartufo', desc: 'Wild mushrooms, truffle cream, mozzarella, thyme, and a drizzle of truffle oil.', price: '$22', tag: 'Chef\'s Pick' },
  { id: 'p6', name: 'Vegana', desc: 'Roasted peppers, zucchini, eggplant, olives, capers, and tomato sauce.', price: '$17', tag: 'Vegan' },
];

const tagColors = {
  'Bestseller': 'bg-primary text-white',
  'Daily Fresh': 'bg-accent text-white',
  'Popular': 'bg-accent text-white',
  'Classic': 'bg-dark text-white',
  'Spicy': 'bg-red-600 text-white',
  "Chef's Pick": 'bg-primary text-white',
  'Vegan': 'bg-green-600 text-white',
};

const MenuCard = ({ item, sectionId }) => {
  const imgId = `menu-img-${item.id}`;
  const nameId = `menu-name-${item.id}`;
  const descId = `menu-desc-${item.id}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-warm hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${nameId}] [${sectionId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {item.tag && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${tagColors[item.tag] || 'bg-dark text-white'}`}>
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 id={nameId} className="font-serif font-semibold text-lg text-dark leading-tight">{item.name}</h3>
          <span className="font-bold text-primary text-lg flex-shrink-0">{item.price}</span>
        </div>
        <p id={descId} className="text-muted text-sm leading-relaxed flex-1">{item.desc}</p>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('bakery');
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeTab]);

  const items = activeTab === 'bakery' ? bakeryItems : pizzaItems;

  return (
    <section id="menu" className="py-24 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
          <h2 id="menu-title" className="font-serif font-bold text-4xl md:text-5xl text-dark mb-4">
            Our Menu
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From morning pastries to evening pizza — everything made with care and the finest ingredients.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1.5 shadow-sm border border-warm inline-flex gap-1">
            <button
              onClick={() => setActiveTab('bakery')}
              className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === 'bakery'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-dark'
              }`}
            >
              🥐 Bakery
            </button>
            <button
              onClick={() => setActiveTab('pizza')}
              className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === 'pizza'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-dark'
              }`}
            >
              🍕 Pizza
            </button>
          </div>
        </div>

        {/* Section label for image context */}
        <p id="menu-section-label" className="sr-only">
          {activeTab === 'bakery' ? 'Artisan bakery breads and pastries' : 'Wood-fired Neapolitan pizza'}
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} sectionId="menu-section-label" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
