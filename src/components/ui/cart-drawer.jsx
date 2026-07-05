import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/button';

const CartDrawer = ({ open, onClose }) => {
  const { cart, removeItem, updateQuantity, subtotal, count } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-brand-line px-6 py-4">
          <div className="flex items-center gap-2 text-brand-ink">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-serif text-xl">Your Cart</h2>
            <span className="text-sm text-brand-muted">({count})</span>
          </div>
          <button onClick={onClose} className="p-2 text-brand-muted hover:text-brand-ink">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <p className="text-brand-muted text-sm">Your cart is empty.</p>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 overflow-hidden rounded-md bg-brand-warm">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm uppercase tracking-wide text-brand-ink">{item.name}</h3>
                    <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="h-7 w-7 rounded-full border border-brand-line flex items-center justify-center text-brand-ink hover:bg-brand-warm">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="h-7 w-7 rounded-full border border-brand-line flex items-center justify-center text-brand-ink hover:bg-brand-warm">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-xs text-brand-muted hover:text-brand-ink underline">Remove</button>
                    </div>
                    <p className="mt-2 text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-brand-line px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-ink">${subtotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">Checkout</Button>
            <p className="mt-2 text-center text-xs text-brand-muted">Shipping & taxes calculated at checkout.</p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
