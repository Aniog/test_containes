import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCartActions } from '@/lib/cart';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCartActions();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand/30 overflow-hidden mb-5">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23E8E0D5" width="300" height="400"/></svg>';
          }}
        />
        {/* Hover overlay with second image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={product.images[1] || product.images[0]}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[9px] font-sans font-medium uppercase tracking-[0.15em] px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
            added
              ? 'bg-green-500 text-white'
              : 'bg-white text-velmora-espresso hover:bg-velmora-gold hover:text-white'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Info */}
      <h3 className="font-serif text-sm md:text-base tracking-[0.12em] uppercase text-velmora-espresso leading-snug">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'}
              stroke={i < Math.floor(product.rating) ? '#B8860B' : '#C0B8A8'}
              strokeWidth={1}
            />
          ))}
        </div>
        <span className="text-[10px] text-velmora-taupe font-sans">
          ({product.reviews})
        </span>
      </div>
      <p className="mt-1.5 font-sans text-sm font-medium text-velmora-espresso">
        ${product.price}
      </p>
    </Link>
  );
}

export default function BestsellersGrid() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-subhead mb-3">Most Loved</p>
          <h2 className="section-heading">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
