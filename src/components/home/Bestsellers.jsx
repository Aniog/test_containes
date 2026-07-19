import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, setCartOpen } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addItem({ ...product, tone: product.tone || 'gold' });
    setCartOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Bestsellers</h2>
          <p className="mt-3 text-brand-muted text-sm md:text-base">Our most-loved pieces, chosen by you.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
                )}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-xs font-semibold text-brand-ink shadow-lg transition-all duration-300 ${
                    hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Add to Cart
                </button>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-sm md:text-base text-brand-ink tracking-wide">{product.name}</h3>
                <div className="mt-1 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                  <span className="text-xs text-brand-muted">{product.rating} ({product.reviewCount})</span>
                </div>
                <p className="mt-1 text-sm font-medium text-brand-ink">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
