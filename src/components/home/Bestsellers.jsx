import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/lib/cart';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">
            Curated for You
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal">
            Bestsellers
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-charcoal/5 overflow-hidden rounded-sm">
                  <img
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={`[bestseller-title-${product.id}] [bestseller-desc-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-sans tracking-widest uppercase px-2.5 py-1">
                      New
                    </span>
                  )}
                </div>

                <div className="mt-3 px-0.5">
                  <h3
                    id={`bestseller-title-${product.id}`}
                    className="text-xs font-serif font-semibold tracking-widest text-charcoal uppercase"
                  >
                    {product.name}
                  </h3>
                  <p id={`bestseller-desc-${product.id}`} className="sr-only">{product.description}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs text-warm-gray-500 font-sans">{product.rating}</span>
                  </div>
                  <p className="text-sm font-sans font-medium text-charcoal mt-0.5">
                    ${product.price}
                  </p>
                </div>
              </Link>

              {/* Quick add button */}
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    variant: 'Gold',
                    quantity: 1,
                  })
                }
                className="absolute bottom-20 left-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-sans tracking-widest uppercase py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 rounded-none hover:bg-gold hover:text-white"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}