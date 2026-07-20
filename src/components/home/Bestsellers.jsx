import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-champagne rounded-sm aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[${product.id}-name] bestseller jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-stone-900/90 backdrop-blur-sm text-white py-2.5 text-[10px] tracking-widest uppercase font-sans font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-3 text-center">
        <p
          id={`${product.id}-name`}
          className="font-serif text-sm sm:text-base uppercase tracking-wider text-stone-900 group-hover:text-gold transition-colors"
        >
          {product.name}
        </p>
        <p className="text-sm text-stone-500 mt-1 font-sans">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-stone-500 text-sm tracking-wider">
            Our most-loved pieces, chosen by women like you
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
