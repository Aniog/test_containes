import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif mb-4">Our Bestsellers</h2>
          <div className="w-12 h-[1px] bg-primary mb-6"></div>
          <p id="bestsellers-subtitle" className="text-muted-foreground max-w-xl mx-auto">
            The pieces you love the most. Discover our most coveted jewelry designs, 
            crafted to elevate your everyday style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 gap-y-12">
          {products.slice(0, 5).map((product, idx) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              className="group block"
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                {/* Primary Image */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}-1`}
                  data-strk-img={`[bestseller-title-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                
                {/* Hover Image */}
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  alt={`${product.name} alternate view`}
                  data-strk-img-id={`bestseller-${product.id}-2`}
                  data-strk-img={`[bestseller-title-${product.id}] [bestsellers-title] jewelry worn`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />

                {/* Quick Add Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    className="w-full rounded-none bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm shadow-sm"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 
                  id={`bestseller-title-${product.id}`}
                  className="font-serif text-lg tracking-wide mb-1"
                >
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            <Link to="/collections/bestsellers">View All Bestsellers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
