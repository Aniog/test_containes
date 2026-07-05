import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, toggleDrawer, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--velmora-cream)] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading-sm text-[var(--velmora-text)]">Your Cart</h2>
          <button
            onClick={() => toggleDrawer(false)}
            className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[var(--velmora-text-light)] mb-4" />
              <p className="velmora-heading-sm text-[var(--velmora-text-muted)] mb-2">Your cart is empty</p>
              <p className="velmora-body-sm text-[var(--velmora-text-light)] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => toggleDrawer(false)}
                className="velmora-btn velmora-btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li key={`${item.productId}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-[var(--velmora-bg-secondary)] rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm text-[var(--velmora-text)] truncate">
                      {item.name}
                    </h3>
                    <p className="velmora-body-sm text-[var(--velmora-text-light)] mt-1">
                      {item.variant}
                    </p>
                    <p className="velmora-body-sm font-medium text-[var(--velmora-text)] mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] rounded hover:border-[var(--velmora-text)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="velmora-body-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] rounded hover:border-[var(--velmora-text)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="ml-auto velmora-body-sm text-[var(--velmora-text-light)] hover:text-red-500 transition-colors"
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
          <div className="px-6 py-5 border-t border-[var(--velmora-border)] bg-[var(--velmora-white)]">
            <div className="flex justify-between items-center mb-4">
              <span className="velmora-label text-[var(--velmora-text)]">Subtotal</span>
              <span className="velmora-heading-sm text-[var(--velmora-text)]">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="velmora-body-sm text-[var(--velmora-text-light)] mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="velmora-btn velmora-btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={() => toggleDrawer(false)}
              className="velmora-btn velmora-btn-ghost w-full mt-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
