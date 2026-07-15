import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import StarRating from '../ui/StarRating';

export default function ProductCard({ product }) {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHoveredId(product.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-velvet-100 rounded overflow-hidden mb-4">
        <img
          src={product.images[hoveredId === product.id && product.images[1] ? 1 : 0].src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className={`absolute bottom-3 right-3 p-3 bg-cream rounded-full shadow-lg transition-all duration-300 hover:bg-champagne hover:text-obsidian ${
            hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-obsidian/80 backdrop-blur-sm text-cream text-xs font-sans">
            Bestseller
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
        <h3 className="product-name text-xs mt-2 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-velvet-600">${product.price}</p>
      </div>
    </Link>
  );
}
