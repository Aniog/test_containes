import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-bg-warm aspect-[4/5]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[pc-name-${product.id}] fine jewelry gold demi-fine`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Quick add overlay */}
        {showQuickAdd && (
          <div className="absolute inset-0 bg-bg-deep/0 group-hover:bg-bg-deep/30 transition-all duration-500 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="flex items-center gap-2 bg-bg-deep/90 backdrop-blur-sm text-text-primary px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-bg-deep transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Bag
            </button>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="pt-3.5 text-center">
        <span id={`pc-name-${product.id}`} className="hidden">{product.name}</span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm tracking-[0.2em] text-text-primary hover:text-gold transition-colors duration-300 mb-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-[11px] text-text-secondary">{product.rating}</span>
        </div>
        <p className="text-sm text-gold font-medium">${product.price}</p>
      </div>
    </div>
  );
}
