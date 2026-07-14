import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-brand-line">
          <h2 className="font-serif text-2xl text-brand-ink">Shopping Bag</h2>
          <button onClick={onClose} className="p-2 hover:bg-brand-warm rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-subtle mb-4" />
              <p className="text-brand-muted mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-subtle">Add pieces you love to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-brand-warm rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-sm text-brand-muted mb-2">${item.price}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-brand-line flex items-center justify-center hover:bg-brand-warm transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-brand-line flex items-center justify-center hover:bg-brand-warm transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-brand-subtle hover:text-brand-ink transition-colors"
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
          <div className="p-6 border-t border-brand-line bg-brand-bg">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="text-sm font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-subtle mb-4">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full btn-accent">Checkout — ${totalPrice.toFixed(2)}</Button>
          </div>
        )}
      </div>
    </div>
  )
}
