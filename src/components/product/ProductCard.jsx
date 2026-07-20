import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
          <img
            data-strk-img-id={`product-card-${product.id}-a1b2c3`}
            data-strk-img={`[product-name-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div
            className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-cream/95 text-charcoal py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-cream transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3
            id={`product-name-${product.id}`}
            className="font-sans text-xs uppercase tracking-product text-charcoal font-medium"
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
              />
            ))}
            <span className="text-xs text-muted-fg ml-1">({product.reviews})</span>
          </div>
          <p className="text-sm text-charcoal font-medium">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  );
}
