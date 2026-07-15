import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-bg)] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading-uppercase text-sm">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-[var(--velmora-text)]" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-[var(--velmora-text-muted)] mb-4" />
              <p className="velmora-heading text-xl text-[var(--velmora-text-muted)] mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-[var(--velmora-text-muted)] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="velmora-btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-[var(--velmora-border)]">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 px-6 py-5">
                  <div className="w-20 h-24 flex-shrink-0 bg-[var(--velmora-border)] rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-heading-uppercase text-xs tracking-wider text-[var(--velmora-text)] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-0.5">
                      {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[var(--velmora-border)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-[var(--velmora-border)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-[var(--velmora-border)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-[var(--velmora-text-muted)] underline hover:text-[var(--velmora-text)] transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[var(--velmora-border)] px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--velmora-text-muted)]">Subtotal</span>
              <span className="velmora-heading text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="velmora-btn-dark w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-xs text-[var(--velmora-text-muted)] underline hover:text-[var(--velmora-text)] transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
