import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

export default function CartDrawer({ open, onClose }) {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart()
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
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-dark-100">
            <h2 className="text-sm tracking-widest uppercase text-dark-900 font-medium">
              Cart ({totalItems})
            </h2>
            <button
              onClick={onClose}
              className="text-dark-400 hover:text-dark-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-10 w-10 text-dark-200 mb-4" />
                <p className="text-dark-400 text-sm mb-2">Your cart is empty</p>
                <p className="text-dark-300 text-xs">Add some pieces to get started</p>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-dark-50">
                    <div className="w-20 h-20 bg-dark-50 flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-dark-300 text-center px-1">{item.name}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs tracking-widest uppercase text-dark-900 font-medium truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-dark-400 mt-0.5">{item.variant}</p>
                      <p className="text-sm text-dark-900 font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-dark-200">
                          <button
                            className="p-1.5 text-dark-500 hover:text-dark-900 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-xs text-dark-900 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1.5 text-dark-500 hover:text-dark-900 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          className="text-[10px] tracking-widest uppercase text-dark-400 hover:text-red-500 transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
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
            <div className="border-t border-dark-100 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest uppercase text-dark-500">Subtotal</span>
                <span className="text-lg font-serif text-dark-900">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-dark-400">Shipping & taxes calculated at checkout</p>
              <Button className="w-full" variant="accent" size="default">
                Checkout
              </Button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs tracking-widest uppercase text-dark-500 hover:text-dark-900 transition-colors"
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