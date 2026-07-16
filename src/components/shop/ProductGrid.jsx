import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const nameId = `shop-${product.id}-name`;
  const descId = `shop-${product.id}-desc`;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-clay overflow-hidden mb-3">
        <img
          alt={product.name}
          data-strk-img-id={`shop-${product.id}-img`}
          data-strk-img={hovered ? `[${descId}] [${nameId}] alt` : `[${descId}] [${nameId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Quick-add — always visible on mobile, hover-revealed on desktop */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-2 sm:p-3 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 translate-y-0 opacity-100`}
        >
          <button
            onClick={handleAdd}
            className="w-full bg-surface text-espresso py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[0.12em] uppercase font-medium hover:bg-accent hover:text-white transition-all duration-300 shadow-md"
          >
            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
              <ShoppingBag size={11} className="sm:w-[13px] sm:h-[13px]" />
              Add to Cart
            </span>
          </button>
        </div>
      </div>

      <h3 id={nameId} className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-espresso leading-snug">
        {product.name}
      </h3>
      <p id={descId} className="sr-only">{product.description}</p>
      <div className="flex items-center gap-1 mt-1.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={11}
            className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-warm-sand'}
          />
        ))}
        <span className="text-xs text-taupe ml-1">({product.reviews})</span>
      </div>
      <p className="text-sm text-espresso mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductGrid({ products }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-taupe text-sm">No products match your filters.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
