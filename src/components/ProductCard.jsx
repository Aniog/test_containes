import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import StarRating from './ui/StarRating.jsx';
import { useCart } from '@/context/CartContext.jsx';

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  const titleId = `product-${product.id}-title`;
  const descId = `product-${product.id}-desc`;
  const imgId = `product-card-${product.id}-${index ?? 0}`;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      ref={cardRef}
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <img
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src={placeholder}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-xs font-medium uppercase tracking-brand text-foreground shadow-sm hover:bg-foreground hover:text-background transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="pt-4 text-center">
        <StarRating rating={product.rating} size={12} />
        <h3
          id={titleId}
          className="mt-2 font-serif text-sm uppercase tracking-brand text-foreground"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.description}
        </p>
        <p className="mt-1 text-sm text-muted">${product.price}</p>
      </div>
    </Link>
  );
}
