import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
          <img
            data-strk-img-id={`card-${product.id}-a1b2c3`}
            data-strk-img={`[card-name-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[0].alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-300" />
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 id={`card-name-${product.id}`} className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}`}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-xs text-muted-fg">({product.reviewCount})</span>
          </div>
          <p className="mt-1.5 text-sm text-charcoal font-medium">${product.price}</p>
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-[88px] left-0 right-0 bg-charcoal text-cream py-2.5 text-xs tracking-[0.1em] uppercase font-sans font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-none"
      >
        Add to Cart
      </button>
    </div>
  );
}
