import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3] bg-[var(--color-light-gray)] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.imageAlt}
          className="primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.hoverImage} 
          alt={product.imageAlt}
          className="hover absolute inset-0 w-full h-full object-cover opacity-0"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-8 py-3"
        >
          Quick Add
        </button>
      </div>
      <div className="pt-4 pb-2">
        <div className="product-name text-sm tracking-widest mb-1 pr-2">{product.name}</div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[var(--color-taupe)]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;