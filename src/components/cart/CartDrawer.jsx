import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../contexts/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, itemCount } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--velmora-surface)] shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--velmora-border-light)]">
          <h2 className="serif-heading text-xl tracking-[0.1em]">
            YOUR BAG ({itemCount})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:text-[var(--velmora-gold)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[var(--velmora-text-muted)] mb-4" />
              <p className="serif-heading text-lg text-[var(--velmora-text-secondary)]">
                Your bag is empty
              </p>
              <p className="text-sm text-[var(--velmora-text-muted)] mt-2">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div
                  key={`${item.productId}-${item.variantId}-${index}`}
                  className="flex gap-4 pb-6 border-b border-[var(--velmora-border-light)]"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-[var(--velmora-bg-alt)] flex-shrink-0" />

                  <div className="flex-1">
                    <h3 className="product-name text-sm tracking-[0.1em] mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mb-2">
                      {item.variantName}
                    </p>
                    <p className="text-sm font-medium mb-3">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-gold)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-gold)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(index)}
                        className="ml-auto text-xs text-[var(--velmora-text-muted)] hover:text-[var(--velmora-error)] transition-colors underline"
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
        {cart.length > 0 && (
          <div className="px-6 py-4 border-t border-[var(--velmora-border-light)] bg-[var(--velmora-bg-alt)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[var(--velmora-text-secondary)]">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)] mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-accent">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
