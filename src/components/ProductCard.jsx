import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
        />
        {product.imageSecondary && (
          <img 
            src={product.imageSecondary} 
            alt={`${product.name} alternate view`}
            className="secondary-image"
            loading="lazy"
          />
        )}
        
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className="product-card-quick-add btn btn-gold text-xs px-6 py-2.5"
          >
            Quick Add
          </button>
        )}
      </div>
      
      <div className="p-4">
        <p className="product-name text-sm tracking-widest mb-1">{product.name}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-velmora-text-muted">${product.price}</p>
          <p className="text-xs text-velmora-text-muted">{product.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;