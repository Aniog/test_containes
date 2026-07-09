import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star } from 'lucide-react';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="mt-3 text-muted-fg text-sm">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={`bestseller-${product.id}-img-a1`}
                    data-strk-img={`[bestseller-${product.id}-name] [bestsellers-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className="w-full bg-charcoal/90 text-white py-2.5 text-[10px] uppercase tracking-widest font-medium hover:bg-charcoal transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-3">
                <h3
                  id={`bestseller-${product.id}-name`}
                  className="font-serif text-xs uppercase tracking-product text-charcoal"
                >
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-accent' : 'text-border'}`}
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="text-[10px] text-muted-fg ml-1">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium text-charcoal mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
