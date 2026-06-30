import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
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
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          id={product.titleId}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
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
            onClick={handleAdd}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-sans text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Bestseller badge */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-sans text-[10px] tracking-widest uppercase bg-gold text-obsidian px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="mt-4 px-1">
        <p
          id={product.descId}
          className="font-sans text-xs text-mist tracking-wide capitalize"
        >
          {product.shortDescription}
        </p>
        <h3 className="font-serif text-base uppercase tracking-wider text-ink mt-1 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm text-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-sans text-xs text-mist">{product.rating}</span>
          </div>
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

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Curated for You</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink font-light">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors flex items-center gap-2 self-start sm:self-auto"
          >
            View All <span>→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
