import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
          <img
            data-strk-img-id={`product-${product.id}-img-a1b2`}
            data-strk-img={`[product-${product.id}-name] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick Add overlay */}
          {showQuickAdd && (
            <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addItem(product);
                }}
                className="w-full bg-charcoal/90 text-white py-2.5 text-xs uppercase tracking-widest hover:bg-charcoal transition-colors border-none backdrop-blur-sm"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-3">
          <h3
            id={`product-${product.id}-name`}
            className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal"
          >
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-stone font-sans">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
