import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-3">
            Bestsellers
          </h2>
          <p className="text-sm text-[#6b6560] tracking-wide">
            Pieces our customers can't stop wearing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-[#e8e4df] overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={`bestseller-${product.id}-img`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick add overlay */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 'gold');
                      }}
                      className="w-full bg-[#1a1a1a]/90 text-[#faf8f5] py-2.5 text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <Link to={`/product/${product.id}`} className="block">
                <h3 id={product.titleId} className="product-name text-xs md:text-sm text-[#1a1a1a] mb-1 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-xs text-[#6b6560]">{product.rating}</span>
                </div>
                <p className="text-sm text-[#1a1a1a]">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-secondary inline-block">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
