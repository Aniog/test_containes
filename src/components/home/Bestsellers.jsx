import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { Star, ShoppingBag } from 'lucide-react';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <section ref={containerRef} className="velmora-section bg-cream">
      <div className="velmora-container">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="velmora-overline mb-3">Curated for You</p>
          <h2 className="font-serif text-heading-2 md:text-heading-1 text-velvet-900">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block velmora-card"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden">
                <img
                  data-strk-img-id={`bestseller-${product.id}-1`}
                  data-strk-img={`[bestseller-title-${product.id}] [bestseller-desc-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.images[0].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Hover overlay with second image */}
                {hoveredId === product.id && product.images[1] && (
                  <div className="absolute inset-0 transition-opacity duration-500">
                    <img
                      data-strk-img-id={`bestseller-${product.id}-2`}
                      data-strk-img={`[bestseller-title-${product.id}] worn model editorial`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.images[1].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Quick add button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className={`absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm text-velvet-900 font-sans text-xs font-semibold tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
                    hoveredId === product.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>

              {/* Product info */}
              <div className="p-4">
                <h3
                  id={`bestseller-title-${product.id}`}
                  className="font-serif text-sm md:text-base font-semibold text-velvet-900 uppercase tracking-wider leading-tight mb-1"
                >
                  {product.name}
                </h3>
                <p
                  id={`bestseller-desc-${product.id}`}
                  className="text-xs text-muted-foreground line-clamp-1 mb-2"
                >
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-semibold text-velvet-800">
                    {formatPrice(product.price)}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-xs text-muted-foreground">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
