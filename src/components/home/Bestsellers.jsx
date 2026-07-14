import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const data = product.data || product;

  return (
    <div className="group flex flex-col items-center">
      <Link to={`/product/${data.slug}`} className="relative w-full aspect-[3/4] overflow-hidden bg-accent cursor-pointer">
        <img
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img={`[product-title-${product.id}] gold jewelry editorial close up on aesthetic background`}
          data-strk-img-ratio="2x3"
          data-strk-img-width="600"
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop"
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
              toast.success(`${data.name} added to cart`);
            }}
            className="w-full bg-white text-primary py-3 text-[10px] uppercase letter-spacing-wide hover:bg-black hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="mt-6 text-center space-y-2">
        <h3 id={`product-title-${product.id}`} className="text-xs uppercase letter-spacing-wide font-medium">{data.name}</h3>
        <p className="font-serif italic text-primary/60">${data.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = ({ products }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Our Bestsellers</h2>
          <div className="w-12 h-px bg-accent-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="text-xs uppercase letter-spacing-wide border-b border-primary pb-1 hover:text-primary/60 hover:border-primary/60 transition-colors"
          >
            Shop All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
