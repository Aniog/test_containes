import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="relative aspect-[4/3.5] bg-[var(--velmora-bg-alt)] overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`}
            className="secondary-image absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Quick Add */}
        <button 
          onClick={handleAddToCart}
          className="quick-add btn btn-gold text-xs py-2 px-6 bg-white/95 hover:bg-white"
        >
          Quick Add
        </button>
      </div>

      <div className="pt-4 pb-2 px-1">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="product-name text-sm tracking-[0.1em] leading-tight">{product.name}</h3>
            <p className="text-xs text-[var(--velmora-text-muted)] mt-1">{product.category}</p>
          </div>
          <span className="text-sm font-medium whitespace-nowrap">{formatPrice(product.price)}</span>
        </div>
        
        {/* Stars */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-[var(--velmora-gold)]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[10px]">★</span>
            ))}
          </div>
          <span className="text-[10px] text-[var(--velmora-text-muted)]">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
