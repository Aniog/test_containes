import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart, showQuickAdd = true }) => {
  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="product-image-secondary"
        />
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className="quick-add btn btn-gold text-xs px-8 py-3"
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="p-4 space-y-1">
        <p className="product-name text-sm tracking-widest">{product.name}</p>
        <p className="text-[#6B6560] text-sm">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;