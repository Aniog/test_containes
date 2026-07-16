import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest-2xl uppercase text-gold mb-3">Curated Selection</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative">
              {/* Image container */}
              <div className="relative aspect-[3/4] bg-surface rounded overflow-hidden mb-4">
                <img
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[${product.id}-desc] [bestsellers-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-gold/90 text-base text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick add button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-3 left-3 right-3 bg-base/90 backdrop-blur-sm hover:bg-gold text-text-primary hover:text-base text-xs tracking-wider uppercase font-medium py-2.5 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <Plus size={14} />
                  Add to Cart
                </button>
              </div>

              {/* Product info */}
              <Link to={`/product/${product.id}`} className="block">
                <p id={`${product.id}-desc`} className="sr-only">{product.description}</p>
                <h3 id={`bestsellers-title`} className="sr-only">Velmora Fine Jewelry Bestsellers</h3>
                <h3 className="font-serif text-sm sm:text-base tracking-wider uppercase text-text-primary group-hover:text-gold transition-colors duration-300 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <Star size={11} className="text-gold fill-gold" />
                  <span className="text-[11px] text-text-muted">{product.rating}</span>
                  <span className="text-[11px] text-text-muted/50">({product.reviews})</span>
                </div>
                <p className="text-sm text-gold font-medium mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-base text-xs tracking-widest-xl uppercase font-medium px-8 py-3 transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
