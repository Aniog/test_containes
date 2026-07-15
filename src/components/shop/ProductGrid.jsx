import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductGrid({ products }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-serif text-xl text-charcoal/60 mb-2">No products found</p>
        <p className="text-sm text-charcoal/40">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <Link 
          key={product.id}
          to={`/product/${product.slug}`}
          className="group"
        >
          {/* Image */}
          <div className="relative aspect-[3/4] bg-charcoal/5 overflow-hidden mb-3">
            <img
              data-strk-img-id={`shop-${product.id}`}
              data-strk-img={`[${product.id}-name] jewelry product elegant`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
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
            <p className="product-name text-sm md:text-base">
              {product.name}
            </p>
            <p className="product-price mt-1">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
