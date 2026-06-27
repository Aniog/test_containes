import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <article
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-[var(--color-ivory)] rounded mb-4 overflow-hidden">
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 0 : 1 }}
          />

          {/* Hover Image */}
          <img
            src={product.hoverImage || product.image}
            alt={`${product.name} - alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 badge z-10">
              {product.badge}
            </span>
          )}

          {/* Quick Add Button */}
          {showQuickAdd && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, product.variants[0]);
              }}
              className="absolute bottom-3 left-3 right-3 bg-[var(--color-charcoal)] text-white py-2.5 px-4 flex items-center justify-center gap-2 text-xs tracking-[0.1em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-espresso)]"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-[var(--color-charcoal)] mb-1 group-hover:text-[var(--color-gold)] transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-[var(--color-warm-gray)] mb-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                    : 'text-[var(--color-sand)]'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--color-warm-gray)]">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-medium text-[var(--color-charcoal)]">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
