import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
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
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-cream-dark aspect-[4/5]">
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
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-charcoal text-cream py-3 flex items-center justify-center gap-2 text-button uppercase tracking-wider transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:bg-gold hover:text-charcoal`}
          >
            <Plus className="w-4 h-4" />
            Quick Add
          </button>
        </div>

        <div className="mt-4 text-center">
          <h3 className="font-serif text-product uppercase tracking-widest text-charcoal">
            {product.name}
          </h3>
          <p className="mt-1 text-gold font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}