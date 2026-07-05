import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@/store';
import { Button } from '@/components/ui/button';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useStore();

  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted overflow-hidden mb-4">
        <img 
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] fine gold jewelry editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'} group-hover:scale-105`}
        />
        <img 
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] fine gold jewelry worn on model editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} on model`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
        />
        
        {/* Quick Add Button showing on hover for desktop */}
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
          <Button 
            variant="secondary" 
            className="w-full bg-background/90 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault(); // prevent navigation
              addToCart(product);
            }}
          >
            Quick Add
          </Button>
        </div>
      </Link>
      
      <div className="flex flex-col items-center text-center space-y-1">
        <Link to={`/product/${product.id}`} className="font-serif uppercase tracking-widest text-sm hover:text-primary transition-colors line-clamp-1">
          <span id={product.titleId}>{product.name}</span>
        </Link>
        <p className="hidden" id={product.descId}>{product.description}</p>
        <p className="text-muted-foreground text-sm">${product.price}</p>
      </div>

      {/* Mobile add button */}
      <Button 
        variant="outline"
        className="mt-4 md:hidden text-xs"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </div>
  );
}