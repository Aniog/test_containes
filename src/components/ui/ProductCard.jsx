import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const ProductCard = ({ product }) => {
  const [selectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    // Stop all propagation - this button must never trigger navigation
    e.preventDefault();
    e.stopPropagation();
    if (e.nativeEvent) {
      if (e.nativeEvent.stopImmediatePropagation) e.nativeEvent.stopImmediatePropagation();
    }
    addToCart(product, selectedVariant, 1);
  };

  const stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  return (
    <div className="product-card">
      {/* Image container - Link wraps ONLY the images */}
      <div className="product-card-image">
        <Link 
          to={`/product/${product.slug}`} 
          className="product-card-image-link"
          aria-label={product.name}
        >
          <img 
            src={product.images[0]} 
            alt={product.name}
            loading="lazy"
          />
          {product.images[1] && (
            <img 
              src={product.images[1]} 
              alt={product.name}
              className="product-card-image-secondary"
              loading="lazy"
            />
          )}
        </Link>

        {/* Quick Add is a SIBLING to the Link, not inside it */}
        <div 
          className="product-card-quick-add"
          onClick={stopPropagation}
          onMouseDown={stopPropagation}
          onPointerDown={stopPropagation}
        >
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleAddToCart}
            onMouseDown={stopPropagation}
            onPointerDown={stopPropagation}
          >
            Quick Add
          </Button>
        </div>
      </div>

      {/* Info is a separate Link - quick-add is never a descendant */}
      <Link to={`/product/${product.slug}`} className="product-card-info-link">
        <div className="product-card-info">
          <div className="product-card-name">{product.name}</div>
          <div className="product-card-price">${product.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
