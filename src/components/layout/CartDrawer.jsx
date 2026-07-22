import { useEffect, useRef, useCallback } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const drawerRef = useRef(null)
  const overlayRef = useRef(null)

  const handleEsc = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [open, handleEsc])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-velmora-700" />
              <span className="font-sans text-sm font-medium text-velmora-700">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-velmora-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-velmora-600" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-300 mb-4" />
                <p className="font-serif text-xl text-velmora-500 mb-2">Your cart is empty</p>
                <p className="font-sans text-sm text-velmora-400 mb-6">Add some pieces to get started</p>
                <button
                  onClick={onClose}
                  className="btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-100">
                    {/* Product image placeholder */}
                    <div className="w-20 h-24 bg-velmora-100 rounded flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-velmora-200 to-velmora-300" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="product-name text-velmora-800" id={`cart-title-${item.id}`}>
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="text-xs text-velmora-400 mt-0.5">{item.variant}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-400 hover:text-velmora-700 transition-colors p-0.5"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:bg-velmora-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-velmora-600" />
                          </button>
                          <span className="w-8 text-center text-sm font-sans text-velmora-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:bg-velmora-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-velmora-600" />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium text-velmora-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-velmora-600">Subtotal</span>
                <span className="font-serif text-xl font-semibold text-velmora-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center block">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button
                onClick={onClose}
                className="btn-outline w-full text-center block"
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