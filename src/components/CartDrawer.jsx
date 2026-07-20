import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/40" onClick={() => toggleCart(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-cream-50 shadow-2xl transition-transform duration-300 flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 sm:px-7 h-16 sm:h-20 border-b border-cream-200">
            <h2 className="font-serif text-lg sm:text-xl text-ink-900">Your Cart</h2>
            <button
              onClick={() => toggleCart(false)}
              className="p-2 text-ink-700 hover:text-ink-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <ShoppingBag className="w-10 h-10 text-cream-300" strokeWidth={1.5} />
                <p className="text-ink-500 text-sm">Your cart is empty.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-md bg-cream-200 flex-shrink-0 overflow-hidden">
                      <div className="h-full w-full bg-cream-300 flex items-center justify-center">
                        <span className="text-[10px] tracking-widest uppercase text-ink-400 text-center px-2">
                          {item.name.slice(0, 12)}…
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-sm sm:text-base text-ink-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-ink-500 mt-0.5 capitalize">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="p-1 text-ink-400 hover:text-ink-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3 border border-cream-200 rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 text-ink-600 hover:text-ink-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="text-sm font-medium text-ink-900 w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 text-ink-600 hover:text-ink-900"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-ink-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-cream-200 px-5 sm:px-7 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-ink-600">Subtotal</span>
                <span className="font-serif text-lg text-ink-900">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-ink-500">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-gold-600 hover:bg-gold-700 text-white font-medium text-sm tracking-widest uppercase py-3.5 rounded-sm transition-colors">
                Checkout
              </button>
              <button
                onClick={() => toggleCart(false)}
                className="w-full text-center text-sm text-ink-600 hover:text-ink-900 underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
