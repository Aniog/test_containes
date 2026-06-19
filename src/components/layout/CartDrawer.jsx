import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[hsl(var(--surface))] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[hsl(var(--border))]">
          <h2 className="serif-heading text-lg tracking-[0.15em]">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-[hsl(var(--accent))] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-[hsl(var(--foreground-muted))] mb-4" />
              <p className="text-[hsl(var(--foreground-secondary))] mb-2">Your cart is empty</p>
              <p className="text-sm text-[hsl(var(--foreground-muted))] mb-6">Discover our collection of demi-fine jewelry</p>
              <Link to="/shop" className="btn-primary" onClick={() => setIsOpen(false)}>
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-[hsl(var(--background-secondary))]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-[hsl(var(--foreground-muted))] mt-1 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[hsl(var(--border))] rounded-sm hover:border-[hsl(var(--accent))] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[hsl(var(--border))] rounded-sm hover:border-[hsl(var(--accent))] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--error))] transition-colors underline"
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
          <div className="border-t border-[hsl(var(--border))] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[hsl(var(--foreground-secondary))]">Subtotal</span>
              <span className="text-lg font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[hsl(var(--foreground-muted))]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary btn-full">
              Checkout
            </button>
            <button
              className="btn-secondary btn-full"
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
