import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = products.filter((p) => p.featured);

  return (
    <section className="bg-parchment py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-manrope text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-[0.15em] uppercase text-ink-muted hover:text-gold transition-colors duration-300 border-b border-sand pb-0.5 self-start sm:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product)}
            />
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
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="w-full bg-obsidian/90 text-cream font-manrope text-[10px] tracking-[0.15em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <Link to={`/product/${product.slug}`}>
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-[0.12em] text-obsidian leading-tight mb-1 group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-manrope text-[11px] text-ink-muted mb-2 leading-snug"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm font-medium text-obsidian">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-2.5 h-2.5 fill-gold text-gold" />
            <span className="font-manrope text-[10px] text-ink-muted">
              {product.rating}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
