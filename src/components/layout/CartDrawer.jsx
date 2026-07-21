import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-brand-divider px-6 py-5">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="flex h-[calc(100%-140px)] flex-col overflow-hidden px-6">
          {items.length === 0 ? (
            <div className="flex flex-1 items-center justify-center text-center text-brand-muted">
              <div>
                <p className="font-serif text-lg">Your cart is empty</p>
                <p className="mt-2 text-sm">Discover pieces crafted to be treasured.</p>
              </div>
            </div>
          ) : (
            <ul className="flex-1 overflow-y-auto py-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-brand-divider py-4 last:border-b-0">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="product-name">{item.name}</p>
                      <p className="mt-1 text-xs text-brand-muted capitalize">{item.tone}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-divider"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-divider"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeItem(item.id, item.tone)} aria-label="Remove item" className="text-brand-muted hover:text-brand-ink">
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-divider px-6 py-5">
            <div className="flex items-center justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary mt-4 w-full" onClick={onClose}>
              Checkout
            </button>
            <button onClick={clearCart} className="mt-3 w-full text-center text-xs text-brand-muted underline">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
