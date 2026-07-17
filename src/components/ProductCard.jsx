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
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="secondary absolute inset-0 w-full h-full object-cover"
        />
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-accent text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      
      <div className="pt-4 pb-2 px-1">
        <div className="product-name text-sm tracking-[0.15em] mb-1">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-light">${product.price}</span>
          <span className="text-xs text-text-light">{product.material}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;