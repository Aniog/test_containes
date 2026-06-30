import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div 
        className="relative aspect-[4/5] overflow-hidden bg-warm-white mb-4"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </Link>

        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 'gold', 1);
          }}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-cream/95 text-charcoal text-sm font-medium tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:bg-charcoal hover:text-cream ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ 
            backgroundColor: 'rgba(250, 248, 245, 0.95)',
            letterSpacing: '0.1em'
          }}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          QUICK ADD
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 
            className="product-name mb-1 hover:text-gold transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {product.name}
          </h3>
        </Link>
        <p className="text-gold font-medium" style={{ color: 'var(--color-gold)' }}>
          ${product.price}
        </p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className="text-xs"
              style={{ color: i < product.rating ? 'var(--color-gold)' : 'var(--color-border)' }}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-stone ml-1" style={{ color: 'var(--color-stone)' }}>
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}