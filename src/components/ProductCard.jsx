import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold');
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div 
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span id={`prod-${product.id}-context-1`} className="hidden">jewelry</span>
      <span id={`prod-${product.id}-context-2`} className="hidden">jewelry close up wearing</span>
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-brand-beige mb-6 block">
        <img
          data-strk-img-id={`prod-${product.id}-main`}
          data-strk-img={`[prod-${product.id}-name] [prod-${product.id}-context-1]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <img
          data-strk-img-id={`prod-${product.id}-alt`}
          data-strk-img={`[prod-${product.id}-name] [prod-${product.id}-context-2]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
          alt={`${product.name} hover`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
          )}
        />

        {/* Quick Actions Overlay */}
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-4 transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
          "flex justify-center"
        )}>
          <button 
            onClick={handleQuickAdd}
            className="btn-premium flex items-center gap-2 py-3 px-6 text-[10px]"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col items-center text-center px-2">
        <h3 id={`prod-${product.id}-name`} className="uppercase tracking-[0.2em] font-bold text-[10px] sm:text-xs mb-2 transition-colors group-hover:text-accent">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="font-serif text-sm">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
