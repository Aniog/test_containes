import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, cartTotal, removeItem, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-lift flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-border/60">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 -mr-2 text-ink hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-ink-faint mb-4" />
              <p className="text-sm text-ink-muted mb-6">Your cart is empty.</p>
              <button onClick={() => setCartOpen(false)} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-surface-muted overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted">{item.category}</p>
                        <h3 className="font-serif text-base mt-0.5 truncate">{item.name}</h3>
                        <p className="text-xs text-ink-muted mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-ink-faint hover:text-ink transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-base-border/60 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-ink hover:text-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-ink hover:text-accent transition-colors"
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
          <div className="px-6 py-6 border-t border-base-border/60">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-ink-muted">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-ink-faint mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary w-full mb-3">Checkout</button>
            <button onClick={clearCart} className="text-xs text-ink-muted hover:text-ink transition-colors w-full text-center">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
