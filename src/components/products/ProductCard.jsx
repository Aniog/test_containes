import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const fields = product.data;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${fields.name} added to bag`);
  };

  return (
    <div className="group relative">
      <Link to={`/product/${fields.slug}`} className="block overflow-hidden bg-neutral-100 aspect-[3/4] relative">
        <img
          src={fields.images?.[0] || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
          data-strk-img-id={`product-${product.id}`}
          data-strk-img={`[product-name-${product.id}] [product-category-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={fields.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          <button
            onClick={handleAddToCart}
            className="bg-white text-brand-onyx px-6 py-2 uppercase tracking-widest text-xs font-bold shadow-lg hover:bg-brand-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center space-y-1">
        <p id={`product-category-${product.id}`} className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{fields.category}</p>
        <h3 id={`product-name-${product.id}`} className="font-serif text-sm uppercase tracking-widest font-medium group-hover:text-accent transition-colors">
          <Link to={`/product/${fields.slug}`}>{fields.name}</Link>
        </h3>
        <p className="font-bold text-sm">${fields.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
