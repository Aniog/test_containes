import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentImage(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImage(0);
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
        <img 
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-charcoal py-3 px-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="product-name text-sm">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
            />
          ))}
        </div>
        <p className="mt-2 text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
