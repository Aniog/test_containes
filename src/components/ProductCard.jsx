import { Link } from 'react-router-dom';
import { SEED_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="group block relative cursor-pointer">
      <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
        {/* Main Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          data-strk-img-id={`prod-${product.id}-main`}
          data-strk-img={`[prod-title-${product.id}] on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
        />
        {/* Hover Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          data-strk-img-id={`prod-${product.id}-hover`}
          data-strk-img={`[prod-title-${product.id}] close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
        />
        
        {/* Quick Add Button (appears on hover) */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            className="w-full bg-background/90 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background py-3 text-xs tracking-widest uppercase transition-colors"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, 'gold'); // Default to gold for quick add
            }}
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 id={`prod-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};