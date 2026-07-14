import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import StarRating from '../shared/StarRating';

export default function ProductCard({ product, showSecondImage = true }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.variants[0]);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
    >
      <article className="product-card">
        {/* Image Container */}
        <div className="product-card-image rounded overflow-hidden mb-4">
          {/* Main Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Hover Image */}
          {showSecondImage && product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className="product-card-image-hover w-full h-full object-cover"
              loading="lazy"
            />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 badge badge-dark">
              {product.badge}
            </span>
          )}

          {/* Quick Add Button */}
          <div className="product-card-actions">
            <button
              onClick={handleQuickAdd}
              className="w-full py-3 bg-white/95 backdrop-blur-sm text-[#1C1917] text-xs font-medium tracking-[0.1em] uppercase rounded flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Name */}
          <h3 className="font-serif text-sm tracking-[0.1em] text-[#1C1917] group-hover:text-[#C4A962] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-xs text-[#A8A29E]">({product.reviews})</span>
          </div>

          {/* Price */}
          <p className="font-medium text-[#1C1917]">
            ${product.price}
          </p>
        </div>
      </article>
    </Link>
  );
}
