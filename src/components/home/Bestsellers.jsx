import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const bestsellers = products.filter(p => p.tags.includes('bestseller'));

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-surface-cream" ref={containerRef}>
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-heading-1 md:text-display text-charcoal">
            Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addItem} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  const img = product.images[0];
  const secondImg = product.images[1];

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-brand-100 overflow-hidden mb-3">
          <img
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-600 ease-luxury group-hover:opacity-0"
            data-strk-img-id={img.id}
            data-strk-img={`[${product.id}-name] bestseller gold jewelry`}
            data-strk-img-ratio={img.ratio}
            data-strk-img-width={img.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          {secondImg && (
            <img
              alt={`${product.name} - alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-600 ease-luxury group-hover:opacity-100"
              data-strk-img-id={secondImg.id}
              data-strk-img={`[${product.id}-name] jewelry worn model close up`}
              data-strk-img-ratio={secondImg.ratio}
              data-strk-img-width={secondImg.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          )}

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-luxury">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAdd(product);
              }}
              className="w-full flex items-center justify-center gap-2 bg-charcoal/90 backdrop-blur-sm text-white py-2.5 text-overline uppercase tracking-ultra-wide hover:bg-gold-dark transition-colors duration-300"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Bag
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="text-center">
        <p id={`${product.id}-name`} className="font-serif text-sm md:text-base tracking-wide uppercase text-charcoal group-hover:text-gold-dark transition-colors duration-300">
          {product.name}
        </p>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star size={12} className="text-gold fill-gold" />
          <span className="text-caption text-charcoal-muted">{product.rating}</span>
        </div>
        <p className="font-sans text-body font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  );
}
