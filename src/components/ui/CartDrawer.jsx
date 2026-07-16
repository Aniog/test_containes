import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

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
        className={`fixed inset-0 z-50 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
            <div>
              <h2 className="font-serif text-xl text-ink-950">Your Cart</h2>
              <p className="text-xs text-ink-500 font-sans mt-0.5">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-ink-500 hover:text-ink-950 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-ink-300 mb-4" />
                <p className="font-serif text-lg text-ink-600">Your cart is empty</p>
                <p className="text-sm text-ink-400 mt-2">Add some treasures to begin.</p>
                <button onClick={onClose} className="btn-outline mt-6 text-xs">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-ink-100 last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-ink-100 rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name truncate">{item.name}</h3>
                      <p className="text-xs text-ink-400 mt-0.5 capitalize">
                        {item.variant} tone
                      </p>
                      <p className="product-price mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-ink-200 rounded">
                          <button
                            className="p-1.5 hover:bg-ink-100 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:bg-ink-100 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-xs text-ink-400 hover:text-ink-700 transition-colors ml-auto"
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
            <div className="border-t border-ink-100 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-ink-600">Subtotal</span>
                <span className="font-serif text-lg text-ink-950">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-ink-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-xs">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs text-ink-500 hover:text-ink-950 transition-colors underline underline-offset-2"
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