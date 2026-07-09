import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, price, description } = product.data;

  return (
    <div className="group relative flex flex-col h-full bg-white transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-50">
        <Link to={`/product/${product.id}`}>
          {/* Main Image */}
          <img 
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[pd-name-${product.id}] [pd-desc-${product.id}] jewelry gold model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          {/* Hover Reveal Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <img 
              data-strk-img-id={`product-${product.id}-hover`}
              data-strk-img={`[pd-name-${product.id}] jewelry gold detail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${name} detail`}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
        </Link>

        {/* Quick Add Button */}
        <button 
          onClick={() => addToCart(product, 1, 'Gold')}
          className="absolute bottom-4 left-4 right-4 bg-white/95 text-charcoal py-3 px-4 text-[10px] uppercase tracking-[0.2em] font-semibold translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gold hover:text-white"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Bag
        </button>
      </div>

      {/* Info */}
      <div className="mt-6 flex flex-col flex-grow">
        <h3 id={`pd-name-${product.id}`} className="text-xs uppercase tracking-widest font-medium text-charcoal/80 mb-2">
          {name}
        </h3>
        <p className="text-sm font-semibold">${price}</p>
        <span id={`pd-desc-${product.id}`} className="hidden">{description}</span>
      </div>
    </div>
  );
};

export default ProductCard;
