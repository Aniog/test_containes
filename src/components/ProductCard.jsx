import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="product-image-container aspect-[4/3] bg-[#F0EDE6] overflow-hidden">
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
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center gap-1 mb-1">
          <Star size={12} className="fill-[#C5A46E] text-[#C5A46E]" />
          <span className="text-xs text-[#8A847D]">{product.rating}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm tracking-[0.15em] mb-1 hover:text-[#8B7355] transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-[#8A847D] mb-3">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-medium">${product.price}</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="text-xs tracking-[0.1em] uppercase border-b border-[#8B7355] hover:text-[#8B7355]"
          >
            Quick Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;