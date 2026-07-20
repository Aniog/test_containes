import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-stone-200">
          <h2 className="font-serif text-xl tracking-wide text-brand-stone-800">Your Bag</h2>
          <button onClick={closeCart} className="text-brand-stone-600 hover:text-brand-stone-800 transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-stone-800 mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-stone-400">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-gold-pale flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-lg text-brand-gold">{item.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-brand-stone-800 truncate">{item.name}</h3>
                    <p className="text-xs text-brand-stone-400 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-brand-stone-800 mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-stone-200 text-brand-stone-600 hover:border-brand-stone-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-brand-stone-800 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-stone-200 text-brand-stone-600 hover:border-brand-stone-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-stone-400 hover:text-brand-stone-800 underline transition-colors"
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
          <div className="border-t border-brand-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-stone-600">Subtotal</span>
              <span className="text-lg font-serif text-brand-stone-800">${totalPrice}</span>
            </div>
            <p className="text-xs text-brand-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-white text-xs uppercase tracking-btn font-medium py-3.5 hover:bg-brand-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
