import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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
      <div className="relative aspect-[4/5] overflow-hidden bg-creamLight mb-4">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover Image */}
        <img
          src={product.imageHover || product.image}
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-charcoal text-cream py-3 px-4 text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-gold hover:text-charcoal`}
        >
          <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm tracking-product uppercase text-charcoal">
          {product.name}
        </h3>
        <p className="text-xs text-warmGray mt-1">{product.description}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'fill-gold text-gold' : 'text-border'
              }`}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-muted ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </Link>
  );
}