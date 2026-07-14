import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/lib/store';

const ProductCard = ({ product }) => {
  const { addItem } = useCartStore();
  const { name, price, images } = product.data;

  return (
    <div className="group space-y-4">
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img 
          src={images?.[0] || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 4"%3E%3C/svg%3E'}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`prod-img-${product.id}`}
          data-strk-img={`[prod-name-${product.id}] jewelry gold minimalist editorial luxury`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.data.variants?.[0] || 'Gold');
            }}
            className="w-full bg-white/90 backdrop-blur-md text-foreground py-3 text-[10px] uppercase tracking-widest font-sans flex items-center justify-center gap-2 hover:bg-foreground hover:text-white transition-colors"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="text-center space-y-1">
        <h3 id={`prod-name-${product.id}`} className="text-xs font-serif uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
          <Link to={`/product/${product.id}`}>{name}</Link>
        </h3>
        <p className="text-sm font-sans font-light text-muted-foreground">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
