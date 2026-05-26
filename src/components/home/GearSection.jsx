import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 'gear-1',
    name: 'Pro Street Deck',
    category: 'Decks',
    description: 'Maple construction, 8.25" width, perfect for street and park skating.',
    price: '$59.99',
    rating: 4.9,
    reviews: 312,
    badge: 'Best Seller',
    imgId: 'gear-img-h8f0c3',
  },
  {
    id: 'gear-2',
    name: 'Vert Crusher Trucks',
    category: 'Trucks',
    description: 'Lightweight aluminum alloy trucks with responsive turning for any terrain.',
    price: '$49.99',
    rating: 4.7,
    reviews: 198,
    badge: 'New',
    imgId: 'gear-img-i9g1d4',
  },
  {
    id: 'gear-3',
    name: 'Grip Tape Pro',
    category: 'Accessories',
    description: 'Extra-coarse silicon carbide grip tape. Maximum board feel, zero slip.',
    price: '$12.99',
    rating: 4.8,
    reviews: 540,
    badge: null,
    imgId: 'gear-img-j0h2e5',
  },
  {
    id: 'gear-4',
    name: 'Street Wheels 52mm',
    category: 'Wheels',
    description: '99A durometer urethane wheels. Fast, smooth, and built for street abuse.',
    price: '$34.99',
    rating: 4.6,
    reviews: 267,
    badge: 'Popular',
    imgId: 'gear-img-k1i3f6',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'accent-text' : 'text-zinc-600'}`}
        fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
        style={i <= Math.round(rating) ? { color: 'var(--accent)', fill: 'var(--accent)' } : {}}
      />
    ))}
    <span className="ml-1 text-xs font-bold text-zinc-300">{rating}</span>
  </div>
);

const ProductCard = ({ product, sectionTitleId }) => (
  <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover-accent-border transition-all group flex flex-col">
    <div className="relative overflow-hidden h-52">
      <img
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.id}-desc] [${product.id}-name] [${sectionTitleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="500"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      {product.badge && (
        <span className="absolute top-3 left-3 accent-bg accent-text-on text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="accent-text text-xs font-bold uppercase tracking-widest mb-1">
        {product.category}
      </span>
      <h3 id={`${product.id}-name`} className="font-display text-2xl text-zinc-100 uppercase mb-2">
        {product.name}
      </h3>
      <p id={`${product.id}-desc`} className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
        {product.description}
      </p>
      <StarRating rating={product.rating} />
      <p className="text-zinc-500 text-xs mt-1 mb-4">{product.reviews} reviews</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-display text-2xl accent-text">{product.price}</span>
        <button className="flex items-center gap-2 accent-bg accent-text-on font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full hover-accent-bg transition">
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const GearSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gear" ref={containerRef} className="bg-zinc-900 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span id="gear-label" className="accent-text text-xs font-bold uppercase tracking-widest">
              Top-Rated Equipment
            </span>
            <h2 id="gear-title" className="font-display text-5xl md:text-7xl text-zinc-100 uppercase mt-2 leading-none">
              Skate<br />
              <span className="accent-text">Gear</span>
            </h2>
            <p className="text-zinc-400 text-base mt-4 max-w-lg">
              Handpicked boards, trucks, wheels, and accessories trusted by pros and beginners alike.
            </p>
          </div>
          <a
            href="#"
            className="self-start md:self-auto border-2 border-zinc-700 text-zinc-100 font-bold uppercase tracking-widest px-6 py-3 rounded-full hover-accent-border hover-accent-text transition text-sm whitespace-nowrap"
          >
            Shop All Gear
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} sectionTitleId="gear-title" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearSection;
