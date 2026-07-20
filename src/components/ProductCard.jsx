import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div 
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-brand-stone aspect-[3/4]">
        <img 
          data-strk-img-id={`product-img-${product.id}-1`}
          data-strk-img={`${product.name} jewelry gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <img 
          data-strk-img-id={`product-img-${product.id}-2`}
          data-strk-img={`${product.name} lifestyle jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} detail`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out opacity-0",
            isHovered ? "scale-105 opacity-100" : "scale-100"
          )}
        />
        
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-4 transition-all duration-300 transform",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-white/90 backdrop-blur-sm text-brand-dark py-3 px-4 text-[10px] uppercase tracking-widest font-medium flex items-center justify-center space-x-2 hover:bg-brand-dark hover:text-white transition-colors duration-300"
          >
            <ShoppingBag size={14} />
            <span>Quick Add</span>
          </button>
        </div>
      </Link>

      <div className="mt-4 flex flex-col items-center">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-xs uppercase tracking-widest font-medium text-center hover:text-brand-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-black/60">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
