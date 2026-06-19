import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-ink-100 rounded-sm">
          <img
            src={product.images[0]}
            alt={product.displayName}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-luxury ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
          <img
            src={product.hoverImage}
            alt={`${product.displayName} alternate`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-luxury ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        </div>
      </Link>

      {/* Quick Add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, 'Gold', 1);
        }}
        className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm py-2.5 text-xs tracking-widest uppercase font-medium text-ink-900 shadow-sm transition-all duration-500 ease-luxury ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-widest uppercase text-ink-900 group-hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-ink-400">({product.reviewCount})</span>
        </div>
        <p className="mt-1 text-sm font-medium text-ink-700">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-gold-600 font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
