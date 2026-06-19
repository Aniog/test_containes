import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../lib/utils';
import { ShoppingBag, Eye } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group flex flex-col space-y-4 animate-in fade-in duration-700">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-brand-neutral/5 overflow-hidden">
        <Link to={`/product/${product.data.slug}`} className="block w-full h-full">
          {/* Primary Image */}
          <img
            data-strk-img-id={`prod-${product.id}-1`}
            data-strk-img={`[name-${product.id}] [cat-${product.id}] jewelry editorial product`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.data.name}
            className="w-full h-full object-cover grayscale-[0.1] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Hover Image Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <img
              data-strk-img-id={`prod-${product.id}-2`}
              data-strk-img={`[name-${product.id}] jewelry model detail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${product.data.name} detail`}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        </Link>

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-md flex space-x-2">
          <button
            onClick={() => {
              addToCart(product);
              toast.success(`Added ${product.data.name} to cart`);
            }}
            className="flex-1 bg-brand-text text-white py-2 text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 hover:bg-brand-accent transition-colors"
          >
            <ShoppingBag size={12} />
            <span>Quick Add</span>
          </button>
          <Link
            to={`/product/${product.data.slug}`}
            className="p-2 bg-white text-brand-text hover:bg-brand-text hover:text-white transition-colors"
          >
            <Eye size={12} />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="text-center space-y-1">
        <Link to={`/product/${product.data.slug}`}>
          <h3 id={`name-${product.id}`} className="font-serif text-sm uppercase tracking-wide group-hover:text-brand-accent transition-colors">{product.data.name}</h3>
        </Link>
        <div id={`cat-${product.id}`} className="hidden">{product.data.category}</div>
        <p className="text-xs text-brand-neutral font-medium">{formatCurrency(product.data.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
