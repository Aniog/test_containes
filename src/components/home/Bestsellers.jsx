import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          style={{
            color: s <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
            fill: s <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
          }}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative bg-cream overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-parchment font-sans text-[9px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag size={13} className="text-gold" />
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="font-sans text-[10px] tracking-widest uppercase text-parchment hover:text-gold transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p id={product.titleId} className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
              {product.name}
            </p>
            <p id={product.descId} className="font-sans text-xs text-ink-muted mt-0.5 leading-snug">
              {product.subtitle}
            </p>
          </div>
          <p className="font-sans text-sm font-medium text-ink flex-shrink-0">${product.price}</p>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-ink-faint">({product.reviewCount})</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors border-b border-ink-muted/30 hover:border-gold pb-0.5 self-start md:self-auto"
          >
            View All →
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
