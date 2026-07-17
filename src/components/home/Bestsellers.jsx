import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-stone font-medium">Curated for You</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-3 font-light">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-warm-white mb-3">
                  <img
                    src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-charcoal text-white text-[9px] uppercase tracking-widest px-2.5 py-1 font-medium">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.images[0],
                        });
                      }}
                      className="w-full bg-charcoal/90 text-white text-[10px] uppercase tracking-widest py-2.5 font-medium flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
                    >
                      <ShoppingBag size={12} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>

              <Link to={`/product/${product.id}`}>
                <h3 className="text-[11px] uppercase tracking-widest text-charcoal font-medium">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-stone mt-0.5 font-medium">${product.price}</p>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-stone/20'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[10px] text-stone ml-1">({product.reviewCount})</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block text-center">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}