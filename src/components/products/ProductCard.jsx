import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { ShoppingBag, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const { data } = product;

  return (
    <div
      className="group relative flex flex-col bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50 mb-4">
        <Link to={`/product/${data.slug}`}>
          <img
            data-strk-img-id={`product-img-${product.id}`}
            data-strk-img={`[pd-title-${product.id}] jewelry [pd-category-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={data.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Second image hover reveal logic */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5" />
        </Link>

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-white hover:bg-zinc-900 hover:text-white text-primary text-[10px] items-center justify-center uppercase tracking-widest font-semibold py-3 transition-colors flex gap-2 border border-zinc-100 shadow-sm"
          >
            <ShoppingBag size={14} /> Add to Bag
          </button>
          <Link
            to={`/product/${data.slug}`}
            className="bg-white hover:bg-zinc-100 text-primary p-3 border border-zinc-100 shadow-sm"
          >
            <Eye size={14} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <span id={`pd-category-${product.id}`} className="text-[10px] uppercase tracking-widest text-muted mb-1">
          {data.category}
        </span>
        <Link
          id={`pd-title-${product.id}`}
          to={`/product/${data.slug}`}
          className="text-xs uppercase tracking-extra-wide font-serif mb-2 group-hover:text-accent transition-colors"
        >
          {data.name}
        </Link>
        <span className="text-sm font-light text-zinc-900">{formatPrice(data.price)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
