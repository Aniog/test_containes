import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-charcoal-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-charcoal-200">
          <h2 className="font-serif text-xl tracking-wide">Your Bag ({items.length})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-charcoal-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal-700" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-600 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-400 font-sans font-light mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 bg-charcoal-900 text-white text-xs tracking-widest uppercase hover:bg-charcoal-800 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-charcoal-100">
              {items.map((item) => (
                <div key={item.id} className="p-6 flex gap-4">
                  <div className="w-20 h-24 bg-charcoal-100 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide text-charcoal-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-sans mt-2 text-charcoal-700">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-300 hover:border-charcoal-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center font-sans">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-300 hover:border-charcoal-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-xs text-charcoal-400 hover:text-red-500 transition-colors font-sans"
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
          <div className="border-t border-charcoal-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-sans text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-400 font-sans font-light">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-charcoal-900 text-white text-xs tracking-widest uppercase hover:bg-charcoal-800 transition-colors font-sans">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 text-xs tracking-widest uppercase text-charcoal-600 hover:text-charcoal-900 transition-colors font-sans"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
