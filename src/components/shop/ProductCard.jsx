import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addItem({ productId: product.id, variant: product.variants[0].value, price: product.price, quantity: 1, name: product.name });
  };

  return (
    <div className="group animate-fade-in">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-[var(--color-surface-alt)] rounded-sm overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-card-${product.id}`}
            data-strk-img={`[shop-card-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span id={`shop-card-name-${product.id}`} className="sr-only">{product.name}</span>
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-surface-dark)] hover:text-white translate-y-2 group-hover:translate-y-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--color-border)]'}`}
          />
        ))}
        <span className="text-xs text-[var(--color-text-muted)] ml-1">({product.reviewCount})</span>
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 className="font-[var(--font-serif)] text-sm font-semibold tracking-wider uppercase text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-sm font-medium mt-0.5">${product.price}</p>
    </div>
  );
}
