import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <h2 className="font-serif text-3xl lg:text-4xl text-center mb-2 text-charcoal">
        Bestsellers
      </h2>
      <p className="text-center text-stone text-sm mb-12 tracking-wide">
        The pieces everyone is wearing
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-sand/20 aspect-[3/4] mb-4">
              <img
                data-strk-img-id={`bs-${product.id}-${hoveredId === product.id ? 'alt' : 'main'}`}
                data-strk-img={`[bs-name-${product.id}] gold jewelry ${product.category}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Quick add on hover */}
              <div className="absolute bottom-3 right-3 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button
                  onClick={(e) => { e.preventDefault(); addItem(product, 'gold'); }}
                  className="w-9 h-9 bg-white/90 backdrop-blur-sm text-charcoal flex items-center justify-center shadow-lg hover:bg-gold hover:text-white transition-colors"
                  aria-label="Add to cart"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile quick add */}
              <button
                onClick={(e) => { e.preventDefault(); addItem(product, 'gold'); }}
                className="md:hidden absolute bottom-3 right-3 w-9 h-9 bg-white/90 text-charcoal flex items-center justify-center shadow-lg active:bg-gold active:text-white"
              >
                <Plus className="w-4 h-4" />
              </button>
            </Link>

            {/* Info */}
            <Link to={`/product/${product.id}`} className="block">
              <h3 id={`bs-name-${product.id}`} className="product-name text-xs tracking-widest text-charcoal mb-1 truncate">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-3 h-3 fill-gold text-gold" />
                <span className="text-xs text-stone">{product.rating} ({product.reviewCount})</span>
              </div>
              <p className="text-sm font-medium text-charcoal">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline inline-block">
          View All Pieces
        </Link>
      </div>
    </section>
  );
}
