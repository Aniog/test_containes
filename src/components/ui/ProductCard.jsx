import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry close up worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-white font-inter text-[9px] font-medium tracking-[0.12em] uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-charcoal text-white font-inter text-xs tracking-[0.15em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <p
          id={product.titleId}
          className="font-inter text-xs font-medium tracking-[0.12em] uppercase text-charcoal truncate"
        >
          {product.name}
        </p>
        <p id={product.descId} className="font-inter text-xs text-warmgray mt-0.5 truncate">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-inter text-sm font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#B8965A" stroke="none" />
            <span className="font-inter text-[10px] text-warmgray">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
