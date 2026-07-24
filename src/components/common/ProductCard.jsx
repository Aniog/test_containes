import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.data.slug}`} className="w-full aspect-[3/4] bg-muted relative overflow-hidden mb-6">
        <img
          data-strk-img-id={product.data.imgId}
          data-strk-img={`[pc-name-${product.data.slug}] [pc-category-${product.data.slug}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.data.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </Link>

      <div className="text-center space-y-1">
        <h3 id={`pc-name-${product.data.slug}`} className="text-sm font-semibold uppercase tracking-[0.2em]">{product.data.name}</h3>
        <p id={`pc-category-${product.data.slug}`} className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.data.category}</p>
        <p className="text-sm font-medium mt-2">${product.data.price}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className={cn(
          "absolute bottom-24 left-1/2 -translate-x-1/2 bg-background border border-border px-6 py-2 uppercase tracking-widest text-[10px] font-semibold transition-all duration-300 shadow-sm",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        Quick Add
      </button>
    </div>
  );
};

export default ProductCard;
