import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addItem } = useCart();

  return (
    <article className="group">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-4">
          {/* Placeholder with product info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <span className="text-gold text-[10px] uppercase tracking-[0.2em] mb-2">
              {product.category}
            </span>
            <span className="font-serif text-lg text-text-secondary">
              {product.name}
            </span>
          </div>

          {/* Badges */}
          {product.isNew && (
            <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.15em] bg-accent text-white px-2 py-1">
              New
            </span>
          )}

          {/* Quick add on hover */}
          {showQuickAdd && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="absolute bottom-0 left-0 right-0 h-10 bg-text-primary/90 text-white text-[11px] uppercase tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
            >
              Add to Cart
            </button>
          )}
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3 className="font-serif text-[15px] tracking-[0.08em] uppercase text-text-primary group-hover:text-accent transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-[12px] text-text-muted mt-1">{product.shortDescription}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                />
              ))}
            </div>
            <span className="text-[11px] text-text-muted">({product.reviewCount})</span>
          </div>
          <p className="text-[14px] text-text-primary mt-2 font-medium">${product.price}</p>
        </div>
      </Link>
    </article>
  );
}
