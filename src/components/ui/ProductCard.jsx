import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { ShoppingBag } from 'lucide-react';
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
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
          <img
            data-strk-img-id={`prod-img-primary-${product.id}`}
            data-strk-img={`[prod-name-${product.id}] [prod-category-${product.id}] jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
            )}
          />
          <img
            data-strk-img-id={`prod-img-secondary-${product.id}`}
            data-strk-img={`[prod-name-${product.id}] details gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
            )}
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={cn(
               "absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-4 text-xs uppercase tracking-widest font-medium transform transition-all duration-300 flex items-center justify-center space-x-2",
               isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Quick add</span>
          </button>
        </div>

        <div className="space-y-1 text-center">
          <p id={`prod-category-${product.id}`} className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">{product.category}</p>
          <h3 id={`prod-name-${product.id}`} className="text-sm font-serif uppercase tracking-widest group-hover:text-accent transition-colors duration-300">{product.name}</h3>
          <p className="text-sm font-medium text-gray-700">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
