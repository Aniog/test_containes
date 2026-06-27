import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[var(--color-surface-alt)] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image on Hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 text-[var(--color-text)] text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[var(--color-velmora-gold)] hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ fontFamily: 'var(--font-family-sans)' }}
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 
          className="product-name mb-1 group-hover:text-[var(--color-velmora-gold)] transition-colors"
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-[var(--color-velmora-gold)] text-[var(--color-velmora-gold)]" />
          <span className="text-xs text-[var(--color-muted)]">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <p className="text-sm font-medium">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;