import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, product.variants[0]);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-sand mb-4">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100 scale-100',
            isHovered && product.hoverImage && 'scale-105'
          )}
        />

        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold text-ivory text-xs font-sans font-medium px-3 py-1 tracking-wide">
            {product.badge}
          </div>
        )}

        {/* Quick Add Button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 transition-transform duration-300',
            isHovered ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className={cn(
              'w-full py-3 bg-charcoal/90 text-ivory text-sm font-sans font-medium tracking-wide transition-colors duration-300',
              'hover:bg-gold',
              isAdding && 'bg-gold'
            )}
          >
            {isAdding ? 'Added to Bag' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Product Name */}
        <h3 className="text-product-name text-charcoal">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-warmgray">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-sans text-sm font-medium text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
