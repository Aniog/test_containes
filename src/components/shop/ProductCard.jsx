import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
    const { id, name, price, category, description, imgId, titleId } = product;
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);
  
    const handleQuickAdd = (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product, 'Gold');
      toast.success(`${name} added to bag`);
    };
  
    return (
      <div 
        className="group relative flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${id}`} className="relative aspect-[3/4] overflow-hidden bg-velmora-border mb-4">
          {/* Primary Image */}
          <img
            data-strk-img-id={`prod-main-${imgId}`}
            data-strk-img={`[${titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />
          {/* Hover Image */}
          <img
            data-strk-img-id={`prod-hover-${imgId}`}
            data-strk-img={`model wearing [${titleId}] jewelry gold`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={`${name} on model`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <Button 
            onClick={handleQuickAdd}
            className="w-full bg-white text-velmora-fg hover:bg-velmora-gold hover:text-white rounded-none uppercase tracking-[0.2em] text-[10px] h-10 shadow-lg"
          >
            Quick Add
          </Button>
        </div>
      </Link>

      <div className="flex flex-col items-center text-center">
        <span className="text-[9px] uppercase tracking-[0.2em] text-velmora-muted mb-2">{category}</span>
        <h3 className="font-serif text-xs md:text-sm uppercase tracking-[0.2em] mb-1 leading-tight px-4" id={titleId}>
          {name}
        </h3>
        <p className="hidden" id={`item-desc-${id}`}>{description}</p>
        <p className="text-sm font-light text-velmora-muted">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
