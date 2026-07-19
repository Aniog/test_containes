import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCartActions } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bestsellers = products.slice(0, 5);

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCartActions();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-sand-500 fill-sand-500' : 'text-velvet-300'}`}
      />
    ));

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs tracking-super uppercase text-sand-600 font-medium mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">Our Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`bs-${product.id}`}
                  data-strk-img={`gold jewelry ${product.name} demi fine on warm neutral background editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Second image on hover (simulated with different query) */}
                <img
                  alt={`${product.name} alternate view`}
                  data-strk-img-id={`bs-alt-${product.id}`}
                  data-strk-img={`gold jewelry ${product.name} detail close up warm light`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick Add */}
                <button
                  onClick={(e) => handleAdd(e, product)}
                  className={`absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 transition-all duration-300 ${
                    hoveredId === product.id
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0 pointer-events-none'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 mr-1.5" />
                  Add to Cart
                </button>

                {product.tags.includes('new') && (
                  <span className="absolute top-3 left-3 bg-velvet-50 text-velvet-900 text-[10px] tracking-wider uppercase px-2 py-0.5">
                    New
                  </span>
                )}
              </div>

              {/* Info */}
              <div>
                <p className="font-serif text-sm tracking-wider uppercase text-velvet-900 mb-1">
                  {product.name}
                </p>
                <div className="flex items-center gap-1 mb-1.5">{renderStars(product.rating)}</div>
                <p className="text-sm font-medium text-velvet-700">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
