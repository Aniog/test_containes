import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-bg shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-brand-line px-6 py-4">
              <div className="flex items-center gap-2 text-brand-ink">
                <ShoppingBag className="h-5 w-5" />
                <span className="font-serif text-lg tracking-wide">Your Bag</span>
              </div>
              <button onClick={onClose} className="p-2 text-brand-ink hover:text-brand-accent" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-10 w-10 text-brand-subtle mb-4" />
                  <p className="font-serif text-xl text-brand-ink">Your bag is empty</p>
                  <p className="mt-2 text-sm text-brand-muted">Discover pieces crafted to be treasured.</p>
                  <button onClick={onClose} className="btn-primary mt-6">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                      <div className="h-24 w-20 rounded-lg bg-brand-warm flex items-center justify-center text-xs text-brand-muted">
                        IMG
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-serif text-base text-brand-ink">{item.name}</p>
                            <p className="text-xs uppercase tracking-widest text-brand-muted mt-1">{item.tone}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.tone)}
                            className="text-xs text-brand-muted hover:text-brand-accent"
                            aria-label="Remove item"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.tone, Math.max(1, item.quantity - 1))}
                              className="h-8 w-8 rounded-full border border-brand-line flex items-center justify-center text-brand-ink hover:border-brand-accent hover:text-brand-accent"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium text-brand-ink w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                              className="h-8 w-8 rounded-full border border-brand-line flex items-center justify-center text-brand-ink hover:border-brand-accent hover:text-brand-accent"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-brand-line px-6 py-6">
                <div className="flex items-center justify-between text-sm text-brand-ink">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
                <button className="btn-primary w-full mt-4">Checkout</button>
                <button onClick={clearCart} className="mt-3 w-full text-center text-xs text-brand-muted hover:text-brand-accent">
                  Clear bag
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
