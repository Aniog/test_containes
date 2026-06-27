import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.defaultVariant, 1);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text">
            Bestsellers
          </h2>
          <p className="text-sm text-velmora-text-muted mt-3 tracking-wide">
            Our most loved pieces, chosen by you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map(product => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
                <img
                  data-strk-img-id={`bs-img-${product.id}`}
                  data-strk-img={`[bs-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.displayName}
                  className="w-full h-full object-cover img-zoom"
                />
                {hoveredId === product.id && (
                  <button
                    onClick={e => handleQuickAdd(e, product)}
                    className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-velmora-text text-[11px] tracking-[0.15em] uppercase font-medium py-2.5 flex items-center justify-center gap-2 hover:bg-velmora-base hover:text-white transition-all duration-300"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                )}
              </div>
              <div className="space-y-1">
                <p
                  id={`bs-name-${product.id}`}
                  className="font-serif text-[11px] md:text-xs tracking-[0.15em] uppercase text-velmora-text truncate"
                >
                  {product.name}
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-velmora-gold fill-velmora-gold'
                            : 'text-velmora-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
                </div>
                <p className="font-serif text-sm text-velmora-text">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
