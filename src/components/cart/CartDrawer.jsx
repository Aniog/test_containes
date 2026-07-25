import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <h2 className="font-serif text-xl tracking-widest text-brand-text">Your Cart ({cartCount})</h2>
          <button onClick={closeCart} className="p-2 text-brand-muted hover:text-brand-text transition-colors" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-brand-subtle mb-4" />
              <p className="text-brand-muted mb-4">Your cart is empty</p>
              <button onClick={closeCart} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-base text-brand-text">{item.name}</h3>
                        <p className="text-xs uppercase tracking-widest text-brand-subtle mt-0.5">{item.variant}</p>
                      </div>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-brand-subtle hover:text-brand-text transition-colors" aria-label="Remove item">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1 text-brand-muted hover:text-brand-text transition-colors" aria-label="Decrease quantity">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-brand-text w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1 text-brand-muted hover:text-brand-text transition-colors" aria-label="Increase quantity">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-brand-text">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-border p-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-muted">Subtotal</span>
              <span className="font-medium text-brand-text">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-subtle">Shipping and taxes calculated at checkout.</p>
            <button className="w-full btn-primary">Checkout</button>
            <button onClick={closeCart} className="w-full text-center text-xs uppercase tracking-widest text-brand-muted hover:text-brand-gold transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
