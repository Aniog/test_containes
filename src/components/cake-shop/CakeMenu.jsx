import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ShoppingBag } from 'lucide-react';

const cakes = [
  {
    id: 'classic-vanilla',
    titleId: 'cake-classic-vanilla-title',
    descId: 'cake-classic-vanilla-desc',
    imgId: 'cake-img-classic-vanilla-d4e5f6',
    title: 'Classic Vanilla Dream',
    desc: 'Light vanilla sponge layered with silky buttercream and fresh berries',
    price: '$48',
    badge: 'Bestseller',
    rating: 5,
  },
  {
    id: 'chocolate-fudge',
    titleId: 'cake-chocolate-fudge-title',
    descId: 'cake-chocolate-fudge-desc',
    imgId: 'cake-img-chocolate-fudge-g7h8i9',
    title: 'Dark Chocolate Fudge',
    desc: 'Rich triple-layer chocolate cake with ganache drip and cocoa frosting',
    price: '$54',
    badge: 'Fan Favorite',
    rating: 5,
  },
  {
    id: 'strawberry-bliss',
    titleId: 'cake-strawberry-bliss-title',
    descId: 'cake-strawberry-bliss-desc',
    imgId: 'cake-img-strawberry-bliss-j1k2l3',
    title: 'Strawberry Bliss',
    desc: 'Fluffy chiffon cake filled with fresh strawberry compote and whipped cream',
    price: '$52',
    badge: 'Seasonal',
    rating: 5,
  },
  {
    id: 'lemon-lavender',
    titleId: 'cake-lemon-lavender-title',
    descId: 'cake-lemon-lavender-desc',
    imgId: 'cake-img-lemon-lavender-m4n5o6',
    title: 'Lemon Lavender',
    desc: 'Zesty lemon cake with delicate lavender cream and candied citrus peel',
    price: '$56',
    badge: 'New',
    rating: 4,
  },
  {
    id: 'red-velvet',
    titleId: 'cake-red-velvet-title',
    descId: 'cake-red-velvet-desc',
    imgId: 'cake-img-red-velvet-p7q8r9',
    title: 'Red Velvet Romance',
    desc: 'Classic red velvet with tangy cream cheese frosting and velvet crumbs',
    price: '$50',
    badge: 'Classic',
    rating: 5,
  },
  {
    id: 'caramel-pecan',
    titleId: 'cake-caramel-pecan-title',
    descId: 'cake-caramel-pecan-desc',
    imgId: 'cake-img-caramel-pecan-s1t2u3',
    title: 'Caramel Pecan Torte',
    desc: 'Buttery caramel layers with toasted pecans and salted caramel drizzle',
    price: '$60',
    badge: 'Premium',
    rating: 5,
  },
];

const CakeCard = ({ cake }) => (
  <div className="bg-[#fffaf5] rounded-2xl border border-[#f0dcc8] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <img
        alt={cake.title}
        data-strk-img-id={cake.imgId}
        data-strk-img={`[${cake.descId}] [${cake.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 bg-[#f0dcc8]"
      />
      <span className="absolute top-3 left-3 bg-rose-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
        {cake.badge}
      </span>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < cake.rating ? 'fill-[#d4a853] text-[#d4a853]' : 'text-[#f0dcc8]'}`}
          />
        ))}
      </div>
      <h3 id={cake.titleId} className="font-playfair text-xl font-semibold text-[#3d2b1f] mb-2">
        {cake.title}
      </h3>
      <p id={cake.descId} className="text-[#7a5c4a] text-sm leading-relaxed mb-4">
        {cake.desc}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-playfair text-2xl font-bold text-rose-400">{cake.price}</span>
        <button
          onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white text-sm font-semibold py-2 px-5 rounded-full transition-all duration-200"
        >
          <ShoppingBag className="w-4 h-4" />
          Order
        </button>
      </div>
    </div>
  </div>
);

const CakeMenu = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="our-cakes" ref={containerRef} className="py-24 px-6 bg-[#fdf6ee]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Menu
          </span>
          <h2 id="cakes-section-title" className="font-playfair text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
            Handcrafted Cakes
          </h2>
          <p className="text-[#7a5c4a] text-lg max-w-xl mx-auto">
            Every cake is baked to order using the finest ingredients — no shortcuts, no compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeMenu;
