import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Area */}
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-[#F0EDE9]">
        <img
          data-strk-img-id={`prod-img-${product.id}-1`}
          data-strk-img={`[prod-title-${product.id}] jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
          )}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
        />
        <img
          data-strk-img-id={`prod-img-${product.id}-2`}
          data-strk-img={`[prod-title-${product.id}] jewelry worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
          )}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate`}
        />

        {/* Quick Add Overlay */}
        <div className={cn(
          "absolute bottom-0 left-0 w-full p-4 transition-all duration-500 bg-white/10 backdrop-blur-md",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-primary py-3 uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingBag size={14} /> Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-6 flex flex-col items-center text-center">
        <h3 id={`prod-title-${product.id}`} className="font-serif text-sm uppercase tracking-[0.2em] mb-2 group-hover:text-accent transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-3 italic">
          {product.category}
        </p>
        <p className="font-sans text-sm tracking-widest font-medium">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
