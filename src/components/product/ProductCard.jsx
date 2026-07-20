import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-card-bg">
        {/* Primary Image */}
        <div className="aspect-[4/5] relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-premium ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Secondary Image on Hover */}
          <img
            src={product.images[1] || product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-premium ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          
          {/* Quick Add Button */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ease-premium ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button 
              onClick={handleQuickAdd}
              variant="primary"
              size="sm"
              className="w-full"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm tracking-widest text-primary uppercase">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-primary font-medium">${product.price}</span>
          {product.rating && (
            <div className="flex items-center gap-1 text-accent">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs text-secondary">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;