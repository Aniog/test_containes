import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductCard({ product, className = '' }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-cream-dark aspect-[3/4]">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.titleId}] jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags?.includes('bestseller') && (
              <span className="bg-charcoal text-ivory text-[9px] uppercase tracking-widest2 px-2 py-1 font-medium">
                Bestseller
              </span>
            )}
            {product.tags?.includes('new') && (
              <span className="bg-gold text-ivory text-[9px] uppercase tracking-widest2 px-2 py-1 font-medium">
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
              onClick={handleAdd}
              className="w-full bg-charcoal text-ivory text-[10px] uppercase tracking-widest2 font-medium py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal-soft transition-colors duration-200"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="pt-4 pb-2">
          {/* Hidden text refs for image queries */}
          <span id={product.titleId} className="hidden">{product.name}</span>
          <span id={product.descId} className="hidden">{product.shortDesc}</span>

          <p className="font-cormorant text-sm uppercase tracking-widest2 text-charcoal font-medium leading-tight">
            {product.name}
          </p>
          <p className="text-xs text-warm-gray mt-1">{product.shortDesc}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-charcoal font-medium">${product.price}</span>
            <div className="flex items-center gap-1">
              <Star size={10} className="fill-gold text-gold" />
              <span className="text-[10px] text-warm-gray">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
