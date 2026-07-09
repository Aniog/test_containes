import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/data/CartContext';
import { formatPrice } from '@/lib/utils';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="mt-3 text-sm text-muted">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] bg-ivory rounded-sm overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={`bestseller-${product.slug}-img-a1b2`}
                    data-strk-img={`[bestseller-${product.slug}-name] [bestsellers-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="w-full bg-charcoal/90 hover:bg-charcoal text-cream py-2.5 text-xs font-medium uppercase tracking-wider transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <Link to={`/product/${product.slug}`}>
                <h3
                  id={`bestseller-${product.slug}-name`}
                  className="font-serif text-xs md:text-sm text-charcoal uppercase tracking-product leading-tight"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted font-medium">{formatPrice(product.price)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
