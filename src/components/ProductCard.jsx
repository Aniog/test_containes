import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import strkImgConfig from '../strk-img-config.json';

function getImgUrl(key) {
  const entry = strkImgConfig[key];
  return entry?.results?.[0]?.url || '';
}

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const primaryKey = `${product.id}-primary-${index}`;
  const hoverKey = `${product.id}-hover-${index}`;
  const primarySrc = getImgUrl(primaryKey);
  const hoverSrc = getImgUrl(hoverKey);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden rounded-sm mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={primaryKey}
          data-strk-img={`[${product.id}-name] jewelry product photo`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={primarySrc}
          alt={product.images[0].alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={hoverKey}
          data-strk-img={`[${product.id}-name] jewelry worn lifestyle photo`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={hoverSrc}
          alt={product.images[1]?.alt || product.images[0].alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 bg-charcoal/90 backdrop-blur-sm text-white py-2.5 font-sans text-xs tracking-wider uppercase hover:bg-charcoal transition-colors"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-center px-2">
        <h3
          id={`${product.id}-name`}
          className="font-serif text-sm md:text-base tracking-widest-plus uppercase text-charcoal group-hover:text-gold transition-colors duration-300 mb-1"
        >
          {product.name}
        </h3>
        <p className="font-sans text-sm text-warm-gray mb-2">
          ${product.price}
        </p>
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.round(product.rating)
                  ? 'fill-gold text-gold'
                  : 'fill-none text-warm-gray-light'
              }
            />
          ))}
          <span className="font-sans text-[11px] text-warm-gray ml-1">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
