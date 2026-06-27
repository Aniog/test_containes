import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersSection() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#c9a96e] mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-[#2c2825]">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#c9a96e] text-[#c9a96e] font-sans text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#c9a96e] hover:text-[#1a1714] transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-[#f0ebe4] aspect-[3/4]">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#1a1714] text-[#c9a96e] font-sans text-[10px] tracking-[0.1em] uppercase px-2 py-1">
            {product.badge}
          </span>
        )}

        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Hover image */}
        <img
          data-strk-img-id={`${product.imgId}-hover`}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#1a1714]/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="flex items-center gap-2 text-[#c9a96e] font-sans text-[11px] tracking-[0.12em] uppercase hover:text-[#e8d5b0] transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3 md:mt-4">
        <p
          id={product.titleId}
          className="font-sans text-[11px] md:text-xs tracking-[0.12em] uppercase text-[#2c2825] font-semibold leading-tight"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#d4ccc4]'}
            />
          ))}
          <span className="font-sans text-[10px] text-[#a89e95] ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-serif text-base text-[#2c2825]">${product.price}</span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-[#a89e95] line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
