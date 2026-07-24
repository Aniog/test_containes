import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { toast } from 'sonner';
import { cn } from '../../lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-stone-100 mb-4 overflow-hidden">
        {/* Main Image */}
        <img
          data-strk-img-id={product.imgId + "-1"}
          data-strk-img={`[prod-title-${product.id}] gold jewelry model editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Hover Image */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-700",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <img
            data-strk-img-id={product.imgId + "-2"}
            data-strk-img={`[prod-title-${product.id}] gold jewelry detailed macro closeup`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur text-primary text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors shadow-sm"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="text-center px-2">
        <h3 id={`prod-title-${product.id}`} className="text-sm font-serif uppercase tracking-widest mb-1 group-hover:text-gold transition-colors truncate">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500 font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

