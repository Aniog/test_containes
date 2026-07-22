import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

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
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4 transition-all duration-700 ease-in-out group-hover:shadow-md">
        {/* Main Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
            isHovered ? "opacity-0" : "opacity-100"
          )}
          data-strk-img-id={`prod-card-${product.id}-1`}
          data-strk-img={`[prod-name-${product.id}] gold jewelry model editorial close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        
        {/* Hover Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          data-strk-img-id={`prod-card-${product.id}-2`}
          data-strk-img={`[prod-name-${product.id}] jewelry still life gold luxury background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />

        {/* Quick Add Button */}
        <button 
          onClick={handleAddToCart}
          className={cn(
            "absolute bottom-0 left-0 w-full bg-accent text-accent-foreground py-4 text-[10px] uppercase tracking-ultra-wide font-medium transition-all duration-500 flex items-center justify-center space-x-2",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          )}
        >
          <ShoppingBag className="w-3 h-3" />
          <span>Quick Add</span>
        </button>
      </div>

      <div className="text-center space-y-1">
        <h3 id={`prod-name-${product.id}`} className="text-sm font-serif uppercase tracking-widest group-hover:opacity-70 transition-opacity">
          {product.name}
        </h3>
        <p className="text-xs font-medium text-stone-600">$${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
