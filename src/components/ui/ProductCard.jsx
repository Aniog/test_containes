import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useEffect, useRef } from 'react';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (cardRef.current) ImageHelper.loadImages(strkImgConfig, cardRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
          {/* Primary image */}
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
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] gold jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />

          {/* Tags */}
          {product.tags?.includes('new') && (
            <span className="absolute top-3 left-3 font-inter text-[9px] uppercase tracking-widest bg-gold text-white px-2 py-1">
              New
            </span>
          )}
          {product.tags?.includes('gift') && (
            <span className="absolute top-3 left-3 font-inter text-[9px] uppercase tracking-widest bg-charcoal text-ivory px-2 py-1">
              Gift
            </span>
          )}

          {/* Quick add button */}
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <button
              onClick={handleAddToCart}
              className="w-full bg-charcoal/90 backdrop-blur-sm text-ivory font-inter text-[10px] uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-200"
            >
              <ShoppingBag className="w-3 h-3" />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="pt-4 pb-2">
          <p className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-1">
            {product.category}
          </p>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest text-charcoal leading-tight group-hover:text-gold transition-colors duration-200"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.shortDescription}</p>

          <div className="flex items-center justify-between mt-2">
            <span className="font-inter text-sm font-medium text-charcoal">
              {formatPrice(product.price)}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="font-inter text-xs text-taupe">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
