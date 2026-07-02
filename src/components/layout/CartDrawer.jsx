import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { Link } from 'react-router-dom'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, totalItems, totalPrice, removeItem, updateQuantity } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--color-velmora-bg)] shadow-2xl animate-slide-up flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-velmora-border)]">
          <h2 className="serif-heading text-2xl">Your Cart ({totalItems})</h2>
          <button onClick={onClose} className="p-2 hover:text-[var(--color-velmora-accent)] transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-[var(--color-velmora-border)] mb-4" />
              <p className="serif-heading text-xl mb-2">Your cart is empty</p>
              <p className="text-sm text-[var(--color-velmora-text-muted)] mb-6">
                Discover our beautiful collection of demi-fine jewelry.
              </p>
              <Link to="/shop" onClick={onClose} className="btn-primary">
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.productId}-${item.variant}`} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-[var(--color-velmora-text-muted)] mb-2">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                        className="p-1 border border-[var(--color-velmora-border)] rounded hover:bg-[var(--color-velmora-bg-alt)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                        className="p-1 border border-[var(--color-velmora-border)] rounded hover:bg-[var(--color-velmora-bg-alt)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="ml-auto text-xs text-[var(--color-velmora-text-muted)] hover:text-red-500 transition-colors"
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
          <div className="border-t border-[var(--color-velmora-border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--color-velmora-text-muted)]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <Link
              to="/cart"
              onClick={onClose}
              className="block text-center text-sm text-[var(--color-velmora-text-muted)] hover:text-[var(--color-velmora-accent)] transition-colors"
            >
              View Full Cart
            </Link>
            <Link
              to="/shop"
              onClick={onClose}
              className="block text-center text-sm text-[var(--color-velmora-text-muted)] hover:text-[var(--color-velmora-accent)] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
