import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, className }) => {
  const { addToCart } = useCart();

  return (
    <div className={cn("group flex flex-col gap-3", className)}>
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            data-strk-img-id={`product-img-${product.id}`}
            data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Reveal Overlay (mimics second image) */}
          <div className="absolute inset-0 bg-velmora-stone/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Link>
        
        {/* Quick Add Toggle */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-4 left-4 right-4 bg-velmora-warm/90 backdrop-blur-sm py-3 flex items-center justify-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold border border-velmora-taupe/10 hover:bg-velmora-charcoal hover:text-velmora-warm"
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`}>
            <h3 id={`product-title-${product.id}`} className="text-xs font-serif uppercase tracking-widest leading-tight hover:text-velmora-gold transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="text-xs font-medium text-velmora-charcoal/60">${product.price}</span>
        </div>
        <p id={`product-desc-${product.id}`} className="text-[10px] text-velmora-charcoal/40 uppercase tracking-wider">
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
