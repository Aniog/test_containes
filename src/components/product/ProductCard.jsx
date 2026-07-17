import { Link } from 'react-router-dom';
import { useCartStore } from '../../lib/store';

export const ProductCard = ({ product }) => {
  const { addItem } = useCartStore();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ ...product, variant: 'Gold', quantity: 1 });
  };

  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col group cursor-pointer block">
      <div className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden">
        {/* Main Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          data-strk-img-id={`product-${product.id}-img-1`}
          data-strk-img={`[product-${product.id}-name] jewelry isolated`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        {/* Hover Image */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          data-strk-img-id={`product-${product.id}-img-2`}
          data-strk-img={`[product-${product.id}-name] jewelry worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="flex flex-col text-center items-center">
        <h3 id={`product-${product.id}-name`} className="uppercase tracking-widest text-sm mb-2">{product.name}</h3>
        <p className="text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};
