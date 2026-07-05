import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out translate-x-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-brand-border px-6 py-5">
            <h2 className="font-serif text-2xl text-brand-text">Your Cart</h2>
            <button onClick={onClose} className="p-2 text-brand-muted hover:text-brand-text transition-colors" aria-label="Close cart">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="h-12 w-12 text-brand-subtle mb-4" />
                <p className="font-serif text-xl text-brand-text mb-2">Your cart is empty</p>
                <p className="text-sm text-brand-muted mb-6">Looks like you haven't added any treasures yet.</p>
                <Button variant="outline" onClick={onClose}>Continue Shopping</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="product-name text-sm">{item.name}</h3>
                        <p className="mt-1 text-xs text-brand-muted uppercase tracking-widest">{item.variant}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-border text-brand-text hover:border-brand-gold hover:text-brand-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-medium text-brand-text w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-border text-brand-text hover:border-brand-gold hover:text-brand-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-brand-text">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => removeItem(item)}
                            className="text-xs text-brand-muted hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-brand-border px-6 py-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-brand-muted">Subtotal</span>
                <span className="text-sm font-semibold text-brand-text">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-brand-muted mb-4">Shipping and taxes calculated at checkout.</p>
              <Button className="w-full mb-3">Checkout</Button>
              <button onClick={clearCart} className="w-full text-center text-xs text-brand-muted hover:text-brand-text transition-colors">
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}