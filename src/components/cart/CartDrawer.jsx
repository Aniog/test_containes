import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isDrawerOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-bg)] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading-md">Your Cart</h2>
          <button
            onClick={closeDrawer}
            className="p-2 hover:text-[var(--velmora-accent)] transition-colors"
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
              <p className="velmora-heading-sm text-[var(--velmora-text-muted)] mb-2">
                Your cart is empty
              </p>
              <p className="velmora-body-sm text-[var(--velmora-text-light)]">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-24 flex-shrink-0 bg-[var(--velmora-bg-alt)] overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.shortName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm mb-1">
                      {item.product.name}
                    </h3>
                    <p className="velmora-body-xs text-[var(--velmora-text-light)] mb-2">
                      {item.variant === 'gold' ? 'Gold' : 'Silver'} Tone
                    </p>
                    <p className="velmora-body-sm font-medium mb-3">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="velmora-body-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(index)}
                        className="ml-auto velmora-body-xs text-[var(--velmora-text-light)] hover:text-red-500 transition-colors"
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
          <div className="border-t border-[var(--velmora-border)] px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="velmora-body-sm text-[var(--velmora-text-muted)]">Subtotal</span>
              <span className="velmora-heading-sm">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="velmora-body-xs text-[var(--velmora-text-light)] mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="velmora-btn velmora-btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="velmora-btn velmora-btn-outline w-full mt-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
