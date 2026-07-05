import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-velmora-stone mb-4">
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[prod-name-${product.id}] ${product.image}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[prod-name-${product.id}] ${product.hoverImage}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={`${product.name} detail`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Quick Add Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1, product.variants[0]);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-velmora-black py-3 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          Quick Add
        </button>
      </Link>

      <div className="flex flex-col gap-1 items-start">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</span>
        <h3 id={`prod-name-${product.id}`} className="text-sm font-sans uppercase tracking-[0.15em] font-semibold group-hover:text-velmora-gold transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <span className="text-sm font-light">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;