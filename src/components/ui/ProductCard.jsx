import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import StarRating from './StarRating';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const fields = product.data || product;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: fields.name,
      slug: fields.slug,
      price: fields.price,
      image_url: fields.image_url,
    });
  };

  return (
    <Link
      to={`/product/${fields.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-bg">
        <img
          src={fields.image_url}
          alt={fields.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out-expo group-hover:scale-105"
        />
        {fields.hover_image_url && (
          <img
            src={fields.hover_image_url}
            alt={fields.name}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        {fields.is_bestseller && (
          <span className="absolute top-3 left-3 bg-velmora-dark text-white text-[10px] font-semibold tracking-widest px-2 py-1 uppercase">
            Bestseller
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-3 text-center text-xs font-medium tracking-widest uppercase text-velmora-dark transition-transform duration-300 ease-in-out-expo flex items-center justify-center gap-2 ${
            hovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="mt-3">
        <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-dark">
          {fields.name}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-medium text-velmora-dark">${fields.price.toFixed(2)}</span>
          {fields.original_price && (
            <span className="text-xs text-velmora-muted line-through">
              ${fields.original_price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <StarRating rating={fields.rating || 0} size={12} />
          <span className="text-[10px] text-velmora-muted">({fields.review_count || 0})</span>
        </div>
      </div>
    </Link>
  );
}
