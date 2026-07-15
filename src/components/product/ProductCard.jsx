import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          data-strk-img-id={product.strkImg1}
          data-strk-img={`[prod-title-${product.id}] jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <img
          data-strk-img-id={product.strkImg2}
          data-strk-img={`[prod-title-${product.id}] detail view jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
          )}
        />

        {/* Quick Add Overlay */}
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-4 transition-all duration-300 translate-y-full group-hover:translate-y-0",
          "bg-background/80 backdrop-blur-sm"
        )}>
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] uppercase tracking-widestest h-10 rounded-none font-bold"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            Quick Add
          </Button>
        </div>

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-4 left-4 bg-background px-3 py-1 text-[8px] uppercase tracking-widestest font-bold border">
            Bestseller
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="mt-6 text-center space-y-2">
        <h3 id={`prod-title-${product.id}`} className="text-xs font-bold uppercase tracking-widestest group-hover:opacity-70 transition-opacity">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm font-medium text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
