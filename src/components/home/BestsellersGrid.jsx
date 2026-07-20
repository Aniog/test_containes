import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersGrid() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-stone-800 mb-3">Bestsellers</h2>
          <div className="w-12 h-px bg-primary mx-auto mb-4" />
          <p className="text-stone-500 max-w-md mx-auto">Our most loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-stone-100 rounded overflow-hidden mb-3">
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    data-strk-bg-id={`bestseller-${product.images[0].id}`}
                    data-strk-bg={`[${product.id}-desc] [${product.id}-title] [bestsellers-subtitle] [bestsellers-title]`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="400"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                    data-strk-bg-id={`bestseller-hover-${product.images[1].id}`}
                    data-strk-bg={`[${product.id}-desc] [${product.id}-title] [bestsellers-subtitle] [bestsellers-title]`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="400"
                  />
                  <button
                    className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm py-2.5 text-xs uppercase tracking-wider text-stone-800 transition-all duration-300 hover:bg-primary hover:text-white ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.variants[0]);
                    }}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                    Add to Bag
                  </button>
                </div>
              </Link>
              <Link to={`/product/${product.id}`} className="block">
                <h3 id={`${product.id}-title`} className="product-name text-xs md:text-sm text-stone-800 mb-1 truncate">{product.name}</h3>
                <p id={`${product.id}-desc`} className="text-xs text-stone-500 mb-1.5 truncate">{product.description}</p>
                <div className="flex items-center gap-1 mb-1.5">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-xs text-stone-600">{product.rating}</span>
                  <span className="text-xs text-stone-400">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium text-stone-800">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link to="/shop" className="btn-secondary inline-block">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
