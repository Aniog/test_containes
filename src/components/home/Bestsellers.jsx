import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const addItem = useCart((state) => state.addItem);
  const { name, price, images, slug } = product.data || product;
  const productId = product.id;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.data?.variants?.[0] || 'Gold');
    toast.success(`${name} added to cart`);
  };

  return (
    <Link to={`/product/${slug}`} className="group block">
      <div className="relative overflow-hidden aspect-[4/5] bg-secondary">
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-img-1-${productId}`}
          data-strk-img={`[prod-name-${productId}] jewelry single`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <img
            data-strk-img-id={`prod-img-2-${productId}`}
            data-strk-img={`[prod-name-${productId}] jewelry on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur text-primary hover:bg-accent hover:text-white rounded-none h-12 text-[10px] tracking-widest uppercase"
          >
            Quick Add
          </Button>
        </div>
      </div>

      <div className="mt-4 text-center space-y-1">
        <h3 id={`prod-name-${productId}`} className="product-name text-sm leading-tight group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm font-light text-muted-foreground italic">
          ${price}
        </p>
      </div>
    </Link>
  );
};

const Bestsellers = ({ products }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (products.length > 0) {
      const timer = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [products]);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Bestsellers</h2>
        <div className="w-12 h-px bg-accent mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link 
          to="/shop" 
          className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all"
        >
          Explore All
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
