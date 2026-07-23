import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 'Gold', 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5] relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="primary w-full h-full object-cover"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`}
            className="secondary w-full h-full object-cover"
          />
        )}
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-sm bg-white text-[#2C2824] hover:bg-[#2C2824] hover:text-white border border-[#2C2824]"
          disabled={isAdding}
        >
          {isAdding ? 'Added' : 'Quick Add'}
        </button>
      </div>
      
      <div className="p-4">
        <p className="product-name text-sm tracking-[0.12em] mb-1 pr-8">{product.name}</p>
        <p className="text-sm text-[#6B645C]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;