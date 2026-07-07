import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-product bg-cream-100 rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
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
          <span className="absolute top-3 left-3 px-3 py-1 bg-gold text-white text-[10px] uppercase tracking-wider">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="flex items-center gap-2 text-sm text-espresso-900 hover:text-gold transition-colors"
            >
              <Plus className="w-4 h-4" strokeWidth={2} />
              <span className="uppercase tracking-wider text-xs">Quick Add</span>
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-gold fill-gold'
                  : 'text-border'
              }`}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-taupe-light ml-1">({product.reviews})</span>
        </div>

        <h3 className="product-name text-espresso-900 group-hover:text-gold transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-taupe">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
