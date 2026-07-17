import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../lib/CartContext';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[3/4] bg-neutral-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {product.hoverImage && (
          <img 
            src={product.hoverImage} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" 
          />
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 hidden md:block">
           <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white/90 backdrop-blur-sm text-neutral-900 py-3 uppercase tracking-widest text-[10px] font-bold hover:bg-[#C5A059] hover:text-white transition-all flex items-center justify-center space-x-2"
           >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Quick Add</span>
           </button>
        </div>
      </Link>
      
      <div className="mt-6 text-center">
        <h3 className="text-xs uppercase tracking-widest-extra font-serif text-neutral-900 group-hover:text-[#C5A059] transition-colors">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm font-bold text-neutral-500">${product.price}</p>
      </div>

       <button 
        onClick={() => addToCart(product)}
        className="md:hidden mt-4 w-full border border-neutral-200 py-2 uppercase tracking-widest text-[10px] font-bold"
       >
        Add to Bag
       </button>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
