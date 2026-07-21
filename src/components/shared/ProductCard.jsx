import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || null);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < fullStars
                ? 'fill-[var(--champagne-gold)] text-[var(--champagne-gold)]'
                : i === fullStars && hasHalf
                ? 'fill-[var(--champagne-gold)]/50 text-[var(--champagne-gold)]'
                : 'text-[var(--light-warm-gray)]'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[var(--warm-stone)] rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-[var(--deep-espresso)] text-[var(--ivory-cream)] text-xs tracking-wider">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-[var(--ivory-cream)] text-[var(--deep-espresso)] text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          } hover:bg-[var(--champagne-gold)]`}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-2">
          {renderStars(product.rating)}
          <span className="text-xs text-[var(--soft-gray)]">
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <h3
          className="product-name text-sm text-[var(--deep-espresso)]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-[var(--charcoal)] font-medium">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
