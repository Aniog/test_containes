import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
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
          size={11}
          fill={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
          stroke={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
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
      className="group relative bg-ivory"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-section-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [bestsellers-section-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-obsidian px-2 py-0.5 font-semibold">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-obsidian text-parchment px-2 py-0.5 font-semibold">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full py-3 bg-obsidian/90 text-parchment font-sans text-[10px] tracking-widest uppercase font-semibold hover:bg-obsidian transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-serif text-sm tracking-wider uppercase text-ink hover:text-gold transition-colors leading-tight"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="font-sans text-xs text-muted mt-1 leading-snug">
              {product.shortDescription}
            </p>
          </div>
          <span className="font-serif text-lg text-ink flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-whisper">({product.reviewCount})</span>
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
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 font-medium">
            Most Loved
          </p>
          <h2 id="bestsellers-section-title" className="font-serif text-4xl md:text-5xl text-ink font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
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
            className="inline-block px-10 py-3.5 border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase font-semibold hover:bg-obsidian hover:text-parchment transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
