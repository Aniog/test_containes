import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] gold jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-gold text-ivory font-manrope text-[9px] uppercase tracking-[0.1em] px-2 py-0.5">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-obsidian text-ivory font-manrope text-[9px] uppercase tracking-[0.1em] px-2 py-0.5">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <button
            onClick={handleAdd}
            className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-manrope text-[10px] uppercase tracking-[0.12em] py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Product info */}
        <div>
          <h3
            id={product.titleId}
            className="font-cormorant text-sm uppercase tracking-[0.12em] text-ink mb-1 group-hover:text-gold transition-colors duration-200"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="font-manrope text-xs text-mist mb-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-manrope text-sm font-semibold text-ink">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-parchment fill-parchment'}
                  />
                ))}
              </div>
              <span className="font-manrope text-[10px] text-whisper">({product.reviewCount})</span>
            </div>
          </div>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-[0.12em] text-mist hover:text-gold transition-colors duration-200 border-b border-parchment pb-0.5 self-start md:self-auto"
          >
            View All →
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
