import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-espresso-700 overflow-hidden mb-4 card-hover">
        {/* Primary image */}
        <div
          className={`absolute inset-0 bg-espresso-700 transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`[product-${product.id}-name] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        >
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-cream-300/15" />
          </div>
        </div>

        {/* Secondary image on hover */}
        <div
          className={`absolute inset-0 bg-espresso-600 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          data-strk-img-id={`product-${product.id}-secondary`}
          data-strk-img={`[product-${product.id}-name] jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        >
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-cream-300/15" />
          </div>
        </div>

        {/* Badge */}
        {product.newArrival && (
          <span className="absolute top-3 left-3 bg-cream-100 text-espresso text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 font-medium">
            New
          </span>
        )}

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          <button
            onClick={handleAddToCart}
            className="btn-accent w-full text-center text-[11px] py-2.5 px-3"
          >
            Add to Cart — ${product.price}
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <p
          id={`product-${product.id}-name`}
          className="product-name text-[11px] md:text-xs text-cream-100 mb-1.5"
        >
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="text-[11px] text-cream-300/50">{product.rating} ({product.reviewCount})</span>
          </div>
          <span className="text-sm text-cream-200 font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
}
