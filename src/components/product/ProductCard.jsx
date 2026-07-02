import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/lib/CartProvider';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, category, image_id } = product;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative flex flex-col h-full">
      <Link to={`/product/${id}`} className="block relative aspect-[4/5] overflow-hidden bg-velmora-grey/5 mb-6">
        {/* Primary Image */}
        <img
          data-strk-img-id={`product-primary-${id}`}
          data-strk-img={`${image_id || name} product jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={name}
        />
        
        {/* Hover Image Overlay (Mockup) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <Button
            onClick={handleAddToCart}
            variant="default"
            className="w-full bg-velmora-bg/90 text-velmora-base hover:bg-velmora-base hover:text-white backdrop-blur-sm transition-all duration-300 h-10 text-xs"
          >
            Add to Bag
          </Button>
        </div>
      </Link>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-serif text-sm uppercase tracking-ultra-wide group-hover:text-velmora-gold transition-colors duration-300">
            <Link to={`/product/${id}`}>{name}</Link>
          </h3>
        </div>
        <p className="text-velmora-grey text-[10px] uppercase tracking-widest mb-2">{category}</p>
        <p className="text-velmora-base font-serif text-sm mt-auto">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
