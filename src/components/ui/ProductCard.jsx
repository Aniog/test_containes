import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import StarRating from './StarRating';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product, 1, 'gold');
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
        <button
          type="button"
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-velmora-espresso text-velmora-cream py-3 text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-espresso ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {isAdding ? 'Added' : 'Add to Cart'}
        </button>
        <button
          type="button"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-velmora-gold"
          aria-label="Add to wishlist"
        >
          <Heart size={16} />
        </button>
      </div>

      <div className="space-y-2">
        <StarRating rating={product.rating} size={12} showValue />
        <h3 className="font-serif text-sm uppercase tracking-widest-xl text-velmora-espresso group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-velmora-coffee">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
