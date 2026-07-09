import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <svg key={s} className={`w-2.5 h-2.5 ${s <= Math.round(rating) ? 'text-gold' : 'text-stone/30'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-espresso/90 backdrop-blur-sm text-ivory font-sans text-[10px] uppercase tracking-[0.15em] py-3 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-gold text-ivory font-sans text-[9px] uppercase tracking-[0.1em] px-2 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p
          id={product.titleId}
          className="font-serif text-sm uppercase tracking-[0.12em] text-espresso group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p id={product.descId} className="font-sans text-[11px] text-stone capitalize">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between pt-0.5">
          <span className="font-sans text-sm font-medium text-espresso">
            {formatPrice(product.price)}
          </span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter(p => p.bestseller);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-[0.15em] text-espresso border-b border-espresso/30 pb-0.5 hover:border-gold hover:text-gold transition-colors self-start md:self-auto"
          >
            View All →
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
