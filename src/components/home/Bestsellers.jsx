import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        {/* Main Image */}
        <span id={`best-query-${product.id}`} className="hidden">{product.imageQuery}</span>
        <Link to={`/product/${product.id}`} className="block h-full">
          <img
            data-strk-img-id={`prod-main-${product.id}`}
            data-strk-img={`[best-query-${product.id}] studio jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-editorial duration-700 group-hover:scale-105"
          />
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <img
              data-strk-img-id={`prod-hover-${product.id}`}
              data-strk-img={`[best-query-${product.id}] lifestyle worn model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${product.name} worn`}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Quick Add Button */}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-widest font-semibold transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-editorial duration-500 flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="title-uppercase text-xs mb-1 hover:text-primary transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm font-light text-muted-foreground mb-2">{product.category}</p>
        <p className="font-sans font-medium mt-auto">${product.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">The Bestsellers</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-[10px]">Curated favorites for everyday luxury</p>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-editorial">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
