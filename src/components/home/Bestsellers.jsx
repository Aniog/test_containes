import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.isBestseller);
  const [hovered, setHovered] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <section ref={containerRef} className="container-site py-20 md:py-28">
      <div className="text-center mb-14">
        <span className="accent-badge mb-4">Most Loved</span>
        <h2 className="heading-lg">Bestsellers</h2>
        <p className="body-text mt-3 max-w-md mx-auto">
          The pieces our community returns to, layers with, and gifts to those they love.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative overflow-hidden bg-velmora-muted aspect-[3/4] mb-4">
              <img
                alt={product.name}
                data-strk-img-id={`bestseller-${product.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black/5 flex items-end justify-center pb-4 transition-opacity duration-300 ${hovered === product.id ? 'opacity-100' : 'opacity-0'}`}>
                <button
                  onClick={(e) => handleAdd(e, product)}
                  className="bg-white/95 text-velmora-base px-4 py-2 text-xs font-medium tracking-wider uppercase hover:bg-velmora-accent hover:text-white transition-all duration-300 flex items-center gap-1.5"
                >
                  <Plus className="w-3 h-3" />
                  Add to Cart
                </button>
              </div>

              <span id={product.titleId} className="hidden">{product.name}</span>
              <span id={product.descId} className="hidden">{product.summary}</span>
            </div>

            <p className="product-name group-hover:text-velmora-accent transition-colors">
              {product.name}
            </p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-accent text-velmora-accent' : 'text-velmora-muted-2'}`}
                />
              ))}
              <span className="caption ml-1">({product.reviewCount})</span>
            </div>
            <p className="text-sm font-medium mt-1">{formatPrice(product.price)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
