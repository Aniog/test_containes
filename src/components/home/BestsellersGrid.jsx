import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { formatPrice } from '@/lib/utils';

export default function BestsellersGrid() {
  const { addItem } = useCart();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [addedIndex, setAddedIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    setAddedIndex(product.id);
    setTimeout(() => setAddedIndex(null), 1500);
  };

  return (
    <section className="velmora-section" ref={containerRef}>
      <div className="velmora-container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--velmora-accent)' }}>
            Most Loved
          </p>
          <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--velmora-text)' }}>
            Bestsellers
          </h2>
          <div className="velmora-divider-thin w-24 mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] mb-4 overflow-hidden" style={{ backgroundColor: 'var(--velmora-bg-alt)' }}>
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[${product.id}-title] [bestsellers-subtitle] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1"
                    style={{ backgroundColor: 'var(--velmora-dark)', color: '#fff' }}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Hover overlay */}
                <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} bg-black/20`}>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className={`p-3 rounded-full transition-all duration-300 ${addedIndex === product.id ? 'scale-110' : 'hover:scale-110'}`}
                    style={{ backgroundColor: addedIndex === product.id ? 'var(--velmora-accent)' : '#fff' }}
                    aria-label="Add to cart"
                  >
                    {addedIndex === product.id ? (
                      <span className="text-xs font-medium" style={{ color: '#fff' }}>Added</span>
                    ) : (
                      <ShoppingBag className="w-4 h-4" style={{ color: 'var(--velmora-text)' }} />
                    )}
                  </button>
                  <button
                    className="p-3 rounded-full bg-white hover:scale-110 transition-all duration-300"
                    aria-label="Quick view"
                  >
                    <Eye className="w-4 h-4" style={{ color: 'var(--velmora-text)' }} />
                  </button>
                </div>
              </div>

              {/* Product info */}
              <h3
                id={`${product.id}-title`}
                className="velmora-product-name text-xs md:text-sm mb-1.5 truncate"
                style={{ color: 'var(--velmora-text)' }}
              >
                {product.name}
              </h3>
              <StarRating rating={product.rating} />
              <p className="text-sm font-medium mt-1.5" style={{ color: 'var(--velmora-text)' }}>
                {formatPrice(product.price)}
              </p>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
