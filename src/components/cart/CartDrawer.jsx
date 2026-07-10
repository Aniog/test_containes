import React from 'react'
import { X, Plus, Minus, Gem } from 'lucide-react'
import { useCart } from '@/data/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-base/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-lg tracking-wide text-base">
            Your Bag ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-1 text-stone-500 hover:text-base transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-stone-500 font-sans text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-gold text-xs tracking-ultra-wide uppercase font-sans font-semibold hover:text-gold-hover transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-stone-100 overflow-hidden flex items-center justify-center">
                    <Gem className="w-6 h-6 text-gold/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide uppercase text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-base mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="p-1 text-stone-400 hover:text-base transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-sans text-base w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="p-1 text-stone-400 hover:text-base transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-stone-400 hover:text-base underline transition-colors font-sans"
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
              <span className="text-sm font-sans text-stone-600">Subtotal</span>
              <span className="text-lg font-sans font-semibold text-base">${totalPrice}</span>
            </div>
            <p className="text-xs text-stone-400 font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-hover text-white text-xs tracking-ultra-wide uppercase font-sans font-semibold py-4 transition-all duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-xs tracking-widest uppercase font-sans text-stone-500 hover:text-base py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
