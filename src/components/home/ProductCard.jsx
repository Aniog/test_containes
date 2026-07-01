import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <div
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-[var(--color-velmora-100)] overflow-hidden mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[var(--color-charcoal)] text-white text-[10px] tracking-wider uppercase px-3 py-1.5">
              {product.badge}
            </span>
          )}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 btn-accent text-xs py-3 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ShoppingBag className="w-4 h-4 mr-2 inline" />
            Add to Bag
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.slug}`} className="block">
        <h3 className="product-name text-sm mb-1.5 group-hover:text-[var(--color-gold-600)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[var(--color-gold-400)] text-[var(--color-gold-400)]' : 'text-[var(--color-velmora-300)]'}`}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--color-velmora-500)]">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </Link>
    </div>
  );
}
