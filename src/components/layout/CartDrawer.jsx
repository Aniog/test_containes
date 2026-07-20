import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-brand-line">
          <h2 className="font-serif text-xl text-brand-ink">Shopping Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 text-brand-muted hover:text-brand-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-brand-subtle mb-4" />
              <p className="font-serif text-lg text-brand-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-muted mb-6">Discover our collection of demi-fine jewelry.</p>
              <Link to="/shop" onClick={closeCart} className="btn-primary">
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-widest text-brand-ink truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant}</p>
                    <p className="text-sm font-semibold text-brand-ink mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-accent transition-colors underline"
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

        {items.length > 0 && (
          <div className="border-t border-brand-line p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-brand-muted">Subtotal</span>
              <span className="font-semibold text-brand-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <button className="w-full btn-primary">Checkout</button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-sm text-brand-muted hover:text-brand-ink transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
