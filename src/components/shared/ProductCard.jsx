import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm mb-4">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="h-full w-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
            data-strk-img-id={`prod-${product.id}-img1`}
            data-strk-img={`[card-title-${product.id}] jewelry minimalist`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} on model`}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            data-strk-img-id={`prod-${product.id}-img2`}
            data-strk-img={`[card-title-${product.id}] model wearing jewelry minimalist`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
        </Link>
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-stone-900/95 backdrop-blur-sm text-stone-50 py-3 text-sm font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 id={`card-title-${product.id}`} className="text-sm font-medium uppercase tracking-wider text-stone-900">
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-stone-500">{product.material}</p>
        </div>
        <p className="text-sm font-medium text-stone-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
