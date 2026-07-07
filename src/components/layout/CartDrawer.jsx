import React, { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (drawerOpen) {
      setVisible(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true))
      })
    } else {
      setAnimating(false)
      const timer = setTimeout(() => setVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [drawerOpen])

  if (!visible) return null

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300 ${animating ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeDrawer}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          animating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-charcoal" />
            <h2 className="font-serif text-xl font-semibold text-charcoal">Your Bag</h2>
            {items.length > 0 && (
              <span className="font-sans text-xs text-stone-400">({items.length})</span>
            )}
          </div>
          <button onClick={closeDrawer} className="text-charcoal/60 hover:text-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-200 mb-4" />
              <p className="font-sans text-stone-500 mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="inline-block bg-gold hover:bg-gold-hover text-cream font-sans text-xs uppercase tracking-btn font-medium px-8 py-3 transition-colors duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-stone-100 flex-shrink-0 rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gold-light/30 to-gold/10 flex items-center justify-center">
                      <span className="text-[10px] font-sans text-stone-400 uppercase">{item.tone}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium uppercase tracking-product text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs font-sans text-stone-500 mt-0.5 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-sans font-medium text-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center text-stone-500 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-charcoal min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center text-stone-500 hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs font-sans text-stone-400 hover:text-charcoal transition-colors underline"
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
              <span className="font-sans text-sm text-stone-500">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs font-sans text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-hover text-cream font-sans text-xs uppercase tracking-btn font-medium py-3.5 transition-colors duration-200">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
