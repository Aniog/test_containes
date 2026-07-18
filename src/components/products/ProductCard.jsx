import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-warm-white overflow-hidden mb-4">
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-velmora-gold text-velmora-cream text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-velmora-black/0 group-hover:bg-velmora-black/10 transition-all duration-300" />

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="absolute bottom-4 left-4 right-4 bg-velmora-charcoal/90 backdrop-blur-sm text-velmora-cream py-3 font-sans text-caption uppercase tracking-ultra-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-velmora-charcoal"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="px-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-[11px] md:text-caption uppercase tracking-ultra-wide text-velmora-charcoal mb-1.5 group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-body font-medium text-velmora-charcoal">
          {formatPrice(product.price)}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-velmora-gold text-velmora-gold'
                    : 'text-velmora-muted/30'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-velmora-muted">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </article>
  );
}
