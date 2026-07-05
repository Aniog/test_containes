import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div
        className="absolute inset-0 bg-charcoal-950/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="relative w-full max-w-md bg-cream-50 h-full shadow-2xl flex flex-col animate-slideIn">
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart ({totalItems})</h2>
          <button onClick={closeCart} className="p-2 hover:bg-warm-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-warm-400 mb-4" strokeWidth={1} />
            <p className="font-serif text-xl text-warm-600 mb-2">Your cart is empty</p>
            <p className="text-sm text-warm-500">Discover pieces crafted to be treasured.</p>
            <button
              onClick={closeCart}
              className="mt-6 px-8 py-3 bg-charcoal-900 text-cream-50 text-sm tracking-widest uppercase hover:bg-charcoal-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-warm-100 flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-warm-400" strokeWidth={1} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base uppercase tracking-wider truncate">{item.name}</h3>
                    {item.variant && (
                      <p className="text-xs text-warm-500 mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-sm mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-warm-300 flex items-center justify-center hover:bg-warm-100 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-warm-300 flex items-center justify-center hover:bg-warm-100 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-warm-500 underline hover:text-charcoal-900"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-warm-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-warm-600">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warm-500">Shipping and taxes calculated at checkout.</p>
              <button className="w-full py-3.5 bg-charcoal-900 text-cream-50 text-sm tracking-widest uppercase hover:bg-charcoal-800 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 border border-charcoal-900 text-charcoal-900 text-sm tracking-widest uppercase hover:bg-warm-100 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}
