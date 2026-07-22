import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-card-image">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-card-image-primary"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name}
            className="product-card-image-secondary"
          />
        )}
        
        <button 
          onClick={handleAddToCart}
          className="product-card-quick-add btn btn-sm btn-primary"
        >
          Quick Add
        </button>
      </div>
      
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
