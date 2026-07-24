import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--color-cream)] animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-light-gray)]">
          <h2 className="serif-heading text-xl tracking-wider">Your Bag ({totalItems})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-[var(--color-gold)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-[var(--color-light-gray)] mb-4" />
              <p className="serif-heading text-lg tracking-wider mb-2">Your bag is empty</p>
              <p className="text-sm text-[var(--color-warm-gray)] mb-6">Discover pieces you'll love</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-[var(--color-light-gray)]">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 px-6 py-5">
                  <div className="w-20 h-24 bg-[var(--color-warm-white)] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="product-name text-sm tracking-wider mb-1">{item.name}</h3>
                      <p className="text-xs text-[var(--color-warm-gray)] mb-2">{item.variant}</p>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[var(--color-light-gray)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-[var(--color-warm-white)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-[var(--color-warm-white)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[var(--color-warm-gray)] underline hover:text-[var(--color-charcoal)] transition-colors"
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
          <div className="border-t border-[var(--color-light-gray)] px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm tracking-wider uppercase">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--color-warm-gray)] mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full mt-3 text-xs tracking-widest uppercase text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
