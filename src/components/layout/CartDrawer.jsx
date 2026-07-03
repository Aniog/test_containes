import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-brand-line px-6 py-4">
          <h2 className="font-serif text-xl text-brand-ink">Your Cart ({cartCount})</h2>
          <button onClick={closeCart} className="p-2 text-brand-muted hover:text-brand-ink" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-brand-subtle mb-3" />
              <p className="text-sm text-brand-muted">Your cart is empty.</p>
              <button onClick={closeCart} className="mt-4 btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-brand-ink">{item.name}</h3>
                      <p className="text-xs text-brand-muted capitalize">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-line text-brand-ink hover:bg-brand-warm"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-medium text-brand-ink w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-line text-brand-ink hover:bg-brand-warm"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-brand-ink">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-brand-muted hover:text-brand-accent"
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
          <div className="border-t border-brand-line px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="text-base font-semibold text-brand-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full btn-primary">Checkout</button>
            <button onClick={closeCart} className="mt-3 w-full text-center text-xs font-medium text-brand-muted hover:text-brand-ink">
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
