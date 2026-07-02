import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  if (!product) return null;
  const { id, data } = product;
  const { name, price, rating, category } = data;

  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-img-${id}`}
          data-strk-img={`[prod-title-${id}] [prod-cat-${id}] jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-luxury group-hover:scale-110"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={name}
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-luxury translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-background text-foreground py-3 uppercase-spaced text-[10px] font-bold shadow-xl hover:bg-accent hover:text-white transition-luxury flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center text-center">
        <span id={`prod-cat-${id}`} className="text-[10px] text-muted-foreground uppercase-spaced">{category}</span>
        <Link to={`/product/${id}`} className="group-hover:text-accent transition-colors">
          <h3 id={`prod-title-${id}`} className="uppercase-spaced text-sm font-semibold tracking-widest">{name}</h3>
        </Link>
        <p className="text-sm font-light">${price}</p>
        
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "w-2.5 h-2.5", 
                i < Math.floor(rating) ? "fill-accent text-accent" : "fill-muted text-muted"
              )} 
            />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">({rating})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
