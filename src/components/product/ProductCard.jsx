import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, generateStars } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdding || justAdded) return;
    
    setIsAdding(true);
    
    // Simulate a brief delay for the add animation
    setTimeout(() => {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant: product.variants?.[0] || 'Gold',
        quantity: 1,
      });
      
      setIsAdding(false);
      setJustAdded(true);
      
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 300);
  };
  
  const stars = generateStars(product.rating);
  
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[var(--color-surface)] rounded-[var(--radius-md)] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image (on hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="accent">{product.badge}</Badge>
          </div>
        )}
        
        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isAdding || justAdded}
              className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 rounded-[var(--radius-md)] ${
                justAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : isAdding ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Adding...
                </span>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Quick Add
                </>
              )}
            </button>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        {/* Name */}
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(stars.full)].map((_, i) => (
              <svg key={`full-${i}`} className="w-3 h-3 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-[var(--color-secondary)]">
            ({product.reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <p className="font-medium text-[var(--color-primary)]">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
