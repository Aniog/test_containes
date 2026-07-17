import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const drawerRef = useRef(null)

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
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-ink-800" />
              <span className="font-sans text-sm font-medium text-ink-800">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-ink-400 hover:text-ink-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="font-serif text-xl text-ink-800 mb-2">Your cart is empty</p>
                <p className="text-sm text-ink-400 mb-6">Add some pieces to get started</p>
                <button
                  onClick={onClose}
                  className="font-sans text-sm tracking-wider uppercase bg-ink-800 text-white px-8 py-3 hover:bg-ink-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-5 border-b border-velvet-100">
                    <div className="w-20 h-20 bg-velvet-100 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-sans text-xs tracking-widest uppercase text-ink-800 font-medium">
                            {item.name}
                          </h4>
                          <p className="font-serif text-base text-gold-600 mt-0.5">
                            ${item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-ink-300 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-velvet-300">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-ink-500 hover:text-ink-800 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-sans text-ink-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-ink-500 hover:text-ink-800 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-sans text-sm text-ink-400 ml-auto">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-medium text-ink-800 uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-ink-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-ink-400 font-sans">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full font-sans text-sm tracking-widest uppercase bg-gold-500 text-white py-3.5 hover:bg-gold-600 transition-colors">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full font-sans text-xs tracking-wider uppercase text-ink-500 hover:text-ink-800 transition-colors py-2"
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