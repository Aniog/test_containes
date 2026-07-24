import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  return (
    <div 
      className="group animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden mb-4 img-hover-reveal">
          {/* Primary Image */}
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Hover Image */}
          <img 
            src={product.images[1]} 
            alt={`${product.name} - alternate`}
            className="w-full h-full object-cover"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-charcoal py-3 px-4 text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal mb-1 hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-taupe'}`} 
            />
          ))}
          <span className="text-xs text-velmora-taupe ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;