import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import products from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-gold-600 text-xs uppercase tracking-widestplus font-medium">Curated for you</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light mt-3 tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400/50 mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-ink-100 overflow-hidden rounded-sm">
                  {/* Product image placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gold-200/20 via-ink-100 to-ink-200/50 group-hover:scale-105 transition-transform duration-700" />

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-ink-950/10 flex items-end p-3 transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className="w-full py-2.5 bg-cream-50 text-ink-900 text-[10px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-ink-950 transition-all duration-300"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>

              <div className="mt-3 space-y-1">
                <h3 className="text-[11px] uppercase tracking-widestplus font-medium text-ink-800 truncate">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  <span className="text-[11px] text-ink-500">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-ink-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink-700 hover:text-gold-600 transition-colors border-b border-ink-300 hover:border-gold-500 pb-0.5"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}