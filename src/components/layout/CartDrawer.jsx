import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isDrawerOpen, setIsDrawerOpen, removeItem, updateQuantity, total, clearCart } = useCart()

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-cream z-50 animate-slide-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-taupe-light/30">
            <h2 className="font-serif text-xl tracking-wide">Shopping Bag ({items.length})</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
                <p className="font-serif text-lg text-velmora-muted mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-taupe mb-6">Discover pieces you'll love</p>
                <Link
                  to="/collection"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-6 py-3 bg-velmora-base text-velmora-cream text-xs tracking-super-wide uppercase hover:bg-velmora-gold hover:text-velmora-base transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-warm flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide truncate">{item.name}</h3>
                      <p className="text-xs text-velmora-muted mt-1 capitalize">{item.variant} tone</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-taupe-light flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-taupe-light flex items-center justify-center hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-muted hover:text-velmora-base transition-colors underline"
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
            <div className="border-t border-velmora-taupe-light/30 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-muted">Subtotal</span>
                <span className="font-serif text-lg">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-4 bg-velmora-base text-velmora-cream text-xs tracking-super-wide uppercase hover:bg-velmora-gold hover:text-velmora-base transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-3 border border-velmora-base text-velmora-base text-xs tracking-super-wide uppercase hover:bg-velmora-base hover:text-velmora-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
