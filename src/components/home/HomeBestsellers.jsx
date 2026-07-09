import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../../contexts/CartContext';
import { products } from '../../data/products';

export default function HomeBestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 4); // Take first 4 for the grid
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4" id="bestsellers-title">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors pb-1 border-b border-muted-foreground/30 hover:border-accent">
            View All Pieces
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => {
            if (idx >= 4) return null;
            return (
            <div key={product.id} className="group relative">
              {/* Product Image Area */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4 cursor-pointer">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img={product.images.primary.query}
                  data-strk-img-id={product.images.primary.id}
                  data-strk-img-ratio="3x4"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img={product.images.hover.query}
                  data-strk-img-id={product.images.hover.id}
                  data-strk-img-ratio="3x4"
                  alt={`${product.name} worn`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="w-full bg-background/95 backdrop-blur text-foreground py-3 uppercase tracking-widest text-xs hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>

              {/* Product Details */}
              <div className="text-center">
                <h3 className="font-serif text-lg mb-1" id={`best-title-${product.id}`}>
                  <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-accent">${product.price}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}