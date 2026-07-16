import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  return (
    <div ref={containerRef} className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="font-inter text-[9px] uppercase tracking-[0.14em] bg-gold text-obsidian px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-inter text-[9px] uppercase tracking-[0.14em] bg-charcoal text-ivory px-2 py-0.5">
              New
            </span>
          )}
          {product.tags.includes('gift') && (
            <span className="font-inter text-[9px] uppercase tracking-[0.14em] bg-ivory/90 text-charcoal px-2 py-0.5">
              Gift
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-charcoal/90 backdrop-blur-sm text-ivory font-inter text-[10px] uppercase tracking-[0.14em] py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1">
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}`} />
          ))}
          <span className="font-inter text-[10px] text-stone-light ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-sm uppercase tracking-[0.12em] text-charcoal hover:text-gold transition-colors leading-snug"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-inter text-[11px] text-stone-light mt-0.5 hidden">
          {product.shortDescription}
        </p>
        <p className="font-inter text-sm font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  );
}
