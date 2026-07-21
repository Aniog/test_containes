import React, { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg tracking-wide text-velmora-charcoal">
            Your Cart ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-stone hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-stone/40 mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-stone mb-6">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-8 py-3 bg-velmora-gold text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-velmora-border/50 last:border-0"
                >
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-20 bg-velmora-ivory rounded flex-shrink-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-velmora-gold/10 rounded-full" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-1">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-stone hover:text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-velmora-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-stone hover:text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-stone hover:text-red-500 transition-colors underline"
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
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-3.5 bg-velmora-gold text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs text-velmora-stone hover:text-velmora-gold transition-colors underline"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
