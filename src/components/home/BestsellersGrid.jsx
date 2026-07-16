import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { bestsellers } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const { addItem } = useCart();

  const nameId = `bestseller-${product.id}-name`;
  const descId = `bestseller-${product.id}-desc`;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => { setHovered(true); setImgIndex(1); }}
      onMouseLeave={() => { setHovered(false); setImgIndex(0); }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-clay overflow-hidden mb-4">
        <img
          alt={product.name}
          data-strk-img-id={`bestseller-${product.id}-${imgIndex}`}
          data-strk-img={imgIndex === 0 ? `[${descId}] [${nameId}]` : `[${descId}] [${nameId}] alternate`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Hover Add to Cart */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="w-full bg-surface text-espresso py-2.5 text-xs tracking-[0.12em] uppercase font-medium hover:bg-accent hover:text-white transition-all duration-300 shadow-md"
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={13} />
              Add to Cart — ${product.price}
            </span>
          </button>
        </div>
      </div>

      {/* Info */}
      <h3
        id={nameId}
        className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-espresso leading-snug"
      >
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

export default function BestsellersGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="serif-heading text-2xl md:text-3xl text-espresso">Bestsellers</h2>
          <p className="text-sm text-taupe mt-3 max-w-md mx-auto">
            The pieces our community loves most — worn and treasured daily.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
