import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => setVisible(true))
      const handleEsc = (e) => { if (e.key === 'Escape') closeCart() }
      window.addEventListener('keydown', handleEsc)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleEsc)
      }
    } else {
      setVisible(false)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-base/40 transition-opacity duration-300"
        style={{ position: 'fixed', inset: 0, zIndex: 9000, opacity: visible ? 1 : 0 }}
        onClick={closeCart}
        aria-label="Close cart overlay"
        role="button"
        tabIndex={0}
      />

      {/* Drawer */}
      <div
        className="bg-cream transition-transform duration-300 ease-out"
        style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '448px', zIndex: 9001, transform: visible ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="font-serif text-lg font-semibold tracking-wide text-base">
              Shopping Bag{itemCount > 0 ? ` (${itemCount})` : ''}
            </h2>
            <button onClick={closeCart} className="p-2 text-base hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-serif text-lg text-muted mb-2">Your bag is empty</p>
                <p className="text-sm text-muted/70 mb-6">Discover something you love.</p>
                <button
                  onClick={closeCart}
                  className="text-xs font-sans font-semibold tracking-section uppercase bg-gold text-base px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-gradient-to-br from-gold/20 to-gold/5 rounded flex-shrink-0 flex items-center justify-center">
                      <span className="font-serif text-lg text-gold/60">{item.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm font-medium tracking-product uppercase text-base truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">{item.tone}</p>
                      <p className="text-sm font-sans font-medium text-base mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border text-muted hover:text-base hover:border-base transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans text-base w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border text-muted hover:text-base hover:border-base transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="ml-auto text-xs text-muted hover:text-base underline transition-colors"
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
            <div className="flex-shrink-0 border-t border-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-muted">Subtotal</span>
                <span className="font-serif text-lg font-semibold text-base">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted">Shipping calculated at checkout</p>
              <button className="w-full bg-gold text-base font-sans text-xs font-semibold tracking-section uppercase py-4 hover:bg-gold-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-base text-base font-sans text-xs font-semibold tracking-section uppercase py-3 hover:bg-base hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  )
}

export default CartDrawer