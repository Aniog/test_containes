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
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-brand-line px-6 py-5">
          <div className="flex items-center gap-2 text-brand-ink">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-serif text-xl tracking-widest uppercase">Your Bag</h2>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="text-brand-muted hover:text-brand-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-brand-subtle mb-4" />
              <p className="font-serif text-lg text-brand-ink">Your bag is empty</p>
              <p className="mt-2 text-sm text-brand-muted">
                Discover pieces you’ll love in our shop.
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-6 btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-brand-warm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="product-name text-xs text-brand-ink">{item.name}</p>
                      <p className="mt-1 text-xs text-brand-muted capitalize">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              { id: item.id, variant: item.variant },
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-line text-brand-ink hover:border-brand-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs text-brand-ink">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              { id: item.id, variant: item.variant },
                              item.quantity + 1
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-line text-brand-ink hover:border-brand-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-brand-ink">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem({ id: item.id, variant: item.variant })}
                          className="text-[11px] text-brand-muted underline underline-offset-2 hover:text-brand-ink transition-colors"
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
          <div className="border-t border-brand-line px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full btn-primary">Checkout</button>
            <button
              onClick={() => setCartOpen(false)}
              className="mt-3 w-full text-center text-xs uppercase tracking-widest text-brand-muted hover:text-brand-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
