import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  
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
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 className="font-serif text-xl">Your Cart ({itemCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-[var(--color-secondary)]" />
            </div>
            <h3 className="font-serif text-lg mb-2">Your cart is empty</h3>
            <p className="text-sm text-[var(--color-secondary)] mb-6">
              Discover our collection of demi-fine jewelry.
            </p>
            <Button onClick={closeCart} variant="accent">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-[var(--color-surface)] rounded-[var(--radius-md)] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-sm uppercase tracking-wide truncate">
                          {item.name}
                        </h4>
                        {item.variant && (
                          <p className="text-xs text-[var(--color-secondary)] mt-0.5">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="p-1 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[var(--color-border)] rounded-[var(--radius-md)]">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <p className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="border-t border-[var(--color-border)] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-secondary)]">Subtotal</span>
                <span className="font-serif text-lg">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-[var(--color-secondary)]">
                Shipping and taxes calculated at checkout.
              </p>
              <Button variant="accent" size="full" className="py-4">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full py-3 text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
