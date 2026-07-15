import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext.jsx';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50" onClick={() => setCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-surface z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-brand-line">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 hover:text-brand-accent transition-colors" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-brand-subtle mb-4" />
              <p className="text-brand-muted mb-6">Your cart is empty</p>
              <button onClick={() => setCartOpen(false)} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name truncate">{item.name}</h3>
                    <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-brand-muted hover:text-brand-ink transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-2 text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
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
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <Link to="/checkout" onClick={() => setCartOpen(false)} className="btn-primary w-full">
              Checkout
            </Link>
            <button onClick={() => setCartOpen(false)} className="w-full text-center text-xs text-brand-muted hover:text-brand-ink transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
