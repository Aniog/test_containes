import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';

export default function RelatedProducts({ currentProductId }) {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  // Get related products (same category or just featured)
  const relatedProducts = products
    .filter(p => p.id !== currentProductId && p.featured)
    .slice(0, 4);

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl text-charcoal">
            You May Also Like
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-square bg-ivory rounded-lg overflow-hidden mb-3">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <button
                  onClick={() => addItem(product)}
                  className={cn(
                    'absolute bottom-2 right-2 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center transition-all duration-300 hover:bg-goldDark',
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  )}
                  aria-label="Add to cart"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <h3 className="font-serif text-xs text-charcoal tracking-wide uppercase text-center mb-1">
                {product.name}
              </h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3 h-3',
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-sand'
                    )}
                  />
                ))}
              </div>
              <p className="font-sans text-sm font-medium text-charcoal text-center">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
