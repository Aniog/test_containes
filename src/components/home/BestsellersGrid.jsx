import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import products from '@/data/products';
import { useCartDispatch } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BestsellersGrid() {
  const bestsellers = products.filter((p) => p.bestseller);
  const dispatch = useCartDispatch();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const quickAdd = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, variant: product.variants[0], quantity: 1 },
    });
  };

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14 md:mb-18">
        <p className="section-subtitle mb-3">Loved by Our Community</p>
        <h2 className="section-title">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <BestsellerCard
            key={product.id}
            product={product}
            onQuickAdd={quickAdd}
          />
        ))}
      </div>
    </section>
  );
}

function BestsellerCard({ product, onQuickAdd }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="block relative aspect-[3/4] bg-[#F5EDDA] overflow-hidden mb-4"
      >
        {/* Primary image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-img`}
          data-strk-img={`[bestseller-name-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Hover / secondary image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-hover`}
          data-strk-img={`[bestseller-name-${product.id}] jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick add button on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd(product);
            }}
            className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-[11px] tracking-wider uppercase font-medium text-[#252320] hover:bg-[#C4952E] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div>
        <p
          id={`bestseller-name-${product.id}`}
          className="product-name text-xs md:text-[13px] mb-1.5"
        >
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium tracking-wide">
            ${product.price}
          </span>
          <div className="flex items-center gap-0.5">
            <Star size={11} fill="#C4952E" stroke="#C4952E" />
            <span className="text-[11px] text-[#78716C]">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
