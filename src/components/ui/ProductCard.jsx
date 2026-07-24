import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <div 
      className="group relative flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="flex-grow">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm mb-6">
          <img
            data-strk-img-id={`prod-card-main-${product.id}`}
            data-strk-img={`[prod-name-${product.id}] jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-1000 ease-out",
              isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
            )}
          />
          {product.images?.[1] && (
            <img
              data-strk-img-id={`prod-card-alt-${product.id}`}
              data-strk-img={`[prod-name-${product.id}] worn on model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${product.name} worn`}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out",
                isHovered ? "scale-105 opacity-100" : "scale-110 opacity-0"
              )}
            />
          )}

          {/* Quick Add Overlay */}
          <div className={cn(
            "absolute bottom-0 left-0 w-full p-4 transition-all duration-500 bg-gradient-to-t from-black/20 to-transparent",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <button 
              onClick={handleQuickAdd}
              className="w-full bg-white text-charcoal py-3 font-sans text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 rounded-sm shadow-xl"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="text-center px-2">
          <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/40 mb-1">{product.category}</p>
          <h3 id={`prod-name-${product.id}`} className="font-serif text-lg tracking-widest-editorial uppercase mb-2 group-hover:text-gold transition-colors truncate">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-gold fill-gold" />
            ))}
          </div>
          <p className="font-serif text-xl text-charcoal/80">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
