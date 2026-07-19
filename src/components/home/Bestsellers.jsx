import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { seedProducts } from '@/lib/data';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto" ref={containerRef}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="space-y-4">
          <h2 id="bestsellers-title" className="text-3xl md:text-5xl font-serif">Curated Favorites</h2>
          <p id="bestsellers-subtitle" className="text-muted-foreground font-light tracking-wide max-w-md">
            Discover the pieces our community loves most. Timeless designs for your everyday collection.
          </p>
        </div>
        <Link to="/shop" className="brand-title text-sm underline underline-offset-8 decoration-[0.5px] hover:text-accent transition-colors">
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {seedProducts.map((product) => (
          <div key={product.id} className="group flex flex-col items-center text-center space-y-4 animate-in fade-in duration-500">
            <Link to={`/product/${product.id}`} className="relative w-full aspect-[3/4] bg-secondary overflow-hidden block">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="w-full bg-white/90 text-primary py-3 brand-title text-[10px] hover:bg-white transition-colors"
                >
                  Quick Add
                </button>
              </div>
              
              {product.tag && (
                <span className="absolute top-4 left-4 brand-title text-[8px] px-2 py-1 bg-white/80 backdrop-blur-sm">
                  {product.tag}
                </span>
              )}
            </Link>

            <div className="space-y-1">
              <h3 id={product.titleId} className="brand-title text-xs mt-2">{product.name}</h3>
              <p id={product.descId} className="hidden">{product.description}</p>
              <p className="text-sm font-light text-muted-foreground">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
