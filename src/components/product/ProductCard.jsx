import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <img
          alt={product.name}
          data-strk-img-id={`card-${product.id}-a1b2`}
          data-strk-img={`[card-desc-${product.id}] [card-title-${product.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-velmora-charcoal/10 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Hover quick-add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-velmora-cream text-velmora-charcoal text-[11px] tracking-wider uppercase py-2.5 font-medium hover:bg-velmora-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[9px] tracking-wider uppercase px-2 py-1">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <h3 id={`card-title-${product.id}`} className="font-serif text-xs md:text-sm tracking-widest uppercase text-velmora-charcoal group-hover:text-velmora-golddark transition-colors duration-300">
        {product.name}
      </h3>
      <p id={`card-desc-${product.id}`} className="sr-only">{product.description}</p>
      <div className="flex items-center gap-2 mt-1.5">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'fill-velmora-sand text-velmora-sand'
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] text-velmora-taupe">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-velmora-charcoal mt-1">${product.price}</p>
    </Link>
  );
}
