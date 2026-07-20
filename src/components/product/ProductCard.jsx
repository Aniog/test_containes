import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, sectionId = 'grid' }) {
  const { addItem } = useCart();
  const titleId = `${sectionId}-${product.id}-title`;
  const descId = `${sectionId}-${product.id}-desc`;
  const imgId = `${sectionId}-${product.id}-img-a7b3c1`;

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-3">
          <img
            data-strk-img-id={imgId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-charcoal text-xs tracking-wider uppercase font-medium hover:bg-gold hover:text-white transition-all duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-1">
          <h3
            id={titleId}
            className="text-xs uppercase tracking-product font-sans font-medium text-charcoal"
          >
            {product.name}
          </h3>
          <p id={descId} className="text-sm text-muted font-light hidden">
            {product.description}
          </p>
          <p className="text-sm text-charcoal">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
