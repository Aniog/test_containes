import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || null);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-[var(--velmora-cream)] rounded-lg overflow-hidden mb-4">
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

        {/* Bestseller Badge */}
        {product.bestseller && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--velmora-charcoal)] text-white text-xs tracking-wider uppercase">
            Bestseller
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-[var(--velmora-white)] text-[var(--velmora-charcoal)] text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[var(--velmora-gold)] hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(product.rating)
                  ? 'fill-[var(--velmora-gold)] text-[var(--velmora-gold)]'
                  : 'text-[var(--velmora-gray-400)]'
              }
            />
          ))}
          <span className="text-xs text-[var(--velmora-gray-600)] ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="product-name text-[var(--velmora-charcoal)] group-hover:text-[var(--velmora-gold)] transition-colors">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[var(--velmora-gray-600)] line-clamp-1">
          {product.shortDescription}
        </p>

        {/* Price */}
        <p className="text-[var(--velmora-gold)] font-medium text-lg">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
