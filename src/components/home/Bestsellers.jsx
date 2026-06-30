import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card group flex-shrink-0 w-[260px] md:w-auto">
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream-200 aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="product-img-primary absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="product-img-secondary absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-white font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-charcoal text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add — appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-charcoal text-cream font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-charcoal-muted mt-1 line-clamp-1">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#b8965a" className="text-gold" />
            <span className="font-sans text-xs text-charcoal-muted">{product.rating}</span>
          </div>
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
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Curated for You</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid — horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-5 gap-5 overflow-x-auto scroll-hide pb-4 md:pb-0">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
