import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden">
        {/* Primary Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img={product.images[0].query}
          data-strk-img-id={product.images[0].id}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered && product.images.length > 1 ? "opacity-0" : "opacity-100"
          )}
        />
        
        {/* Secondary Image on Hover */}
        {product.images.length > 1 && (
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img={product.images[1].query}
            data-strk-img-id={product.images[1].id}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={`${product.name} alternate view`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Quick Add Button */}
        <div className={cn(
          "absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300",
          isHovered && "translate-y-0 opacity-100"
        )}>
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background/95 backdrop-blur-sm text-foreground py-3 text-sm tracking-widest uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Quick Add
          </button>
        </div>
      </div>

      <div className="text-center">
        <h3 id={`prod-name-${product.id}`} className="font-heading uppercase tracking-widest text-sm mb-2">{product.name}</h3>
        <p className="font-sans text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
