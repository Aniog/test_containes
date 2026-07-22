import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, count } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-espresso/30 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="relative w-full max-w-md h-full bg-cream shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <h2 className="font-serif text-2xl text-espresso">Your Cart ({count})</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-taupe hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag size={48} className="text-stone mb-4" />
            <p className="font-serif text-xl text-espresso mb-2">Your cart is empty</p>
            <p className="text-sm text-taupe mb-6">Discover pieces crafted to be treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="px-8 py-3 bg-espresso text-white text-xs uppercase tracking-label hover:bg-accent transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-white border border-stone flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-label text-espresso">{item.name}</p>
                        <p className="text-xs text-taupe mt-1 capitalize">Tone: {item.tone}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.tone)}
                        className="text-taupe hover:text-accent transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-stone">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="p-2 hover:bg-stone/50 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm text-espresso">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="p-2 hover:bg-stone/50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone px-6 py-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-xl text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe mb-5">Shipping & taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full py-4 bg-accent text-white text-xs uppercase tracking-label font-medium hover:bg-accent-dark transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full mt-3 py-3 border border-espresso text-espresso text-xs uppercase tracking-label hover:bg-espresso hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
