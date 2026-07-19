import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);
  const location = useLocation();

  // Close cart on route change
  useEffect(() => {
    if (isOpen) closeCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <h2 className="font-serif text-xl tracking-wide">YOUR CART</h2>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1 hover:opacity-60 transition-opacity"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-warm-gray text-sm">Your cart is empty.</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-xs uppercase tracking-widest underline underline-offset-4 hover:text-bronze transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-cream flex-shrink-0 flex items-center justify-center text-xs text-warm-gray">
                      IMG
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm uppercase tracking-widest-xl truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-warm-gray mt-0.5">
                        {item.variant} Tone
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-divider">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="w-7 h-7 flex items-center justify-center hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="w-7 h-7 flex items-center justify-center hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-[11px] text-warm-gray underline underline-offset-2 hover:text-espresso mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-divider bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-widest">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-[11px] text-warm-gray mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full bg-bronze text-white text-xs uppercase tracking-widest py-4 hover:bg-bronze-dark transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 border border-espresso text-espresso text-xs uppercase tracking-widest py-3.5 hover:bg-espresso hover:text-white transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
