import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-xl text-foreground">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-foreground hover:text-gold transition-colors bg-transparent border-none p-1"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted/40 mb-4" />
              <p className="font-serif text-lg text-foreground mb-2">Your cart is empty</p>
              <p className="text-sm text-muted">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-20 bg-surface flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-muted font-sans">{item.variant}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-foreground truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm text-foreground font-medium mt-1">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center bg-transparent hover:border-gold transition-colors rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-foreground" />
                      </button>
                      <span className="text-sm font-sans text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center bg-transparent hover:border-gold transition-colors rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-foreground" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted hover:text-gold transition-colors bg-transparent border-none underline"
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
          <div className="border-t border-divider px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg text-foreground">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 btn-gold font-sans text-sm uppercase tracking-widest transition-colors border-none rounded-none">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
