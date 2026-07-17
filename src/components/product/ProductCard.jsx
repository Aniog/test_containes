import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0] || 'gold', 1);
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-sand/30 rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-charcoal text-white text-[10px] tracking-wider uppercase">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-1 bg-gold text-white text-[10px] tracking-wider uppercase">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-0 left-0 right-0 py-3 bg-charcoal/90 text-white text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-serif text-sm sm:text-base text-charcoal uppercase tracking-wide">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) 
                  ? 'text-gold fill-gold' 
                  : 'text-sand'
              }`}
            />
          ))}
          <span className="text-xs text-warmGray ml-1">({product.reviews})</span>
        </div>
        
        <p className="font-serif text-charcoal">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
