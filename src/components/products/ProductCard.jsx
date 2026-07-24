import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="group flex flex-col gap-4">
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-muted overflow-hidden">
        {/* Hover Image Reveal Placeholder (using same for now) */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`${product.imgId}-main`}
          data-strk-img={`[${product.descId}] [${product.titleId}] [hero-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-primary py-3 px-4 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-[10px] tracking-widest uppercase font-medium shadow-sm hover:bg-white"
        >
          Add to Bag
          <ShoppingBag size={14} />
        </button>
      </Link>

      <div className="flex flex-col items-center text-center gap-1 px-2">
        <h3 id={product.titleId} className="font-serif text-sm tracking-[0.15em] uppercase text-primary font-medium group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground font-light mb-1">
          {product.category}
        </p>
        <p className="text-sm font-medium text-primary">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
