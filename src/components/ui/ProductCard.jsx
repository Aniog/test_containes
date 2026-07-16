import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[3/4] bg-muted overflow-hidden">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          {/* Main Image */}
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[${product.id}-name] jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Reveal Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              data-strk-img-id={`product-${product.id}-alt`}
              data-strk-img={`[${product.id}-name] worn on model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              alt={`${product.name} worn`} 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Quick Add */}
        <button 
          onClick={() => addToCart({ ...product, quantity: 1, details: '18K Gold Finish' })}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-primary py-3 flex items-center justify-center gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 hover:bg-white"
        >
          <ShoppingBag size={16} />
          <span className="font-serif uppercase tracking-widest text-[10px]">Quick Add</span>
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`}>
            <h3 id={`${product.id}-name`} className="font-serif uppercase tracking-widest text-xs hover:text-accent transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-sans text-xs">${product.price}</span>
        </div>
        <div className="flex items-center gap-1 text-accent/60">
           <Star size={10} fill="currentColor" />
           <Star size={10} fill="currentColor" />
           <Star size={10} fill="currentColor" />
           <Star size={10} fill="currentColor" />
           <Star size={10} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
