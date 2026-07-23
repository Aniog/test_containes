import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 1, 'Gold');
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-4">
          <img 
            data-strk-img-id={`product-card-${product.id}`}
            data-strk-img={`[prod-title-${product.id}] [prod-desc-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
             <button 
               onClick={handleQuickAdd}
               className="w-full bg-white/90 backdrop-blur-sm text-charcoal py-3 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
             >
               <ShoppingBag className="w-3 h-3" />
               Quick Add
             </button>
          </div>
        </div>
        <div className="space-y-1">
          <h3 id={`prod-title-${product.id}`} className="text-sm font-serif uppercase tracking-widest group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
          <p id={`prod-desc-${product.id}`} className="hidden">{product.description}</p>
          <p className="text-sm font-medium tracking-wide text-muted-foreground">${product.price}.00</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
