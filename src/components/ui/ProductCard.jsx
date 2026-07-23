import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

export default function ProductCard({ product, index = 0 }) {
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
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-light aspect-[4/5]">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-500 ease-out
            ${isHovered ? 'scale-105' : 'scale-100'}
          `}
        />

        {/* Secondary Image on Hover */}
        <img
          src={product.images[1] || product.images[0]}
          alt={`${product.name} - alternate view`}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-300 ease-out
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Quick Add Button */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 p-4
            transition-all duration-300 ease-out
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <Button
            onClick={handleQuickAdd}
            size="sm"
            className="w-full flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-product text-velmora-black uppercase tracking-widest">
          {product.name}
        </h3>
        <p className="text-velmora-gray font-sans">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}