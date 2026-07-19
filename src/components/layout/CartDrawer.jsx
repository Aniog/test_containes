import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeDrawer} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-brand-divider px-6 py-5">
              <h2 className="font-serif text-xl tracking-wide text-brand-ink">Your Cart</h2>
              <button onClick={closeDrawer} className="p-2 text-brand-muted hover:text-brand-ink" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-10 w-10 text-brand-subtle mb-4" />
                  <p className="text-sm text-brand-muted">Your cart is empty.</p>
                  <button onClick={closeDrawer} className="mt-4 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-brand-warm">
                        <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-brand-ink">{item.name}</p>
                            <p className="text-xs text-brand-muted capitalize">{item.variant}</p>
                          </div>
                          <button onClick={() => removeItem(item.id, item.variant)} className="text-brand-subtle hover:text-brand-ink" aria-label="Remove item">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-full border border-brand-divider">
                            <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1.5 text-brand-muted hover:text-brand-ink" aria-label="Decrease quantity">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-xs text-brand-ink w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1.5 text-brand-muted hover:text-brand-ink" aria-label="Increase quantity">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-brand-divider px-6 py-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-brand-muted">Subtotal</span>
                  <span className="text-sm font-medium text-brand-ink">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-brand-muted mb-4">Shipping and taxes calculated at checkout.</p>
                <Link to="/checkout" onClick={closeDrawer} className="flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-white hover:bg-brand-accentHover transition-colors">
                  Checkout
                </Link>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
