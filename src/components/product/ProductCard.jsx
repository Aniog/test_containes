import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group relative">
      <Link to={`/product/${product.slug}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-3">
          <span id={`product-${product.id}-imgquery`} className="sr-only" aria-hidden="true">{product.imgQuery}</span>
          <img
            data-strk-img-id={`product-${product.id}-primary-${product.slug}`}
            data-strk-img={`[product-${product.id}-imgquery]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-xs md:text-sm uppercase tracking-[0.15em] text-charcoal"
        >
          {product.name}
        </h3>
        <p className="text-sm text-stone mt-1 font-medium">${product.price}</p>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product);
        }}
        className="btn-charcoal absolute bottom-[4.5rem] left-0 right-0 mx-2 text-xs uppercase tracking-widest py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 border-none cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
