import React, { useState, useEffect } from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart()
  const [visible, setVisible] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setVisible(true)
      setAnimatingOut(false)
      document.body.style.overflow = 'hidden'
    } else if (visible) {
      setAnimatingOut(true)
      document.body.style.overflow = ''
      const timer = setTimeout(() => {
        setVisible(false)
        setAnimatingOut(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!visible) return null

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          animatingOut ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 flex flex-col transition-transform duration-300 ease-out ${
          animatingOut ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
          <h2 className="font-serif text-lg tracking-wider uppercase">Your Bag ({itemCount})</h2>
          <button onClick={closeCart} className="text-velmora-charcoal hover:text-velmora-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-velmora-muted text-sm mb-6">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs font-medium uppercase tracking-wider text-velmora-charcoal border border-velmora-charcoal px-8 py-3 hover:bg-velmora-charcoal hover:text-white transition-all duration-300 btn-press"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 animate-fade-in">
                  <div className="w-20 h-24 bg-stone-200 rounded flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product truncate">{item.name}</h3>
                    <p className="text-xs text-velmora-muted mt-1">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-divider flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-divider flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-velmora-muted hover:text-velmora-charcoal transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-divider px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium uppercase tracking-wider">Subtotal</span>
              <span className="text-sm font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-white text-xs font-medium uppercase tracking-wider py-3.5 hover:bg-velmora-gold-hover transition-all duration-300 btn-press">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
