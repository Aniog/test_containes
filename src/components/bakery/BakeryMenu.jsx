import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const menuItems = [
  {
    id: 'sourdough',
    titleId: 'menu-sourdough-title',
    descId: 'menu-sourdough-desc',
    imgId: 'menu-img-sourdough-d4e5f6',
    title: 'Classic Sourdough',
    desc: 'Our signature loaf — slow-fermented for 24 hours with a crispy crust and open crumb.',
    price: '$8.50',
    tag: 'Bestseller',
  },
  {
    id: 'croissant',
    titleId: 'menu-croissant-title',
    descId: 'menu-croissant-desc',
    imgId: 'menu-img-croissant-g7h8i9',
    title: 'Butter Croissant',
    desc: 'Laminated with French AOP butter, baked to a golden, shatteringly flaky perfection.',
    price: '$4.00',
    tag: 'Morning Favorite',
  },
  {
    id: 'cinnamon-roll',
    titleId: 'menu-cinnamon-roll-title',
    descId: 'menu-cinnamon-roll-desc',
    imgId: 'menu-img-cinnamonroll-j1k2l3',
    title: 'Cinnamon Roll',
    desc: 'Soft, pillowy rolls swirled with brown sugar and cinnamon, topped with cream cheese glaze.',
    price: '$5.50',
    tag: 'Weekend Special',
  },
  {
    id: 'lemon-tart',
    titleId: 'menu-lemon-tart-title',
    descId: 'menu-lemon-tart-desc',
    imgId: 'menu-img-lemontart-m4n5o6',
    title: 'Lemon Tart',
    desc: 'Bright, tangy lemon curd in a buttery shortcrust shell, finished with a torched meringue.',
    price: '$6.00',
    tag: 'Seasonal',
  },
  {
    id: 'focaccia',
    titleId: 'menu-focaccia-title',
    descId: 'menu-focaccia-desc',
    imgId: 'menu-img-focaccia-p7q8r9',
    title: 'Rosemary Focaccia',
    desc: 'Airy, olive-oil-drenched focaccia topped with fresh rosemary and flaky sea salt.',
    price: '$7.00',
    tag: 'Savory',
  },
  {
    id: 'eclair',
    titleId: 'menu-eclair-title',
    descId: 'menu-eclair-desc',
    imgId: 'menu-img-eclair-s1t2u3',
    title: 'Chocolate Éclair',
    desc: 'Choux pastry filled with silky vanilla custard and dipped in rich dark chocolate ganache.',
    price: '$5.00',
    tag: 'Classic',
  },
];

const BakeryMenu = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="menu" className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber font-playfair italic text-lg mb-2">Fresh Daily</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brown-dark mb-4">
            Our Specialties
          </h2>
          <p className="text-brown-light max-w-xl mx-auto">
            Every item is made from scratch each morning. We use locally sourced flour,
            seasonal produce, and traditional techniques passed down through generations.
          </p>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="bg-warm-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-52">
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
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 id={item.titleId} className="text-xl font-playfair font-semibold text-brown-dark">
                    {item.title}
                  </h3>
                  <span className="text-amber font-bold text-lg ml-2 shrink-0">{item.price}</span>
                </div>
                <p id={item.descId} className="text-brown-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block border-2 border-amber text-amber rounded-full px-8 py-3 font-semibold hover:bg-amber hover:text-warm-white transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default BakeryMenu;
