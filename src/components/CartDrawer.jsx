import React, { useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] shadow-2xl transform transition-transform duration-300 ease-premium ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
            <h2 className="font-serif text-xl uppercase tracking-widest">Your Cart</h2>
            <button onClick={closeCart} className="p-2 -mr-2 text-base hover:text-accent transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-muted">
                <p className="text-sm uppercase tracking-widest">Your cart is empty</p>
                <p className="text-xs mt-2">Add something beautiful.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-subtle flex-shrink-0 overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-sm uppercase tracking-widest truncate">{item.name}</p>
                          <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted hover:text-base transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-hairline">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-subtle transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                          <span className="px-2 text-sm font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-subtle transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-hairline bg-background">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-widest text-muted">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-accent text-white uppercase text-xs tracking-widest font-medium py-4 hover:bg-accent-hover transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}