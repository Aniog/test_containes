import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="eyebrow">Your Cart</p>
          <button type="button" onClick={onClose} className="p-2 text-ink hover:text-accent transition-colors" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-ink-tertiary" />
              <p className="text-sm text-ink-secondary">Your cart is empty.</p>
              <button type="button" onClick={onClose} className="btn-outline mt-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm border border-border bg-background">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="product-name">{item.name}</p>
                      <p className="mt-1 text-xs text-ink-secondary">{item.tone}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center border border-border-strong text-ink hover:border-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center border border-border-strong text-ink hover:border-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        <button
                          type="button"
                          onClick={() => removeItem(item)}
                          className="text-xs text-ink-secondary underline underline-offset-4 hover:text-ink transition-colors"
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
          <div className="border-t border-border px-5 py-5">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-secondary">Shipping and taxes calculated at checkout.</p>
            <button type="button" className="btn-primary mt-4 w-full">
              Checkout
            </button>
            <button type="button" onClick={clearCart} className="mt-3 w-full text-center text-xs text-ink-secondary underline underline-offset-4 hover:text-ink transition-colors">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
