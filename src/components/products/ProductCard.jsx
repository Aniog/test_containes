import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '@/store';

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();

  return (
    <div className="group flex flex-col gap-4">
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-secondary w-full block">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
        />
        
        {/* Quick Add Button Overlay */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1, '18K Gold Plated');
            }}
            className="w-full bg-background/95 backdrop-blur-sm text-foreground py-3 uppercase tracking-widest text-xs font-medium border border-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col items-center text-center space-y-1 mt-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif uppercase tracking-widest text-sm hover:text-accent transition-colors" id={`product-name-${product.id}`}>
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;