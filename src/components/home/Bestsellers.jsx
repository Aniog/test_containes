import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <p className="text-center text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-3">
        Most Loved
      </p>
      <h2 className="section-title text-center mb-14">Bestsellers</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {bestsellers.map((product) => {
          const isHovered = hoveredId === product.id;

          return (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.slug}`} className="block relative aspect-[3/4] bg-cream-300 overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`shop-${product.id}`}
                  data-strk-img={`[bestseller-name-${product.id}] velmora gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Quick add overlay */}
                <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                  isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="btn-primary w-full text-[10px] py-2.5 shadow-lg"
                  >
                    <ShoppingBag className="w-3 h-3 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </Link>

              {/* Info */}
              <div>
                <p
                  id={`bestseller-name-${product.id}`}
                  className="product-title text-[11px] md:text-xs mb-1"
                >
                  {product.name}
                </p>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gold text-gold'
                          : 'text-cream-500'
                      }`}
                    />
                  ))}
                  <span className="text-[10px] text-warm-400 ml-1">({product.reviewCount})</span>
                </div>
                <p className="text-sm font-medium text-warm-900">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}