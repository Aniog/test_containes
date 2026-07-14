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
            size="sm" 
            onClick={handleAddToCart}
            className="text-xs"
          >
            Quick Add
          </Button>
        </div>
      </div>
      <div className="product-card-info">
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-price">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;