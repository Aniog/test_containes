import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isDrawerOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-200">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeDrawer} className="p-2 hover:text-gold-600 transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-950">Your cart is empty</p>
              <p className="text-sm text-charcoal-500 mt-2">Discover pieces you'll love</p>
              <Link to="/shop" onClick={closeDrawer} className="btn-primary mt-6">
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-100 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide uppercase text-charcoal-950 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1">{item.variant}</p>
                    <p className="text-sm text-charcoal-950 mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-300 hover:border-gold-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-300 hover:border-gold-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(index)}
                        className="ml-auto text-xs text-charcoal-400 hover:text-red-500 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-500 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeDrawer}
              className="block text-center text-xs tracking-wider uppercase text-charcoal-600 mt-3 hover:text-gold-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
