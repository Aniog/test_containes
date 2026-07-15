import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useCart } from '../../hooks/useCart';
import { ShoppingBag, Star } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative bg-white rounded-lg overflow-hidden hover:shadow-medium transition-shadow duration-300 border border-neutral-100"
    >
      {/* Sale Badge */}
      {product.tags.includes('sale') && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          Sale
        </div>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.slug}`} className="block">
        <div className="aspect-square relative overflow-hidden">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`[${product.id}-desc] [${product.id}-title]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-neutral-900 font-medium px-4 py-2 rounded-lg shadow-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center space-x-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`${product.id}-title`}
            className="font-serif font-semibold text-neutral-900 text-sm uppercase tracking-wider mb-1 hover:text-brand-600 transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`${product.id}-desc`}
          className="text-neutral-500 text-xs mb-3 line-clamp-2"
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-neutral-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-neutral-400 line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 fill-brand-400 text-brand-400" />
            <span className="text-xs text-neutral-500">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}