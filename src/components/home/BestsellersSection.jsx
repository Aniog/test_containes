import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag } from 'lucide-react';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] bg-[var(--velmora-cream)] overflow-hidden mb-4">
        <img
          data-strk-img-id={`best-${product.images[0].id}`}
          data-strk-img={`[${product.id}-title] [${product.id}-subtitle]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--velmora-bg-dark)] text-white text-[10px] tracking-[0.12em] uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className="w-full velmora-btn-primary text-xs py-3"
          >
            <ShoppingBag size={14} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 className="velmora-product-name text-sm mb-1 group-hover:text-[var(--velmora-warm)] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[var(--velmora-text-muted)] mb-2">{product.subtitle}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
            <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="velmora-heading text-3xl md:text-4xl mb-3">Bestsellers</h2>
          <div className="velmora-divider-thin w-16 mx-auto mb-4" />
          <p className="text-sm text-[var(--velmora-text-muted)] max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what matters.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
