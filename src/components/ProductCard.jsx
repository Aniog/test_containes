import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const data = product.data;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, data.options?.[0] || 'Gold');
    toast.success(`Added ${data.name} to bag`);
  };

  return (
    <div 
      className="group relative flex flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${data.slug}`} className="relative aspect-[3/4] bg-[#F5F5F3] overflow-hidden">
        <img 
          src={isHovered && data.hover_image ? data.hover_image : data.main_image} 
          alt={data.name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-1000 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <button 
          onClick={handleQuickAdd}
          className={cn(
            "absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 transform translate-y-full flex items-center justify-center gap-2",
            isHovered ? "translate-y-0" : ""
          )}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </Link>
      
      <div className="flex flex-col items-center text-center px-2">
        <h3 className="text-xs font-serif uppercase tracking-[0.2em] font-medium leading-loose">
          <Link to={`/product/${data.slug}`} className="hover:text-velmora-accent transition-colors">
            {data.name}
          </Link>
        </h3>
        <p className="text-sm font-medium text-velmora-muted mt-1">
          ${data.price}
        </p>
      </div>
    </div>
  );
}
