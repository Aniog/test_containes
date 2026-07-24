import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col">
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-ink-secondary" />
            <h2 className="font-display text-xl font-semibold tracking-wide">Your Cart</h2>
            <span className="text-xs font-ui text-ink-muted">({cartCount})</span>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-ink-secondary transition-colors hover:bg-surface-alt hover:text-ink"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-ink-muted" />
              <p className="font-ui text-sm text-ink-secondary">Your cart is empty.</p>
              <Button variant="outline" onClick={closeCart} className="mt-2">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-border-soft bg-surface-alt">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold uppercase tracking-display">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs font-ui text-ink-secondary capitalize">
                        {item.variant}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-border px-2 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="rounded-full p-1 text-ink-secondary transition-colors hover:bg-surface-alt hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs font-ui font-semibold">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="rounded-full p-1 text-ink-secondary transition-colors hover:bg-surface-alt hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs font-ui text-ink-muted transition-colors hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="font-ui text-sm text-ink-secondary">Subtotal</span>
              <span className="font-display text-lg font-semibold">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-muted">Shipping and taxes calculated at checkout.</p>
            <Button className="mt-4 w-full" size="lg">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="mt-3 w-full"
              onClick={closeCart}
            >
              Continue Shopping
            </Button>
          </footer>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
