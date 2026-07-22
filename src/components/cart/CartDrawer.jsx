import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" onClick={closeCart} />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl animate-slide-in-right">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-brand-border px-6 py-4">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button onClick={closeCart} className="p-2 text-brand-muted hover:text-brand-charcoal" aria-label="Close cart">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <ShoppingBag className="h-12 w-12 text-brand-border" />
                <p className="font-serif text-lg text-brand-muted">Your cart is empty</p>
                <button onClick={closeCart} className="btn-outline">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-brand-sand">
                      <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-widest">{item.name}</h3>
                        <p className="mt-1 text-xs text-brand-muted capitalize">{item.variant} tone</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-border text-brand-charcoal hover:border-brand-charcoal"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-border text-brand-charcoal hover:border-brand-charcoal"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-xs text-brand-muted hover:text-red-600"
                            aria-label="Remove item"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-brand-border px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-widest text-brand-muted">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="mb-4 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
              <Link to="/checkout" onClick={closeCart} className="btn-primary w-full">
                Checkout
              </Link>
              <button onClick={closeCart} className="mt-3 w-full text-center text-xs uppercase tracking-widest text-brand-muted hover:text-brand-charcoal">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
