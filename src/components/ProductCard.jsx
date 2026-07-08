import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div 
        className="product-image-container aspect-[4/3] mb-4 relative"
        onMouseEnter={() => setShowQuickAdd(true)}
        onMouseLeave={() => setShowQuickAdd(false)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image w-full h-full object-cover" 
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name} 
          className="product-image-secondary w-full h-full object-cover" 
        />
        
        {/* Quick Add Button */}
        <button 
          onClick={handleAddToCart}
          className={`absolute bottom-4 right-4 bg-white px-4 py-2 text-xs tracking-[0.1em] flex items-center gap-2 shadow-lg transition-all ${showQuickAdd ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <ShoppingBag size={14} /> ADD TO CART
        </button>
      </div>
      
      <div className="px-1">
        <div className="product-name text-sm tracking-wider mb-1 pr-8">{product.name}</div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#6B665F]">${product.price}</span>
          <span className="text-xs text-[#6B665F]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;