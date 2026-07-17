import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const [revealRef, revealed] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={revealRef} className={`py-20 md:py-28 reveal-hidden ${revealed ? 'reveal-visible' : ''}`}>
      <div ref={containerRef} className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="bestsellers-title"
            className="font-serif text-display-sm md:text-display text-brand-charcoal tracking-wide"
          >
            Bestsellers
          </h2>
          <p className="mt-3 font-sans text-sm text-brand-muted tracking-wide">
            Our most loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className={`group reveal-hidden ${revealed ? 'reveal-visible' : ''} reveal-delay-${i + 1}`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3x4] bg-brand-warm overflow-hidden mb-3">
                <img
                  data-strk-img-id={product.images[0].imgId}
                  data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.images[0].alt}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? 'scale-105' : 'scale-100'
                  }`}
                />
                {/* Second image on hover */}
                <img
                  data-strk-img-id={product.images[1].imgId}
                  data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] side view [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.images[1].alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Quick add button */}
                <div
                  className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="w-full bg-white/95 backdrop-blur-sm text-brand-charcoal font-sans text-[10px] tracking-[0.12em] uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-white transition-colors duration-300"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <h3
                id={`product-name-${product.id}`}
                className="product-name text-xs md:text-sm text-brand-charcoal"
              >
                {product.name}
              </h3>
              <p
                id={`product-desc-${product.id}`}
                className="text-[11px] text-brand-muted mt-0.5 line-clamp-1"
              >
                {product.description}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-brand-muted">({product.reviews})</span>
              </div>
              <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
