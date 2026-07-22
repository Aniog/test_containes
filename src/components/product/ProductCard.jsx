import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-[var(--color-sand)] overflow-hidden">
          <img 
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
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
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-charcoal)] text-white text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[var(--color-gold)] ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-4 text-center">
          <h3 className="font-serif text-sm uppercase tracking-widest text-[var(--color-charcoal)]">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Star size={12} fill="var(--color-gold)" stroke="var(--color-gold)" />
            <span className="text-xs text-[var(--color-taupe)]">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <p className="mt-1 text-sm">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}