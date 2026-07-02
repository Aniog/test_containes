import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-ivory-dark aspect-[3/4] block">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}
        {product.tags?.includes('new') && (
          <span className="absolute top-3 right-3 bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            New
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-ivory/95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full font-sans text-[10px] tracking-widest uppercase text-text-primary hover:text-gold transition-colors duration-300"
          >
            Quick Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-widest text-text-primary hover:text-gold transition-colors duration-300 mb-1">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-text-muted mb-2 hidden">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-text-secondary">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" className="text-gold" />
            <span className="font-sans text-[10px] text-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Bestsellers({ products }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
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
            className="inline-block border border-text-primary text-text-primary font-sans text-xs tracking-widest uppercase px-10 py-3.5 hover:bg-obsidian hover:text-ivory hover:border-obsidian transition-all duration-400"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
