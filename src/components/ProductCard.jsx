import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
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
    >
      <div className="relative overflow-hidden bg-velmora-sand aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {/* Hover Image */}
        <img
          src={product.imageHover || product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-charcoal text-white text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:bg-velmora-gold`}
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-taupe mt-1">{product.description}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-taupe ml-1">({product.reviews})</span>
        </div>
        <p className="mt-2 text-velmora-gold font-medium">${product.price}</p>
      </div>
    </Link>
  );
}