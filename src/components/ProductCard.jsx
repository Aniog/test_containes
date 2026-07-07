import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    addToCart({ ...product, variant: 'gold' }, 1); // Default to gold for quick add
  };

  return (
    <div 
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-secondary w-full mb-4">
        {/* Primary Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Hover Image */}
        <img 
          src={product.hoverImage || product.image} 
          alt={`${product.name} alternative view`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Quick Add Button Overlay */}
        <div className={cn(
          "absolute bottom-0 left-0 w-full p-4 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0",
        )}>
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground transition-colors border border-transparent hover:border-primary shadow-sm"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="flex flex-col gap-1 items-center text-center px-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif uppercase tracking-widest text-sm md:text-base cursor-pointer hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm">${product.price}</p>
      </div>
    </div>
  );
};
