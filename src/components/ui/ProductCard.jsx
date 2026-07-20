import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-secondary relative aspect-[4/5]">
        <img
          data-strk-img-id={`product-${product.id}-img-1`}
          data-strk-img={`[product-${product.id}-title] jewelry gold flat lay`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
          )}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.title}
        />
        <div className={cn(
          "absolute inset-0 transition-opacity duration-700",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <img
            data-strk-img-id={`product-${product.id}-img-2`}
            data-strk-img={`[product-${product.id}-title] jewelry gold on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            className="w-full h-full object-cover scale-105"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.title} - model`}
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
        className={cn(
          "absolute inset-x-4 bottom-24 bg-white/90 text-zinc-900 py-3 uppercase-spaced text-[10px] flex items-center justify-center gap-2 backdrop-blur-sm shadow-lg transition-all duration-300",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <ShoppingBag size={14} />
        Quick Add
      </button>

      <div className="mt-6 text-center">
        <h3 id={`product-${product.id}-title`} className="font-serif uppercase tracking-widest text-sm mb-2">
          {product.title}
        </h3>
        <p className="text-zinc-500 font-light text-sm">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
