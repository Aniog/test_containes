import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart()

  React.useEffect(() => {
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
        className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-warm-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-200">
            <h2 className="serif-heading text-xl font-semibold">Your Bag</h2>
            <button onClick={onClose} className="text-velmora-600 hover:text-velmora-900 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-300 mb-4" />
                <p className="text-velmora-600 mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-400 mb-6">Discover pieces that will last a lifetime.</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="btn-primary text-sm"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-velmora-900 truncate">{item.name}</h3>
                      <p className="text-xs text-velmora-500 capitalize mt-0.5">{item.variant} tone</p>
                      <p className="text-sm font-medium text-velmora-900 mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velmora-200 rounded">
                          <button
                            className="p-1 hover:bg-velmora-100 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            className="p-1 hover:bg-velmora-100 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-xs text-velmora-500 hover:text-velmora-900 underline transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
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
            <div className="border-t border-velmora-200 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-600">Subtotal ({totalItems} items)</span>
                <span className="font-semibold text-velmora-900">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-500">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-sm">Checkout</button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-velmora-500 hover:text-velmora-900 underline transition-colors"
              >
                Clear bag
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}