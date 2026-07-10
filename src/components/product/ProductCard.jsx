import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

export default function ProductCard({ product, sectionId = 'shop' }) {
  const { addItem } = useCart();
  const imgId = `product-${sectionId}-${product.id}-img-a1b2`;
  const titleId = `product-${sectionId}-${product.id}-title`;
  const descId = `product-${sectionId}-${product.id}-desc`;

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-sand overflow-hidden mb-3">
          <img
            data-strk-img-id={imgId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-charcoal/90 text-cream py-2.5 text-[10px] uppercase tracking-ultra-wide font-sans font-medium hover:bg-gold transition-colors text-center"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 id={titleId} className="text-[11px] md:text-xs uppercase tracking-ultra-wide font-sans font-medium text-charcoal">
            {product.name}
          </h3>
          <p id={descId} className="hidden">{product.category} gold jewelry</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
              />
            ))}
            <span className="text-[10px] text-taupe ml-1">({product.reviewCount})</span>
          </div>
          <p className="text-sm font-sans text-charcoal">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}
