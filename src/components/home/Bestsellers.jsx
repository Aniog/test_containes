import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-section-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close-up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[10px] tracking-widest uppercase bg-gold text-obsidian px-2 py-1 font-semibold">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-sans text-[10px] tracking-widest uppercase bg-obsidian text-ivory px-2 py-1 font-semibold">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 bg-ivory/95 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-obsidian hover:text-gold transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={2} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="flex flex-col gap-1">
        <p
          id={product.titleId}
          className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight group-hover:text-gold transition-colors duration-300"
        >
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </p>
        <p id={product.descId} className="font-sans text-xs text-ink-faint leading-snug line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-sans text-sm font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={11} fill="#C9A96E" stroke="none" />
            <span className="font-sans text-xs text-ink-faint">{product.rating}</span>
          </div>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
            Most Loved
          </p>
          <h2
            id="bestsellers-section-title"
            className="font-serif text-4xl md:text-5xl font-light text-obsidian"
          >
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-obsidian text-obsidian font-sans text-xs tracking-[0.2em] uppercase font-semibold px-10 py-4 hover:bg-obsidian hover:text-ivory transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
