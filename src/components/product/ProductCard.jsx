import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PLACEHOLDER_IMG, formatPrice } from '@/data/products';
import Stars from '@/components/ui/Stars';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, aspect = 'aspect-[3/4]', eager = false }) {
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [product.id]);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 'Gold', 1);
    openCart();
  };

  return (
    <article ref={containerRef} className="reveal group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className={`relative overflow-hidden bg-onyx border border-umber ${aspect}`}>
          {product.badge && (
            <span className="absolute left-3 top-3 z-20 bg-noir/80 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-gold border border-gold/30">
              {product.badge}
            </span>
          )}
          <img
            data-strk-img-id={`${product.id}-card-a1`}
            data-strk-img={`[prod-${product.id}-tagline] [prod-${product.id}-name] gold jewelry on dark background`}
            data-strk-img-ratio={aspect === 'aspect-square' ? '1x1' : '3x4'}
            data-strk-img-width="600"
            src={PLACEHOLDER_IMG}
            alt={product.name}
            loading={eager ? 'eager' : 'lazy'}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`${product.id}-card-b2`}
            data-strk-img={`[prod-${product.id}-tagline] [prod-${product.id}-name] worn by model warm light`}
            data-strk-img-ratio={aspect === 'aspect-square' ? '1x1' : '3x4'}
            data-strk-img-width="600"
            src={PLACEHOLDER_IMG}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
            <button
              type="button"
              onClick={handleQuickAdd}
              className="w-full bg-noir/90 py-3 text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-gold backdrop-blur-sm transition-colors duration-300 hover:bg-gold hover:text-noir"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`prod-${product.id}-name`}
            className="font-serif text-sm md:text-base font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:text-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`prod-${product.id}-tagline`} className="mt-1 text-xs text-sand font-sans">
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Stars rating={product.rating} starClass="w-3 h-3" />
          <span className="text-[11px] text-sand">({product.reviews})</span>
        </div>
        <p className="mt-1.5 font-sans text-sm font-medium tracking-wide text-gold">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
