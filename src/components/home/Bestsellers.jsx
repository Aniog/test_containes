import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="text-stone text-sm mt-3 uppercase tracking-widest">
            Our most-loved pieces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3">
                  {/* Primary image */}
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                  />
                  {/* Hover image */}
                  <img
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[${product.titleId}] gold jewelry worn on model [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} alternate view`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* Quick add button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 border-none rounded-none ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>

                <div className="text-center">
                  <h3
                    id={product.titleId}
                    className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal mb-1"
                  >
                    {product.name}
                  </h3>
                  <p id={product.descId} className="hidden">{product.description}</p>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}`}
                        style={i < Math.floor(product.rating) ? { fill: '#B8860B' } : {}}
                      />
                    ))}
                    <span className="text-xs text-stone ml-1">({product.reviewCount})</span>
                  </div>
                  <p className="text-sm font-medium text-charcoal">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
