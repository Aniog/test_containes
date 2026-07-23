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
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-card-image">
        <img
          src={product.images[0]}
          alt={product.name}
          className="primary-image"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="secondary-image"
          />
        )}
        
        <button
          onClick={handleAddToCart}
          className="product-card-quick-add btn btn-primary btn-sm"
        >
          Quick Add
        </button>
      </div>

      <div className="p-4">
        <p className="product-name text-sm tracking-wider mb-1 pr-8">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B6058]">
            ${product.price}
          </span>
          <span className="text-xs text-[#6B6058]">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
