import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-secondary/5 overflow-hidden">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Secondary Image (on hover) */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
          {/* Quick Add Button */}
          {showQuickAdd && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className={`absolute bottom-4 left-4 right-4 py-3 bg-primary/95 text-text-primary font-sans text-small uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent-gold hover:text-secondary ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </button>
          )}
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-product text-text-primary uppercase tracking-widest">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-body text-text-secondary mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}