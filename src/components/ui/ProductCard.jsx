import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Button } from './Button';
import { toast } from 'sonner';

export function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleQuickAdd = () => {
    addItem(product, 'Gold');
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="group flex flex-col space-y-3">
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          data-strk-img-id={`product-${product.id}-img-1`}
          data-strk-img={`[product-${product.id}-title] on a subtle editorial background jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        />
        <img
          data-strk-img-id={`product-${product.id}-img-2`}
          data-strk-img={`closeup detail of [product-${product.id}-title] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.title} detail`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </Link>
      
      <div className="flex flex-col space-y-1">
        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
          <h3 id={`product-${product.id}-title`} className="font-serif tracking-widest uppercase text-sm">{product.title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm">${product.price}</p>
      </div>

      <Button 
        variant="outline" 
        className="w-full opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        onClick={handleQuickAdd}
      >
        Quick Add
      </Button>
    </div>
  );
}