import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [showSecondary, setShowSecondary] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div 
        className="product-image-container"
        onMouseEnter={() => setShowSecondary(true)}
        onMouseLeave={() => setShowSecondary(false)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        {product.imageSecondary && (
          <img 
            src={product.imageSecondary} 
            alt={product.name}
            className="product-image product-image-secondary"
          />
        )}
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-4 space-y-1">
        <p className="product-name text-sm tracking-[0.12em] pr-2">{product.name}</p>
        <div className="flex items-center justify-between pt-1">
          <p className="text-sm text-[var(--color-gray)]">${product.price}</p>
          <div className="flex items-center gap-1 text-xs text-[var(--color-gold)]">
            ★ {product.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;