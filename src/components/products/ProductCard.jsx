import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.nameRaw} added to bag`);
  };

  return (
    <div className="group space-y-4">
      <Link 
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-brand-sand aspect-[3/4]"
      >
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-${product.id}-main`}
          data-strk-img={`[prod-${product.id}-name] fine gold jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
          alt={product.nameRaw}
        />
        
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <img
            data-strk-img-id={`prod-${product.id}-hover`}
            data-strk-img={`[prod-${product.id}-name-hover] jewelry flat lay details`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
            alt={`${product.nameRaw} view 2`}
          />
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute left-4 right-4 bottom-4 bg-white text-brand-charcoal py-3 text-[10px] tracking-[0.2em] uppercase font-sans font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-charcoal hover:text-white"
        >
          Quick Add
        </button>
      </Link>

      <div className="text-center space-y-1">
        <h3 
          id={`prod-${product.id}-name`}
          className="text-xs font-serif tracking-[0.2em] uppercase"
        >
          {product.name}
        </h3>
        {/* Invisible element for hover image search context */}
        <span id={`prod-${product.id}-name-hover`} className="hidden">
           {product.nameRaw} {product.category} details
        </span>
        <p className="text-sm font-sans font-light text-brand-charcoal">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;