import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-card">
        {/* Primary Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>

        {/* Secondary Image on Hover */}
        <div
          className={`absolute inset-0 overflow-hidden transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-secondary/80 to-transparent transition-transform duration-300 ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full bg-primary text-secondary py-3 text-small font-medium hover:bg-accent transition-smooth"
            >
              Quick Add
            </button>
          </div>
        )}

        {/* Sale Badge (if applicable) */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-error text-primary px-3 py-1 text-caption">
            Sold Out
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="product-name text-small text-secondary">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < product.rating ? 'fill-accent text-accent' : 'text-divider'
                }`}
              />
            ))}
          </div>
          <span className="text-caption text-secondary-text">({product.reviews})</span>
        </div>
        <p className="mt-2 text-body font-medium text-secondary">${product.price}</p>
      </div>
    </Link>
  );
}