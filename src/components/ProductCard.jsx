import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col h-full cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />
        <img 
          src={product.imageHover} 
          alt={`${product.name} lifestyle`} 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
        />
        
        {/* Quick Add Button - Appears on Hover */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 hidden md:block">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background/95 backdrop-blur text-velmora-charcoal py-3 font-serif text-sm tracking-widest uppercase hover:bg-velmora-charcoal hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg leading-tight uppercase tracking-[0.1em] text-velmora-charcoal mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-velmora-charcoal/60 mb-2">{product.material}</p>
        </div>
        <p className="text-velmora-charcoal">${product.price.toFixed(2)}</p>
      </div>

      {/* Mobile Add to Cart (always visible on small screens) */}
      <button 
        onClick={handleQuickAdd}
        className="mt-4 md:hidden flex items-center justify-center space-x-2 border border-velmora-charcoal text-velmora-charcoal py-2 hover:bg-velmora-charcoal hover:text-white transition-colors"
      >
        <ShoppingBag size={16} />
        <span className="uppercase text-xs tracking-wider">Add</span>
      </button>
    </Link>
  );
};

export default ProductCard;