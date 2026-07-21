import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-dark-200/40">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-dark-600" />
              <span className="font-sans text-sm font-medium text-dark-900">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-dark-400 hover:text-dark-900 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-dark-300 mb-4" />
                <p className="font-serif text-xl text-dark-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-dark-400 mb-6">Add some beautiful pieces to get started</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="btn-primary text-sm"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-dark-100/60">
                    <div className="w-20 h-20 flex-shrink-0 bg-dark-50 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="product-name text-xs text-dark-900 truncate">{item.name}</h4>
                      <p className="text-xs text-dark-400 mt-0.5 capitalize">{item.variant} tone</p>
                      <p className="text-sm font-medium text-dark-900 mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 text-dark-400 hover:text-dark-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium text-dark-900 w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 text-dark-400 hover:text-dark-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-dark-400 hover:text-red-500 transition-colors"
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
            <div className="px-6 py-6 border-t border-dark-200/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-dark-600">Subtotal</span>
                <span className="text-lg font-medium font-serif text-dark-900">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-dark-400 mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center text-sm">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-dark-500 hover:text-dark-900 mt-3 font-sans transition-colors"
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