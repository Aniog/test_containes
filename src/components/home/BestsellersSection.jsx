import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersSection() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-2">
              Curated for You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-border pb-0.5 self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-widest uppercase font-medium bg-velmora-obsidian text-velmora-ivory px-2 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={(e) => { e.preventDefault(); onAddToCart(); }}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="pt-3 flex flex-col gap-1">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={9}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
              strokeWidth={1}
            />
          ))}
          <span className="font-sans text-[10px] text-velmora-subtle ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-sans text-[11px] tracking-widest uppercase font-medium text-velmora-obsidian hover:text-velmora-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>

        <p id={product.descId} className="font-sans text-xs text-velmora-muted leading-snug hidden">
          {product.subtitle}
        </p>

        <p className="font-sans text-sm font-medium text-velmora-obsidian">${product.price}</p>
      </div>
    </div>
  );
}
