import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    onAddToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container bg-[var(--color-bg)]">
        <img 
          src={product.images.primary} 
          alt={product.name}
          className="product-image primary"
        />
        <img 
          src={product.images.secondary} 
          alt={product.name}
          className="product-image secondary"
        />
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-8 py-3"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <div className="stars flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs text-[var(--color-text-muted)] ml-1">
            {product.rating}
          </span>
        </div>
        
        <h3 className="product-name text-sm mb-1 pr-2">{product.name}</h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-3">${product.price}</p>
        
        <div className="flex gap-2" onClick={e => e.preventDefault()}>
          {product.variants.map(variant => (
            <button
              key={variant}
              onClick={(e) => {
                e.preventDefault();
                setSelectedVariant(variant);
              }}
              className={`variant-pill text-xs ${selectedVariant === variant ? 'active' : ''}`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;