import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import StarRating from '../ui/StarRating';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdding) return;
    
    setIsAdding(true);
    addItem(product, product.variants[0]?.value || 'gold', 1);
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image (Hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-charcoal text-ivory text-xs tracking-wider">
              NEW
            </span>
          )}
          {product.comparePrice && (
            <span className="px-2 py-1 bg-gold text-white text-xs tracking-wider">
              SALE
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="w-full py-3 bg-ivory text-charcoal text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-70"
            >
              <ShoppingBag size={14} />
              {isAdding ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="product-name text-sm">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-sans text-sm">
              ${product.price}
            </span>
            {product.comparePrice && (
              <span className="font-sans text-xs text-taupe line-through">
                ${product.comparePrice}
              </span>
            )}
          </div>
        </div>
        <StarRating rating={product.rating} size={12} showCount={false} />
      </div>
    </Link>
  );
};

export default ProductCard;
