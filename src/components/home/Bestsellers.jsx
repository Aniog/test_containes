import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={10}
          className={i <= Math.round(rating) ? 'text-gold fill-gold' : 'text-parchment fill-parchment'}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        {/* Secondary image (hover) */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] fine jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} worn`}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold text-ivory text-[10px] uppercase tracking-widest font-sans px-2.5 py-1">
            {product.badge}
          </div>
        )}

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory py-3.5 text-[11px] uppercase tracking-widest font-sans hover:bg-gold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="text-[10px] font-sans text-whisper">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs font-sans text-muted leading-snug">
          {product.subtitle}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-sans text-sm font-medium text-ink">${product.price}</span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-whisper line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest font-sans text-muted hover:text-gold transition-colors self-start md:self-auto flex items-center gap-2"
          >
            View All <span>→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
