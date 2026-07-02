import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const defaultVariant = product.variants[0];

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-ivory-200 rounded-sm">
          {/* Primary image */}
          <div
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            data-strk-img-id={product.images[0].id}
            data-strk-img={`[product-${product.id}-name] [product-${product.id}-desc] jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.images[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary image (hover) */}
          {product.images[1] && (
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${hovered ? 'opacity-100' : 'opacity-0'}`}
              data-strk-img-id={product.images[1].id}
              data-strk-img={`[product-${product.id}-name] styled model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Badges */}
          {product.badges.length > 0 && (
            <div className="absolute top-3 left-3 z-10">
              {product.badges.map(badge => (
                <span
                  key={badge}
                  className="inline-block bg-charcoal-900 text-white font-sans text-[10px] tracking-[0.1em] uppercase px-2.5 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, defaultVariant);
            }}
            className={`absolute bottom-3 left-3 right-3 z-10 bg-white/95 backdrop-blur-sm text-charcoal-900 font-sans text-xs tracking-[0.1em] uppercase py-2.5 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-charcoal-900 hover:text-white`}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3 space-y-1">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`product-${product.id}-name`}
            className="product-name text-sm md:text-base hover:text-brand-gold-dark transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`product-${product.id}-desc`}
          className="font-sans text-xs text-charcoal-500"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-charcoal-200'}
              />
            ))}
          </div>
          <span className="font-sans text-[11px] text-charcoal-400">({product.reviewCount})</span>
        </div>
        <p className="price text-sm font-medium">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
