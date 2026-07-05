import React, { useEffect, useState } from 'react'
import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, itemCount, total } = useCart()
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (drawerOpen) {
      setVisible(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true))
      })
    } else if (visible) {
      setAnimating(false)
      const timer = setTimeout(() => setVisible(false), 400)
      return () => clearTimeout(timer)
    }
  }, [drawerOpen])

  if (!visible) return null

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-400 ${animating ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeDrawer}
      />
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-warm-white z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${animating ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl text-stone-800">Shopping Bag ({itemCount})</h2>
          <button
            onClick={closeDrawer}
            className="p-1 text-stone-500 hover:text-stone-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-400">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <p className="font-serif text-lg text-stone-600">Your bag is empty</p>
              <p className="text-sm mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-stone-100 flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}-${item.variant}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-stone-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-stone-800 mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-stone-800 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-stone-400 hover:text-stone-700 underline transition-colors"
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
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-stone-600 uppercase tracking-nav">Subtotal</span>
              <span className="font-serif text-lg text-stone-800">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-warm-white py-3.5 text-xs uppercase tracking-btn font-semibold hover:bg-gold-light transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
