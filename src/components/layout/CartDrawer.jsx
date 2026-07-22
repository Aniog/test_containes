import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-bg shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <h2 className="font-serif text-xl text-brand-ink">Your Bag</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 text-brand-ink hover:text-brand-gold transition-colors" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-brand-warm mb-4" />
              <p className="text-brand-muted text-sm">Your bag is empty</p>
              <button onClick={() => setCartOpen(false)} className="mt-4 btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-brand-border">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="product-name text-sm">{item.name}</p>
                        <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant}</p>
                      </div>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-brand-muted hover:text-brand-ink transition-colors" aria-label="Remove item">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1 rounded-full border border-brand-border hover:border-brand-ink transition-colors" aria-label="Decrease quantity">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1 rounded-full border border-brand-border hover:border-brand-ink transition-colors" aria-label="Increase quantity">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-border p-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-muted">Subtotal</span>
              <span className="font-medium text-brand-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <button className="w-full btn-primary">Checkout</button>
            <button onClick={() => setCartOpen(false)} className="w-full btn-outline">Continue Shopping</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
