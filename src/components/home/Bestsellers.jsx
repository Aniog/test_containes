import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addToCart } = useStore();

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
            <p id="bestsellers-subtitle" className="text-muted-foreground mt-2 font-light">Loved by our community.</p>
          </div>
          <Link to="/shop" className="text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors hidden md:block">
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {seedProducts.map((product) => (
            <div key={product.id} className="group flex flex-col relative">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                <img
                  data-strk-img-id={`best-${product.id}`}
                  data-strk-img={`[prod-${product.id}-name] [bestsellers-subtitle]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay with Add to Cart button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-[80%] uppercase tracking-widest text-xs"
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.id}`} className="flex flex-col h-full justify-between">
                  <h3 id={`prod-${product.id}-name`} className="font-medium text-sm md:text-base uppercase tracking-wider mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mt-auto">${product.price.toFixed(2)}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Link to="/shop" className="inline-block text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}