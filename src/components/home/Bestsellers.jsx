import { useEffect, useRef } from 'react';
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
          fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
          className={i <= Math.round(rating) ? 'text-velmora-gold' : 'text-velmora-divider'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-velmora-parchment aspect-[3/4]">
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

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="font-inter text-[9px] uppercase tracking-widest-sm bg-velmora-gold text-velmora-ink px-2 py-0.5">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="font-inter text-[9px] uppercase tracking-widest-sm bg-velmora-ink text-velmora-cream px-2 py-0.5">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-velmora-ink text-velmora-cream font-inter text-[10px] uppercase tracking-widest-sm py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-espresso transition-colors duration-300"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3 px-0.5">
        <div className="flex items-center justify-between gap-2">
          <Link to={`/product/${product.slug}`}>
            <h3
              id={product.titleId}
              className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-ink hover:text-velmora-gold transition-colors duration-300 leading-tight"
            >
              {product.name}
            </h3>
          </Link>
          <span className="font-cormorant text-lg text-velmora-ink flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <p id={product.descId} className="hidden">{product.shortDescription}</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="font-inter text-[10px] text-velmora-stone">({product.reviewCount})</span>
        </div>
      </div>
    </article>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-xs uppercase tracking-widest-lg text-velmora-gold mb-3">
            Our Favourites
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-ink font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-ink text-velmora-ink font-inter text-xs uppercase tracking-widest-md px-10 py-4 hover:bg-velmora-ink hover:text-velmora-cream transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
