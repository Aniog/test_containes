import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[70] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-background z-[80] shadow-2xl transform transition-transform duration-350 ease-drawer ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-muted-light mb-4" />
                <p className="font-serif text-lg text-muted">Your cart is empty</p>
                <p className="text-sm text-muted-light mt-1">Discover something beautiful.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-20 h-20 bg-border rounded-sm shrink-0 flex items-center justify-center">
                      <span className="font-serif text-lg text-muted-light">{item.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p
                            id={`product-name-${item.productId}`}
                            className="text-sm font-medium uppercase tracking-wide truncate"
                          >
                            {item.name}
                          </p>
                          <p className="text-xs text-muted mt-0.5">{item.variantLabel}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartItemId)}
                          className="p-1 hover:opacity-60 transition-opacity shrink-0"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4 text-muted-light" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-border transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-sm min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-border transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border px-6 py-5 shrink-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-light mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-foreground text-background py-3.5 text-sm font-medium uppercase tracking-wide hover:bg-foreground/90 transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 py-3 text-sm text-muted hover:text-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
