import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          className={i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative">
      {/* Image container */}
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          id={`bs-img-${product.id}`}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-obsidian text-parchment font-sans text-[9px] font-medium uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-obsidian font-sans text-[9px] font-medium uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian text-parchment font-sans text-[10px] font-medium uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="font-sans text-xs text-muted mt-1 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
          <span className="font-sans text-sm font-medium text-ink flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-whisper">({product.reviewCount})</span>
        </div>
      </div>
    </article>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-[11px] font-medium uppercase tracking-widest text-muted border-b border-muted pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
