import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          className={i <= Math.round(rating) ? 'text-champagne fill-champagne' : 'text-stone/30'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Secondary image (hover) */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry editorial close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="product-img-secondary w-full h-full object-cover"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="font-sans text-[9px] uppercase tracking-widest font-semibold bg-champagne text-obsidian px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="font-sans text-[9px] uppercase tracking-widest font-semibold bg-obsidian text-ivory px-2 py-1">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] uppercase tracking-widest font-medium py-3 flex items-center justify-center gap-2 hover:bg-champagne hover:text-obsidian transition-colors duration-300"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="px-1">
        <div className="flex items-center justify-between mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-stone/60">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest text-charcoal hover:text-champagne transition-colors leading-snug mb-1.5"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-charcoal">${product.price}</p>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-champagne text-champagne font-sans text-xs uppercase tracking-[0.15em] font-medium px-10 py-3.5 hover:bg-champagne hover:text-obsidian transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
