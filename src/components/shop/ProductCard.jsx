import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-secondary relative aspect-[3/4]">
        <img 
          data-strk-img-id={`prod-main-${product.id}`}
          data-strk-img={product.imageSearch}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <img 
          data-strk-img-id={`prod-hover-${product.id}`}
          data-strk-img={product.imageSearch2 || product.imageSearch}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} detail`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-1000",
            isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
          )}
        />
        
        <div className={cn(
          "absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 transition-all duration-500",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Button 
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="rounded-none bg-background/95 text-foreground hover:bg-accent hover:text-accent-foreground border-none px-6 h-10 shadow-xl tracking-widest uppercase text-[10px]"
          >
            <ShoppingBag size={14} className="mr-2" />
            Add to Bag
          </Button>
        </div>
      </Link>
      
      <div className="mt-5 text-center px-2">
        <p className="text-[9px] text-accent uppercase tracking-[0.3em] mb-1 font-bold">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-serif text-[14px] uppercase tracking-[0.2em] group-hover:text-accent transition-colors duration-300">{product.name}</h3>
        </Link>
        <p className="text-[13px] font-sans mt-1 text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
