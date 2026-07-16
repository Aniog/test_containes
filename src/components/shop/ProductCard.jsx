import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.title} added to bag`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
        {/* Main Image */}
        <img
          alt={product.title}
          data-strk-img-id={`prod-card-main-${product.id}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700",
            isHovered ? "opacity-0" : "opacity-100"
          )}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Hover Image */}
        <img
          alt={product.title}
          data-strk-img-id={`prod-card-hover-${product.id}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] lifestyle jewelry model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur-sm text-primary py-3 text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 id={product.titleId} className="text-[11px] uppercase tracking-[0.15em] font-medium group-hover:opacity-70 transition-opacity">
          {product.title}
        </h3>
        <p className="text-xs text-muted-foreground tracking-wider font-sans">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
