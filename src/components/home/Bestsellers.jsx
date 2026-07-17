import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../../context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          fill={s <= Math.round(rating) ? '#c9a96e' : 'none'}
          className={s <= Math.round(rating) ? 'text-champagne' : 'text-champagne-light'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
          {/* Primary image */}
          <img
            id={product.imgId}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover img-primary"
          />
          {/* Hover image */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={product.imgAltId}
            data-strk-img={`[${product.titleId}] gold jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover img-secondary"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="absolute bottom-3 left-3 right-3 bg-ivory/90 backdrop-blur-sm text-obsidian font-sans text-[10px] tracking-widest uppercase py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 hover:bg-ivory"
          >
            <Plus size={11} /> Add to Bag
          </button>
        </div>

        {/* Info */}
        <div className="pt-3 pb-1">
          <p id={product.titleId} className="font-serif text-sm tracking-widest uppercase text-obsidian font-medium leading-tight">
            {product.name}
          </p>
          <p id={product.descId} className="font-sans text-xs text-stone-warm mt-0.5 leading-snug">
            {product.subtitle}
          </p>
          <div className="flex items-center justify-between mt-2">
            <StarRating rating={product.rating} />
            <span className="font-sans text-sm text-obsidian font-medium">${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers({ products }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">Our Favourites</p>
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">Bestsellers</h2>
        <div className="w-12 h-px bg-champagne mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-3.5 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  );
}
