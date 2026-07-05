import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setDrawer, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setDrawer(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-brand-divider px-5 py-4">
          <div className="flex items-center gap-2 text-brand-ink">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-serif text-lg">Your Cart</h2>
          </div>
          <button
            onClick={() => setDrawer(false)}
            className="p-2 text-brand-muted hover:text-brand-ink transition-colors"
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
                onClick={() => setDrawer(false)}
                className="text-sm font-medium text-brand-accent hover:text-brand-accentHover transition-colors"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 overflow-hidden rounded-md bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-brand-ink">{item.name}</p>
                        <p className="text-xs text-brand-muted capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-brand-subtle hover:text-brand-ink transition-colors"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-brand-divider">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-brand-muted hover:text-brand-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-brand-ink w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-brand-muted hover:text-brand-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-divider px-5 py-5">
            <div className="flex items-center justify-between text-sm text-brand-ink">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <div className="mt-4 space-y-2">
              <Link
                to="/checkout"
                onClick={() => setDrawer(false)}
                className="flex w-full items-center justify-center rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:bg-brand-accentHover transition-colors"
              >
                Checkout
              </Link>
              <button
                onClick={clearCart}
                className="flex w-full items-center justify-center rounded-full border border-brand-divider px-5 py-3 text-sm font-medium text-brand-ink hover:bg-brand-warm transition-colors"
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
