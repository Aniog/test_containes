import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div
        className="relative overflow-hidden bg-[rgb(var(--color-surface))]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[rgb(var(--color-foreground))] px-6 py-3 font-sans text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[rgb(var(--color-accent))] hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} className="inline-block mr-2" />
          Quick Add
        </button>

        {/* Badges */}
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-[rgb(var(--color-accent))] text-white px-3 py-1 font-sans text-xs uppercase tracking-wider">
            New
          </div>
        )}
        {product.isBestseller && !product.isNew && (
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-sans text-xs uppercase tracking-wider">
            Bestseller
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h3 className="font-serif text-sm uppercase tracking-wider leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star size={12} className="text-[rgb(var(--color-accent))] fill-current" />
            <span className="font-sans text-xs text-[rgb(var(--color-muted))] ml-1">
              {product.rating}
            </span>
          </div>
          <span className="font-sans text-xs text-[rgb(var(--color-muted))]">
            ({product.reviews})
          </span>
        </div>
        <p className="font-serif text-lg">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
