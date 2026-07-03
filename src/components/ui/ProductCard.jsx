import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

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
      <div className="relative overflow-hidden bg-velmora-sand/30 aspect-[4/5]">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {showQuickAdd && (
          <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-velmora-charcoal/80 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button
              onClick={handleQuickAdd}
              variant="accent"
              size="sm"
              className="w-full"
            >
              Quick Add to Cart
            </Button>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-lg tracking-widest-xl text-velmora-charcoal uppercase">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-taupe">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="font-sans font-medium text-velmora-charcoal">${product.price}</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}