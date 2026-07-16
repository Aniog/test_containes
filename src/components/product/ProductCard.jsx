import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem({ ...product, quantity: 1, variant: 'gold' });
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
        {/* We use standard img for now, placeholder string is loaded.
            If image support using data-strk-img is specified, we'll apply it. */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img={`[product-card-${product.id}-name]`}
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
        />
        
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button 
            className="w-full bg-background text-foreground hover:bg-background/90"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 id={`product-card-${product.id}-name`} className="font-serif font-semibold tracking-widest uppercase text-sm mb-2 text-foreground">
          {product.name}
        </h3>
        <p className="text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};
