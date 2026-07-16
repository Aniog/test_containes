import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to your treasure chest`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted relative mb-4">
        <img
          data-strk-img-id={`prod-img-main-${product.id}`}
          data-strk-img={`[prod-name-${product.id}] jewelry piece elegant view`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
          alt={product.name}
        />
        {/* Hover image */}
        <img
            data-strk-img-id={`prod-img-hover-${product.id}`}
            data-strk-img={`[prod-name-${product.id}] jewelry piece lifestyle model view`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
            alt={`${product.name} lifestyle`}
        />
        
        {/* Quick Add */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-primary py-3 uppercase tracking-widest text-[10px] font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-white flex items-center justify-center space-x-2 shadow-sm"
        >
          <ShoppingBag size={14} />
          <span>Quick Add</span>
        </button>
      </div>
      
      <div className="space-y-1">
        <h3 id={`prod-name-${product.id}`} className="text-xs uppercase tracking-widest-plus font-medium text-primary line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
