import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-section-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-obsidian/90 text-cream font-manrope text-[10px] uppercase tracking-[0.14em] py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>

        {/* Tags */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-manrope text-[9px] uppercase tracking-[0.12em] bg-gold text-cream px-2.5 py-1">
              Bestseller
            </span>
          </div>
        )}
      </Link>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <p className="font-manrope text-[9px] uppercase tracking-[0.14em] text-ink-faint mb-1.5 capitalize">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-ink-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
              Most Loved
            </p>
            <h2
              id="bestsellers-section-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-[0.14em] text-ink-muted border-b border-ink-muted pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
