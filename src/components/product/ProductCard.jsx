import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { placeholderSrc } from '@/lib/images';
import { cn } from '@/lib/utils';

const ProductCard = ({ product, className }) => {
  const { addToCart } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <article
      ref={cardRef}
      className={cn('group block', className)}
    >
      {/* Image wrapper — the quick-add button is positioned relative to this, outside the link */}
      <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden mb-4">
        <Link
          to={`/products/${product.id}`}
          className="block w-full h-full"
        >
          <img
            data-strk-img-id={`card-${product.id}`}
            data-strk-img={`[product-name-${product.id}] [section-title]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={placeholderSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Quick-add button — always visible and clickable */}
        <button
          type="button"
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-velmora-cream/95 text-velmora-charcoal py-3 text-xs uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      <Link to={`/products/${product.id}`} className="block text-center space-y-1">
        <h3
          id={`product-name-${product.id}`}
          className="product-name group-hover:text-velmora-gold transition-colors"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1.5">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-taupe">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm font-medium text-velmora-charcoal">
          ${product.price}
        </p>
      </Link>
    </article>
  );
};

export default ProductCard;
