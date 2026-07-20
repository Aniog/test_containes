import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart without auto-opening drawer.
    // User can open via cart icon; prevents overlay from blocking further clicks.
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
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
        <div className="product-card-quick-add">
          <Button 
            variant="primary" 
            size="sm" 
            onClick={handleAddToCart}
          >
            Quick Add
          </Button>
        </div>
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
