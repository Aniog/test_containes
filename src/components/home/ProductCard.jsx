import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'sonner';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  
  // Generating generic placeholder IDs to be replaced dynamically if needed by the system
  const imgStrkId = `prod-card-${product.id}`;
  const titleId = `prod-title-${product.id}`;
  const catId = `prod-cat-${product.id}`;

  return (
    <div className="group relative flex flex-col">
      <Link to={`/shop/${product.id}`} className="block relative aspect-[4/5] bg-muted overflow-hidden mb-4">
        {/* Main Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          data-strk-img-id={`${imgStrkId}-primary`}
          data-strk-img={`[${catId}] [${titleId}] gold jewelry close up`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
        />
        {/* Hover/Secondary Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} on model`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          data-strk-img-id={`${imgStrkId}-secondary`}
          data-strk-img={`[${catId}] [${titleId}] jewelry worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
        />
        
        {/* Quick Add Button overlay */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
              toast.success(`${product.name} added to cart!`);
            }}
            className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col items-center text-center">
        <p id={catId} className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <Link to={`/shop/${product.id}`}>
          <h3 id={titleId} className="font-serif text-lg uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm tracking-widest">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}