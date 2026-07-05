import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    await addToCart(product, product.variants[0], 1);
    setIsAdding(false);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-charcoal/5 rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 bg-charcoal text-warmWhite text-[10px] tracking-extra-wide uppercase px-2 py-1">
            Bestseller
          </span>
        )}

        {/* Gift Set Badge */}
        {product.isGiftSet && (
          <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] tracking-extra-wide uppercase px-2 py-1">
            Gift Set
          </span>
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className="w-full bg-warmWhite text-charcoal py-3 text-xs tracking-extra-wide uppercase font-medium hover:bg-gold-400 hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isAdding ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Adding...
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-serif text-sm md:text-base tracking-extra-wide uppercase text-charcoal group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-lightTaupe'}
            />
          ))}
          <span className="text-xs text-charcoal/50 ml-1">({product.reviews})</span>
        </div>

        <p className="font-sans text-sm text-charcoal/70">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
