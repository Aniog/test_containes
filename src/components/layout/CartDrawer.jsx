import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50" onClick={closeCart} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-velmora-cream z-50 flex flex-col shadow-2xl animate-[slideIn_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-gold/10">
          <h2 className="font-serif text-xl tracking-wide text-velmora-dark">
            Your Bag ({itemCount})
          </h2>
          <button onClick={closeCart} className="text-velmora-taupe hover:text-velmora-dark transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velmora-taupe">
            <ShoppingBag className="w-12 h-12 opacity-30" />
            <p className="font-serif text-lg">Your bag is empty</p>
            <button onClick={closeCart} className="text-sm underline hover:text-velmora-dark transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-3 border-b border-velmora-gold/5">
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-dark">
                          {item.name}
                        </h3>
                        <p className="text-xs text-velmora-taupe mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velmora-taupe/40 hover:text-velmora-rose transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-gold/20">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-sans text-sm text-velmora-dark">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-gold/10 px-6 py-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-sans font-medium text-velmora-dark">${subtotal}</span>
              </div>
              <p className="text-[11px] text-velmora-taupe/60">Shipping & taxes calculated at checkout</p>
              <button className="velmora-btn-primary w-full">Checkout</button>
              <button
                onClick={closeCart}
                className="block w-full text-center text-xs text-velmora-taupe underline hover:text-velmora-dark transition-colors py-2"
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
      `}</style>
    </>
  );
}
