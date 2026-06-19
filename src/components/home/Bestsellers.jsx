import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`${product.imgId}-hover`}
            data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-brand-charcoal font-sans text-[10px] tracking-extra-wide uppercase px-5 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-white flex items-center gap-2"
      >
        <ShoppingBag size={12} />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={product.descId}
          className="text-xs text-brand-muted font-sans mt-0.5"
        >
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'}
              />
            ))}
          </div>
          <span className="text-[10px] text-brand-muted font-sans">({product.reviews})</span>
        </div>
        <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
          ${product.price}
        </p>
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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-sans text-xs tracking-super-wide uppercase px-10 py-3.5 transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
