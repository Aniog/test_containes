import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-xl',
          'flex flex-col animate-slide-in-right'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl">Your Bag ({itemCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-text-secondary" />
            </div>
            <p className="text-text-secondary mb-6">Your bag is empty</p>
            <Button onClick={closeCart} variant="primary">
              <Link to="/collections/all" onClick={closeCart}>
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <Link
                      to={`/products/${item.product.slug}`}
                      onClick={closeCart}
                      className="w-24 h-28 bg-secondary flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    
                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/products/${item.product.slug}`}
                        onClick={closeCart}
                      >
                        <h3 className="product-name text-sm text-text-primary hover:text-accent transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      
                      {item.variant && (
                        <p className="text-sm text-text-secondary mt-1">
                          {item.variant.charAt(0).toUpperCase() + item.variant.slice(1)}
                        </p>
                      )}
                      
                      <p className="font-medium mt-2 text-accent">
                        ${item.product.price}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity - 1
                            )}
                            className="p-2 hover:bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity + 1
                            )}
                            className="p-2 hover:bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-sm text-text-secondary hover:text-error transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="border-t border-border px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-medium text-lg">${subtotal.toFixed(2)}</span>
              </div>
              
              <p className="text-sm text-text-secondary">
                Shipping and taxes calculated at checkout
              </p>
              
              <Button
                variant="primary"
                size="full"
                className="mt-4"
              >
                Checkout
              </Button>
              
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-text-secondary hover:text-accent transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
