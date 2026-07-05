import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block group">
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-[var(--color-cream-dark)] overflow-hidden mb-4">
          <img 
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Quick Add Button */}
          <button 
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-charcoal)] text-white text-sm font-sans tracking-wider uppercase transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </span>
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="text-product-name text-xs mb-1">{product.name}</h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < product.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-xs text-[var(--color-muted)] ml-1">({product.reviews})</span>
          </div>
          <p className="font-serif text-lg">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
