import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Rating } from '../ui/Rating';
import { ProductImagePlaceholder } from '../ui/ProductImagePlaceholder';
import { useCart } from '../../context/CartContext';
import { clsx } from 'clsx';

export function ProductCard({ product, index = 0 }) {
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  const imageType = product.category === 'necklaces' ? 'necklace' 
    : product.category === 'huggies' ? 'huggie'
    : product.category === 'sets' ? 'set'
    : 'earring';

  return (
    <Link
      to={`/product/${product.slug}`}
      className={clsx(
        'group block animate-on-scroll',
        `stagger-${(index % 5) + 1}`
      )}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] bg-warm-gray-50 overflow-hidden mb-4 product-card">
        {/* Primary image */}
        <ProductImagePlaceholder 
          type={imageType}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Secondary image (hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <ProductImagePlaceholder 
            type={imageType}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-champagne text-rich-black text-[10px] font-medium tracking-wider uppercase px-2 py-1">
            Bestseller
          </span>
        )}

        {/* Gift badge */}
        {product.isGiftSet && (
          <span className="absolute top-3 right-3 bg-rich-black text-warm-ivory text-[10px] font-medium tracking-wider uppercase px-2 py-1">
            Gift Set
          </span>
        )}

        {/* Quick add button */}
        <button
          type="button"
          onClick={handleQuickAdd}
          disabled={isLoading}
          className="quick-add flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} />
          <span>Quick Add</span>
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1">
        <h3 className="product-name text-warm-gray-900">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <Rating value={Math.round(product.rating)} size={12} />
          <span className="text-xs text-warm-gray-400">
            ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium text-warm-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
