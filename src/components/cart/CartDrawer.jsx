import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

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
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-brand-900/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream-50 shadow-xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-600" />
              <span className="font-sans text-sm text-brand-600">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-brand-500 hover:text-brand-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-200 mb-4" />
                <p className="font-serif text-xl text-brand-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-brand-400 mb-6">Add some pieces to get started.</p>
                <button
                  onClick={onClose}
                  className="text-sm tracking-widest uppercase font-sans text-gold-700 hover:text-gold-500 border border-gold-700/30 px-6 py-3 rounded-sm transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-brand-100 last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-brand-100 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm uppercase tracking-widest text-brand-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-brand-400 mt-0.5 capitalize">{item.variant}</p>
                      <p className="font-sans text-sm text-gold-700 font-medium mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-brand-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 text-brand-500 hover:text-brand-900 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-sans text-brand-900 min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 text-brand-500 hover:text-brand-900 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-brand-400 hover:text-brand-700 transition-colors ml-auto"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-6 border-t border-brand-200 bg-brand-50/50">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-brand-600">Subtotal</span>
                <span className="font-serif text-lg text-brand-900 font-medium">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-brand-400 mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-brand-900 text-cream-50 py-3.5 text-sm tracking-widest uppercase font-sans font-medium hover:bg-brand-800 transition-colors rounded-sm">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs text-brand-500 hover:text-brand-900 mt-3 tracking-wider uppercase font-sans transition-colors"
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