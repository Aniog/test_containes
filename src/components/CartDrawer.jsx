import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200/60">
          <h2 className="font-serif text-lg tracking-wider flex items-center gap-2.5">
            <ShoppingBag className="w-4.5 h-4.5 text-warm-500" strokeWidth={1.5} />
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={onClose}
            className="text-stone hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
            <ShoppingBag className="w-12 h-12 text-warm-200" strokeWidth={1} />
            <p className="text-stone text-sm">Your bag is empty.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {cart.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-warm-100 overflow-hidden">
                    <div className="w-full h-full bg-warm-200/40 flex items-center justify-center text-[10px] text-stone uppercase tracking-wider">
                      {item.name.slice(0, 3)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs tracking-widest uppercase font-medium text-charcoal">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-stone mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone/50 hover:text-charcoal transition-colors ml-2"
                      >
                        <X className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-warm-200">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-warm-200/60 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-stone">Subtotal</span>
                <span className="font-semibold text-charcoal">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-[11px] text-stone leading-relaxed">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
