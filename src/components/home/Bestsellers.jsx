import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.08em] uppercase text-espresso">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-taupe tracking-wide">
            The pieces our community loves most
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] bg-white overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={`bs-${product.id}-${hoveredId === product.id ? 'hover' : 'primary'}`}
                    data-strk-img={`[bs-name-${product.id}] ${hoveredId === product.id ? 'model wearing' : 'product shot'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredId === product.id ? 'scale-105' : 'scale-100'
                    }`}
                  />

                  {/* Quick Add */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 'Gold');
                    }}
                    className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-espresso 
                      text-[11px] tracking-[0.15em] uppercase py-2.5 flex items-center justify-center gap-2
                      transition-all duration-300 ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </Link>

              <div className="mt-4 text-center">
                <p
                  id={`bs-name-${product.id}`}
                  className="font-serif text-xs tracking-[0.15em] uppercase text-espresso leading-snug"
                >
                  {product.name}
                </p>
                <div className="flex items-center justify-center gap-1 mt-1.5">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span className="text-[11px] text-taupe">{product.rating} ({product.reviewCount})</span>
                </div>
                <p className="mt-1.5 text-sm text-espresso font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}