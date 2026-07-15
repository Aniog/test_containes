import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group relative flex flex-col space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />
          )}
        </Link>
        
        {/* Quick Add Overlay */}
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-4 transition-all duration-300 transform translate-y-full group-hover:translate-y-0",
          "bg-white/90 backdrop-blur-sm"
        )}>
          <Button 
            onClick={() => addToCart(product)}
            className="w-full bg-velmora-onyx hover:bg-velmora-gold text-white text-[10px] uppercase tracking-widest h-10 transition-colors"
          >
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col space-y-1 text-center">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {product.category}
        </p>
        <h3 className="text-sm font-medium uppercase tracking-widest-extra text-foreground group-hover:text-velmora-gold transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="font-serif text-sm">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
