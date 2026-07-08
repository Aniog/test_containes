import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-brand-line">
              <div className="flex items-center gap-2 text-brand-ink">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="font-serif text-xl">Your Cart</h2>
                <span className="text-sm text-brand-muted">({totalItems})</span>
              </div>
              <button onClick={onClose} className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <ShoppingBag className="h-10 w-10 text-brand-subtle" />
                  <p className="text-brand-muted">Your cart is empty.</p>
                  <Link to="/shop" onClick={onClose} className="btn-primary">Continue Shopping</Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-24 w-20 overflow-hidden rounded-lg bg-brand-warm">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-sm uppercase tracking-widest text-brand-ink">{item.name}</h3>
                        <p className="mt-1 text-xs text-brand-muted capitalize">{item.variant}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="rounded-full border border-brand-line p-1 text-brand-ink hover:border-brand-accent hover:text-brand-accent transition-colors" aria-label="Decrease quantity">
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium text-brand-ink w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="rounded-full border border-brand-line p-1 text-brand-ink hover:border-brand-accent hover:text-brand-accent transition-colors" aria-label="Increase quantity">
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                            <button onClick={() => removeItem(item.id, item.variant)} className="mt-1 text-xs text-brand-muted hover:text-brand-accent transition-colors">Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-brand-line p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-brand-muted">Subtotal</span>
                  <span className="text-lg font-semibold text-brand-ink">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-brand-muted mb-4">Shipping and taxes calculated at checkout.</p>
                <button className="btn-primary w-full">Checkout</button>
                <button onClick={onClose} className="mt-3 w-full text-center text-sm text-brand-muted hover:text-brand-accent transition-colors">Continue Shopping</button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
