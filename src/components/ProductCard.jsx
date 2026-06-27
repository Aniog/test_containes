import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <div 
      className="animate-slide-up opacity-0"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block group">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream-dark mb-4">
          <img 
            src={product.images[isHovered && product.images[1] ? 1 : 0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Quick Add Button */}
          <button 
            onClick={handleAddToCart}
            className={`absolute bottom-4 left-4 right-4 py-3 text-xs tracking-widest transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              backgroundColor: 'var(--color-velmora-gold)',
              color: 'white'
            }}
          >
            QUICK ADD
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="font-serif text-sm tracking-widest uppercase mb-1 group-hover:opacity-70 transition-opacity">
            {product.name}
          </h3>
          <p className="text-xs text-velmora-text-muted mb-2">{product.description}</p>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-3 h-3" 
                fill={i < product.rating ? 'var(--color-velmora-gold)' : 'none'}
                style={{ color: 'var(--color-velmora-gold)' }}
              />
            ))}
            <span className="text-xs text-velmora-text-muted ml-1">({product.reviews})</span>
          </div>

          <p className="font-serif text-lg" style={{ color: 'var(--color-velmora-gold-dark)' }}>
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}