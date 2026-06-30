import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setCartOpen, cartTotal, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-cream shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
          <h2 className="font-serif text-lg font-semibold tracking-widest text-brand-ink">YOUR CART</h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingBag className="h-12 w-12 text-brand-muted" />
            <p className="font-serif text-lg text-brand-charcoal">Your cart is empty</p>
            <p className="text-sm text-brand-muted">Discover our collection and find something you love.</p>
            <Link
              to="/shop"
              onClick={() => setCartOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-gold-dark transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.material}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 rounded-lg bg-brand-sand overflow-hidden">
                    <img
                      src={`https://placehold.co/160x120/F3EDE4/C9A96E?text=${encodeURIComponent(item.name)}`}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-brand-ink truncate">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-brand-muted capitalize">{item.material}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.material)}
                        className="p-1 text-brand-muted hover:text-brand-ink transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-brand-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                          className="p-1.5 text-brand-charcoal hover:text-brand-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-xs font-medium text-brand-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                          className="p-1.5 text-brand-charcoal hover:text-brand-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-brand-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-muted">Subtotal</span>
                <span className="font-semibold text-brand-ink">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-brand-muted">Shipping & taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full rounded-full bg-brand-gold py-3.5 text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-gold-dark transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="w-full rounded-full border border-brand-border py-3 text-sm font-medium tracking-widest uppercase text-brand-charcoal hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
