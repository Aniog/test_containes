import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, [hovered]);

  return (
    <article
      ref={cardRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden rounded-md bg-light-gray/20">
        <div className="relative aspect-[3/4]">
          {/* Primary image */}
          <img
            data-strk-img-id={`product-${product.id}-main-${index}`}
            data-strk-img={`[${product.id}-name] elegant gold jewelry product photo`}
            data-strk-img-ratio={product.imgRatio || '3x4'}
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
              hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={`product-${product.id}-hover-${index}`}
            data-strk-img={`[${product.id}-name] gold jewelry detail closeup`}
            data-strk-img-ratio={product.imgRatio || '3x4'}
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} - detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
              hovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 font-sans text-[10px] uppercase tracking-[0.12em] bg-charcoal text-white py-1.5 px-3">
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-charcoal/90 backdrop-blur-sm text-white font-sans text-[11px] uppercase tracking-[0.12em] py-3 transition-all duration-400 ease-luxury ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-gold`}
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4 text-center">
        <p id={`${product.id}-name`} className="product-name text-[13px]">
          {product.name}
        </p>
        <p className="font-sans text-body text-warm-gray mt-1">${product.price}</p>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="font-sans text-[11px] text-warm-gray">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>
    </article>
  );
}
