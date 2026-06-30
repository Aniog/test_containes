import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <Link to={`/product/${product.id}`}>
          <img
            data-strk-img-id={`prod-card-${product.id}-1`}
            data-strk-img={`[prod-name-${product.id}] jewelry gold luxury`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover second image simulation */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <img
               data-strk-img-id={`prod-card-${product.id}-2`}
               data-strk-img={`[prod-name-${product.id}] worn on model`}
               data-strk-img-ratio="3x4"
               data-strk-img-width="600"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt={`${product.name} on model`}
               className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Quick Add */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-white/90 backdrop-blur-sm text-velmora-obsidian py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-velmora-obsidian hover:text-white transition-colors"
          >
            <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <h3 id={`prod-name-${product.id}`} className="font-serif text-sm md:text-base uppercase tracking-widest text-velmora-obsidian">
          {product.name}
        </h3>
        <p className="font-sans text-neutral-500 text-sm mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
