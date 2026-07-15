import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-2xl">Your Cart ({totalItems})</h2>
          <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-stone-400 px-6">
            <ShoppingBag className="w-12 h-12 mb-4 stroke-1" />
            <p className="font-serif text-lg">Your cart is empty</p>
            <p className="text-sm mt-1">Discover something beautiful.</p>
            <button
              onClick={closeCart}
              className="mt-6 px-8 py-3 bg-velmora-dark text-white text-sm uppercase tracking-widest hover:bg-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-stone-100 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={`https://image.pollinations.ai/prompt/${encodeURIComponent(item.imageQuery)}?width=200&height=200&nologo=true`}
                      alt={item.shortName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest truncate">{item.name}</p>
                        <p className="text-xs text-stone-500 mt-0.5">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-stone-400 hover:text-velmora-dark transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-stone-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-stone-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-stone-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone-400">Shipping and taxes calculated at checkout.</p>
              <button className="w-full py-3.5 bg-velmora-gold text-white text-sm uppercase tracking-widest hover:bg-velmora-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 border border-velmora-dark text-velmora-dark text-sm uppercase tracking-widest hover:bg-velmora-dark hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
