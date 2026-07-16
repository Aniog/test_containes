import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[var(--velmora-bg-secondary)] overflow-hidden mb-4">
        <img
          data-strk-img-id={`product-${product.id}-card`}
          data-strk-img={`[${product.id}-name] [product-card-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`product-${product.id}-card-hover`}
          data-strk-img={`[${product.id}-name] [product-card-hover-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-[var(--velmora-gold)] text-white text-[10px] tracking-widest uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 backdrop-blur-sm text-[var(--velmora-text)] text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      <div className="text-center">
        <h3 id={`${product.id}-name`} className="product-name text-sm md:text-base text-[var(--velmora-text)] mb-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
          <span className="text-xs text-[var(--velmora-text-secondary)]">{product.rating}</span>
          <span className="text-xs text-[var(--velmora-text-secondary)]">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-[var(--velmora-text)]">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
