import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const data = product.data;

  return (
    <div 
      className="group relative animate-in fade-in duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-surface aspect-[4/5] relative">
        <img
          data-strk-img-id={`prod-main-${product.id}`}
          data-strk-img={`[prod-title-${product.id}] jewelry gold luxury clean background`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={data.name}
          className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
        />
        <img
          data-strk-img-id={`prod-alt-${product.id}`}
          data-strk-img={`[prod-title-${product.id}] jewelry gold luxury lifestyle worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={data.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        />
        
        {/* Quick Add Overlay */}
        <div className={`absolute bottom-0 left-0 w-full p-4 transition-all duration-500 translate-y-full group-hover:translate-y-0`}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-background/90 backdrop-blur-sm text-foreground py-3 uppercase text-[10px] tracking-widest font-bold hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-6 text-center space-y-1">
        <p className="text-[10px] text-muted uppercase tracking-widest">{data.category}</p>
        <h3 id={`prod-title-${product.id}`} className="font-serif text-[13px] uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
          <Link to={`/product/${product.id}`}>{data.name}</Link>
        </h3>
        <p className="font-sans text-sm text-foreground/80">${data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
