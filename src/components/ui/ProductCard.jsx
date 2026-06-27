import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[3/4] bg-muted mb-4">
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-main-${product.id}`}
          data-strk-img={product.images[0]}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
            isHovered && product.images[1] ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Hover Image */}
        {product.images[1] && (
          <img
            data-strk-img-id={`prod-hover-${product.id}`}
            data-strk-img={product.images[1]}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} alternate view`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105",
              isHovered ? "opacity-100 scale-100" : "opacity-0"
            )}
          />
        )}
        
        {/* Quick Add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-300 translate-y-full group-hover:translate-y-0 hidden md:block">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white/90 backdrop-blur-md text-carbon py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="flex flex-col items-center text-center">
        <h3 className="font-serif text-sm uppercase tracking-[0.2em] mb-1 group-hover:text-gold transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-black/50 text-xs font-sans">${product.price}</p>
      </div>

      <button 
        onClick={() => addToCart(product)}
        className="md:hidden mt-4 w-full border border-black/5 py-3 text-[10px] uppercase tracking-widest"
      >
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
