import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lift animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-brand-line">
          <h2 className="font-serif text-xl tracking-wide text-brand-ink">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 text-brand-muted hover:text-brand-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-brand-subtle mb-3" />
              <p className="text-brand-muted text-sm">Your cart is empty.</p>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-4 text-sm tracking-widest uppercase text-brand-accent hover:text-brand-accentHover transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-brand-warm rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs tracking-widest uppercase text-brand-ink font-medium">{item.name}</p>
                        <p className="text-xs text-brand-subtle mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-brand-subtle hover:text-brand-ink transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-brand-line rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-brand-muted hover:text-brand-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs text-brand-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-brand-muted hover:text-brand-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-brand-line bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="text-sm font-medium text-brand-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-subtle mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-brand-accent hover:bg-brand-accentHover text-white text-sm tracking-widest uppercase py-3.5 rounded-sm transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full mt-2 text-xs tracking-widest uppercase text-brand-muted hover:text-brand-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
