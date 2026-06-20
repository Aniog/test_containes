import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--color-surface)] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
          <h2 className="font-display text-lg font-medium text-[var(--color-ink)]">Your Cart</h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="p-2 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-10 w-10 text-[var(--color-ink-tertiary)] mb-3" />
              <p className="text-sm text-[var(--color-ink-secondary)]">Your cart is empty</p>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="mt-4 btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-medium text-[var(--color-ink)]">{item.name}</h3>
                          <p className="text-xs text-[var(--color-ink-tertiary)] mt-0.5 capitalize">{item.variant}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-[var(--color-ink-tertiary)] hover:text-[var(--color-error)]"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[var(--color-ink)] mt-1">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-[var(--color-border)]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-2 text-xs font-medium text-[var(--color-ink)]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[var(--color-ink)]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-border)] px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--color-ink-secondary)]">Subtotal</span>
              <span className="font-medium text-[var(--color-ink)]">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--color-ink-tertiary)]">Shipping and taxes calculated at checkout.</p>
            <Link
              to="/checkout"
              onClick={() => setCartOpen(false)}
              className="btn-primary w-full"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(false)}
              className="btn-ghost w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
