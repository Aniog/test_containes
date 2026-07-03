import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          className={s <= Math.round(rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-300'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-4">
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          style={{
            opacity: hovered ? 0 : 1,
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {/* Secondary image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(1.05)',
            }}
          />
        )}

        {/* Bestseller badge */}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-charcoal-900 text-cream-50 text-[9px] font-sans font-semibold uppercase tracking-ultra-wide px-2.5 py-1">
            Bestseller
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal-950/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-cream-50 text-charcoal-900 text-[10px] font-sans font-semibold uppercase tracking-ultra-wide py-2.5 hover:bg-gold-100 transition-colors duration-200"
          >
            {added ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-[10px] font-sans text-charcoal-400">({product.reviews})</span>
        </div>
        <p className="product-name text-charcoal-900 text-[11px]">
          {product.name}
        </p>
        <p className="price text-base">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="label text-gold-500 mb-3">Curated for you</p>
            <h2 className="heading-2 text-charcoal-900">Our Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 text-xs font-sans font-medium uppercase tracking-ultra-wide text-charcoal-600 hover:text-charcoal-900 transition-colors border-b border-charcoal-300 pb-0.5 self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
