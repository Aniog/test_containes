import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'Gold');
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4">
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`${product.name} demi-fine gold jewelry on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`${product.name} jewelry detail close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-cream text-espresso rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-gold hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <h3 className="font-serif text-sm md:text-base tracking-wider uppercase text-espresso mb-1.5 leading-snug">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold text-gold'
                  : 'fill-sand/50 text-sand/50'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-taupe">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-medium text-espresso">${product.price}</p>
    </Link>
  );
}
