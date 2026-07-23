import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

const bestsellerSlugs = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
];

function BestsellerCard({ product, onAdd, hoveredId, setHoveredId }) {
  const imgIdMap = {
    'vivid-aura-jewels': 'bestseller-vivid-aura-jewels',
    'majestic-flora-nectar': 'bestseller-majestic-flora-nectar',
    'golden-sphere-huggies': 'bestseller-golden-sphere-huggies',
    'amber-lace-earrings': 'bestseller-amber-lace-earrings',
    'royal-heirloom-set': 'bestseller-royal-heirloom-set',
  };
  const id = imgIdMap[product.slug];

  switch (product.slug) {
    case 'vivid-aura-jewels':
      return (
        <article
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link to={`/product/vivid-aura-jewels`} className="block relative overflow-hidden bg-velvet-50 aspect-[3/4]">
            <img
              alt="Vivid Aura Jewels"
              data-strk-img-id="bestseller-vivid-aura-jewels"
              data-strk-img="[bs-desc-vivid-aura-jewels] [bs-name-vivid-aura-jewels]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id="bs-name-vivid-aura-jewels" className="hidden">{product.name}</span>
            <span id="bs-desc-vivid-aura-jewels" className="hidden">{product.description}</span>
            <button
              onClick={(e) => { e.preventDefault(); onAdd(product); }}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velvet-900 w-9 h-9 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </Link>
          <div className="mt-3">
            <Link to={`/product/vivid-aura-jewels`}>
              <h3 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-[11px] text-velvet-600">{product.rating}</span>
              <span className="text-[11px] text-velvet-400">({product.reviewCount})</span>
            </div>
            <p className="text-sm font-medium text-velvet-800 mt-1">${product.price}</p>
          </div>
        </article>
      );
    case 'majestic-flora-nectar':
      return (
        <article
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link to={`/product/majestic-flora-nectar`} className="block relative overflow-hidden bg-velvet-50 aspect-[3/4]">
            <img
              alt="Majestic Flora Nectar"
              data-strk-img-id="bestseller-majestic-flora-nectar"
              data-strk-img="[bs-desc-majestic-flora-nectar] [bs-name-majestic-flora-nectar]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id="bs-name-majestic-flora-nectar" className="hidden">{product.name}</span>
            <span id="bs-desc-majestic-flora-nectar" className="hidden">{product.description}</span>
            <button
              onClick={(e) => { e.preventDefault(); onAdd(product); }}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velvet-900 w-9 h-9 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </Link>
          <div className="mt-3">
            <Link to={`/product/majestic-flora-nectar`}>
              <h3 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-[11px] text-velvet-600">{product.rating}</span>
              <span className="text-[11px] text-velvet-400">({product.reviewCount})</span>
            </div>
            <p className="text-sm font-medium text-velvet-800 mt-1">${product.price}</p>
          </div>
        </article>
      );
    case 'golden-sphere-huggies':
      return (
        <article
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link to={`/product/golden-sphere-huggies`} className="block relative overflow-hidden bg-velvet-50 aspect-[3/4]">
            <img
              alt="Golden Sphere Huggies"
              data-strk-img-id="bestseller-golden-sphere-huggies"
              data-strk-img="[bs-desc-golden-sphere-huggies] [bs-name-golden-sphere-huggies]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id="bs-name-golden-sphere-huggies" className="hidden">{product.name}</span>
            <span id="bs-desc-golden-sphere-huggies" className="hidden">{product.description}</span>
            <button
              onClick={(e) => { e.preventDefault(); onAdd(product); }}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velvet-900 w-9 h-9 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </Link>
          <div className="mt-3">
            <Link to={`/product/golden-sphere-huggies`}>
              <h3 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-[11px] text-velvet-600">{product.rating}</span>
              <span className="text-[11px] text-velvet-400">({product.reviewCount})</span>
            </div>
            <p className="text-sm font-medium text-velvet-800 mt-1">${product.price}</p>
          </div>
        </article>
      );
    case 'amber-lace-earrings':
      return (
        <article
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link to={`/product/amber-lace-earrings`} className="block relative overflow-hidden bg-velvet-50 aspect-[3/4]">
            <img
              alt="Amber Lace Earrings"
              data-strk-img-id="bestseller-amber-lace-earrings"
              data-strk-img="[bs-desc-amber-lace-earrings] [bs-name-amber-lace-earrings]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id="bs-name-amber-lace-earrings" className="hidden">{product.name}</span>
            <span id="bs-desc-amber-lace-earrings" className="hidden">{product.description}</span>
            <button
              onClick={(e) => { e.preventDefault(); onAdd(product); }}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velvet-900 w-9 h-9 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </Link>
          <div className="mt-3">
            <Link to={`/product/amber-lace-earrings`}>
              <h3 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-[11px] text-velvet-600">{product.rating}</span>
              <span className="text-[11px] text-velvet-400">({product.reviewCount})</span>
            </div>
            <p className="text-sm font-medium text-velvet-800 mt-1">${product.price}</p>
          </div>
        </article>
      );
    case 'royal-heirloom-set':
      return (
        <article
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link to={`/product/royal-heirloom-set`} className="block relative overflow-hidden bg-velvet-50 aspect-[3/4]">
            <img
              alt="Royal Heirloom Set"
              data-strk-img-id="bestseller-royal-heirloom-set"
              data-strk-img="[bs-desc-royal-heirloom-set] [bs-name-royal-heirloom-set]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span id="bs-name-royal-heirloom-set" className="hidden">{product.name}</span>
            <span id="bs-desc-royal-heirloom-set" className="hidden">{product.description}</span>
            <button
              onClick={(e) => { e.preventDefault(); onAdd(product); }}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velvet-900 w-9 h-9 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </Link>
          <div className="mt-3">
            <Link to={`/product/royal-heirloom-set`}>
              <h3 className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-[11px] text-velvet-600">{product.rating}</span>
              <span className="text-[11px] text-velvet-400">({product.reviewCount})</span>
            </div>
            <p className="text-sm font-medium text-velvet-800 mt-1">${product.price}</p>
          </div>
        </article>
      );
    default:
      return null;
  }
}

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const bestsellers = bestsellerSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  const handleAdd = (product) => addItem(product, product.variants[0], 1);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-velvet-900">
          Bestsellers
        </h2>
        <p className="mt-3 text-velvet-500 text-sm font-light tracking-wide">
          The pieces everyone is wearing
        </p>
        <hr className="hairline-divider w-16 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <BestsellerCard
            key={product.id}
            product={product}
            onAdd={handleAdd}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-ghost">
          View All Pieces
        </Link>
      </div>
    </section>
  );
}
