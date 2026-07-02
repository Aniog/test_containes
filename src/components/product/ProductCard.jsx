import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product, containerRef: externalRef }) {
  const internalRef = useRef(null);
  const ref = externalRef || internalRef;
  const { addItem } = useCart();

  useEffect(() => {
    if (externalRef) return; // parent handles loading
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={externalRef ? undefined : ref} className="group relative bg-cream overflow-hidden">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 absolute inset-0"
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] worn gold jewelry model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute inset-0"
        />

        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-obsidian text-ivory font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1">
            New
          </span>
        )}
        {product.tags.includes('bestseller') && !product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1">
            Bestseller
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-250 bg-obsidian/90">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 font-manrope text-xs tracking-widest uppercase text-ivory hover:text-gold transition-colors"
          >
            <ShoppingBag size={13} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-cormorant text-sm uppercase tracking-widest text-obsidian hover:text-gold transition-colors truncate"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="font-manrope text-xs text-mist mt-0.5 truncate">
              {product.shortDescription}
            </p>
          </div>
          <span className="font-manrope text-sm font-500 text-obsidian flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-mist">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}
