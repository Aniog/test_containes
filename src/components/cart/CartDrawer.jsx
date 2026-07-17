import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeDrawer} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-lifted flex flex-col">
        <header className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <span className="text-xs text-ink-secondary ml-1">({totalItems})</span>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 -mr-2 text-ink-secondary hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3">
              <ShoppingBag className="w-10 h-10 text-ink-tertiary" />
              <p className="text-ink-secondary text-sm">Your cart is empty.</p>
              <button onClick={closeDrawer} className="btn-outline mt-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-background rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name text-xs">{item.name}</p>
                        <p className="text-xs text-ink-secondary mt-1 capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-ink-tertiary hover:text-ink transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-ink-secondary hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-ink-secondary hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="px-6 py-5 border-t border-border bg-background/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-ink-secondary">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-ink-tertiary mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary w-full">Checkout</button>
          </footer>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
