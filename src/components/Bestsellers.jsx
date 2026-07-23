import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';

export default function Bestsellers() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
          Bestsellers
        </h2>
        <div className="w-24 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-velmora-warm">
                <img
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`Gold jewelry ${product.name} ${product.description}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick Add Button */}
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="bg-white text-velmora-charcoal px-6 py-2.5 text-sm tracking-wider uppercase font-semibold shadow-lg hover:bg-velmora-charcoal hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Quick Add</span>
                  </button>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Heart className="w-5 h-5 text-velmora-charcoal" />
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-1">
                <h3 className="font-serif text-lg tracking-widest uppercase">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-velmora-charcoal">${product.price}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
