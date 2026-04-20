import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, Zap, TrendingUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const badgeColors = {
  'Best Seller': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Top Rated': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Limited Offer': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Fan Favorite': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'New Arrival': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
};

const ProductCard = ({ product, onProductClick }) => {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.some((i) => i.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, product.colors[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group relative bg-gray-900 border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
      onClick={() => onProductClick(product)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-800 aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[product.badge]}`}>
            {product.badge}
          </div>
        )}

        {/* Discount */}
        {product.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            -{product.discount}%
          </div>
        )}

        {/* Quick view button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            <Eye className="w-3 h-3" />
            Quick View
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs text-blue-400 font-medium mb-1 uppercase tracking-wider">{product.brand}</div>
        <h3 className="text-white font-bold text-base mb-1 leading-tight group-hover:text-blue-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed">{product.tagline}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-yellow-400 text-xs font-semibold">{product.rating}</span>
          <span className="text-gray-500 text-xs">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-white font-black text-xl">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 text-sm line-through">${product.originalPrice}</span>
              )}
            </div>
            {product.discount && (
              <div className="text-green-400 text-xs font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Save ${product.originalPrice - product.price}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              added
                ? 'bg-green-500 text-white scale-95'
                : inCart
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500 hover:text-white'
                : 'bg-blue-500 text-white hover:bg-blue-400 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25'
            }`}
          >
            {added ? (
              <>
                <Zap className="w-3.5 h-3.5" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                {inCart ? 'In Cart' : 'Add'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
