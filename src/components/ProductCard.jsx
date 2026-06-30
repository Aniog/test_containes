import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import StarRating from './StarRating';
import ProductBadge from './ProductBadge';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden mb-4">
        <ProductBadge label={product.badge} />
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}
        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 bg-surface/95 backdrop-blur-sm text-charcoal text-[11px] font-sans font-semibold uppercase tracking-wide hover:bg-gold hover:text-white transition-all duration-300 rounded-sm ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-[15px] md:text-base font-medium text-charcoal tracking-wide uppercase group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-warm-gray font-sans">{product.tagline}</p>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} showCount count={product.reviewCount} />
        </div>
        <p className="font-sans text-base font-semibold text-charcoal mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
