import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`}
            className="product-image-secondary"
          />
        )}
        
        {/* Quick Add */}
        <div className="quick-add" onClick={(e) => e.stopPropagation()}>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={handleAddToCart}
            className="shadow-lg"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name-text">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
