import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeDrawer} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-base shadow-lift flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeDrawer} className="p-2 text-muted hover:text-ink transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag className="w-10 h-10 text-muted" />
              <p className="text-muted text-sm">Your cart is empty.</p>
              <button onClick={closeDrawer} className="text-gold text-sm tracking-widest uppercase hover:text-gold-hover transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface border border-border flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-base tracking-wide truncate">{item.name}</h3>
                        <p className="text-xs text-muted mt-0.5 capitalize">{item.tone} · {item.category}</p>
                      </div>
                      <button onClick={() => removeItem(item.id, item.tone)} className="text-muted hover:text-danger transition-colors" aria-label="Remove">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-full">
                        <button onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)} className="p-2 text-muted hover:text-ink transition-colors" aria-label="Decrease quantity">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)} className="p-2 text-muted hover:text-ink transition-colors" aria-label="Increase quantity">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-gold hover:bg-gold-hover text-white py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors">
              Checkout
            </button>
            <button onClick={closeDrawer} className="w-full mt-3 text-center text-xs text-muted hover:text-ink transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
