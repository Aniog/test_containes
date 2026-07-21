import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, navigate }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer"
      onClick={() => navigate(`/product/${product.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-cream rounded-lg overflow-hidden mb-4">
        <img
          data-strk-img-id={`${product.imgId}-card`}
          data-strk-img={product.searchQuery}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.imgAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay with quick add */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className="w-full h-10 bg-velmora-charcoal/90 backdrop-blur-sm text-white text-xs tracking-[0.12em] uppercase font-medium rounded hover:bg-velmora-charcoal transition-colors border-none"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-serif text-sm md:text-base font-medium text-velmora-charcoal uppercase-wide leading-tight mb-1">
        {product.name}
      </h3>
      <p className="text-sm text-velmora-muted">{formatPrice(product.price)}</p>
    </div>
  );
}
