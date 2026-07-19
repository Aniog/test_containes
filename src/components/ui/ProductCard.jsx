import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product, className }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`Added ${product.name} to bag`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn("group block space-y-4", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-card-${product.id}-main`}
          data-strk-img={`[prod-title-${product.id}] [prod-desc-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-white text-foreground hover:bg-white/90 border-none shadow-lg"
          >
            Quick Add
          </Button>
        </div>

        {product.tags?.includes('new') && (
          <span className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest px-2 py-1">
            New
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h3 id={`prod-title-${product.id}`} className="text-xs uppercase tracking-widest font-medium group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p id={`prod-desc-${product.id}`} className="text-sm text-muted-foreground hidden">{product.description}</p>
        <p className="text-sm font-light text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
