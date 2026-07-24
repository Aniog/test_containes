import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

const ProductGrid = ({ products }) => {
  const containerRef = useRef(null);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    // Give state a moment to settle before loading images
    const timer = setTimeout(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [products]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="font-serif text-2xl mb-2">No products found</p>
        <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
      {products.map((product) => (
        <Link 
          to={`/product/${product.id}`} 
          key={product.id}
          className="group block"
        >
          <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary rounded-[2px]">
            {/* Primary Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              alt={product.name}
              data-strk-img-id={`grid-${product.id}-1`}
              data-strk-img={`[grid-title-${product.id}] isolated`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            
            {/* Hover Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              alt={`${product.name} alternate view`}
              data-strk-img-id={`grid-${product.id}-2`}
              data-strk-img={`[grid-title-${product.id}] jewelry worn`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />

            {/* Quick Add Button */}
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Button 
                className="w-full rounded-none bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm shadow-sm text-xs md:text-sm"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Quick Add
              </Button>
            </div>
          </div>
          
          <div className="text-left">
            <h3 
              id={`grid-title-${product.id}`}
              className="font-serif text-sm md:text-base tracking-wide mb-1 group-hover:text-primary transition-colors truncate"
            >
              {product.name}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
