import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bronze-950/30 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-bronze-200">
            <h2 className="font-serif text-xl tracking-wider text-bronze-900">
              Your Bag ({totalItems})
            </h2>
            <button onClick={closeCart} className="p-1 text-bronze-600 hover:text-bronze-900 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-bronze-400">
              <ShoppingBag className="w-12 h-12" />
              <p className="text-sm tracking-wider uppercase">Your bag is empty</p>
              <Link to="/shop" onClick={closeCart} className="btn-outline text-xs">
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-bronze-100 last:border-0">
                    <div className="w-20 h-20 bg-bronze-100 flex-shrink-0 flex items-center justify-center text-[10px] text-bronze-400 uppercase tracking-wider">
                      {item.variant}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-bronze-900">
                        {item.name}
                      </h3>
                      <p className="text-xs text-taupe-500 mt-0.5">{item.variant}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-bronze-300">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-bronze-600 hover:text-bronze-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs text-bronze-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-bronze-600 hover:text-bronze-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm text-bronze-900">${item.price * item.quantity}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="p-1 text-bronze-400 hover:text-bronze-700 transition-colors self-start"
                      aria-label="Remove item"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-bronze-200 px-6 py-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-taupe-500 tracking-wider uppercase">Subtotal</span>
                  <span className="text-bronze-900 font-medium">${subtotal}</span>
                </div>
                <p className="text-[11px] text-taupe-400 leading-relaxed">
                  Shipping & taxes calculated at checkout.
                </p>
                <button className="btn-accent w-full text-xs tracking-[0.2em]">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full text-xs tracking-wider uppercase text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
