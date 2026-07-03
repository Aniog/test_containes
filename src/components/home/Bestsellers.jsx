import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section className="section-container py-16 md:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-ultra text-accent">Most Loved</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:inline-flex text-sm font-medium text-ink-secondary hover:text-ink">
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.slug}`} className="block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-background">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {hoveredId === product.id && product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                  />
                )}
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-ultra text-ink">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-ultra text-ink">{product.name}</p>
                <p className="text-sm text-ink-secondary">${product.price}</p>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => addItem(product, product.variants[0])}
              className="absolute bottom-20 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-all hover:bg-ink hover:text-white md:opacity-0 md:group-hover:opacity-100"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <Link to="/shop" className="mt-8 inline-flex md:hidden text-sm font-medium text-ink-secondary hover:text-ink">
        View all
      </Link>
    </section>
  );
};

export default Bestsellers;
