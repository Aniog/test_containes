import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersGrid() {
  const bestsellers = products.slice(0, 5);
  const { addItem, toggleCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (product) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
    toggleCart(true);
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">
          Loved by Our Community
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900">
          Bestsellers
        </h2>
        <hr className="hairline w-12 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {bestsellers.map((product, idx) => (
          <div
            key={product.id}
            className="group animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative aspect-[3/4] overflow-hidden bg-velvet-100 rounded-sm mb-4">
                {/* Primary image placeholder */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: product.images[0]?.color || '#d9c6b4' }}
                />
                {/* Secondary image placeholder */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: product.images[1]?.color || '#c8a890' }}
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 z-10 text-[9px] tracking-widest uppercase bg-white/90 text-stone-800 px-2.5 py-1 rounded-sm">
                    {product.badge}
                  </span>
                )}

                {/* Quick add button */}
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAdd(product); }}
                  className={`absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  } hover:bg-warm-800 hover:text-white`}
                >
                  <Plus className="w-4 h-4" />
                </button>

                {addedId === product.id && (
                  <span className="absolute bottom-3 left-3 z-10 text-[10px] bg-warm-800 text-white px-3 py-1 rounded-sm animate-fade-in">
                    Added!
                  </span>
                )}
              </div>
            </Link>

            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.round(product.rating)
                        ? 'fill-warm-600 text-warm-600'
                        : 'text-velvet-300'
                    }`}
                  />
                ))}
                <span className="text-[10px] text-stone-400 ml-1">({product.reviewCount})</span>
              </div>
              <Link to={`/product/${product.id}`} className="block">
                <h3 className="product-name text-xs mb-1 hover:text-warm-800 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm font-medium text-stone-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
