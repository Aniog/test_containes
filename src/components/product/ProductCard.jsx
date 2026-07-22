import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants[0]?.value || 'gold';
    addItem(product, defaultVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-warm-100 overflow-hidden rounded-sm">
        <img
          alt={product.name}
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover image (second image) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            alt={`${product.name} alternate`}
            data-strk-img-id={`product-${product.id}-hover`}
            data-strk-img={`[product-name-${product.id}] detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2.5 py-0.5 bg-warm-900 text-cream-50 text-[10px] font-medium tracking-wider uppercase">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2.5 py-0.5 bg-accent text-white text-[10px] font-medium tracking-wider uppercase">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 p-2.5 rounded-full transition-all duration-300 ${
            added
              ? 'bg-green-600 text-white scale-110'
              : 'bg-white/90 text-warm-800 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-lg'
          }`}
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-0.5 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-accent text-accent'
                  : 'fill-warm-200 text-warm-200'
              }`}
            />
          ))}
          <span className="text-xs text-warm-400 ml-1">({product.reviews})</span>
        </div>
        <h3 id={`product-name-${product.id}`} className="product-name text-xs md:text-sm">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-warm-800 mt-1">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}