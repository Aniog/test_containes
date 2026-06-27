import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, cartCount, cartTotal, setCartOpen, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide">Shopping Bag</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-taupe-light mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-muted mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setCartOpen(false)}
                className="px-6 py-3 bg-charcoal text-white text-xs tracking-[0.2em] uppercase hover:bg-charcoal-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-cream-dark rounded-sm flex-shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <div className="w-full h-full bg-taupe-light/30 rounded-sm" />
                    ) : (
                      <span className="text-[10px] text-muted tracking-wider uppercase">Image</span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-sm tracking-wide truncate">{item.name}</h3>
                        <p className="text-xs text-muted mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted hover:text-charcoal transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-charcoal hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-charcoal hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted">Shipping and taxes calculated at checkout</p>
            <button className="w-full py-4 bg-charcoal text-white text-xs tracking-[0.2em] uppercase hover:bg-charcoal-light transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full py-3 border border-charcoal text-charcoal text-xs tracking-[0.2em] uppercase hover:bg-charcoal hover:text-white transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
