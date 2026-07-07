import { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { StarRating } from './StarRating';
import { StrkImg } from './StrkImg';
import { formatPrice } from '@/data/products';

export function ProductCard({ product, imgId, query, ratio = '4x5', width = 600 }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={`/products/${product.id}`}
        className="relative block overflow-hidden bg-velmora-champagne aspect-[4/5]"
        aria-label={`View ${product.name}`}
      >
        <StrkImg
          id={imgId}
          query={query}
          ratio={ratio}
          width={width}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-lux group-hover:scale-105"
        />

        {product.hoverImage && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-out-lux ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <StrkImg
              id={product.hoverImage.id}
              query={product.hoverImage.query}
              ratio={product.hoverImage.ratio}
              width={product.hoverImage.width}
              alt={`${product.name} alternate view`}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <button
          type="button"
          onClick={handleAdd}
          className="absolute bottom-4 left-4 right-4 flex translate-y-4 items-center justify-center gap-2 bg-velmora-espresso py-3 text-xs font-medium uppercase tracking-widest text-white opacity-0 transition-all duration-300 ease-out-lux hover:bg-velmora-coffee group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>

        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-velmora-espresso opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100"
          aria-label={`Save ${product.name} to wishlist`}
        >
          <Heart size={16} />
        </button>
      </a>

      <div className="mt-4 flex flex-col items-center text-center">
        <div className="mb-1.5 flex items-center gap-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-stone">({product.reviewCount})</span>
        </div>
        <h3 className="product-title text-sm font-medium text-velmora-espresso">
          <a href={`/products/${product.id}`}>{product.name}</a>
        </h3>
        <p className="mt-1.5 font-display text-sm font-medium text-velmora-brown">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
