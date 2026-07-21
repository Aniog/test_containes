import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Curated for You</p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wider mb-4">
          BESTSELLERS
        </h2>
        <div className="w-12 h-px bg-gold mx-auto" />
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
              <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
                {/* Primary image */}
                <img
                  data-strk-img-id={`bestseller-${product.id}-primary`}
                  data-strk-img={`[bestseller-${product.id}-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                  }`}
                />
                {/* Secondary image on hover */}
                <img
                  data-strk-img-id={`bestseller-${product.id}-secondary`}
                  data-strk-img={`[bestseller-${product.id}-name] gold jewelry detail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />

                {/* Quick add */}
                {hoveredId === product.id && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.variants[0]);
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-velvet-950 text-white text-xs tracking-wider uppercase py-3 animate-slide-up font-medium"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Bag — ${product.price}
                    </span>
                  </button>
                )}
              </div>
            </Link>

            {/* Product info */}
            <div>
              <p
                id={`bestseller-${product.id}-name`}
                className="text-xs tracking-widest uppercase font-medium text-velvet-950 mb-1"
              >
                {product.name}
              </p>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-3 h-3 fill-gold text-gold" />
                <Star className="w-3 h-3 fill-gold text-gold" />
                <Star className="w-3 h-3 fill-gold text-gold" />
                <Star className="w-3 h-3 fill-gold text-gold" />
                <Star className="w-3 h-3 fill-gold text-gold" />
                <span className="text-xs text-velvet-500 ml-1">({product.reviewCount})</span>
              </div>
              <p className="text-sm font-medium text-velvet-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}