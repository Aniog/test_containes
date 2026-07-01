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
    <div className="group relative flex flex-col space-y-4">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-sand overflow-hidden">
        {/* Main Image */}
        <img 
          data-strk-img-id={`prod-card-img-1-${product.id}`}
          data-strk-img={`[prod-title-${product.id}] [prod-desc-${product.id}] close up jewelry gold model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={product.name}
        />
        
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <img 
              data-strk-img-id={`prod-card-img-2-${product.id}`}
              data-strk-img={`[prod-title-${product.id}] jewelry worn on model lifestyle`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={`${product.name} lifestyle`}
           />
        </div>

        {/* Quick Add - Desktop Only */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-velmora-charcoal text-velmora-cream py-4 uppercase tracking-[0.2em] text-[10px] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block"
        >
          Quick Add
        </button>
      </Link>

      <div className="flex flex-col items-center text-center space-y-1">
        <h3 id={`prod-title-${product.id}`} className="text-sm font-serif uppercase tracking-widest">{product.name}</h3>
        <p id={`prod-desc-${product.id}`} className="hidden">{product.description}</p>
        <span className="text-sm text-velmora-charcoal/60">${product.price}</span>
      </div>
      
      {/* Quick Add - Mobile Only */}
      <button 
        onClick={handleAddToCart}
        className="w-full border border-velmora-charcoal py-3 uppercase tracking-widest text-[10px] md:hidden"
      >
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
