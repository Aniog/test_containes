import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] overflow-hidden bg-[#F0EBE3]">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          onMouseEnter={() => setShowSecond(true)}
          onMouseLeave={() => setShowSecond(false)}
        />
        {product.image2 && (
          <img 
            src={product.image2} 
            alt={product.name}
            className={`product-img-secondary absolute inset-0 w-full h-full object-cover ${showSecond ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        
        <button 
          onClick={(e) => { e.preventDefault(); onAddToCart(product); }}
          className="quick-add hidden md:block"
        >
          Quick Add
        </button>
      </Link>

      <div className="p-4 space-y-1">
        <Link to={`/product/${product.id}`}>
          <div className="product-name text-sm tracking-[0.12em] hover:text-[var(--color-gold)] transition-colors">
            {product.name}
          </div>
        </Link>
        <div className="flex items-center justify-between">
          <div className="text-sm text-[var(--color-text-muted)]">${product.price}</div>
          <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
            <Star size={12} className="fill-current" /> {product.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;