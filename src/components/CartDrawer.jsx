import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const navigate = useNavigate()
  const overlayRef = useRef(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
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
        ref={overlayRef}
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-ink-700" />
              <span className="text-sm uppercase tracking-widest text-ink-900 font-medium">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:text-gold-600 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-ink-200 mb-4" />
                <p className="text-ink-500 font-serif text-lg">Your cart is empty</p>
                <p className="text-ink-400 text-sm mt-2">
                  Add some pieces to get started
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-ink-100/50 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="product-name truncate">{item.name}</h4>
                      <p className="text-xs text-ink-400 mt-0.5">{item.color}</p>
                      <p className="product-price mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.color, item.quantity - 1)
                          }
                          className="p-1 border border-ink-200 hover:border-ink-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.color, item.quantity + 1)
                          }
                          className="p-1 border border-ink-200 hover:border-ink-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="ml-auto text-xs text-ink-400 hover:text-ink-700 underline transition-colors"
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
          {cart.length > 0 && (
            <div className="border-t border-ink-100 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest text-ink-700">
                  Total
                </span>
                <span className="text-lg font-serif text-ink-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => {
                  onClose()
                  navigate('/shop')
                }}
                className="btn-primary w-full text-center"
              >
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs uppercase tracking-widest text-ink-500 hover:text-ink-700 transition-colors py-2"
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