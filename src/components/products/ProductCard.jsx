import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const badgeStyles = {
  red: 'bg-red-500 text-white',
  green: 'bg-green-500 text-white',
  purple: 'bg-purple-500 text-white',
  orange: 'bg-orange-500 text-white',
  blue: 'bg-blue-500 text-white',
};

export default function ProductCard({ product, onAddToCart }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${badgeStyles[product.badgeColor] || 'bg-gray-500 text-white'}`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 border-0">
          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 line-clamp-2 hover:text-blue-700 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-red-600">¥{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-1.5">¥{product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart && onAddToCart(product)}
            className="flex items-center gap-1 bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-blue-800 transition-colors border-0"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            加购
          </button>
        </div>
      </div>
    </div>
  );
}
