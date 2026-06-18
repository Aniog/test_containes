import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Birthday', 'Wedding', 'Custom', 'Seasonal'];

const cakes = [
  {
    id: 'velvet-dream',
    titleId: 'cake-velvet-dream-title',
    descId: 'cake-velvet-dream-desc',
    imgId: 'cake-img-velvet-dream-d4e5f6',
    title: 'Red Velvet Dream',
    desc: 'Layers of moist red velvet sponge with silky cream cheese frosting and fresh berries.',
    price: '$68',
    category: 'Birthday',
    badge: 'Best Seller',
  },
  {
    id: 'lemon-bliss',
    titleId: 'cake-lemon-bliss-title',
    descId: 'cake-lemon-bliss-desc',
    imgId: 'cake-img-lemon-bliss-g7h8i9',
    title: 'Lemon Bliss',
    desc: 'Zesty lemon sponge with elderflower buttercream and candied lemon slices.',
    price: '$62',
    category: 'Seasonal',
    badge: 'New',
  },
  {
    id: 'choco-truffle',
    titleId: 'cake-choco-truffle-title',
    descId: 'cake-choco-truffle-desc',
    imgId: 'cake-img-choco-truffle-j1k2l3',
    title: 'Chocolate Truffle',
    desc: 'Rich dark chocolate ganache layered with Belgian chocolate mousse and cocoa sponge.',
    price: '$74',
    category: 'Birthday',
    badge: null,
  },
  {
    id: 'wedding-ivory',
    titleId: 'cake-wedding-ivory-title',
    descId: 'cake-wedding-ivory-desc',
    imgId: 'cake-img-wedding-ivory-m4n5o6',
    title: 'Ivory Rose Wedding',
    desc: 'Elegant three-tier vanilla bean cake adorned with hand-piped roses and gold leaf.',
    price: 'From $220',
    category: 'Wedding',
    badge: 'Popular',
  },
  {
    id: 'strawberry-cloud',
    titleId: 'cake-strawberry-cloud-title',
    descId: 'cake-strawberry-cloud-desc',
    imgId: 'cake-img-strawberry-cloud-p7q8r9',
    title: 'Strawberry Cloud',
    desc: 'Light chiffon layers with fresh strawberry compote and whipped vanilla cream.',
    price: '$58',
    category: 'Seasonal',
    badge: null,
  },
  {
    id: 'custom-creation',
    titleId: 'cake-custom-creation-title',
    descId: 'cake-custom-creation-desc',
    imgId: 'cake-img-custom-creation-s1t2u3',
    title: 'Your Custom Creation',
    desc: 'Tell us your vision — flavors, design, size — and we will bring it to life.',
    price: 'Quote on Request',
    category: 'Custom',
    badge: 'Custom',
  },
];

const CakeCard = ({ cake }) => (
  <article className="bg-white border border-[#f0ddd4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        alt={cake.title}
        data-strk-img-id={cake.imgId}
        data-strk-img={`[${cake.descId}] [${cake.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {cake.badge && (
        <span className="absolute top-3 left-3 bg-[#c2185b] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {cake.badge}
        </span>
      )}
    </div>
    <div className="p-6">
      <h3 id={cake.titleId} className="font-playfair text-xl font-semibold text-[#2d1b0e] mb-2">
        {cake.title}
      </h3>
      <p id={cake.descId} className="text-sm text-[#9e7b6b] leading-relaxed mb-4">
        {cake.desc}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-playfair text-xl font-bold text-[#c2185b]">{cake.price}</span>
        <a
          href="#contact"
          className="bg-[#fce4ec] text-[#c2185b] px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#c2185b] hover:text-white transition-colors"
        >
          Order This
        </a>
      </div>
    </div>
  </article>
);

const CakeMenu = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filtered = activeCategory === 'All'
    ? cakes
    : cakes.filter((c) => c.category === activeCategory);

  return (
    <section id="cakes" className="py-20 px-4 md:px-8 bg-[#fdf6f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fce4ec] text-[#c2185b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Menu
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2d1b0e] mb-4">
            Cakes for Every Occasion
          </h2>
          <p className="text-[#9e7b6b] max-w-xl mx-auto leading-relaxed">
            Each cake is baked fresh to order using premium ingredients. No preservatives, no shortcuts — just pure, delicious craft.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#c2185b] text-white border-[#c2185b]'
                  : 'bg-white text-[#5c3d2e] border-[#f0ddd4] hover:border-[#c2185b] hover:text-[#c2185b]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeMenu;
