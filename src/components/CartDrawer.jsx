import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-[70] shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wide text-stone-900">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-stone-500 hover:text-stone-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
              <p className="font-serif text-xl text-stone-700 mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-stone-400 mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-primary inline-block"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream-200 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-gold-500 font-serif text-lg">V</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-stone-900 tracking-wide uppercase">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-stone-500 mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-stone-900 mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-stone-300 rounded flex items-center justify-center text-stone-600 hover:border-gold-500 hover:text-gold-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-stone-900 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-stone-300 rounded flex items-center justify-center text-stone-600 hover:border-gold-500 hover:text-gold-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto font-sans text-xs text-stone-400 hover:text-red-500 transition-colors underline"
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
          <div className="border-t border-stone-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-stone-600">Subtotal</span>
              <span className="font-serif text-lg text-stone-900">{formatPrice(totalPrice)}</span>
            </div>
            <p className="font-sans text-xs text-stone-400">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary text-center">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-sans text-sm text-stone-500 hover:text-gold-500 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
