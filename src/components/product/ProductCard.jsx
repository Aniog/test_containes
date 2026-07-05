import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image placeholder */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <span
              id={`product-card-${product.id}-name`}
              className="font-serif text-sm text-brand-muted text-center"
            >
              {product.name}
            </span>
          </div>

          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-0 left-0 right-0 bg-brand-charcoal text-brand-cream font-sans text-[11px] tracking-widest uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-none rounded-none"
          >
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-brand-charcoal mb-1">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-brand-muted">
          ${product.price}
        </p>
      </Link>
    </div>
  );
}
