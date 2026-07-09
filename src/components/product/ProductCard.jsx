import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addItem(product, product.colors[0].name);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-brand-cream overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.imgAlt}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-brand-charcoal/90 backdrop-blur-sm text-white font-sans text-[11px] uppercase tracking-ultra-wide hover:bg-brand-charcoal transition-colors"
          >
            Add to Bag
          </button>
        </div>

        {/* Badge */}
        {product.rating >= 4.9 && (
          <span className="absolute top-3 left-3 bg-brand-gold text-white font-sans text-[9px] uppercase tracking-ultra-wide px-3 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3
          id={`${product.id}-card-name`}
          className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal group-hover:text-brand-gold transition-colors"
        >
          {product.name}
        </h3>
        <p className="font-serif text-lg text-brand-charcoal mt-1">{formatPrice(product.price)}</p>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-mid-gray'}
            />
          ))}
          <span className="font-sans text-[10px] text-brand-warm-gray ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
