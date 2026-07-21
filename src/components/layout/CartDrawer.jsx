import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={closeDrawer} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide">
            <ShoppingBag className="h-4 w-4" />
            Cart ({totalItems})
          </div>
          <button onClick={closeDrawer} className="p-2 text-muted hover:text-ink" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <p className="text-muted text-sm">Your cart is empty.</p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-20 w-16 overflow-hidden rounded-md bg-background">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="product-name text-sm">{item.name}</p>
                    <p className="text-xs text-muted mt-1">{item.variant}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-border">
                        <button
                          onClick={() => updateQuantity({ id: item.id, variant: item.variant, quantity: item.quantity - 1 })}
                          className="p-1 text-muted hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity({ id: item.id, variant: item.variant, quantity: item.quantity + 1 })}
                          className="p-1 text-muted hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem({ id: item.id, variant: item.variant })}
                        className="text-xs text-muted underline underline-offset-4 hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-6">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <p className="mt-1 text-xs text-muted">Shipping and taxes calculated at checkout.</p>
          <Link
            to="/checkout"
            onClick={closeDrawer}
            className="btn-primary mt-4 w-full"
          >
            Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
