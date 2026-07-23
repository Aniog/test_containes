import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add without auto-opening drawer to avoid overlay intercept issues
    addToCart(product, 'Gold', 1, false);
  };

  // Generate placeholder image URLs using warm neutral backgrounds
  const primaryImage = `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center`;
  const secondaryImage = `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&crop=center`;

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img 
          src={primaryImage} 
          alt={product.name}
          className="product-card-image-primary"
        />
        <img 
          src={secondaryImage} 
          alt={`${product.name} alternate view`}
          className="product-card-image-secondary"
        />
        
        {showQuickAdd && (
          <div className="product-card-quick-add">
            <button 
              onClick={handleQuickAdd}
              className="btn btn-primary btn-sm btn-full"
            >
              Quick Add
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="product-name mb-1">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B6560]">${product.price}</span>
          <span className="text-xs text-[#9A9289]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
