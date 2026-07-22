import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, className = '' }) {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    console.log('[ProductCard] Added to cart:', product.name);
  };

  return (
    <div
      ref={containerRef}
      className={`group relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-stone aspect-[3/4]">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags?.includes('bestseller') && (
              <span className="bg-gold text-white font-inter text-[10px] uppercase tracking-widest px-2 py-0.5">
                Bestseller
              </span>
            )}
            {product.tags?.includes('new') && (
              <span className="bg-charcoal text-white font-inter text-[10px] uppercase tracking-widest px-2 py-0.5">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="w-full bg-charcoal/90 text-white font-inter text-[11px] uppercase tracking-widest py-3 hover:bg-gold transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="pt-4 pb-2">
          <p
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest text-ink leading-tight mb-1"
          >
            {product.name}
          </p>
          <p
            id={product.descId}
            className="font-inter text-[11px] text-taupe mb-2 line-clamp-1"
          >
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-inter text-sm font-medium text-ink">${product.price}</span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone fill-stone'}
                  />
                ))}
              </div>
              <span className="font-inter text-[10px] text-taupe">({product.reviewCount})</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
