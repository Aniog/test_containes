import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart();
  const drawerRef = useRef(null);
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);
  
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
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] bg-[var(--color-bg-primary)] shadow-2xl transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
        
        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 mb-6 rounded-full bg-[var(--color-surface)] flex items-center justify-center">
              <svg className="w-10 h-10 text-[var(--color-text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-2">Your cart is empty</p>
            <p className="text-sm text-[var(--color-text-muted)] mb-6">Discover our collection of fine jewelry</p>
            <Button variant="secondary" onClick={closeCart}>
              <Link to="/collection" onClick={closeCart}>
                Shop Collection
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <p className="text-xs text-[var(--color-text-muted)] mb-4">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </p>
              
              <ul className="space-y-6">
                {items.map((item) => (
                  <li 
                    key={`${item.product.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-[var(--color-border)] last:border-0"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-32 bg-[var(--color-surface)] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="product-name text-[var(--color-text-primary)]">
                            {item.product.name}
                          </h3>
                          {item.variant && (
                            <p className="text-xs text-[var(--color-text-muted)] mt-1">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-error)] transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">
                        ${item.product.price.toFixed(2)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-auto pt-3">
                        <div className="flex items-center border border-[var(--color-border)]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={2} />
                          </button>
                          <span className="w-10 text-center text-sm font-medium text-[var(--color-text-primary)]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={2} />
                          </button>
                        </div>
                        
                        <p className="font-medium text-[var(--color-text-primary)]">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Footer */}
            <div className="border-t border-[var(--color-border)] px-6 py-6 bg-[var(--color-bg-secondary)]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-[var(--color-text-secondary)]">Subtotal</span>
                <span className="text-lg font-medium text-[var(--color-text-primary)]">
                  ${total.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Button variant="primary" className="w-full">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
