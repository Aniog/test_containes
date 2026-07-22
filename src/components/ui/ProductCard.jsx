import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-blush aspect-[3/4]">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-espresso text-ivory font-inter text-[9px] uppercase tracking-widest2 px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          {showQuickAdd && (
            <button
              onClick={handleAddToCart}
              className={`absolute bottom-0 left-0 right-0 bg-espresso/90 text-ivory font-inter text-[10px] uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gold hover:text-espresso ${
                hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          )}
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <div className="flex items-center gap-1 mb-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={9}
                className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-mist fill-mist'}
              />
            ))}
            <span className="font-inter text-[10px] text-warm-gray ml-1">({product.reviewCount})</span>
          </div>

          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest2 text-charcoal leading-tight group-hover:text-gold transition-colors duration-300"
          >
            {product.name}
          </h3>
          <p
            id={product.descId}
            className="font-inter text-xs text-warm-gray mt-1"
          >
            {product.shortDescription}
          </p>
          <p className="font-inter text-sm font-medium text-charcoal mt-2">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
