import React from 'react'
import { X, Plus, Minus, Gem } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button onClick={closeDrawer} className="text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-stone-500 text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-xs font-semibold uppercase tracking-wide-product text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-stone-200 flex-shrink-0 flex items-center justify-center">
                    <Gem className="w-6 h-6 text-stone-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wide-product truncate">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-1 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-stone-400 hover:text-charcoal transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-stone-500">Subtotal</span>
              <span className="text-lg font-serif">${subtotal}</span>
            </div>
            <p className="text-xs text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white py-3 text-xs font-semibold uppercase tracking-wide-product hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slideLeft 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
