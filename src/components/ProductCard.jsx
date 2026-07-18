import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="product-image product-image-secondary"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-gold text-xs px-6 py-3"
        >
          Quick Add
        </button>
      </div>
      <div className="p-5">
        <div className="product-name text-sm tracking-[0.15em] mb-1.5 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#6B665F] text-sm">${product.price}</span>
          <span className="text-[#B8976E] text-xs tracking-[0.1em]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
