import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';

const bestsellers = products.slice(0, 5);

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-3">Bestsellers</h2>
          <p className="font-sans text-sm text-brand-text-secondary max-w-md mx-auto">
            Our most-loved pieces, chosen by women who value quality and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-brand-surface-alt rounded-sm overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />
          {/* Second image placeholder - same image system would swap */}
          <div
            className={`absolute inset-0 bg-brand-surface-alt transition-all duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              data-strk-img-id={`${product.imgId}-hover`}
              data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product, 'gold');
            }}
            className={`absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </a>

      <span id={`product-name-${product.id}`} className="hidden">{product.name}</span>
      <span id={`product-desc-${product.id}`} className="hidden">{product.description}</span>

      <a href={`/product/${product.id}`} className="block">
        <h3 className="product-name text-xs mb-0.5">{product.name}</h3>
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'text-brand-accent fill-brand-accent' : 'text-brand-border'
              }`}
            />
          ))}
          <span className="font-sans text-[10px] text-brand-text-muted ml-1">
            ({product.reviewCount})
          </span>
        </div>
        <p className="price">${product.price}</p>
      </a>
    </div>
  );
}