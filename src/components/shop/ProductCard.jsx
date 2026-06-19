import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-[#f5f0eb] overflow-hidden mb-4 relative">
          <img
            data-strk-img-id={`shop-${product.id}-primary`}
            data-strk-img={`[shop-product-name-${product.id}] [shop-product-desc-${product.id}] [shop-page-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            data-strk-img-id={`shop-${product.id}-hover`}
            data-strk-img={`[shop-product-name-${product.id}] [shop-product-desc-${product.id}] [shop-page-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
          <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-[#1a1a1a] text-[#faf8f5] py-3 text-xs tracking-widest uppercase hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="text-center">
        <div className="flex justify-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#e8e4df]'}
            />
          ))}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3
            id={`shop-product-name-${product.id}`}
            className="velmora-product-name text-sm text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`shop-product-desc-${product.id}`}
          className="text-xs text-[#6b6b6b] mt-1"
        >
          {product.description}
        </p>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </div>
  );
}
