import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <div
        className="absolute inset-0 bg-primary/30 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={closeCart}
      />
      <div
        ref={drawerRef}
        className="relative w-full max-w-[420px] bg-base h-full shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-primary" />
            <span className="font-serif text-lg font-medium">Your Cart</span>
            <span className="text-xs text-secondary font-sans">
              ({items.length} {items.length === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1 hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-hairline mb-4" />
              <p className="font-serif text-xl text-secondary mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-muted">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.tone}`}
                  className="flex gap-4 pb-5 border-b border-hairline last:border-0"
                >
                  <div className="w-20 h-20 bg-surface border border-hairline flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <span className="font-serif text-lg font-medium text-muted uppercase tracking-wider">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4
                          id={`cart-name-${item.id}`}
                          className="font-serif text-sm font-medium uppercase tracking-wider text-primary"
                        >
                          {item.name}
                        </h4>
                        <p className="text-xs text-secondary mt-0.5 capitalize">
                          {item.tone} tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-muted hover:text-accent transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-7 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-serif text-sm font-medium">
                        ${item.price * item.quantity}
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
          <div className="px-6 py-5 border-t border-hairline bg-surface">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-secondary">Subtotal</span>
              <span className="font-serif text-lg font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-accent hover:bg-accent-hover text-white text-xs font-medium uppercase tracking-wider py-3.5 transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 border border-primary text-primary text-xs font-medium uppercase tracking-wider py-3 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
