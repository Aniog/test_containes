import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-stone/30 aspect-[4/5]">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Secondary Image (on hover) */}
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button 
              onClick={handleQuickAdd}
              size="sm" 
              className="w-full gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </Button>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 px-2 py-1">
          <span className="text-velmora-gold text-xs">★</span>
          <span className="text-xs font-medium">{product.rating}</span>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal">
          {product.name}
        </h3>
        <p className="text-velmora-gray font-medium">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;