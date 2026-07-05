import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const defaultVariant = product.variants.find(v => v.available) || product.variants[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="product-card">
        <div className="product-image-container">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="product-image primary"
          />
          {product.images[1] && (
            <img 
              src={product.images[1]} 
              alt={product.name}
              className="product-image secondary"
            />
          )}
          
          <div className="quick-add">
            <button 
              onClick={handleQuickAdd}
              className="quick-add-btn"
            >
              Quick Add
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="product-name text-sm text-velmora-brown tracking-widest">
              {product.name}
            </h3>
          </div>
          <p className="text-velmora-gold font-medium text-sm mb-2">
            ${product.price}
          </p>
          <p className="text-xs text-velmora-taupe line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;