import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeDrawer} />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-brand-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-brand-divider px-5 py-4">
              <h2 className="font-serif text-lg font-semibold tracking-wide text-brand-ink">Your Cart</h2>
              <button
                type="button"
                onClick={closeDrawer}
                className="rounded-full p-2 text-brand-ink hover:text-brand-accent"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <ShoppingBag className="h-10 w-10 text-brand-subtle" />
                  <p className="text-sm text-brand-muted">Your cart is empty.</p>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-20 w-16 overflow-hidden rounded-md bg-brand-warm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="text-sm font-medium text-brand-ink">{item.name}</p>
                          <p className="text-xs text-brand-muted">{item.variant}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-divider text-brand-ink hover:border-brand-accent hover:text-brand-accent"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs font-medium text-brand-ink">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-divider text-brand-ink hover:border-brand-accent hover:text-brand-accent"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id, item.variant)}
                              className="text-xs text-brand-subtle hover:text-brand-accent"
                              aria-label="Remove item"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-brand-divider px-5 py-5">
                <div className="flex items-center justify-between text-sm font-medium text-brand-ink">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-full bg-brand-accent py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-brand-accentHover"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-2 w-full text-center text-xs uppercase tracking-widest text-brand-subtle hover:text-brand-accent"
                >
                  Clear cart
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
