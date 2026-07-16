import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-midnight-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory-50 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-midnight-200/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-midnight-950" />
              <span className="font-sans text-sm text-midnight-700">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-midnight-600 hover:text-midnight-950 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-midnight-300 mb-4" />
                <p className="font-serif text-lg text-midnight-700 mb-2">Your cart is empty</p>
                <p className="font-sans text-sm text-midnight-400 mb-6">
                  Discover pieces that speak to you.
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary"
                >
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 pb-6 border-b border-midnight-100">
                    <div className="w-20 h-20 flex-shrink-0 bg-midnight-100 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="product-name text-xs">{item.name}</h4>
                          <p className="text-xs text-midnight-400 font-sans mt-0.5 capitalize">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-midnight-400 hover:text-midnight-950 transition-colors ml-2"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-midnight-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-midnight-600 hover:text-midnight-950 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-sans text-midnight-950 min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-midnight-600 hover:text-midnight-950 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium text-midnight-950">
                          ${(item.price * item.quantity).toFixed(0)}
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
            <div className="border-t border-midnight-200/60 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-midnight-600">Subtotal</span>
                <span className="font-serif text-xl text-midnight-950 font-semibold">
                  ${totalPrice.toFixed(0)}
                </span>
              </div>
              <p className="text-xs text-midnight-400 font-sans">
                Shipping & taxes calculated at checkout
              </p>
              <button
                onClick={() => {
                  alert('Checkout coming soon!')
                }}
                className="btn-primary w-full text-center"
              >
                Checkout
              </button>
              <button
                onClick={onClose}
                className="btn-outline w-full text-center"
              >
                <Link to="/shop">Continue Shopping</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}