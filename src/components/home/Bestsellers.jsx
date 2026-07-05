import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-cream aspect-[3/4]">
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-gold text-obsidian font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          {/* Hover image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <button
              onClick={handleAdd}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-sans text-[11px] font-semibold uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <div className="flex items-center gap-1 mb-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}
              />
            ))}
            <span className="font-sans text-[11px] text-muted ml-1">({product.reviewCount})</span>
          </div>

          <h3
            id={product.titleId}
            className="font-serif text-sm font-medium uppercase tracking-widest text-obsidian leading-tight mb-1"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="font-sans text-xs text-muted mb-2 sr-only">
            {product.shortDesc}
          </p>
          <p className="font-sans text-sm font-semibold text-obsidian">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs font-semibold uppercase tracking-widest text-stone hover:text-gold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
