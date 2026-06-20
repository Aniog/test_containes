import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-base-950/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-base-50 shadow-lift">
        <div className="flex items-center justify-between border-b border-base-200 px-6 py-4">
          <h2 className="font-serif text-xl font-medium text-base-900">Your Cart</h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="rounded-full p-2 text-base-500 transition-colors hover:bg-base-100 hover:text-base-900"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-10 w-10 text-base-300" />
              <p className="text-sm text-base-500">Your cart is empty</p>
              <button type="button" onClick={() => setCartOpen(false)} className="btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-base-100">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="product-name text-xs">{item.name}</h3>
                      <p className="mt-1 text-xs text-base-500 capitalize">{item.tone}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-base-200 text-base-600 transition-colors hover:border-base-900 hover:text-base-900"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-medium text-base-900">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-base-200 text-base-600 transition-colors hover:border-base-900 hover:text-base-900"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-base-900">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-base-400 transition-colors hover:text-base-900"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
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
          <div className="border-t border-base-200 px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-base-600">Subtotal</span>
              <span className="font-semibold text-base-900">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-base-500">Shipping and taxes calculated at checkout.</p>
            <button type="button" className="btn-primary mt-4 w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(false)}
              className="mt-3 w-full text-center text-xs font-medium uppercase tracking-widest text-base-500 transition-colors hover:text-base-900"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
