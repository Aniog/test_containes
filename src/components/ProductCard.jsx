import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`Added ${product.name} to bag`);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
          {/* Main Image */}
          <img
            data-strk-img-id={`prod-img-${product.id}`}
            data-strk-img={`${product.image} [prod-title-${product.id}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700 ease-in-out",
              isHovered ? "opacity-0" : "opacity-100"
            )}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          {/* Hover Image */}
          <img
            data-strk-img-id={`prod-hover-${product.id}`}
            data-strk-img={`${product.hoverImage} jewelry model worn`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            alt={product.name}
            className={cn(
              "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className={cn(
              "absolute bottom-0 left-0 w-full bg-white/90 py-4 text-[10px] uppercase tracking-widest-extra font-medium transform transition-transform duration-300 flex items-center justify-center space-x-2 translate-y-full group-hover:translate-y-0",
               "hover:bg-velmora-charcoal hover:text-white"
            )}
          >
            <ShoppingBag size={14} />
            <span>Quick Add</span>
          </button>
        </div>

        <div className="mt-4 space-y-1 text-center">
          <h3 id={`prod-title-${product.id}`} className="text-xs uppercase tracking-widest-extra font-serif font-medium group-hover:opacity-60 transition-opacity">
            {product.name}
          </h3>
          <p className="text-xs text-velmora-charcoal/60">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
