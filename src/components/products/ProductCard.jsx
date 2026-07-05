import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="product-card animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden mb-4">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-charcoal text-white py-3 px-4 flex items-center justify-center gap-2 text-sm uppercase tracking-widest transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-velmora-taupe text-sm mb-2">{product.description}</p>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-taupe'}`}
            />
          ))}
          <span className="text-velmora-taupe text-xs ml-1">({product.reviews})</span>
        </div>
        <p className="text-velmora-gold font-medium">${product.price}</p>
      </div>
    </div>
  );
}