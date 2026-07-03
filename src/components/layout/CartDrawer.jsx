import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { isOpen, closeDrawer, items, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeDrawer} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-xl tracking-[0.18em] text-text">Your Cart</h2>
          <button type="button" onClick={closeDrawer} className="p-2 text-text hover:text-accent transition-colors" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-text-secondary mb-4" />
              <p className="text-sm text-text-secondary">Your cart is empty.</p>
              <button type="button" onClick={closeDrawer} className="btn-outline mt-6">Continue Shopping</button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border-soft bg-surface-warm">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name text-sm">{item.name}</p>
                        <p className="mt-1 text-xs text-text-secondary capitalize">{item.tone}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id, item.tone)} className="text-text-secondary hover:text-accent transition-colors" aria-label="Remove item">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-border">
                        <button type="button" onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)} className="px-3 py-1 text-text hover:text-accent transition-colors" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-sm text-text">{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)} className="px-3 py-1 text-text hover:text-accent transition-colors" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-text">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">Subtotal</span>
              <span className="text-base font-medium text-text">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-secondary mb-4">Shipping and taxes calculated at checkout.</p>
            <button type="button" className="btn-primary w-full">Checkout</button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
