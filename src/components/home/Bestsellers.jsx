import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].value);
  };

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-warm-dark mb-3">Bestsellers</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <p className="font-sans text-sm text-warm-gray max-w-md mx-auto">
            Our most-loved pieces, chosen by women around the world.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] bg-warm-border/20 overflow-hidden mb-3 rounded-sm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === product.id ? 'scale-105' : 'scale-100'
                  }`}
                />

                {/* Quick Add overlay */}
                <div
                  className={`absolute inset-0 bg-black/10 flex items-center justify-center transition-all duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="bg-white text-warm-dark px-5 py-2.5 text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <ShoppingBag size={14} />
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-warm-dark mb-1">
                {product.name}
              </h3>
              <p className="font-sans text-sm text-gold font-medium">${product.price}</p>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            to="/collection"
            className="inline-block text-xs uppercase tracking-[0.2em] text-warm-dark hover:text-gold transition-colors border-b border-warm-dark hover:border-gold pb-0.5"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}