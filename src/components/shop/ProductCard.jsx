import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { formatPrice } from '@/lib/data';
import { IMAGE_PLACEHOLDER } from '@/lib/images';
import StarRating from '@/components/ui/StarRating';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const titleId = `product-title-${product.id}`;
  const query = hovered ? `[product-hover-${product.id}] [${titleId}]` : `[${titleId}]`;

  return (
    <article
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
          <img
            data-strk-img-id={product.imageId}
            data-strk-img={query}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src={IMAGE_PLACEHOLDER}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out-circ group-hover:scale-105"
          />
          <p id={`product-hover-${product.id}`} className="sr-only">
            {product.hoverQuery}
          </p>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </Link>

      {showQuickAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product, { quantity: 1, tone: 'gold' });
          }}
          className="absolute bottom-4 left-4 right-4 flex translate-y-0 items-center justify-center gap-2 rounded-sm bg-white py-3 text-xs font-medium uppercase tracking-widest text-espresso opacity-100 shadow-sm transition-all duration-300 hover:bg-gold hover:text-white md:pointer-events-none md:translate-y-4 md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag size={14} strokeWidth={2} />
          Add to Cart
        </button>
      )}

      <div className="mt-4 text-center">
        <StarRating rating={product.rating} size={12} />
        <h3
          id={titleId}
          className="mt-2 font-serif text-sm uppercase tracking-widest text-espresso"
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-warmstone">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}