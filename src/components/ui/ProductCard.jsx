import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function ProductCard({ product, className }) {
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
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream-dark aspect-[4/5]">
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isHovered && 'opacity-0'
          )}
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            'opacity-0 group-hover:opacity-100'
          )}
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-charcoal text-cream py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300',
            'translate-y-full group-hover:translate-y-0'
          )}
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest">Quick Add</span>
        </button>
      </div>
      
      <div className="mt-4 space-y-1">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-charcoal-light font-sans">${product.price}</p>
      </div>
    </Link>
  );
}