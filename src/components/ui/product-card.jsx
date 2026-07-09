import { Link } from 'react-router-dom';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4 rounded-sm">
        <img
          data-strk-img-id={product.images?.primary?.id || `prod-${product.id}-pri`}
          data-strk-img={product.images?.primary?.query || `[prod-title-${product.id}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          data-strk-img-id={product.images?.secondary?.id || `prod-${product.id}-sec`}
          data-strk-img={product.images?.secondary?.query || `[prod-title-${product.id}] alternate`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out",
            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          )}
        />
        
        {/* Quick Add Button overlay */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 ease-out",
          isHovered && "translate-y-0"
        )}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-background/95 backdrop-blur-sm text-foreground py-3 text-sm font-medium uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col items-center text-center px-2">
        <Link to={`/product/${product.id}`} className="block w-full">
          <h3 id={`prod-title-${product.id}`} className="font-serif text-lg tracking-wider uppercase mb-1 hover:text-accent transition-colors truncate">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm">${product.price}</p>
        </Link>
      </div>
    </div>
  );
}