import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].id, 1);
  };

  return (
    <div
      ref={containerRef}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={`${product.imgId}-primary`}
            data-strk-img={`[${product.id}-name] ${product.description}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.imgAlt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Hover image (slightly different angle) */}
          <img
            data-strk-img-id={`${product.imgId}-hover`}
            data-strk-img={`${product.name} jewelry detail close-up gold accessory`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Quick add button */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-400 ${
              hovered
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="w-full bg-stone-950/90 backdrop-blur-sm text-cream-50 py-2.5 font-sans text-[10px] uppercase tracking-[0.18em] font-medium hover:bg-stone-950 transition-colors"
            >
              Quick Add
            </button>
          </div>
        </div>

        {/* Product info */}
        <div id={`${product.id}-name`} className="text-center">
          <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-stone-950 mb-1.5 group-hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
          <p className="font-sans text-xs text-stone-500 mb-2 line-clamp-1">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < Math.floor(product.rating)
                    ? 'fill-gold-400 text-gold-400'
                    : 'fill-stone-200 text-stone-200'
                }
              />
            ))}
            <span className="font-sans text-[10px] text-stone-400 ml-1">
              ({product.reviewCount})
            </span>
          </div>

          <p className="font-sans text-sm font-medium text-stone-950">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
