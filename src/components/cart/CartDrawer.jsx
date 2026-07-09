import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 drawer-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
          <h2 className="font-serif text-xl tracking-wider text-warm-900">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-1 text-warm-600 hover:text-warm-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-warm-600 mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs font-sans font-medium uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-warm-100 rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-xs uppercase tracking-wider text-warm-400 text-center px-1">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-warm-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-500 mt-0.5">{item.tone}</p>
                    <p className="text-sm font-sans font-medium text-warm-900 mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-200 text-warm-600 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-warm-900 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-200 text-warm-600 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-500 hover:text-warm-900 underline transition-colors"
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
          <div className="border-t border-warm-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-warm-600">Subtotal</span>
              <span className="text-lg font-serif text-warm-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-500 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white font-sans text-xs font-semibold uppercase tracking-widest py-3.5 hover:bg-gold-hover transition-colors duration-300 btn-premium">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-xs font-sans font-medium uppercase tracking-widest text-warm-600 hover:text-warm-900 py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
