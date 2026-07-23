import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.variants?.[0] || null);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Hover overlay */}
        {showQuickAdd && (
          <div
            className={`absolute inset-0 bg-black/10 flex items-end justify-center pb-4 transition-opacity duration-400 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex gap-2">
              <button
                onClick={handleQuickAdd}
                className="bg-velmora-white text-velmora-base px-4 py-2.5 text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors duration-300 shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Bag
              </button>
            </div>
          </div>
        )}

        {/* Tags */}
        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] font-medium tracking-widest uppercase px-2.5 py-1">
            Bestseller
          </span>
        )}
        {product.tags?.includes('new') && !product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-base text-white text-[10px] font-medium tracking-widest uppercase px-2.5 py-1">
            New
          </span>
        )}
      </div>

      <div className="space-y-1.5">
        <h3
          id={`product-name-${product.id}`}
          className="font-serif text-sm tracking-widest-xl uppercase text-velmora-base"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-muted">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-velmora-base">${product.price}</p>
      </div>
    </Link>
  );
}
