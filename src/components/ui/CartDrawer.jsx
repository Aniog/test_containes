import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    getCartCount
  } = useCart();
  
  const drawerRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const formatPrice = (price) => `$${price.toFixed(0)}`;

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-[var(--color-text-muted)] mb-4" />
            <p className="text-[var(--color-text-secondary)] mb-6">Your bag is empty</p>
            <button 
              onClick={closeCart}
              className="px-8 py-3 bg-[var(--color-text-primary)] text-white font-sans text-sm tracking-wider hover:bg-[var(--color-text-secondary)] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <p className="text-xs text-[var(--color-text-muted)] mb-4">
                {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'}
              </p>
              
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-[var(--color-bg-secondary)] flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="product-name text-[10px] mb-1">{item.name}</h3>
                          {item.variant && (
                            <p className="text-xs text-[var(--color-text-muted)]">{item.variant}</p>
                          )}
                        </div>
                        <p className="font-sans text-sm font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <div className="flex items-center border border-[var(--color-border)]">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-[var(--color-bg-secondary)] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium min-w-[32px] text-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-[var(--color-bg-secondary)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--color-border)] px-6 py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[var(--color-text-secondary)]">Subtotal</span>
                <span className="font-serif text-lg">{formatPrice(getCartTotal())}</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)]">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full py-4 bg-[var(--color-text-primary)] text-white font-sans text-sm tracking-wider hover:bg-[var(--color-text-secondary)] transition-colors">
                Checkout
              </button>
              <button 
                onClick={closeCart}
                className="w-full py-3 text-[var(--color-text-secondary)] font-sans text-sm tracking-wider hover:text-[var(--color-text-primary)] transition-colors"
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
