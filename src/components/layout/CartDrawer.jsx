import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-deep-950/40 backdrop-blur-sm" onClick={closeCart} />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
            <h2 className="font-serif text-xl tracking-wide flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <button onClick={closeCart} className="p-1 text-deep-500 hover:text-deep-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-deep-400 px-6">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
              <p className="text-sm">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 btn-outline text-xs"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-3 border-b border-sand/70">
                    {/* Placeholder image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-sand/50 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-warm-200 flex items-center justify-center text-warm-600 text-[10px]">
                        IMG
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs uppercase tracking-wider font-medium text-deep-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-deep-400 mt-0.5">{item.variant}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-sand rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-accent transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-accent transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-deep-900 tabular-nums">
                            ${(item.price * item.quantity).toFixed(0)}
                          </span>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-deep-300 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-sand px-6 py-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-deep-500">Subtotal</span>
                  <span className="font-semibold text-deep-900 tabular-nums">${subtotal.toFixed(0)}</span>
                </div>
                <p className="text-[11px] text-deep-400">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full text-xs tracking-widest">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs text-deep-500 hover:text-deep-900 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
