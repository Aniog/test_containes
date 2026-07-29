import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Zap, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../../context/CartContext.jsx';
import { PRODUCT_IMG_IDS } from '../../lib/product-img-ids.js';

const difficultyColors = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-yellow-100 text-yellow-700',
  expert: 'bg-red-100 text-red-700',
};

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const d = product.data;

  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border-ocean flex flex-col group">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-t-2xl">
        <div
          data-strk-bg-id={PRODUCT_IMG_IDS[product.id]}
          data-strk-bg={`[${descId}] [${titleId}]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="500"
          className="w-full aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-500 bg-seafoam"
          role="img"
          aria-label={d.name}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {d.is_new && (
            <span className="bg-teal-ocean text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-3 h-3" /> New
            </span>
          )}
          {d.is_sale && (
            <span className="bg-coral text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> Sale
            </span>
          )}
        </div>
        {d.stock <= 5 && d.stock > 0 && (
          <span className="absolute top-3 right-3 bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-full">
            Only {d.stock} left
          </span>
        )}
        {d.stock === 0 && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-white text-slate-text font-semibold px-4 py-2 rounded-xl shadow text-sm">Out of Stock</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link to={`/product/${product.id}`}>
            <h3 id={titleId} className="font-bold text-navy text-base leading-tight hover:text-teal-ocean transition-colors">
              {d.name}
            </h3>
          </Link>
          {d.difficulty && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${difficultyColors[d.difficulty]}`}>
              {d.difficulty}
            </span>
          )}
        </div>

        {d.scientific_name && (
          <p className="text-xs text-muted-text italic mb-2">{d.scientific_name}</p>
        )}

        <p id={descId} className="text-sm text-slate-text leading-relaxed flex-1 line-clamp-2 mb-3">
          {d.short_description}
        </p>

        {/* Rating */}
        {d.rating && (
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-3.5 h-3.5 ${s <= Math.round(d.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-text">({d.review_count})</span>
          </div>
        )}

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xl font-extrabold text-teal-ocean">${d.price.toFixed(2)}</span>
            {d.original_price && (
              <span className="text-sm text-muted-text line-through ml-2">${d.original_price.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            disabled={d.stock === 0}
            className="flex items-center gap-1.5 bg-teal-ocean text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-teal-ocean-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
