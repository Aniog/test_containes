import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-charcoal">
            Bestsellers
          </h2>
          <p className="mt-2 text-sm text-warm-gray">Our most-loved pieces, curated for you.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                    }`}
                  />
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} alternate view`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    />
                  )}
                </div>
              </Link>

              {/* Quick add button */}
              <button
                onClick={() => addItem(product, product.variants[0])}
                className="absolute bottom-3 right-3 w-9 h-9 bg-surface/90 backdrop-blur-sm border border-beige flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:border-gold hover:text-warm-charcoal"
                aria-label="Quick add to cart"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>

              {/* Product info */}
              <div className="mt-3 space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[11px] md:text-xs uppercase tracking-widest font-medium text-warm-charcoal hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-warm-gray">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}