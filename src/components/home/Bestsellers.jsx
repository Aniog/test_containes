import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          Bestsellers
        </h2>
        <p className="font-sans text-sm text-velmora-stone mt-3 tracking-wider uppercase">
          Our most-loved pieces
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              {/* Image */}
              <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
                <img
                  data-strk-img-id={`bs-${product.images[0].id}`}
                  data-strk-img={`${product.images[0].query}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                  }`}
                />
                <img
                  data-strk-img-id={`bs-${product.images[1].id}`}
                  data-strk-img={`${product.images[1].query}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />

                {/* Quick Add */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                    hoveredId === product.id
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product, product.variants[0]);
                    }}
                    className="w-full bg-velmora-charcoal/90 backdrop-blur-sm text-white font-sans text-xs tracking-wider uppercase py-3 hover:bg-velmora-gold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>

            {/* Info */}
            <div>
              <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-charcoal leading-tight">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-pearl'
                    }`}
                  />
                ))}
                <span className="font-sans text-[11px] text-velmora-stone ml-1">
                  ({product.reviewCount})
                </span>
              </div>
              <p className="font-sans text-sm font-medium text-velmora-smoke mt-1">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}