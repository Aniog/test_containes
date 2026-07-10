import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-line">
          <h2 className="font-serif text-lg tracking-wide text-brand-ink">Your Cart</h2>
          <button type="button" onClick={onClose} className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-10 w-10 text-brand-subtle mb-3" />
              <p className="text-sm text-brand-muted">Your cart is empty.</p>
            </div>
          )}

          <ul className="space-y-5">
            {items.map((item) => (
              <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover border border-brand-line" />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-ink">{item.name}</p>
                      <p className="text-xs text-brand-muted mt-0.5">{item.variant}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id, item.variant)} className="text-xs text-brand-subtle hover:text-brand-accent transition-colors">
                      Remove
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="h-7 w-7 inline-flex items-center justify-center rounded-full border border-brand-line text-brand-ink hover:border-brand-accent hover:text-brand-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs font-medium text-brand-ink w-4 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="h-7 w-7 inline-flex items-center justify-center rounded-full border border-brand-line text-brand-ink hover:border-brand-accent hover:text-brand-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-line px-5 py-4 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-muted">Subtotal</span>
              <span className="font-medium text-brand-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-brand-accent py-3 text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-accentHover transition-colors"
              onClick={() => alert('Checkout integration coming soon.')}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="w-full text-xs text-brand-subtle hover:text-brand-accent transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
