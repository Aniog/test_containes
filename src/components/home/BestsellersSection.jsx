import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
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
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-ivory font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-manrope text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          } hover:bg-gold`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Product info */}
      <div>
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-widest text-ink font-medium group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p id={product.descId} className="font-manrope text-xs text-muted mt-1 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-manrope text-sm text-ink font-medium">${product.price}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
              />
            ))}
            <span className="font-manrope text-[10px] text-whisper ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">Curated for You</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink font-manrope text-xs tracking-widest uppercase px-10 py-3 hover:bg-ink hover:text-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
