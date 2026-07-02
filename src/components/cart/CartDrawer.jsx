import React, { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const overlayRef = useRef(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transform transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-charcoal" />
              <span className="font-serif text-lg text-charcoal">Cart ({totalItems})</span>
            </div>
            <button onClick={onClose} className="p-1 hover:opacity-60 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-taupe mb-4" />
                <p className="text-secondary text-sm">Your cart is empty</p>
                <p className="text-muted text-xs mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-4 border-b border-taupe/50 last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="product-name truncate">{item.name}</h4>
                    <p className="text-xs text-secondary mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="font-sans text-sm font-medium mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-taupe rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-secondary hover:text-charcoal transition-colors ml-auto"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-taupe px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-secondary">Subtotal</span>
                <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-secondary">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-secondary hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}