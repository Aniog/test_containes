import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md border-l border-brand-border bg-brand-bg shadow-soft">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
            <h2 className="font-display text-lg tracking-widest text-brand-text">Your Cart</h2>
            <button onClick={closeCart} className="text-brand-muted hover:text-brand-text" aria-label="Close cart">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="mb-4 h-10 w-10 text-brand-muted" />
                <p className="text-sm text-brand-muted">Your cart is empty.</p>
                <button onClick={closeCart} className="mt-4 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-sm bg-brand-surfaceAlt">
                      <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-brand-text">{item.name}</p>
                          <p className="text-xs text-brand-muted capitalize">{item.variant}</p>
                        </div>
                        <button onClick={() => removeItem(item.id, item.variant)} className="text-brand-muted hover:text-brand-text" aria-label="Remove item">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-3 rounded-full border border-brand-border">
                          <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="px-2 py-1 text-brand-textSoft hover:text-brand-text" aria-label="Decrease quantity">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-xs text-brand-text">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="px-2 py-1 text-brand-textSoft hover:text-brand-text" aria-label="Increase quantity">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-sm text-brand-text">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-brand-border px-5 py-5">
              <div className="flex items-center justify-between text-sm text-brand-text">
                <span className="uppercase tracking-widest">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-brand-bg transition-colors hover:bg-brand-accentHover"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
