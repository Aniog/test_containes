import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import Rating from '@/components/ui/Rating';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, openCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      addItem(product, 1, product.variants?.[0]?.value || null);
      setIsAdding(false);
      setIsAdded(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsAdded(false);
        openCart();
      }, 1000);
    }, 500);
  };
  
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          )}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}
        
        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">
            Bestseller
          </span>
        )}
        
        {/* Quick Add Button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent',
            'transform transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button
            onClick={handleAddToCart}
            disabled={isAdding || isAdded}
            className={cn(
              'w-full py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all',
              isAdded
                ? 'bg-success text-white'
                : 'bg-white text-primary hover:bg-accent hover:text-white'
            )}
          >
            {isAdding ? (
              <>
                <span className="animate-pulse">Adding...</span>
              </>
            ) : isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="product-name text-sm text-text-primary group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        
        {product.rating && (
          <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        )}
        
        <p className="font-medium text-accent">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
