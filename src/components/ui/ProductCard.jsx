import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../lib/store';
import { formatPrice } from '../../data/products';

export default function ProductCard({ product }) {
  const { addItem, openCart } = useCartStore();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    
    // Default variant if available, otherwise just add
    const variant = product.options?.color?.[0] || 
                   product.options?.size?.[0] || 
                   null;
                   
    addItem(product, 1, variant);
    openCart();
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        {/* Primary Image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 group-hover:opacity-0"
          data-strk-img-id={`prod-card-${product.id}-img-1`}
          data-strk-img={`[prod-card-${product.id}-name]`}
          data-strk-img-ratio="3x4"
        />
        
        {/* Secondary Hover Image */}
        {product.image2Id && (
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover"
            data-strk-img-id={`prod-card-${product.id}-img-2`}
            data-strk-img={`[prod-card-${product.id}-name] detail`}
            data-strk-img-ratio="3x4"
          />
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 inset-x-0 p-4 pt-16 bg-gradient-to-t from-black/50 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-center">
          <button 
            onClick={handleQuickAdd}
            className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground font-medium text-xs tracking-widest uppercase py-2 px-6 rounded-sm shadow-sm transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 id={`prod-card-${product.id}-name`} className="font-serif uppercase tracking-widest text-sm mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}