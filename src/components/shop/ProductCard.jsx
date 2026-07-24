import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div 
      className="group relative flex flex-col h-full bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-velmora-sand">
        <img
          src={product.image_url}
          alt={product.name}
          data-strk-img-id={`prod-card-img-${product.id}-8f2a9c`}
          data-strk-img={`[prod-title-${product.id}] [prod-category-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            isHovered ? 'scale-110 blur-[1px] opacity-90' : 'scale-100'
          }`}
        />
        
        {/* Quick actions overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500 bg-black/5 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button 
            onClick={handleAddToCart}
            className="rounded-none bg-white text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white transition-all duration-300 w-12 h-12 p-0 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0"
          >
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button 
              className="rounded-none bg-white text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white transition-all duration-300 w-12 h-12 p-0 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 delay-75"
            >
              <Eye className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Badge if needed */}
        {product.is_new && (
          <span className="absolute top-4 left-4 bg-velmora-gold text-white text-[10px] uppercase tracking-widest px-2 py-1">
            New
          </span>
        )}
      </Link>

      <div className="mt-6 text-center space-y-2">
        <h3 id={`prod-title-${product.id}`} className="text-xs uppercase tracking-[0.2em] font-serif text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <span id={`prod-category-${product.id}`} className="hidden">{product.category}</span>
        <p className="text-sm font-light text-velmora-gray font-sans">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
