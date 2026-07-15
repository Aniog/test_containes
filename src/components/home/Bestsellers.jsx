import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const bestsellers = products.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <section ref={containerRef} className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p 
            className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
            style={{ letterSpacing: '0.3em' }}
          >
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link 
              key={product.id}
              to={`/product/${product.slug}`}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-charcoal/5 overflow-hidden mb-3">
                <img
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[${product.id}-name] jewelry product elegant`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-charcoal text-cream text-[10px] uppercase tracking-wider px-2 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick add */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm text-charcoal 
                             text-xs uppercase tracking-wider py-2.5 flex items-center justify-center gap-2
                             opacity-0 group-hover:opacity-100 transition-all duration-300
                             translate-y-2 group-hover:translate-y-0"
                  style={{ letterSpacing: '0.1em' }}
                >
                  <ShoppingBag size={14} />
                  Quick Add
                </button>
              </div>

              {/* Product info */}
              <div>
                <p id={`${product.id}-name`} className="product-name text-sm md:text-base">
                  {product.name}
                </p>
                <p className="product-price mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10 md:mt-14">
          <Link to="/shop" className="btn-outline inline-block">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
