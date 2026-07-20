import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 font-sans text-[9px] tracking-widest uppercase bg-gold text-ivory px-2 py-1">
            {product.badge}
          </span>
        )}

        {/* Main image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
        />

        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
            />
          ))}
          <span className="font-sans text-[10px] text-subtle ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>

        <p id={product.descId} className="sr-only">{product.description}</p>

        <p className="font-sans text-sm font-medium text-ink">${product.price}</p>
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">Curated for You</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
          >
            View All
            <span className="w-8 h-px bg-muted group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
