import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addToCart(product, product.variants?.[0] || 'Gold', 1);
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <article
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          
          {/* Secondary Image (Hover) */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          )}

          {/* Bestseller Badge */}
          {product.bestseller && (
            <div className="absolute top-4 left-4 bg-warm-black text-white text-xs uppercase tracking-wider px-3 py-1">
              Bestseller
            </div>
          )}

          {/* Quick Add Button */}
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="w-full py-3 bg-white text-warm-black text-sm font-medium rounded hover:bg-gold hover:text-white transition-colors disabled:opacity-50"
            >
              {isAdding ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="product-name text-sm text-warm-black">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm text-warm-gray">
              {product.rating} ({product.reviews})
            </span>
          </div>
          
          <p className="text-charcoal font-medium">${product.price}</p>
        </div>
      </Link>
    </article>
  );
}
