import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import products from '@/data/products';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addToCart, openCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
    openCart();
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4 font-medium">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-ink tracking-wide">
            Bestsellers
          </h2>
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
              <div className="relative aspect-[3/4] bg-velmora-blush mb-4 overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick Add overlay */}
                <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full py-2.5 bg-velmora-ink/90 backdrop-blur-sm text-white text-xs tracking-[0.12em] uppercase hover:bg-velmora-gold transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={13} />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Info */}
              <h3
                id={product.titleId}
                className="font-serif text-xs md:text-sm tracking-[0.15em] text-velmora-charcoal uppercase mb-1 truncate"
              >
                {product.name}
              </h3>
              <p id={product.descId} className="sr-only">{product.description}</p>
              <p className="text-sm text-velmora-gold font-medium">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
