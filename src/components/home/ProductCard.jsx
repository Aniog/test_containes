import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[3/4] bg-secondary">
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[product-${product.id}-name] gold jewelry product shot neutral background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
        />
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[product-${product.id}-name] gold jewelry model ear neck close-up editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        />
        
        {/* Quick Actions */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 translate-y-full group-hover:translate-y-0",
          "bg-white/90 backdrop-blur-sm flex gap-2"
        )}>
          <button 
            onClick={handleQuickAdd}
            className="flex-1 bg-primary text-white text-[10px] uppercase-widest py-3 flex items-center justify-center gap-2 hover:bg-accent transition-colors"
          >
            <ShoppingBag className="w-3 h-3" /> Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <h3 id={`product-${product.id}-name`} className="text-[11px] uppercase-extra font-medium mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-serif opacity-60">
          ${product.price}.00
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
