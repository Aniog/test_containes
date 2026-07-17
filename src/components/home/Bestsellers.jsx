import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const GOLD = '#C9A96E';
const EMPTY = '#E8E2D8';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          strokeWidth={1}
          style={{ fill: i <= Math.round(rating) ? GOLD : EMPTY, color: i <= Math.round(rating) ? GOLD : EMPTY }}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      {/* Image area */}
      <div className="relative overflow-hidden bg-linen aspect-[3/4] product-img-wrap">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-cream font-manrope text-[11px] font-semibold tracking-[0.12em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Bestseller tag */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-manrope text-[9px] font-semibold tracking-[0.1em] uppercase bg-gold text-obsidian px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p
              id={product.titleId}
              className="font-cormorant text-base font-medium tracking-[0.12em] uppercase text-ink leading-tight"
            >
              <Link to={`/product/${product.slug}`} className="hover:text-gold transition-colors">
                {product.name}
              </Link>
            </p>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>
          </div>
          <span className="font-manrope text-sm font-medium text-ink flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[11px] text-muted">({product.reviewCount})</span>
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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-manrope text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs font-medium tracking-[0.1em] uppercase text-muted hover:text-gold transition-colors border-b border-muted/30 hover:border-gold pb-0.5 self-start md:self-auto"
          >
            View All →
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
