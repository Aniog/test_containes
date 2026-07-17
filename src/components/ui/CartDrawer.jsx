import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-surface)] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading text-xl">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-[var(--velmora-bg-alt)] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-16 h-16 text-[var(--velmora-text-light)] mb-4" />
              <p className="velmora-heading text-lg text-[var(--velmora-text-muted)]">Your cart is empty</p>
              <p className="text-sm text-[var(--velmora-text-light)] mt-2">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                className="velmora-btn-primary mt-6"
                onClick={() => setIsCartOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 bg-[var(--velmora-bg-alt)] flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-[var(--velmora-text-light)]" />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="velmora-product-name text-sm">{item.name}</h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium mt-2">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-xs text-[var(--velmora-text-light)] hover:text-[var(--velmora-text)] transition-colors underline"
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
          <div className="border-t border-[var(--velmora-border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="velmora-label">Subtotal</span>
              <span className="velmora-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)]">Shipping and taxes calculated at checkout.</p>
            <button className="velmora-btn-primary w-full">
              Checkout
            </button>
            <Link
              to="/shop"
              className="block text-center text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
