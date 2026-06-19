import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5] relative">
        <img 
          src={product.images.gold.primary} 
          alt={product.name}
          className="product-image primary"
        />
        <img 
          src={product.images.gold.secondary} 
          alt={product.name}
          className="product-image secondary"
        />
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold text-xs py-2.5 px-8"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="product-name text-sm tracking-[0.12em] pr-2">{product.name}</h3>
          <span className="text-sm font-medium whitespace-nowrap">${product.price}</span>
        </div>
        <p className="text-xs text-[#6b6763] tracking-[0.05em]">{product.category.toUpperCase()}</p>
      </div>
    </Link>
  );
};

export default ProductCard;