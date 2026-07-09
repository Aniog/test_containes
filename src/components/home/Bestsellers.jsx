import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-gold mb-3 font-sans">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
            className="inline-block border border-ink text-ink px-10 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-ink hover:text-cream transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-gold text-cream text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 font-sans">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-ink text-cream text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 font-sans">
                New
              </span>
            )}
          </div>

          {/* Quick add */}
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="absolute bottom-0 left-0 right-0 bg-ink/90 text-cream py-3 text-[10px] uppercase tracking-widest font-medium font-sans translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-obsidian"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div>
        {/* Hidden text for image queries */}
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted'}`}
              />
            ))}
          </div>
          <span className="text-[11px] text-taupe font-sans">({product.reviewCount})</span>
        </div>

        <p className="font-sans text-sm font-medium text-ink mt-1.5">${product.price}</p>
      </div>
    </div>
  );
}
