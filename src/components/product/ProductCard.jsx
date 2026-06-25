import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await addToCart(product, 1, product.variants[0] || 'gold');
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-[var(--color-parchment)] overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Secondary Image (hover) */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-2 py-1 bg-[var(--color-charcoal)] text-[var(--color-ivory)] text-xs tracking-wider">
                NEW
              </span>
            )}
            {product.tags.includes('bestseller') && (
              <span className="px-2 py-1 bg-[var(--color-gold)] text-[var(--color-ivory)] text-xs tracking-wider">
                BESTSELLER
              </span>
            )}
            {product.comparePrice && (
              <span className="px-2 py-1 bg-[var(--color-terracotta)] text-[var(--color-ivory)] text-xs tracking-wider">
                SALE
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isLoading}
              className="w-full py-3 bg-[var(--color-ivory)] text-[var(--color-charcoal)] text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-[var(--color-gold)] hover:text-[var(--color-ivory)] transition-all duration-300 disabled:opacity-50"
            >
              <ShoppingBag className="w-4 h-4" />
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-[var(--color-gold)] fill-current'
                    : 'text-[var(--color-sand)]'
                }`}
              />
            ))}
            <span className="text-xs text-[var(--color-stone)] ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="product-name text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-medium">${product.price}</span>
            {product.comparePrice && (
              <span className="text-sm text-[var(--color-stone)] line-through">
                ${product.comparePrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
