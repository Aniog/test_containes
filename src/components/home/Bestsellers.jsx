import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden">
          <img
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            )}
            data-strk-img-id={product.imageIds.primary}
            data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry product`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
            data-strk-img-id={product.imageIds.secondary}
            data-strk-img={`[${product.id}-name] worn model gold jewelry ear neck`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={cn(
              'absolute bottom-3 left-3 right-3 bg-charcoal/90 backdrop-blur-sm text-ivory py-2.5 px-4 flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-wider transition-all duration-300',
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`${product.id}-name`}
            className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`${product.id}-desc`}
          className="font-sans text-xs text-warm-gray mt-1 line-clamp-1"
        >
          {product.description}
        </p>
        <p className="font-serif text-base text-charcoal mt-1.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.bestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-section-sm md:py-section bg-ivory" ref={containerRef}>
      <div className="section-container">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold text-center mb-2">
          Customer Favorites
        </p>
        <h2 className="section-title">Bestsellers</h2>
        <p className="section-subtitle">
          Our most loved pieces, chosen by women who know what they want.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
