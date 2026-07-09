import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BestsellersGrid() {
  const [hovered, setHovered] = useState(null);
  const { addItem } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="section-subtitle">The Edit</p>
        <h2 className="section-title mt-2">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to={`/product/${product.slug}`} className="block">
              <div className="relative aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden mb-3">
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}-${hovered === product.id ? '2' : '1'}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick add overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product, 'Gold');
                    }}
                    className="btn-primary text-xs py-2 px-4 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>

            <div>
              <Link to={`/product/${product.slug}`}>
                <h3
                  id={product.titleId}
                  className="font-serif text-sm font-semibold tracking-wider uppercase text-velmora-charcoal leading-tight"
                >
                  {product.name}
                </h3>
              </Link>
              <p id={product.descId} className="sr-only">{product.description}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                <span className="text-xs text-velmora-smoke">{product.rating} ({product.reviewCount})</span>
              </div>
              <p className="font-sans text-sm font-medium text-velmora-charcoal mt-1">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All
        </Link>
      </div>
    </section>
  );
}