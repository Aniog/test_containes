import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product, className }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div 
      className={cn("group relative flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-stone-100">
        {/* Main Image */}
        <img
          data-strk-img-id={`product-${product.id}-img-1`}
          data-strk-img={`[product-${product.id}-title] [product-${product.id}-category] jewelry gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        
        {/* Hover Image */}
        <img
          data-strk-img-id={`product-${product.id}-img-2`}
          data-strk-img={`[product-${product.id}-title] accessory gold detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} - view 2`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out",
            isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
          )}
        />

        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white px-2 py-1 text-[10px] uppercase tracking-widest font-medium text-stone-900 shadow-sm">
            New
          </span>
        )}

        {/* Quick Add Button */}
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-4 transition-all duration-500 translate-y-full group-hover:translate-y-0",
          "opacity-0 group-hover:opacity-100"
        )}>
          <Button 
            onClick={handleAddToCart}
            className="w-full rounded-none bg-white hover:bg-stone-900 text-stone-900 hover:text-white transition-colors duration-300 font-sans text-xs tracking-widest h-11"
          >
            QUICK ADD
          </Button>
        </div>
      </Link>

      <div className="pt-4 flex flex-col items-center text-center">
        <p id={`product-${product.id}-category`} className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 id={`product-${product.id}-title`} className="text-xs font-semibold uppercase tracking-[0.15em] hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm font-sans text-stone-600 font-medium">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
