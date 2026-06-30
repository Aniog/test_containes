import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-4xl tracking-wide text-stone-800"
          >
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                <img
                  data-strk-img-id={`bestseller-${product.id}-a1`}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name] [bestsellers-title] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <img
                  data-strk-img-id={`bestseller-${product.id}-b2`}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name] worn model gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick add overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-stone-900/80 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${
                    hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="flex items-center gap-2 text-white text-xs tracking-super-wide uppercase font-medium"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <h3
                id={`product-${product.id}-name`}
                className="font-serif text-sm tracking-ultra-wide uppercase text-stone-800"
              >
                {product.name}
              </h3>
              <p
                id={`product-${product.id}-desc`}
                className="text-xs text-stone-500 mt-0.5 line-clamp-1"
              >
                {product.description}
              </p>
              <p className="text-sm font-medium text-stone-800 mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
