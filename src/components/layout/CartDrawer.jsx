import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-soft-lg animate-slideInRight flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-lg tracking-wide">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 text-ink-secondary hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-10 w-10 text-ink-muted" />
              <p className="text-sm text-ink-secondary">Your cart is empty.</p>
              <button onClick={() => setCartOpen(false)} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-background">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="product-name text-sm">{item.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-muted">{item.tone}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-ink-secondary hover:border-ink hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-ink-secondary hover:border-ink hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-xs text-ink-muted hover:text-ink transition-colors"
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
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-secondary">Subtotal</span>
              <span className="font-semibold">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-muted">Shipping and taxes calculated at checkout.</p>
            <button className="btn-accent mt-4 w-full">Checkout</button>
            <button
              onClick={clearCart}
              className="mt-3 w-full text-center text-xs text-ink-muted hover:text-ink transition-colors"
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
