import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';

export function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0]?.value || 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-charcoal overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 ease-luxury"
          style={{ opacity: isHovered && product.images[1] ? 0 : 1 }}
        />
        
        {/* Secondary Image (on hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-luxury"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="gold">{product.badge}</Badge>
          </div>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gold text-white transform transition-all duration-300 ease-luxury ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full py-3.5 text-button flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        
        {/* Product Name */}
        <h3 className="heading-product text-sm text-charcoal">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-medium">
            {formatPrice(product.price)}
          </span>
          {product.comparePrice && (
            <span className="text-soft-gray text-sm line-through">
              {formatPrice(product.comparePrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
