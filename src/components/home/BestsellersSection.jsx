import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          className={i <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4]">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags.includes('bestseller') && (
              <span className="bg-velmora-obsidian text-velmora-cream font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
                New
              </span>
            )}
          </div>

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full flex items-center justify-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-cream hover:text-velmora-gold transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <p
            id={product.titleId}
            className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian mb-1 leading-tight"
          >
            {product.name}
          </p>
          <p id={product.descId} className="font-manrope text-xs text-velmora-muted mb-2 hidden">
            {product.shortDesc}
          </p>
          <div className="flex items-center justify-between">
            <StarRating rating={product.rating} />
            <span className="font-manrope text-sm font-semibold text-velmora-obsidian">
              ${product.price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BestsellersSection() {
  const bestsellers = products.filter(p => p.tags.includes('bestseller'));

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-gold transition-colors border-b border-velmora-stone hover:border-velmora-gold pb-0.5 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
