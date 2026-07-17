import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-[#F5F0E8] overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Secondary Image on Hover */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, 'gold');
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 text-sm font-sans tracking-wider uppercase transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-dark)'
            }}
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-xs mb-1 hover:text-[var(--color-gold)] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-[#C9A962] text-[#C9A962]" />
          <span className="text-xs text-[#8A8A8A]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-serif" style={{ color: 'var(--color-gold-dark)' }}>
          ${product.price}
        </p>
      </div>
    </div>
  );
}