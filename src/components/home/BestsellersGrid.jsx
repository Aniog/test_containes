import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function BestsellersGrid() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [addedIds, setAddedIds] = useState({});
  const [sectionRef, revealed] = useScrollReveal({ threshold: 0.1 });

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedIds((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  return (
    <section
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 transition-all duration-700 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-14">
        <p className="section-subtitle">What Everyone Loves</p>
        <h2 className="section-title mt-3">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative aspect-[3/4] bg-deep-100 overflow-hidden mb-4">
              <div className={`w-full h-full bg-gradient-to-br from-warm-200 to-warm-300 transition-opacity duration-500 ${
                hoveredId === product.id ? 'opacity-0' : 'opacity-100'
              }`} />
              <div className={`absolute inset-0 bg-gradient-to-br from-warm-300 to-warm-400 transition-opacity duration-500 ${
                hoveredId === product.id ? 'opacity-100' : 'opacity-0'
              }`} />

              {product.badge && (
                <span className="absolute top-3 left-3 bg-deep-800/90 text-cream font-sans text-[10px] tracking-wider uppercase px-2 py-1">
                  {product.badge}
                </span>
              )}

              {/* Quick add button */}
              <button
                onClick={(e) => handleAdd(e, product)}
                className={`absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 text-deep-800 font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                {addedIds[product.id] ? 'Added ✓' : (
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                  </span>
                )}
              </button>
            </div>

            {/* Info */}
            <div>
              <h3 className="font-serif text-xs md:text-sm tracking-wider uppercase text-deep-800 group-hover:text-gold-600 transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                ))}
                <span className="font-sans text-[11px] text-deep-400 ml-1">({product.reviewCount})</span>
              </div>
              <p className="font-sans text-sm font-medium text-deep-700 mt-1.5">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}