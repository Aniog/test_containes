import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-foreground">Your Cart</h2>
          <button onClick={closeDrawer} className="p-1 text-muted hover:text-foreground transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="font-serif text-lg text-muted mb-2">Your cart is empty</p>
              <p className="text-sm text-muted/70">Add something beautiful to your collection.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-border last:border-0">
                  <div className="w-20 h-24 bg-background-alt rounded overflow-hidden flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-[0.1em] uppercase text-foreground font-medium truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-foreground mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted hover:text-foreground underline transition-colors"
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
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg tracking-wide text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-muted/70">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-accent text-white py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-accent-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
