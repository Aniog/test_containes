import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          style={s <= Math.round(rating) ? { color: '#c49a45', fill: '#c49a45' } : { color: '#d6c5b0', fill: 'none' }}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velvet-100 aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-cream font-sans text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 backdrop-blur-sm transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 text-cream font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={13} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <p className="font-sans text-xs text-stone mb-1">{product.material}</p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-base text-obsidian tracking-wide hover:text-gold transition-colors leading-snug"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="font-sans text-xs text-stone">({product.reviewCount})</span>
          </div>
          <p className="font-serif text-base text-obsidian">${product.price}</p>
        </div>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-obsidian hover:text-cream transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
