import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e) => {
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
      <div className="product-image-container aspect-[4/3] bg-[#F5F1EA] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Quick Add Button */}
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>

      <div className="pt-4 pb-6 px-1">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex text-[#B8976E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs text-[#6B665F]">({product.reviews})</span>
        </div>
        
        <h3 className="product-name text-sm tracking-[0.15em] mb-1 pr-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-[#6B665F]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
