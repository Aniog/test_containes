import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          className={i <= Math.round(rating) ? 'text-champagne fill-champagne' : 'text-blush'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative bg-cream">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-parchment">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-champagne text-velvet font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velvet text-ivory font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-velvet/90 backdrop-blur-sm">
          <button
            onClick={() => addItem(product)}
            className="w-full flex items-center justify-center gap-2 py-3 font-sans text-xs uppercase tracking-widest text-ivory hover:text-champagne transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-5 px-1">
        <p id={product.titleId} className="product-name text-xs text-velvet mb-1 leading-snug">
          {product.name}
        </p>
        <p id={product.descId} className="font-sans text-xs text-stone mb-2 leading-relaxed line-clamp-1">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm font-semibold text-velvet">${product.price}</span>
          <StarRating rating={product.rating} />
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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest3 text-champagne mb-3 font-medium">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet mb-4">
            Our Bestsellers
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-champagne text-champagne hover:bg-champagne hover:text-velvet font-sans text-xs uppercase tracking-widest px-10 py-3.5 transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
