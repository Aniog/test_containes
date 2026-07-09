import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to PDP
    addItem(product, product.variants[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-light mb-4 overflow-hidden">
        <img 
          src={product.image1} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img 
          src={product.image2} 
          alt={`${product.name} alternate view`} 
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        
        {/* Quick Add overlay button */}
        <button 
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 bg-velmora-dark/95 text-velmora-base py-3 
                     translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                     transition-all duration-300 flex items-center justify-center space-x-2 
                     hover:bg-velmora-gold text-xs tracking-widest uppercase font-medium"
        >
          <ShoppingBag size={14} />
          <span>Quick Add</span>
        </button>
      </div>
      
      <div className="text-center">
        <h3 className="font-serif text-lg tracking-wide uppercase mb-2">{product.name}</h3>
        <p className="text-velmora-muted font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;