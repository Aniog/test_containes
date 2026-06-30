import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductCard = ({ product, className }) => {
  const { addToCart } = useCart();

  return (
    <div className={cn("group flex flex-col", className)}>
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-[#F5F2ED] aspect-[4/5] relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          data-strk-img-id={`prod-img-${product.id}`}
          data-strk-img={product.imageQueries[0]}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        {product.images[1] && (
          <div className="absolute inset-0 transition-opacity duration-1000 opacity-0 group-hover:opacity-100">
             <img 
              src={product.images[1]} 
              alt={`${product.name} hover`}
              data-strk-img-id={`prod-img-hover-${product.id}`}
              data-strk-img={product.imageQueries[1]}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10 px-4 w-full max-w-[200px]">
          <Button 
            variant="premium" 
            size="sm" 
            className="w-full flex items-center gap-2 bg-white text-black hover:bg-neutral-100 border-none shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingBag size={12} strokeWidth={2} />
            Quick Add
          </Button>
        </div>
      </Link>
      
      <div className="mt-8 text-center space-y-2">
        <h3 id={`product-${product.id}-title`} className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p id={`product-${product.id}-desc`} className="hidden">{product.desc}</p>
        <p className="text-sm font-serif italic text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
