import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`}
            className="product-image product-image-secondary"
          />
        )}
        
        {showQuickAdd && (
          <div className="quick-add" onClick={(e) => e.stopPropagation()}>
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleQuickAdd}
            >
              Quick Add
            </Button>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name-text text-[#1C1917] group-hover:text-[#B89778] transition-colors">
          {product.name}
        </h3>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;