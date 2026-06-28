import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand/30">
          {/* Main image */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
            data-strk-img-id={`card-main-${product.id}`}
            data-strk-img={`[${product.id}-card-name] gold jewelry ${product.category} product photo`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          >
            <div className="w-full h-full bg-gradient-to-br from-velmora-warm via-velmora-sand to-velmora-taupe/30 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl text-velmora-gold/40 block mb-2">✦</span>
                <span className="text-xs text-velmora-taupe/60 tracking-wider uppercase">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Hover image (second view) */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
            data-strk-img-id={`card-hover-${product.id}`}
            data-strk-img={`[${product.id}-card-name] gold jewelry ${product.category} closeup detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          >
            <div className="w-full h-full bg-gradient-to-tl from-velmora-warm via-velmora-gold/10 to-velmora-sand flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl text-velmora-gold/60 block mb-2 rotate-12">✦</span>
                <span className="text-xs text-velmora-gold/80 tracking-wider uppercase font-medium">
                  {product.name}
                </span>
              </div>
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-charcoal text-white text-[10px] tracking-[0.15em] uppercase font-semibold px-3 py-1.5">
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          <div
            className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-300"
            style={{ transform: hovered ? 'translateY(0)' : 'translateY(100%)', opacity: hovered ? 1 : 0 }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-velmora-charcoal text-white text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-velmora-dark transition-colors"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Bag
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <Link to={`/product/${product.slug}`}>
          <h3 id={`${product.id}-card-name`} className="font-serif text-base sm:text-lg tracking-[0.08em] uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.round(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}
              />
            ))}
          </div>
          <span className="text-xs text-velmora-muted">({product.reviewCount})</span>
        </div>

        <p className="text-sm font-medium text-velmora-charcoal">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
