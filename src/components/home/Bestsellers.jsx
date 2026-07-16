import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        {/* Primary image */}
        <img
          id={product.imgId}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        {/* Hover image */}
        <img
          id={product.hoverImgId}
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
        </div>

        {/* Quick add button */}
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

      {/* Product info */}
      <div className="pt-3 pb-1">
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}`}
            />
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

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Curated for You</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-[11px] uppercase tracking-[0.14em] text-stone-warm hover:text-gold transition-colors border-b border-stone-light/50 pb-0.5 self-start md:self-auto"
          >
            View All
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
