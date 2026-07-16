import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
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
          size={10}
          strokeWidth={1}
          style={i <= Math.round(rating)
            ? { color: '#C9A96E', fill: '#C9A96E' }
            : { color: '#D4C9B0', fill: 'none' }
          }
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-velmora-cream block aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        {/* Hover overlay with second image hint */}
        <div className="absolute inset-0 bg-velmora-obsidian/0 group-hover:bg-velmora-obsidian/10 transition-all duration-500" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-text-light font-manrope text-[10px] uppercase tracking-widest-sm px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-0 left-0 right-0 text-velmora-text-light font-manrope text-xs uppercase tracking-widest-sm py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-obsidian"
          style={{ backgroundColor: 'rgba(26,23,20,0.88)' }}
        >
          <ShoppingBag size={13} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest-sm font-medium text-velmora-obsidian hover:text-velmora-gold transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-manrope text-xs text-velmora-text-muted mt-1 leading-relaxed line-clamp-1">
          {product.subtitle}
        </p>
        <p className="font-manrope text-sm font-medium text-velmora-obsidian mt-2">
          ${product.price}
        </p>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-3 font-medium">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-widest-md text-velmora-text-mid hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-sand pb-0.5 self-start md:self-auto"
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
