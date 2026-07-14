import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-[var(--color-ivory)] aspect-[4/5]">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Hover Image */}
        <img
          src={product.imageHover}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white/90 backdrop-blur-sm text-[var(--color-charcoal)] text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} />
            Quick Add
          </span>
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="text-product-name text-xs">{product.name}</h3>
        <p className="text-sm text-[var(--color-muted)] mt-1">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              strokeWidth={1}
              className={i < product.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-border)]'}
            />
          ))}
          <span className="text-xs text-[var(--color-muted)] ml-1">({product.reviews})</span>
        </div>

        <p className="font-serif text-lg mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
