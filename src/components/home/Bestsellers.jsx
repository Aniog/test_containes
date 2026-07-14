import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          stroke={i <= Math.round(rating) ? '#C9A96E' : '#D4C9B5'}
          fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
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
      <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="font-inter text-[9px] uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-inter text-[9px] uppercase tracking-widest bg-velmora-obsidian text-velmora-text-light px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian text-velmora-text-light font-inter text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag size={12} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-gold-dark transition-colors duration-300"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>
        <div className="flex items-center justify-between mt-1.5">
          <StarRating rating={product.rating} />
          <span className="font-inter text-sm font-medium text-velmora-obsidian">${product.price}</span>
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
    <section ref={containerRef} className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-3">
              Our Favourites
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs uppercase tracking-widest text-velmora-mist hover:text-velmora-obsidian border-b border-velmora-mist hover:border-velmora-obsidian pb-0.5 transition-all duration-300 self-start md:self-auto"
          >
            View All →
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
