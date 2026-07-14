import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [showSecondary, setShowSecondary] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
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
          className="product-image"
        />
        {product.imageSecondary && (
          <img 
            src={product.imageSecondary} 
            alt={product.name}
            className="product-image-secondary"
            style={{ opacity: showSecondary ? 1 : 0 }}
          />
        )}
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-4">
        <p className="product-name text-sm tracking-[0.15em] mb-1">{product.name}</p>
        <p className="text-sm text-[#6B6058]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;