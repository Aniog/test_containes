import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import useCartStore from '@/store/cartStore';

export default function ProductCard({ product, showAddToCart = true }) {
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden rounded-sm">
          {/* Primary image */}
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`${product.name} ${product.imgQuery}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={`product-${product.id}-hover`}
            data-strk-img={`${product.imgQuery} styled detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add button */}
          {showAddToCart && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, 'gold');
              }}
              className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-deep-base/90 backdrop-blur-sm text-cream py-3 px-4 font-sans text-xs uppercase tracking-wider transition-all duration-300 ${
                hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } hover:bg-gold-accent hover:text-deep-base`}
            >
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          )}
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4 space-y-1.5">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif uppercase tracking-product text-xs md:text-sm text-deep-base hover:text-gold-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'fill-gold-accent text-gold-accent' : 'text-warm-border'}
              />
            ))}
          </div>
          <span className="text-[10px] text-warm-gray">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-medium text-deep-base">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
