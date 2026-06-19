import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-ivory overflow-hidden">
          <img 
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Bestseller Badge */}
          {product.isBestseller && (
            <span className="absolute top-4 left-4 bg-gold text-white text-xs font-sans font-medium px-3 py-1 tracking-wide">
              BESTSELLER
            </span>
          )}

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, 'gold');
            }}
            className={`absolute bottom-4 left-4 right-4 bg-white/95 text-charcoal font-sans font-medium text-sm tracking-wide py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:bg-gold hover:text-white`}
          >
            <ShoppingBag className="w-4 h-4" />
            QUICK ADD
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-4 text-center">
          <h3 className="font-serif text-product font-medium tracking-[0.12em] uppercase text-charcoal">
            {product.name}
          </h3>
          <p className="text-warm-gray text-sm mt-1 font-sans">{product.description}</p>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < product.rating ? 'text-gold fill-gold' : 'text-warm-gray/30'}`} 
              />
            ))}
            <span className="text-warm-gray text-xs ml-1">({product.reviews})</span>
          </div>

          <p className="text-gold font-sans font-medium mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}