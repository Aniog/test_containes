import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const menuCategories = [
  {
    id: 'breads',
    label: 'Breads',
    items: [
      { id: 'sourdough', titleId: 'menu-pg-sourdough-title', descId: 'menu-pg-sourdough-desc', imgId: 'menu-pg-img-sourdough-a1b2c3', title: 'Classic Sourdough', desc: 'Slow-fermented for 24 hours with a crispy crust and open crumb.', price: '$8.50', tag: 'Bestseller' },
      { id: 'focaccia', titleId: 'menu-pg-focaccia-title', descId: 'menu-pg-focaccia-desc', imgId: 'menu-pg-img-focaccia-d4e5f6', title: 'Rosemary Focaccia', desc: 'Airy, olive-oil-drenched focaccia topped with fresh rosemary and flaky sea salt.', price: '$7.00', tag: 'Savory' },
      { id: 'rye', titleId: 'menu-pg-rye-title', descId: 'menu-pg-rye-desc', imgId: 'menu-pg-img-rye-g7h8i9', title: 'Dark Rye Loaf', desc: 'Dense, hearty rye bread with caraway seeds and a deep, earthy flavor.', price: '$9.00', tag: 'Wholesome' },
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries',
    items: [
      { id: 'croissant', titleId: 'menu-pg-croissant-title', descId: 'menu-pg-croissant-desc', imgId: 'menu-pg-img-croissant-j1k2l3', title: 'Butter Croissant', desc: 'Laminated with French AOP butter, baked to a golden, shatteringly flaky perfection.', price: '$4.00', tag: 'Morning Favorite' },
      { id: 'cinnamon-roll', titleId: 'menu-pg-cinnamon-roll-title', descId: 'menu-pg-cinnamon-roll-desc', imgId: 'menu-pg-img-cinnamonroll-m4n5o6', title: 'Cinnamon Roll', desc: 'Soft, pillowy rolls swirled with brown sugar and cinnamon, topped with cream cheese glaze.', price: '$5.50', tag: 'Weekend Special' },
      { id: 'pain-au-choc', titleId: 'menu-pg-painauchoc-title', descId: 'menu-pg-painauchoc-desc', imgId: 'menu-pg-img-painauchoc-p7q8r9', title: 'Pain au Chocolat', desc: 'Buttery croissant dough wrapped around two batons of dark Valrhona chocolate.', price: '$4.50', tag: 'Classic' },
    ],
  },
  {
    id: 'cakes-tarts',
    label: 'Cakes & Tarts',
    items: [
      { id: 'lemon-tart', titleId: 'menu-pg-lemontart-title', descId: 'menu-pg-lemontart-desc', imgId: 'menu-pg-img-lemontart-s1t2u3', title: 'Lemon Tart', desc: 'Bright, tangy lemon curd in a buttery shortcrust shell, finished with torched meringue.', price: '$6.00', tag: 'Seasonal' },
      { id: 'eclair', titleId: 'menu-pg-eclair-title', descId: 'menu-pg-eclair-desc', imgId: 'menu-pg-img-eclair-v4w5x6', title: 'Chocolate Éclair', desc: 'Choux pastry filled with silky vanilla custard and dipped in rich dark chocolate ganache.', price: '$5.00', tag: 'Classic' },
      { id: 'fruit-galette', titleId: 'menu-pg-fruitgalette-title', descId: 'menu-pg-fruitgalette-desc', imgId: 'menu-pg-img-fruitgalette-y7z8a9', title: 'Seasonal Fruit Galette', desc: 'A rustic free-form tart filled with whatever fruit is at its peak this week.', price: '$7.50', tag: 'Seasonal' },
    ],
  },
];

const Menu = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page hero */}
      <div className="bg-brown-dark py-20 px-6 text-center">
        <p className="text-amber-light font-playfair italic text-lg mb-2">Fresh Every Morning</p>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4" style={{ color: '#FFFDF8' }}>
          Our Menu
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-base" style={{ color: 'rgba(255,253,248,0.75)' }}>
          Everything is made from scratch daily. We use locally sourced flour, seasonal
          produce, and traditional techniques passed down through generations.
        </p>
      </div>

      {/* Categories */}
      <div className="bg-cream py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {menuCategories.map((cat) => (
            <section key={cat.id}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-brown-dark">
                  {cat.label}
                </h2>
                <div className="flex-1 h-px bg-amber/30" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cat.items.map((item) => (
                  <article
                    key={item.id}
                    className="bg-warm-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        alt={item.title}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-amber text-warm-white text-xs font-semibold px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-1">
                        <h3 id={item.titleId} className="text-lg font-playfair font-semibold text-brown-dark">
                          {item.title}
                        </h3>
                        <span className="text-amber font-bold ml-2 shrink-0">{item.price}</span>
                      </div>
                      <p id={item.descId} className="text-brown-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
