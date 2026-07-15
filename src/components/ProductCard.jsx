import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`, {
      description: "You're one step closer to your new treasure.",
      className: "rounded-none font-serif",
    });
  };

  return (
    <div 
      className={cn("group block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-stone-100 aspect-[3/4]">
        <img
          data-strk-img-id={`product-card-1-${product.id}`}
          data-strk-img={`[product-name-${product.id}] jewelry gold luxury`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
          )}
          alt={product.name}
        />
        <img
          data-strk-img-id={`product-card-2-${product.id}`}
          data-strk-img={`[product-name-${product.id}] jewelry gold model wearing`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
          )}
          alt={`${product.name} alternate`}
        />
        
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 transform translate-y-full group-hover:translate-y-0",
          "hidden md:block" // Only show quick add on desktop hover
        )}>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-black py-3 text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg hover:bg-black hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>

        {/* Mobile Quick Add Icon */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full md:hidden"
        >
          <ShoppingBag size={14} />
        </button>
      </Link>

      <div className="mt-4 space-y-1">
        <h3 id={`product-name-${product.id}`} className="font-serif uppercase tracking-[0.2em] text-xs font-semibold">
          <Link to={`/product/${product.id}`} className="hover:opacity-70 transition-opacity">
            {product.name}
          </Link>
        </h3>
        <p className="text-stone-500 tracking-widest text-[11px]">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
