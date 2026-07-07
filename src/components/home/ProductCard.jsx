import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-linen overflow-hidden mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-taupe/40 text-xs text-center px-4 font-medium uppercase tracking-wider">
              {product.name}
            </span>
          </div>
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 bg-charcoal/90 hover:bg-charcoal text-cream text-xs font-semibold uppercase tracking-product transition-all duration-200 border-none cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-product text-charcoal">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-taupe/30'}`}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="text-xs text-taupe ml-1">({product.reviews})</span>
          </div>
          <p className="font-serif text-lg font-medium text-charcoal">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
