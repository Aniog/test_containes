import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || 'Gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-charcoal-50 overflow-hidden mb-4">
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
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-warmblack text-ivory-50 text-xs tracking-extra-wide uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-ivory-100 text-warmblack text-sm tracking-extra-wide uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-gold-500 fill-current" />
          <span className="text-xs text-charcoal-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <h3 className="product-name text-charcoal-800 group-hover:text-gold-700 transition-colors">
          {product.name}
        </h3>

        <p className="text-charcoal-600 font-light">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
