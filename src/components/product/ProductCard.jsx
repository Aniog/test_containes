import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-3/4 bg-[var(--color-cream)] mb-4 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {/* Hover image */}
        <img
          src={product.images[1] || product.images[0]}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Tags */}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-[var(--color-charcoal)] text-white text-[10px] uppercase tracking-wider px-2 py-1">
            Bestseller
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isLoading}
            className="w-full bg-[var(--color-ivory)] text-[var(--color-charcoal)] py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div>
        <h3 className="product-name text-xs md:text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
          <span className="text-xs text-[var(--color-text-muted)]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
