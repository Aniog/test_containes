import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const drawerRef = useRef()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-velvet-surface shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-velvet-text" />
              <span className="font-sans text-sm font-medium text-velvet-text">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-velvet-muted hover:text-velvet-text transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-dim mb-4" />
                <p className="text-velvet-muted font-sans text-sm">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-6 btn-primary text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 group">
                    <div className="w-20 h-20 flex-shrink-0 bg-velvet-elevated rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="product-name text-velvet-text">{item.name}</h4>
                          <p className="text-xs text-velvet-dim mt-0.5 capitalize">
                            {item.variant} tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-velvet-dim hover:text-velvet-text transition-colors opacity-0 group-hover:opacity-100"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velvet-border rounded">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="p-1.5 text-velvet-muted hover:text-velvet-text transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm text-velvet-text font-sans min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="p-1.5 text-velvet-muted hover:text-velvet-text transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-serif text-sm text-velvet-text">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velvet-border px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-velvet-muted">Subtotal</span>
                <span className="font-serif text-lg text-velvet-text">${totalPrice.toFixed(0)}</span>
              </div>
              <p className="text-xs text-velvet-dim">Free shipping on all orders</p>
              <button className="btn-primary w-full text-center block">
                Checkout — ${totalPrice.toFixed(0)}
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-velvet-muted hover:text-velvet-text transition-colors font-sans"
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