import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-deep/5 overflow-hidden mb-4">
        <img
          src={product.image_url}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered && product.hover_image_url ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.hover_image_url && (
          <img
            src={product.hover_image_url}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-cream text-deep font-sans text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-accent-gold`}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>

        {/* Badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-accent-gold text-deep text-[10px] uppercase tracking-widest px-2.5 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm tracking-widest uppercase text-text-primary">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-text-secondary">{product.short_description}</p>
        <div className="flex items-center gap-2 pt-1">
          <span className="font-sans text-sm font-medium">${product.price}</span>
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-accent-gold text-accent-gold" />
              <span className="text-xs text-text-secondary">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
