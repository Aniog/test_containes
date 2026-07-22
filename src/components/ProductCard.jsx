import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  }

  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-gray-900 py-3 text-sm tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-lg tracking-wider uppercase">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>
        <p className="font-serif text-lg">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
