import React from 'react';
import { createPortal } from 'react-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-slideIn flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <ShoppingBag className="h-4 w-4" />
            <span>Bag</span>
            <span className="text-ink-muted">({totalItems})</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-black/5"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-ink-muted" />
              <p className="text-sm text-ink-secondary">Your bag is empty.</p>
              <button type="button" onClick={onClose} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          )}

          <ul className="space-y-6">
            {items.map((item) => (
              <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="h-24 w-20 overflow-hidden rounded-xl border border-border-soft bg-background">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-ultra text-ink">{item.name}</p>
                    <p className="mt-1 text-xs text-ink-secondary capitalize">{item.variant}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-border">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="inline-flex h-8 w-8 items-center justify-center text-ink hover:bg-black/5"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="mx-3 text-xs font-medium text-ink">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="inline-flex h-8 w-8 items-center justify-center text-ink hover:bg-black/5"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-ink">${(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-ink-muted underline underline-offset-4 hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-5 py-5">
            <div className="flex items-center justify-between text-sm font-semibold text-ink">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-secondary">Shipping and taxes calculated at checkout.</p>
            <button type="button" className="btn-primary mt-4 w-full">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </div>,
    document.body
  );
};

export default CartDrawer;
