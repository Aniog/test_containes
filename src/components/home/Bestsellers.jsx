import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';

const bestsellers = products.filter((p) => p.bestseller);

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 tracking-wide">Bestsellers</h2>
        <p className="text-velmora-text-muted text-center text-sm mb-12 max-w-md mx-auto">
          The pieces our community loves most — worn and adored daily.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-velmora-gold-light rounded-sm overflow-hidden mb-3">
                <img
                  data-strk-img-id={`${product.imgId}-bestseller`}
                  data-strk-img={`[${product.id}-bestseller-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Quick add */}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-text p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm hover:bg-velmora-gold hover:text-white"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <h3
                id={`${product.id}-bestseller-title`}
                className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-velmora-text mb-1"
              >
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'fill-velmora-divider text-velmora-divider'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
              </div>
              <p className="text-sm font-medium text-velmora-text">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
