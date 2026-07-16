import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="product-card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container bg-[#F5F2ED]">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="product-image-secondary"
        />
        
        <button 
          onClick={handleAddToCart}
          className="quick-add btn btn-gold text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-4">
        <p className="product-name text-sm tracking-[0.15em] mb-1 pr-8">{product.name}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#6B6560]">${product.price}</p>
          <div className="flex items-center gap-1 text-xs text-[#B8976D]">
            ★ {product.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;