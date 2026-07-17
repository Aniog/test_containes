import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-bg)] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading text-xl tracking-wide">Your Cart</h2>
          <button
            className="p-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <ShoppingBag size={48} className="text-[var(--velmora-text-light)] mb-4" />
              <p className="velmora-heading text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[var(--velmora-text-muted)]">
                Discover our collection of demi-fine jewelry
              </p>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-[var(--velmora-bg-alt)] overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mb-2">{item.variant}</p>
                    <p className="text-sm font-medium">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-dark)] transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-dark)] transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        className="ml-auto text-xs text-[var(--velmora-text-muted)] hover:text-red-600 transition-colors underline"
                        onClick={() => removeItem(item.id)}
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

        {items.length > 0 && (
          <div className="border-t border-[var(--velmora-border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--velmora-text-muted)]">Subtotal</span>
              <span className="velmora-heading text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="velmora-btn-accent w-full">Checkout</button>
            <button
              className="velmora-btn-outline w-full text-xs"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
