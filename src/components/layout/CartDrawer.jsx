import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-soft-lg">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-serif text-lg font-medium">Your Cart</h2>
            <button
              type="button"
              onClick={closeCart}
              className="rounded-full p-2 text-ink-secondary transition-colors hover:text-ink"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                <ShoppingBag className="h-10 w-10 text-ink-muted" />
                <p className="text-sm text-ink-secondary">Your cart is empty.</p>
                <button type="button" onClick={closeCart} className="btn-outline mt-2">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-surface-warm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-ink">{item.name}</h3>
                        <p className="text-xs text-ink-secondary">{item.tone}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="p-1 text-ink-secondary hover:text-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-xs font-medium">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="p-1 text-ink-secondary hover:text-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.tone)}
                            className="text-xs text-ink-secondary underline underline-offset-4 hover:text-ink"
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
            <div className="border-t border-border px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-secondary">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-xs text-ink-muted">Shipping and taxes calculated at checkout.</p>
              <button type="button" className="btn-primary mt-4 w-full">
                Checkout
              </button>
              <button type="button" onClick={closeCart} className="btn-outline mt-3 w-full">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
