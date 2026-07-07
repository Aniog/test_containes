import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
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
          className="product-card-quick-add btn btn-gold btn-sm"
        >
          Quick Add
        </button>
      </div>

      <div className="p-4">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="price text-sm text-text-muted">${product.price}</span>
          <span className="text-xs text-text-light">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
