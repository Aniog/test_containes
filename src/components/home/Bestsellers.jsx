import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../lib/data';
import { useStore } from '../../store/useStore';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault(); // Prevent navigating to product page
    addToCart({ ...product, variant: 'Gold', quantity: 1 });
  };

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 hidden md:block">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block relative group/card">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                {/* Primary Image */}
                <img
                  data-strk-img-id={product.imgId1}
                  data-strk-img={`[prod-name-${product.id}] minimalist jewelry photography white background`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                />
                {/* Secondary Image (Hover) */}
                <img
                  data-strk-img-id={product.imgId2}
                  data-strk-img={`[prod-name-${product.id}] close up worn on model editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn`}
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                
                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm text-foreground py-3 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 z-20 text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background"
                >
                  Quick Add
                </button>
              </div>
              
              <div className="text-center">
                <h3 id={`prod-name-${product.id}`} className="font-serif text-lg mb-1">{product.name}</h3>
                <p className="text-muted text-sm">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-foreground pb-1">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;