import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/lib/cart-store';

const ProductCard = ({ product }) => {
  const { addItem } = useCartStore();
  const data = product.data;
  const image = data.images?.[0] || data.name;
  const hoverImage = data.images?.[1] || image;

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, data.variants?.[0] || 'Gold Tone');
  };

  return (
    <div className="group space-y-4">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-stone/10 overflow-hidden">
        {/* Main Image */}
        <img 
          data-strk-img-id={`p-card-${product.id}`}
          data-strk-img={image}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
           <img 
            data-strk-img-id={`p-card-hover-${product.id}`}
            data-strk-img={hoverImage}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${data.name} detail`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Quick Add Label */}
        <button 
          onClick={onQuickAdd}
          className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-widest text-[10px] font-medium flex items-center justify-center space-x-2"
        >
          <ShoppingBag size={14} className="stroke-1" />
          <span>Quick Add</span>
        </button>
      </Link>
      
      <div className="text-center space-y-1">
        <h3 className="product-name text-xs tracking-[0.2em]">{data.name}</h3>
        <p className="text-sm font-light text-muted">{formatPrice(data.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
