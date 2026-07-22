import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0], 1);
    toast.success('Added to cart');
    openCart();
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group">
      <div className="product-image-wrapper aspect-[3/4]">
        <img src={product.images[0]} alt={product.name} className="product-image" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-white/90 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          <button onClick={handleAddToCart} className="btn-primary w-full py-2 text-xs">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-serif text-xs uppercase tracking-widest text-brand-charcoal">{product.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
