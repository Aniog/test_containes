import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product, className }) => {
  const { addToCart } = useCart();
  const fields = product.data || product;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, fields.variants?.[0] || 'Gold');
    toast.success(`${fields.name} added to cart`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn("group flex flex-col space-y-4", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={fields.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-stone-900/10 backdrop-blur-md">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-stone-900 text-white py-3 text-[10px] uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2 active:bg-stone-800 transition-colors"
          >
            <ShoppingBag size={14} />
            <span>Quick Add</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-1">
        <h3 
          id={`product-${product.id}-name`} 
          className="serif-caps text-xs tracking-[0.15em] text-stone-900 group-hover:text-stone-500 transition-colors"
        >
          {fields.name}
        </h3>
        <p id={`product-${product.id}-desc`} className="hidden">{fields.description}</p>
        <p className="font-serif text-stone-500 text-sm italic">${fields.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
