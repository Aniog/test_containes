import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '../cart/CartContext';
import { Button } from '@/components/ui/button';

export function Bestsellers() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif font-light tracking-wide text-foreground mb-4">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative flex flex-col cursor-pointer">
              <Link to={`/product/${product.id}`} className="aspect-[3/4] relative overflow-hidden bg-secondary mb-4 block">
                {/* Default Image */}
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.id}-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
                {/* Hover Image */}
                <img
                  alt={`${product.name} worn on model`}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  data-strk-img-id={product.hoverImgId}
                  data-strk-img={`[${product.id}-name] worn by model lifestyle`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full bg-background/95 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur-sm rounded-none h-12 uppercase tracking-widest text-xs font-serif transition-colors"
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              
              <div className="flex flex-col flex-1 text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`${product.id}-name`} className="font-serif uppercase tracking-widest text-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">${product.price.toFixed(2)}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-serif tracking-widest uppercase text-sm rounded-none h-14 px-12 transition-all">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}