import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showAddToCart = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="img-container aspect-[4/3] bg-[#F8F5F1]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <p className="product-name text-sm tracking-wider pr-2">{product.name}</p>
          <p className="text-sm font-medium whitespace-nowrap">${product.price}</p>
        </div>
        <p className="text-xs text-[#7A7368] mb-4">{product.category}</p>
        
        {showAddToCart && (
          <button
            onClick={handleAddToCart}
            className="btn btn-outline w-full text-xs py-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;