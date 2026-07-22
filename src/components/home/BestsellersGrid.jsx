import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Curated for you</p>
          <h2 className="section-title mt-3">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-velmora-cream-dark mb-4">
                <img
                  data-strk-img-id={`best-${product.id}`}
                  data-strk-img={`[${product.id}-title] [${product.id}-desc] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.shortName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick add */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.variants[0]);
                    }}
                    className="w-full bg-white/95 backdrop-blur-sm text-velmora-black py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
                  >
                    <ShoppingBag size={14} />
                    Add to Bag
                  </button>
                </div>
              </Link>

              {/* Info */}
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-sm tracking-wider text-velmora-black group-hover:text-velmora-gold transition-colors truncate">
                  {product.shortName}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={12} className="fill-velmora-gold text-velmora-gold" />
                  <span className="text-xs text-velmora-warm-gray">{product.rating}</span>
                </div>
                <p className="text-sm font-medium mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
