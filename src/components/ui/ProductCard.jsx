import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  const titleId = `p-title-${product.id}`;
  const priceId = `p-price-${product.id}`;

  return (
    <div className="group flex flex-col gap-4">
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-muted overflow-hidden">
        {/* Main Image */}
        <div 
          className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
          data-strk-bg-id={`p-img-${product.id}`}
          data-strk-bg={`[${titleId}] jewelry luxury gold product shot`}
          data-strk-bg-ratio="4/5"
          data-strk-bg-width="600"
          style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        />
        {/* Hover Image */}
        <div 
          className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          data-strk-bg-id={`p-img-hover-${product.id}`}
          data-strk-bg={`[${titleId}] jewelry worn on model lifestyle`}
          data-strk-bg-ratio="4/5"
          data-strk-bg-width="600"
          style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 hidden md:block">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-white/90 backdrop-blur-sm text-black py-4 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col gap-1 px-1">
        <Link to={`/product/${product.id}`} className="flex justify-between items-start">
          <h3 id={titleId} className="font-serif text-sm uppercase tracking-widest leading-tight transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p id={priceId} className="text-xs font-light text-muted-foreground">${product.price}</p>
        
        <button 
          onClick={handleQuickAdd}
          className="md:hidden mt-2 text-[9px] uppercase tracking-widest border border-border py-3 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all"
        >
          <ShoppingBag className="w-3 h-3" />
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
