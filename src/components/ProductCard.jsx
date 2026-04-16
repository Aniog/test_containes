import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.src = `https://placehold.co/400x400/f9a8d4/9333ea?text=${encodeURIComponent(product.name)}`;
          }}
        />
        {/* Badge */}
        <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs px-2.5 py-1 rounded-full font-medium`}>
          {product.badge}
        </span>
        {/* Discount */}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
            {Math.round((1 - product.price / product.originalPrice) * 10)}折
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg hover:bg-pink-50 transition"
          >
            <Eye className="w-4 h-4" />
            查看详情
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 text-sm leading-tight hover:text-pink-600 transition line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">{product.rating} ({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-bold text-pink-600">¥{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">¥{product.originalPrice}</span>
          )}
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-400 mb-3">已售 {product.sold.toLocaleString()} 件</p>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          加入购物车
        </button>
      </div>
    </div>
  );
}
