import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    await addToCart(product, 1, product.variants?.[0] || null);
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
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden mb-4">
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
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3 bg-charcoal-800 text-cream-50 px-3 py-1">
            <span className="text-xs font-sans tracking-wide uppercase">Bestseller</span>
          </div>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-900/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="w-full bg-cream-50 text-charcoal-800 py-3 font-sans text-xs tracking-wide uppercase hover:bg-gold-100 transition-colors disabled:opacity-50"
            >
              {isAdding ? 'ADDING...' : 'QUICK ADD'}
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-product-name text-xs">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-200'}`}
            />
          ))}
          <span className="text-xs text-charcoal-400 ml-1">({product.reviews})</span>
        </div>

        <p className="font-serif text-charcoal-800 text-lg">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
