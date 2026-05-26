import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Badge } from '@/components/ui/Badge';
import { BADGE_CONFIG } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORY_EMOJI = {
  jersey: '👕', ball: '⚽', scarf: '🧣', hat: '🧢',
  trophy: '🏆', flag: '🚩', accessory: '🎁', collectible: '🎖️',
};

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const badgeConfig = product.badge ? BADGE_CONFIG[product.badge] : null;
  const discount = product.original_price
    ? Math.round((1 - product.price / product.original_price) * 100)
    : null;

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes?.[0] || '';
    addItem(product, defaultSize);
  };

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div ref={containerRef} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            id={`product-img-${product.id}`}
            data-strk-img-id={`product-card-img-${product.id}`}
            data-strk-img={`[product-name-${product.id}] [product-team-${product.id}] world cup merchandise`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="400"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Fallback emoji */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-6xl opacity-30">{CATEGORY_EMOJI[product.category]}</span>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {badgeConfig && (
              <Badge className={badgeConfig.className}>{badgeConfig.label}</Badge>
            )}
            {discount && (
              <Badge className="bg-red-600 text-white">-{discount}%</Badge>
            )}
          </div>

          {/* Quick Add */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-red-700 hover:bg-red-800 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0"
            aria-label="加入购物车"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="p-3">
          {/* Hidden text for image search */}
          <span id={`product-name-${product.id}`} className="sr-only">{product.name}</span>
          <span id={`product-team-${product.id}`} className="sr-only">{product.team || product.category}</span>

          {product.team && (
            <p className="text-xs text-blue-700 font-semibold mb-1">{product.team}</p>
          )}
          <h3 className="text-slate-900 font-semibold text-sm leading-tight line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[1,2,3,4,5].map(s => (
                <Star
                  key={s}
                  className={`w-3 h-3 ${s <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-gray-500 text-xs">({product.review_count})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-red-700 font-bold text-base">¥{product.price.toFixed(2)}</span>
            {product.original_price && (
              <span className="text-gray-400 text-xs line-through">¥{product.original_price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
