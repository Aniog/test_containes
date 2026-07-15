import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">Most Loved</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl md:text-5xl">Bestsellers</h2>
          <div className="velmora-divider-thin w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-[var(--velmora-bg-secondary)] mb-3 overflow-hidden">
                <img
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img="[velmora-jewelry] [bestsellers-title]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.shortName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick add overlay */}
                <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 'gold');
                    }}
                    className="w-full velmora-btn-primary text-xs py-2.5"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Bag
                  </button>
                </div>
              </Link>

              <Link to={`/product/${product.id}`} className="block">
                <h3 id={`${product.id}-name`} className="text-xs tracking-widest uppercase mb-1 group-hover:text-[var(--velmora-accent)] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-[var(--velmora-accent)] text-[var(--velmora-accent)]" />
                  <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
                  <span className="text-xs text-[var(--velmora-text-light)]">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
