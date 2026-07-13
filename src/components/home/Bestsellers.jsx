import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter(p => p.tags.includes('bestseller'));

  return (
    <section className="py-20 md:py-28 bg-velmora-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
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
            className="inline-block border border-velmora-gold text-velmora-gold font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
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
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-velmora-linen aspect-portrait mb-4">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags.includes('new') && (
              <span className="bg-velmora-obsidian text-velmora-cream font-sans text-[9px] tracking-[0.15em] uppercase px-2 py-1">
                New
              </span>
            )}
            {product.tags.includes('bestseller') && (
              <span className="bg-velmora-gold text-velmora-obsidian font-sans text-[9px] tracking-[0.15em] uppercase px-2 py-1">
                Bestseller
              </span>
            )}
          </div>

          {/* Quick add button */}
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-cream font-sans text-[10px] tracking-[0.2em] uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="text-center">
        <p
          id={product.titleId}
          className="font-serif text-sm tracking-[0.12em] uppercase text-velmora-text-primary mb-1 leading-tight"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        {/* Stars */}
        <div className="flex items-center justify-center gap-0.5 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
            />
          ))}
          <span className="font-sans text-[10px] text-velmora-text-muted ml-1">({product.reviewCount})</span>
        </div>

        <p className="font-serif text-base text-velmora-text-primary">${product.price}</p>
      </div>
    </div>
  );
}
