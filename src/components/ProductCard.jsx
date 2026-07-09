import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const fields = product.data || product;

  return (
    <div className="group font-sans">
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-5">
        <Link to={`/shop/${product.id}`}>
          <img
            alt={fields.name}
            data-strk-img-id={`prod-main-${product.id}`}
            data-strk-img={`[prod-title-${product.id}] gold jewelry model editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="/placeholder.svg"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Reveal Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <img
              alt={`${fields.name} hover`}
              data-strk-img-id={`prod-hover-${product.id}`}
              data-strk-img={`[prod-title-${product.id}] detailed macro photography`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="/placeholder.svg"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Quick Add Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(fields);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-bold translate-y-12 group-hover:translate-y-0 transition-transform duration-500 hover:bg-black hover:text-white flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Quick Add
        </button>
      </div>

      <div className="space-y-1 text-center">
        <h3 id={`prod-title-${product.id}`} className="font-serif text-lg uppercase tracking-[0.15em] leading-tight">
          <Link to={`/shop/${product.id}`} className="hover:opacity-60 transition-opacity">
            {fields.name}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm tracking-wide">
          ${fields.price}
        </p>
      </div>
    </div>
  );
};
